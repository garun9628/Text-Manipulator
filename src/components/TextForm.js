import React, { useState } from "react";
// import "../index.css";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "Success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "Success");
  };

  const handleExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "Success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-1">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#2b2959" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-1 my-5"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {
            text.split(/\s+/).filter((word) => {
              return word !== "";
            }).length
          }{" "}
          <b>Words</b> and {text.length}
          <b> Characters</b>
        </p>

        <p>
          {0.008 *
            text.split(/\s+/).filter((word) => {
              return word !== "";
            }).length}{" "}
          Minutes Read
        </p>

        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Write something to preview"}</p>
      </div>
    </>
  );
}
