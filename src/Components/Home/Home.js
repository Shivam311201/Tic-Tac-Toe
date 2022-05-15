import React, { useEffect, useState, useContext } from "react";
import { PlayerDetailContext } from "../../ContextFiles/PlayerDetailContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import Circle from "../../images/circle.png";
import { Link } from "react-router-dom";
import Cross from "../../images/cross.png";
import Input from "./Input";
import Header from "../Shared/header.js";
import Footer from "../Shared/Footer.js";
import "../../styles.css";

const intialState = {
  Player1: "",
  Player2: "",
  Player1Img: "",
  Player2Img: "",
};

function Home() {

  const [isHovered, setHovered] = useState([0, 0]);
  const [imageValue, setimage] = useState([0, "", ""]);
  const [PlayerDetails, setdetails] = useState(intialState);
  const [PlayerDetail, setPlayerDetail] = useContext(PlayerDetailContext);

  function getName(e) {
    var newGame;
    if (imageValue[1] === "c") {
      newGame = {
        savedGame: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        Player1: PlayerDetails.Player1,
        Player2: PlayerDetails.Player2,
        CurrentStage: 1,
        Player1Image: 1,
        Player2Image: 2,
        turnsDone: 0,
        winner: 0
      };
    }
    else if (imageValue[1] === "x") {
      newGame = {
        savedGame: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        Player1: PlayerDetails.Player1,
        Player2: PlayerDetails.Player2,
        CurrentStage: 2,
        Player1Image: 2,
        Player2Image: 1,
        turnsDone: 0,
        winner: 0
      };
    }
    setPlayerDetail(newGame);
    console.log(newGame);
  }

  const [my_width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setwidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize)
  });

  function applyimage(e) {
    if (
      imageValue[1] === "" &&
      imageValue[2] === "" &&
      e.target.id === "cross"
    ) {
      setimage([1, "x", "c"]);
    } else if (imageValue[1] === "" && imageValue[2] === "") {
      setimage([1, "c", "x"]);
    }

  }

  function handleChange(e) {
    setdetails({ ...PlayerDetails, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Header value="0" />
      <div className="HomeOuter">
        {my_width > 751 && (<div>
          <div className="justify-around">
            <div className="Player1" >
              Player 1
              {imageValue[0] === 1 ? (
                imageValue[1] === "x" ? (
                  <img
                    className="PlayerImage"
                    src={Cross}
                  />
                ) : (
                  <img
                    className="PlayerImage"
                    src={Circle}
                  />
                )
              ) : (
                ""
              )}
            </div>
            <div className="Player2">
              Player 2
              {imageValue[0] === 1 ? (
                imageValue[1] === "c" ? (
                  <img
                    className="PlayerImage"
                    src={Cross}
                  />
                ) : (
                  <img
                    className="PlayerImage"
                    src={Circle}
                  />
                )
              ) : (
                ""
              )}
            </div>
          </div>
          <br />
          <div className="justify-around">
            <img
              className="ImageSize1"
              src="data:image/jpeg;base64,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"
            />
            <img
              className="ImageSize2"
              src="data:image/jpeg;base64,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msttnzW/HX3IpScHprcm4dGxofHG4OayR7GvA0ka13VeO8fG6lNbYAdiojhuIAf5CotyyTEeQ0WCWmqhq/D3j+aGT8wuwqtN7SXVFXJLkbKoeJ2ELgbC5tc7m5nWLj2AG/gqaOkncL+psA5usz+4hZoqeV3siHuFdB/aZLfBZc4rd/cxZnednMTp2UsUFPLHK2KNrGubI11wxtrutx01VFsJiUmI4g6qzXigZURZyCAelqGuijbYda0cQcT77ea5lSbOyPzOkoXvHRuDehdE+z3bnuyOG627vXaPR5XU/qNPTvzwSRxMY9kkEkQzgWcQ9wDHXIJuDfXXeubiV3XCmlJvTVpb+qZZzt2urW8GbWI2feD8LlJjoWO+vfuXqCjjdqH5h2EW+CmsAAsNwUOF+na3rQjbhZt/loxOr/i2YYqRjdbXPapKIutTpQpq0EkvAgbb1YREUhgIiIAiIgCIiAIiIAiIgCIiALy+9tN/BekQGv1FPXvPttaOTXWHna6wt2dlcbySj4uPxstmRVJYKnJ3m5Pzk/4J1iJpWjZeSRQS4NDGwuyPlPBoO8/07gqOswmeRrg2OSPMLAsHWb2tz317wVu0riGkhuY20Ggv2XKp56Cqm1fKGD7Lb2Hfa1/NVsTg4aZIvyil1ba/ckpV5a5n1b9kc5rNhIjpUvqpCfvJ36+AsPIKF/8AnOGfcu/7r/1XS/8Ahg/fD8H/ALIdmHfej8J/VVexxq0jdLzX8FjtMO/6rP0OfQ+iWje0PZTyWO49L+TivsnouazVkbh2Op6aVv8A4w7/AFLo1LhNTF9HOAORBt5G6sIhUj2jEe7MCrVOlUklnc0/+rX5IJThwUWvVHP8MwNtIyzYGMcQOkcyHog8i+uXW286XO9S7roY3arE+Bh3tae8AqOf0rM7qfVfybRxttMv3NUw/Del1inGYbxZzXD99iuaWKsjNnOZI3tJDvO3zurKKBjPZY1vcAPksyt0MFGmtHZ/8W0ujbIKldz8vG1+p8C+oiukAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//Z"
            />
          </div>
          <div className="justify-around">
            <div className="InputDiv1"
            >
              <Input
                name="Player1"
                label="Player 1 Name"
                handleChange={handleChange}
              />
            </div>
            <div className="InputDiv1"
            >
              <Input
                name="Player2"
                label="Player 2 Name"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>)}
        {my_width <= 751 && (<div>
          <div>
            <div className="Player" >
              Player 1
              {imageValue[0] === 1 ? (
                imageValue[1] === "x" ? (
                  <img
                    className="PlayerImage"
                    src={Cross}
                  />
                ) : (
                  <img
                    className="PlayerImage"
                    src={Circle}
                  />
                )
              ) : (
                ""
              )}
            </div>
            <img
            className="ImageSize1"              
            src="data:image/jpeg;base64,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"
            />
            <div className="InputDiv2" >
              <Input
                name="Player1"
                label="Player 1 Name"
                handleChange={handleChange}
              />
            </div>
            <div
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                marginRight: "20px"
              }}
            >
              Player 2
              {imageValue[0] === 1 ? (
                imageValue[1] === "c" ? (
                  <img
                    className="PlayerImage"
                    src={Cross}
                  />
                ) : (
                  <img
                    className="PlayerImage"
                    src={Circle}
                  />
                )
              ) : (
                ""
              )}
            </div>
          </div>
          <br />
          <img
            className="ImageSize2"
            src="data:image/jpeg;base64,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msttnzW/HX3IpScHprcm4dGxofHG4OayR7GvA0ka13VeO8fG6lNbYAdiojhuIAf5CotyyTEeQ0WCWmqhq/D3j+aGT8wuwqtN7SXVFXJLkbKoeJ2ELgbC5tc7m5nWLj2AG/gqaOkncL+psA5usz+4hZoqeV3siHuFdB/aZLfBZc4rd/cxZnednMTp2UsUFPLHK2KNrGubI11wxtrutx01VFsJiUmI4g6qzXigZURZyCAelqGuijbYda0cQcT77ea5lSbOyPzOkoXvHRuDehdE+z3bnuyOG627vXaPR5XU/qNPTvzwSRxMY9kkEkQzgWcQ9wDHXIJuDfXXeubiV3XCmlJvTVpb+qZZzt2urW8GbWI2feD8LlJjoWO+vfuXqCjjdqH5h2EW+CmsAAsNwUOF+na3rQjbhZt/loxOr/i2YYqRjdbXPapKIutTpQpq0EkvAgbb1YREUhgIiIAiIgCIiAIiIAiIgCIiALy+9tN/BekQGv1FPXvPttaOTXWHna6wt2dlcbySj4uPxstmRVJYKnJ3m5Pzk/4J1iJpWjZeSRQS4NDGwuyPlPBoO8/07gqOswmeRrg2OSPMLAsHWb2tz317wVu0riGkhuY20Ggv2XKp56Cqm1fKGD7Lb2Hfa1/NVsTg4aZIvyil1ba/ckpV5a5n1b9kc5rNhIjpUvqpCfvJ36+AsPIKF/8AnOGfcu/7r/1XS/8Ahg/fD8H/ALIdmHfej8J/VVexxq0jdLzX8FjtMO/6rP0OfQ+iWje0PZTyWO49L+TivsnouazVkbh2Op6aVv8A4w7/AFLo1LhNTF9HOAORBt5G6sIhUj2jEe7MCrVOlUklnc0/+rX5IJThwUWvVHP8MwNtIyzYGMcQOkcyHog8i+uXW286XO9S7roY3arE+Bh3tae8AqOf0rM7qfVfybRxttMv3NUw/Del1inGYbxZzXD99iuaWKsjNnOZI3tJDvO3zurKKBjPZY1vcAPksyt0MFGmtHZ/8W0ujbIKldz8vG1+p8C+oiukAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//Z"
          />
          <div className="justify-around">
            <div className="Player2"
            >
              <Input
                name="Player2"
                label="Player 2 Name"
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>)}
        <div style={{ marginTop: "20px", fontSize: "33px" }}>
          Choose a Symbol
        </div>
        <div style={{ marginTop: "10px" }}>
          <div
            onMouseEnter={() => setHovered([1, 0])}
            onMouseLeave={() => setHovered([0, 0])}
            onClick={() => setHovered([1, 0])}
            style={{ display: "inline-block" }}
          >
            <img
              id="circle"
              onClick={applyimage}
              style={
                isHovered[0] === 1 && !imageValue[0]
                  ? {
                    borderRadius: "3px",
                    width: "80px",
                    height: "75px",
                    marginRight: "20px",
                  }
                  : {
                    borderRadius: "3px",
                    width: "75px",
                    height: "70px",
                    marginRight: "20px",
                  }
              }
              src="data:image/png;base64,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"
            />
          </div>
          <div
            onMouseEnter={() => setHovered([0, 1])}
            onMouseLeave={() => setHovered([0, 0])}
            style={{ display: "inline-block" }}
          >
            <img
              id="cross"
              onClick={applyimage}
              style={
                isHovered[1] === 1 && !imageValue[0]
                  ? {
                    borderRadius: "3px",
                    width: "80px",
                    height: "75px",
                    marginRight: "20px",
                  }
                  : {
                    borderRadius: "3px",
                    width: "75px",
                    height: "70px",
                    marginRight: "20px",
                  }
              }
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAkFBMVEX////rLADqAADrJgDqHwDqFgDrJwDqGADqDwD61tH60cz849///fz++Pb+9PL84d3yh3rxf3H1qJ7vX0zxeGn1o5n3uLDwbVz4wrvsOxzzlor97uvwdGT5y8XtRi32sanvZFLzjoLsPyLuWEP96eb3vbX0nJHsMgvtTDXtQyjuWUX1pJruUz3vYlDyin7vaFY3VnlRAAAIS0lEQVR4nO2d6VrqOhSGzdA0zAIqsEEQQUAP6v3f3QFFLaXD1zZTefL+3u4V0mTNSW5uPB6Px+PxeDwej8fj8Xg8Ho/H4/E4yfjudTsfbR7btgdin3fKhRCMSzka2x5LlN7i9mn1/tE0KPI2ID8wyTZdg6IzaCwJDTljjNNPc0IpiRLKZceY7FQeXg9r9WdIQd+U2Ikg53B5b0p2CgsRnA2KGtomy5BcEGwbZoQnMt4GsfGIrRHBsR3yI5zeGpGewHRI4wv1sHFNDKctLgV/S5+0DIi/ZEBZ0nBM7JIRT56K49J40C8+TudNpgyHa/d9Fmmiv77FUrf4OA2e+mm4bsPaSlQWv8iZZvkxFgma4m8wA73CL8xpjMCcl3Ngk/1laE+n8HRl8TsZBlfGMnsqDoZVo8q4z1IWJ+RGn/xzclbFAf6kTXgzV/gRasjrGgOj0fZhpnHnLhlDLt8U+zCPeqQ/J/o0lwSa9fc3K2w0cqpDeL7ePCEmOsTHeISWBSFsokF//gP05gm6Vi8+zhBcpDr0J6KpfpD6tWcbH478p1h2jr95DtUfpBUZD31RKrrDcvzNKOGzUtmJdAt9G6X+5w7dncdotW8iOb5PSCilDokpzEHOcMHcUIKrc5cVlsVgc2Vyi5gQY0nXmyZBjfzhC40UCX2A9yaTRqsld8aNCRaFfM3+qxYnL50XCesxulAgbw1vEHmnQFzBwb3C+0RB/rNLUBVFjYQhcWb4p6rqDbdfwVXIApNFzAgDdAsLVrHWuQLXIJ8YVhV/NFGlUTFMG4GORTBU9ctKMJ2gH2xfQUofy94QezWzb4bgOMPybgbqYymxV5W4BZVG6fo7qJVYaLOsfGIBTkZJnwt0Ny1qzSiNANOgpSw/mLyxqjWjoBq0RNEX9LwNxmK5gBqUFo2ZkpssLv9fK75mGqAGLVgn6EEWROiqPpQF1PaFqlm9AAlCGNdauy3DI5bgKZD0a0FTwV8d6WWM0uKIORESnYw1NBXBu9YfVZYuFMWLAEvVr0NkKmy73ek8IeYEm4w1h6bCKQNyDmRORJifzoBWhShso43yn5rJaCFTwULnDMg5Y8Sc5E0GZEH41okIJIteCJiTbJ3Rk8BUhPsaHBqZbgFzkjUZkONtum2xJG2kyJjuZ0DhGFVdwdcGkiEXKe0RUKeL/RQWzj/oByWl71+Av3QuGMsGSnYl/CTk7xi3cxKgNFCodtGqcg9MBX92MBjLBgrVYvse2VrhWw1saZwukvmj0RNifaS32XzlWAXtFWBbI8ZxBER29bGlce6QD/2TtoVmzsKRIVUgCiD4qqh15vk7SkhLRXQ1IJWecHVw3Em+pmWsZrY0ThOIs/iuCWRuamhL47RY/hcXgNYMXamMVaH7jDf9pVNTW3rBsEBzbAr1taVxENuaPRU1tqVxoLg1lZrb0jh40+4ljBg4FGMSxLYmw+cOXPGhlrXADzxECZ5sj1wDiJd9ibtFwmpAJcbYVDhcJKwG2vP3g+NFwmpAJcZfHOwyUQlUYjxxBcFYNlCJ8Qtn2hT1gTZASofaFPXxiawMfrUGJMp0DrWkXU1gmgHqjF+lv3kOfBbJlW53feBn1CyeHTPCumC673o98Jsxfqb1xLVkOS/Iu4cqidD0GWQjdPbFo1RyPJteq74TiCbse8e5nhT4ifzLydIJVteU5OsMKxUFOHfgiKEiGqxi5UxQ25caq2JTIGeRhnyvYWfSBem3vxaCi/rvkyZ02ghpIa/9PoH8K8GhM51yWGd7Mt0hv5GTFlZw5ay++wS7Uyd4O37uF+jcSW39LuyuJfrx/a9bAjG8wb6OufEedAdX5GJzLGAxfHeWEjCngrFoNQgrq7l0jh9higWl4f7cMjxAE8i3dSqnPWBJm8saeg9o+quVq9EeQWs98Q2Ezg7qc5OreqjQx/R3BqJwkbzS+9BEMqn2llQ9YL+FBKu0YAtTGoTOXI/WGsiBTJL9LEYP8jQOXqjbJYMl9k1F9j3AnRVkhSy+x5NPb4I1+PJtXsP/B7bRQqtPNWUBLgoin/J3OhSeHJeG8SdoEBpbsOubQo8utMBrdMNn9xyvD3BRsACsd7TfsXyYc7FrE10URe7iRZvIA5eWRruPZneL3U7wCNZfHdIaYzTlL4rWzadoXd4Rg9L9REtirETJB+3XcMLXWEi0DhQP0DEG6PbjwnIRureDix9lP1wDKiqQ49KY2cyTL5PfQ0wcaOlTUl0sjD/AA2tHscYCPlN3TPuXBwx9D8i9lSNIic+FphAMq8XXYBh/gNnwvDbw9lDRTYIl1b8IiWEdOib4kVMlXUZt9O7to2r6NNjjtS6wPQifqNnCBY51mnuDuo1bjwNS1VMsN+MCJxmDrZGNsgiLNNmozN6v0Qv7iaGNgts3or6LeVSkg1q/RSnSpKn+sRzkzqlfQqa5blDgy+i4PrAJ3lH/DdXbQr2DFZiexvYp/jTQcQxaaygDcJPoe/ahyLELqrfUKKCFEc71jQI/jkOEtkF8Ad0pqfesA9xbznXn/oBnYnSfgemC1wRo3iIHZjkqw8TZKEhpSAPHkrIvzuPPJkIj4GS8spcYM8lyPtUFINnkvifGd2YGkp6RxSqEKsg5DM7npvozGsk9EmYvrPjMUBrBm7lxdGYJS6NaWrM46TkNw42PjySuQstVQKqQcp0GM3832b08y/TZaEJtJd3OJHcWsuHtTfgXN9o5ZNy5uKSem3ArEnkY0oAzwbi189bnNyZz2rfY+tkdLz93b7f2Ct1/sZoIaf/K7qsryoByQQQL6XZTj3ZgnTTuJmQ+GzjUnuPxeDwej8fj8Xg8Ho/H4/F4PB6Pe/wP6rlrlmOvfGIAAAAASUVORK5CYII="
            />
          </div>
        </div>
        <div
          style={{ marginTop: "15px", marginBottom: "15px" }}
        >
          {imageValue[0] === 1 &&
            PlayerDetails.Player1 != "" &&
            PlayerDetails.Player2 != "" ? (
            <Link to="/game" style={{ textDecoration: "none", color: "white" }}>
              <button
                type="button"
                onClick={getName}
                class="btn btn-dark btn-lg btn-md"
                style={{ height: "50px", fontSize: "20px" }}
              >
                <div>Start game</div>
              </button>
            </Link>
          ) : (
            <Button
              type="button"
              class="btn btn-dark btn-lg btn-md"
              style={{ height: "50px", fontSize: "20px" }}
            >
              <div>Start game</div>
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
