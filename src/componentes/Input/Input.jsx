import { useState } from "react";
import "./Input.css";
import { v4 as uuidv4 } from "uuid";

function Input({ type, placeholder, dataOutput, data, options }) {
  const inputId = uuidv4();

  const [invalid, setInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const invalidFunc = (message) => {
    setInvalid(true);
    setErrorMessage(message);
  };

  const inputValidation = (e) => {
    const validity = e.target.validity;
    if (validity.valid) {
      setInvalid(false);
    } else if (validity.valueMissing) {
      invalidFunc(`El campo ${placeholder} es obligatorio`);
    } else if (validity.patternMismatch) {
      invalidFunc(`Patron aceptado: http(s)://(www).asd.com/a`);
    }
  };

  if (type === "text") {
    return (
      <div className={`inputContainer ${invalid && "inputContainerInvalid"}`}>
        <input
          className="input inputV"
          type="text"
          placeholder={placeholder}
          id={inputId}
          name={placeholder}
          required
          maxLength={50}
          value={data}
          onChange={(e) => dataOutput(e.target.value)}
          onBlur={(e) => inputValidation(e)}
        />
        <label className="inputLabel" htmlFor={inputId}>
          {placeholder}
        </label>
        <span className="errorMessage">{errorMessage}</span>
      </div>
    );
  } else if (type === "color") {
    return (
      <div className={`inputContainer ${invalid && "inputContainerInvalid"}`}>
        <input
          className="input inputV colorInput"
          type="color"
          placeholder={placeholder}
          id={inputId}
          name={placeholder}
          required
          value={data}
          onChange={(e) => dataOutput(e.target.value)}
        />
        <label className="inputLabel" htmlFor={inputId}>
          {placeholder}
        </label>
        <span className="errorMessage">{errorMessage}</span>
      </div>
    );
  } else if (type === "url") {
    return (
      <div className={`inputContainer ${invalid && "inputContainerInvalid"}`}>
        <input
          className="input inputV"
          type="URL"
          placeholder={placeholder}
          id={inputId}
          name={placeholder}
          pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
          required
          value={data}
          onChange={(e) => dataOutput(e.target.value)}
          onBlur={(e) => inputValidation(e)}
        />
        <label className="inputLabel" htmlFor={inputId}>
          {placeholder}
        </label>
        <span className="errorMessage">{errorMessage}</span>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className={`inputContainer ${invalid && "inputContainerInvalid"}`}>
        <select
          className="select inputV"
          name={placeholder}
          id={inputId}
          value={data}
          onChange={(e) => {
            dataOutput(e.target.value);
          }}
        >
          <option value={""} disabled defaultValue={""} hidden>
            Escoja una Categoria
          </option>
          {options.map((option, i) => {
            return <option key={i}>{option}</option>;
          })}
        </select>
        <span className="errorMessage">{errorMessage}</span>
      </div>
    );
  } else if (type === "textArea") {
    return (
      <div className={`inputContainer ${invalid && "inputContainerInvalid"}`}>
        <textarea
          className="textArea inputV"
          placeholder={placeholder}
          name={placeholder}
          id={inputId}
          required
          maxLength="300"
          value={data}
          onChange={(e) => dataOutput(e.target.value)}
          onBlur={(e) => inputValidation(e)}
        ></textarea>
        <label className="inputLabel" htmlFor={inputId}>
          {placeholder}
        </label>
        <span className="errorMessage">{errorMessage}</span>
      </div>
    );
  }
}

export default Input;
