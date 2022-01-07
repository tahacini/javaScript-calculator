import React, { useState } from "react";
import Number from "./components/Number";
import Operator from "./components/Operator";
import Display from "./components/Display";

function App() {
  const [result, setResult] = useState("0");
  const [holder, setHolder] = useState("0");
  const reg = /[+/\*-]+$/g;
  const regex = reg.test(result);

  const change = (val) => {
    console.log(regex);
    switch (val) {
      case "AC":
        setHolder("0");
        setResult("0");
        break;
      case "=":
        if (regex) {
          setResult((pre) => pre.replace(reg, ""));
          setResult((pre) => eval(pre));
          setHolder("0");
          break;
        } else if (result === "0") {
          break;
        } else {
          setResult((pre) => eval(pre));
          setHolder("0");
          break;
        }
      case "+":
        if (regex) {
          setResult((pre) => pre.replace(reg, "+"));
          break;
        } else {
          setResult((pre) => pre + "+");
          setHolder("0");
          break;
        }
      case "-":
        if (/-$/.test(result)) {
          break;
        } else {
          setResult((pre) => pre + "-");
          setHolder("0");
          break;
        }
      case "/":
        if (regex) {
          setResult((pre) => pre.replace(reg, "/"));
          break;
        } else {
          setResult((pre) => pre + "/");
          setHolder("0");
          break;
        }
      case "*":
        if (regex) {
          setResult((pre) => pre.replace(reg, "*"));
          break;
        } else {
          setResult((pre) => pre + "*");
          setHolder("0");
          break;
        }
      case ".":
        if (/\./.test(holder)) {
          break;
        } else {
          if (result === "0" && holder === "0") {
            setHolder("0.");
            setResult("0.");
          } else if (holder === "0") {
            setHolder("0.");
            setResult((pre) => pre + "0.");
          } else {
            setHolder((pre) => pre + ".");
            setResult((pre) => pre + ".");
          }
          break;
        }
      default:
        if (result === "0" && holder === "0") {
          setHolder(val);
          setResult(val);
        } else if (holder === "0") {
          setHolder(val);
          setResult((pre) => pre + val);
        } else {
          setResult((pre) => pre + val);
          setHolder((pre) => pre + val);
          break;
        }
    }
  };

  return (
    <div className="wrapper">
      <div className="display-wrapper">
        <Display
          val={result}
          click={change}
          style={"display result"}
          id="display"
        />
        <Display val={holder} click={change} style={"display"} id="input" />
      </div>
      <div className="line">
        <Operator
          val={"AC"}
          click={change}
          placeHolder={"AC"}
          style={"btn span-two ac"}
          id="clear"
        />
        <Operator
          val={"/"}
          click={change}
          placeHolder={"/"}
          style={"btn op"}
          id="divide"
        />
        <Operator
          val={"*"}
          click={change}
          placeHolder={"X"}
          style={"btn op"}
          id="multiply"
        />
      </div>
      <div>
        <Number
          val={"7"}
          click={change}
          placeHolder={"7"}
          style={"btn number"}
          id="seven"
        />
        <Number
          val={"8"}
          click={change}
          placeHolder={"8"}
          style={"btn number"}
          id="eight"
        />
        <Number
          val={"9"}
          click={change}
          placeHolder={"9"}
          style={"btn number"}
          id="nine"
        />
        <Operator
          val={"-"}
          click={change}
          placeHolder={"-"}
          style={"btn op"}
          id="subtract"
        />
      </div>
      <div>
        <Number
          val={"4"}
          click={change}
          placeHolder={"4"}
          style={"btn number"}
          id="four"
        />
        <Number
          val={"5"}
          click={change}
          placeHolder={"5"}
          style={"btn number"}
          id="five"
        />
        <Number
          val={"6"}
          click={change}
          placeHolder={"6"}
          style={"btn number"}
          id="six"
        />
        <Operator
          val={"+"}
          click={change}
          placeHolder={"+"}
          style={"btn op"}
          id="add"
        />
      </div>
      <div className="line-second">
        <Number
          val={"1"}
          click={change}
          placeHolder={"1"}
          style={"btn number"}
          id="one"
        />
        <Number
          val={"2"}
          click={change}
          placeHolder={"2"}
          style={"btn number"}
          id="two"
        />
        <Number
          val={"3"}
          click={change}
          placeHolder={"3"}
          style={"btn number"}
          id="three"
        />
        <Operator
          val={"="}
          click={change}
          placeHolder={"="}
          style={"btn span-two-row equal"}
          id="equals"
        />
        <Number
          val={"0"}
          click={change}
          placeHolder={"0"}
          style={"btn span-two number"}
          id="zero"
        />
        <Number
          val={"."}
          click={change}
          placeHolder={"."}
          style={"btn number"}
          id="decimal"
        />
      </div>
    </div>
  );
}

export default App;
