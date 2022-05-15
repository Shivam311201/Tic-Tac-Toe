import React, { useState } from "react";
import Circle from "../../images/circle.png";
import Cross from "../../images/cross.png";
import "../../styles.css";

function Box(props) {
  const id_no = props.id_no;
  const [customvalue, setValue] = useState("false");
  const app = function imageApply() {
    props.Ondisplay(props.id);
    props.OnImage(props.id);
    setValue("true");
  };

  return (
    <div onClick={app} className="InlineBloc">
      <div
        className="card BoxInner"
        style={{
          backgroundImage:
            id_no === 1 && customvalue
              ? "url(" + Circle + ")" 
              : id_no === 2 && customvalue
              ? "url(" + Cross + ")"
              : "white",
        }}
      ></div>
    </div>
  );
}
export default Box;
