import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import WalletProvider from "./contexts/wallet";
import Modal from "./ui/Modal/Modal";
import store from "./redux/store";
import Navbar from "./Layouts/Navbar";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Viproom from "./Components/Viproom";
import Roadmap from "./Components/Roadmap";
import Team from "./Components/Team";
import Faq from "./Components/Faq";
import JoinDiscord from "./Components/JoinDiscord";
import ConnectWallet from "./Components/ConnectWallet";
import Rare from "./Components/Rare";
import { GHSProvider } from "./utils/ContextProvider";
import MailchimpForm from "./Components/MailchimpForm";

function App() {
  return (
    <Provider store={store}>
      <WalletProvider>
        <GHSProvider>
          <div className="body">
            <Navbar />
            <Dashboard />
            <ConnectWallet />
            <Viproom />
            <About />
            <Rare />
            {/* <DropCount /> */}

            <Roadmap />
            {/* <FuturePlan /> */}
            {/* <Breakdown /> */}
            <Team />
            <Faq />
            <JoinDiscord />
            <Modal><MailchimpForm /></Modal>
          </div>
          </GHSProvider>
        </WalletProvider>
    </Provider>
  );
}

export default App;
