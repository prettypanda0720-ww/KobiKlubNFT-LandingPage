import { Typography, Image } from "antd";

const { Text } = Typography;

const CircleItem = (props) => {
  return (
    <div
      className="circle-wrapper"
      style={{
        backgroundColor: props.backgroundColor,
        marginTop: props.top,
      }}
    >
      <Text className="circle-label">{props.text}</Text>
    </div>
  );
};

export default CircleItem;
