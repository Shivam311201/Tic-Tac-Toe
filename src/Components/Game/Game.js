import React, { useState, useContext } from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "bootstrap/dist/css/bootstrap.min.css";
import { PlayerDetailContext } from "../../ContextFiles/PlayerDetailContext.js";
import { Link } from "react-router-dom";
import Header from "../Shared/header.js";
import Footer from "../Shared/Footer.js";
import Box from "./box.js";
import "../../styles.css";

function Game() {
  const [load,setLoad]=useState(false);
  const [curr_game, setPlayerDetail] = useContext(PlayerDetailContext);
  
  const image1=curr_game.Player1Image;
  const image2=curr_game.Player2Image;

  const custom_imageNo=curr_game.CurrentStage;
  const [imageNo, setImage] = useState(custom_imageNo);
 
  var imageArray=curr_game.savedGame;
  const [winner, setwinner] = useState(0);

  function updateImage(id) {

    if (winner === 0 && imageArray[id - 1] === 0) {
      if (imageNo === 1) setImage(2);
      else setImage(1);
      let newArray = imageArray;
      newArray[id - 1] = imageNo;
      imageArray=newArray;
      console.log(imageArray);
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
      console.log(winner,image1);
    }
  }
  
  const Player1name=curr_game.Player1;
  const Player2name=curr_game.Player2;

  var another_cus_arr=[];
  if(load===true)
  another_cus_arr=[curr_game.CurrentStage,curr_game.turnsDone];
  else another_cus_arr=[1,1];

  const [dispValue, setdisp] = useState(another_cus_arr);

  function whatDisplay(id) {
    if (imageArray[id - 1] === 0 && dispValue[0] === 1 && dispValue[1] != 9)
      setdisp([2, dispValue[1] + 1]);
    else if (
      imageArray[id - 1] === 0 &&
      dispValue[0] === 2 &&
      dispValue[1] != 9
    )
      setdisp([1, dispValue[1] + 1]);
    else if (dispValue[1] === 9) setdisp([0, 0]);

  }

  function updatingLoad(val)
  {
    setLoad(val);
  }

  return (
    <div>
      <Header value="1" isLoaded={updatingLoad} />
      {(winner === 0 && dispValue[1] != 0 && (
        <div
          className="PlayerTurn"
        >
          {dispValue[0] === 1 ? Player1name : Player2name}, your turn !!
        </div>)
      )}
      {(winner != 0) && 
      (<div className="PlayerTurn">
          🎉🎉 {winner === image1 ? Player1name : Player2name}
           &nbsp;is the winner !!
        </div>
      )
      }
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
            className="PlayerTurn"
          >
            Oops!!, the game has drawn 😔😔
          </div>
        )}
      <div className="boxOuter">
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
      { (winner!=0||(imageArray[0] != 0 &&
        imageArray[1] != 0 &&
        imageArray[2] != 0 &&
        imageArray[3] != 0 &&
        imageArray[4] != 0 &&
        imageArray[5] != 0 &&
        imageArray[6] != 0 &&
        imageArray[7] != 0 &&
        imageArray[8] != 0)) && (
        <div
          className="backOuter"
        >
          <button
            type="button"
            class="btn btn-dark btn-md"
            className="backStyle"
          >
            <Link to="/" className="textDecoration">
              <ArrowBackIcon /> Back
            </Link>
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Game;
