import { Image } from "antd";
import bannerTitle from "../../../assets/images/banner-1.png";
import bannerSummary from "../../../assets/images/banner-2.png";
import "./styles.less";

const RoarWards = () => {
  return (
    <div className="banner-wrapper" id="roadwards">
      <div className="container-fluid">
        <div className="banner-content-wrapper">
          <Image src={bannerTitle} preview={false} />
          <Image
            src={bannerSummary}
            preview={false}
          />
        </div>
      </div>
    </div>
  );
};

export default RoarWards;
