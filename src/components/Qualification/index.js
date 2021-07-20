import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import me from "../../assets/images/mypic.jpg";
import Button from "../UI/Button";
import "./style.css";
import Tile from "../UI/Tile";
/**
 * @author
 * @function Qualification
 **/

const Qualification = (props) => {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualifications"></SmallHeading>
      <MediumHeading text="My Education"></MediumHeading>
      <div
        className="flexRow flexCol align-center justify-sb"
        style={{ margin: "50px 0" }}
      >
        <div data-aos="fade-up-right"className="leftimgcontainer">
          <img src={me} alt=""></img>

          <div
            style={{
              display: "flex",
              background: "#fff",
              padding: "10px 10px",
              borderRadius: "20px",
              justifyContent: "center",
              boxSizing: "border-box",
            }}
          >
            <div className="mlr-10">
              <Button label="Hire Me"></Button>
            </div>
            <div className="mlr-10">
              <Button label="Download Cv" inverse={true}></Button>
            </div>
          </div>
        </div>
        <div>
          <Tile
            title="Bahria University"
            mediumtitle="Computer Science"
            desc="Completed Bachelor in 2021"
          >

          </Tile>
          <Tile
            title="Punjab College"
            mediumtitle="FSC ENGINEERING"
            desc="Completed FSC from Punjab College Blue Area Islamabad"
          >
              
          </Tile>
          <Tile
            title="Radiant Secondary School Rawalpindi"
            mediumtitle="Matriculation"
            desc="Completed Matriculation from Radiant School "
          >
              
          </Tile>
          
        </div>
      </div>
    </div>
  );
};

export default Qualification;
