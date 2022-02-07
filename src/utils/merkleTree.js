import { forEachChild } from "typescript";

export const getMerkleProof = (myAddress, type) => {
  const { MerkleTree } = require("merkletreejs");
  const keccak256 = require("keccak256");
  
  let allowedList;
  
  if (type == 'presale') {
    allowedList = require("../whitelist/whitelist.json");
  } else if (type == 'giveaway') {
    allowedList = require("../whitelist/giveawaylist.json");
  }

  const hashedAddresses = allowedList.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(hashedAddresses, keccak256, {
    sortPairs: true,
  });

  const hashedAddress = keccak256(myAddress);
  const proof = merkleTree.getHexProof(hashedAddress);
  const root = merkleTree.getHexRoot();

  // just for front-end display convenience
  // proof will be validated in smart contract as well
  const valid = merkleTree.verify(proof, hashedAddress, root);

  return proof;
};
