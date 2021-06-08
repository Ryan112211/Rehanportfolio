import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import { colors } from "../UI/style";
import me from "../../assets/images/mypic.jpg";
import "./style.css";
import SocialConnect from "../UI/SocialConnect";
/**
 * @author
 * @function Expertise
 **/
const percentage = 70;
const Expertise = (props) => {
  return (
    <div className="container" style={{ marginTop: "50px", padding: "50px 0" }}>
      <div data-aos="fade-right"className="meleftimagecontainer">
        <img src={me} alt=""></img>
        <SocialConnect
          style={{ position: "absolute", bottom: "-40px" }}
        ></SocialConnect>
      </div>
      <div>
        <SmallHeading text="Expertise"></SmallHeading>
        <MediumHeading text="Special Skills"></MediumHeading>
      </div>
      <Card data-aos="flip-up"
        style={{
          padding: "30px",
          width: "320px",
          margin: "100px auto",
          position: "relative",
          zIndex: "1",
        }}
      >
        <div className="flexRow align-center">
          <div style={{ width: "80px", height: "80px" }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: colors.primaryColor,
                pathColor: colors.primaryColor,
              })}
            ></CircularProgressbar>
          </div>

          <h2 className="textColor mlr-10">Development</h2>
        </div>
        <p className="grey mtb-10 font-12">Javascript is my love and passion</p>
      </Card>
    </div>
  );
};

export default Expertise;
