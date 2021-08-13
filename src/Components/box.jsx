import React, { useState } from "react";
import Circle from "../images/circle.png";
import Cross from "../images/cross.png";
function Box(props) {
  const id_no = props.id_no;
  const [customvalue, setValue] = useState("false");
  const app = function imageApply() {
    props.OnImage(props.id);
    props.Ondisplay(props.id);
    setValue("true");
  };
  // const image_url1="data:image/png;base64,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";
  // const image_url2="data:image/png;base64,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";
  return (
    <div onClick={app} style={{ display: "inline-block" }}>
      <div
        class="card"
        style={{
          width: "5rem",
          height: "5rem",
          border: "#192734 solid 5px",
          backgroundImage:
            id_no === 1 && customvalue
              ? "url(" + Cross + ")"
              : id_no === 2 && customvalue
              ? "url(" + Circle + ")"
              : "white",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
export default Box;