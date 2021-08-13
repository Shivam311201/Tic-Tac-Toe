import React, { useState } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Box from "./Components/box";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function App(props) {
  const [imageNo, setImage] = useState(1);
  const [imageArray, setImageArray] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [winner, setwinner] = useState(0);
  function updateImage(id) {
    if (winner === 0 && imageArray[id - 1] === 0) {
      if (imageNo === 1) setImage(2);
      else setImage(1);
      let newArray = imageArray;
      newArray[id - 1] = imageNo;
      setImageArray(newArray);
      for (var i = 0; i < 9; i += 3) {
        if (
          imageArray[i] != 0 &&
          imageArray[i] === imageArray[i + 1] &&
          imageArray[i + 1] === imageArray[i + 2]
        ) {
          setwinner(imageNo);
          break;
        }
      }
      for (var i = 0; i < 3; i++) {
        if (
          imageArray[i] != 0 &&
          imageArray[i] === imageArray[i + 3] &&
          imageArray[i + 3] === imageArray[i + 6]
        ) {
          setwinner(imageNo);
          break;
        }
      }
      if (
        imageArray[0] != 0 &&
        imageArray[0] === imageArray[4] &&
        imageArray[4] === imageArray[8]
      ) {
        setwinner(imageNo);
      }
      if (
        imageArray[2] != 0 &&
        imageArray[2] === imageArray[4] &&
        imageArray[4] === imageArray[6]
      ) {
        setwinner(imageNo);
      }
    }
  }
  const [dispValue, setdisp] = useState([1,1]);
  function whatDisplay(id) {
    if ((imageArray[id-1]===1)&&(dispValue[0] === 1)&&(dispValue[1] != 9)) setdisp([2,dispValue[1]+1]);
    else if ((imageArray[id-1]===2)&&(dispValue[0] === 2)&&(dispValue[1] != 9)) setdisp([1,dispValue[1]+1]);
    else if(dispValue[1] === 9) setdisp([0,0]);
    
  console.log(dispValue);
  }

  // console.log(winner);
  return (
    <div>
      <Header value="1" />
      {winner === 0 &&(dispValue[1]!=0)&& (
        <div
          style={{ textAlign: "center", marginTop: "50px", fontSize: "50px" }}
        >
          {dispValue[0] === 1 ? props.player[0] : props.player[1]}, your turn !!
        </div>
      )}
      {winner != 0 && (
        <div
          style={{ textAlign: "center", marginTop: "50px", fontSize: "50px" }}
        >
          🎉🎉 {winner === 1 ? props.player[0] : props.player[1]} is the winner
          !!
        </div>
      )}
      {winner === 0 &&
        imageArray[0] != 0 &&
        imageArray[1] != 0 &&
        imageArray[2] != 0 &&
        imageArray[3] != 0 &&
        imageArray[4] != 0 &&
        imageArray[5] != 0 &&
        imageArray[6] != 0 &&
        imageArray[7] != 0 &&
        imageArray[8] != 0 && (
          <div
            style={{ textAlign: "center", marginTop: "50px", fontSize: "50px" }}
          >
            Oops!!, the game has drawn 😔😔
          </div>
        )}
      <div
        style={{
          textAlign: "center",
          paddingTop: "40px",
          marginBottom: "60px",
        }}
      >
        <Box
          id="1"
          id_no={imageArray[0]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <Box
          id="2"
          id_no={imageArray[1]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <Box
          id="3"
          id_no={imageArray[2]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <br></br>
        <Box
          id="4"
          id_no={imageArray[3]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <Box
          id="5"
          id_no={imageArray[4]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <Box
          id="6"
          id_no={imageArray[5]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <br></br>
        <Box
          id="7"
          id_no={imageArray[6]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <Box
          id="8"
          id_no={imageArray[7]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
        <Box
          id="9"
          id_no={imageArray[8]}
          OnImage={updateImage}
          Ondisplay={whatDisplay}
        />
      </div>
      {winner != 0 && (
        <div
          style={{
            marginTop: "-35px",
            marginBottom: "30px",
            marginLeft: "10px",
            textAlign: "center",
          }}
        >
          <button
            type="button"
            class="btn btn-dark btn-md"
            style={{ height: "50px", fontSize: "20px", width: "100px" }}
          >
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <ArrowBackIcon /> Back
            </Link>
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
