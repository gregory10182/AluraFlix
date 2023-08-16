import "./Input.css";
import { v4 as uuidv4 } from "uuid";

function Input({ type, placeholder, dataOutput, data, options }) {
  const inputId = uuidv4();

  if (type === "text") {
    return (
      <div className="inputContainer">
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
        />
        <label className="inputLabel" htmlFor={inputId}>
          {placeholder}
        </label>
        <span className="errorMessage"></span>
      </div>
    );
  } else if (type === "color") {
    return (
      <div className="inputContainer">
        <input
          className="input inputV"
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
        <span className="errorMessage"></span>
      </div>
    );
  } else if (type === "url") {
    return (
      <div className="inputContainer">
        <input
          className="input inputV"
          type="URL"
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
        <span className="errorMessage"></span>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="inputContainer">
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
        {/* <input
          className="input inputV"
          type="URL"
          placeholder={placeholder}
          id={inputId}
          name={placeholder}
          required
          value={data}
          onChange={(e) => setData(e.target.value)}
        /> */}
        <span className="errorMessage"></span>
      </div>
    );
  } else if (type === "textArea") {
    return (
      <div className="inputContainer">
        <textarea
          className="textArea inputV"
          placeholder={placeholder}
          name={placeholder}
          id={inputId}
          required
          maxLength="300"
          value={data}
          onChange={(e) => dataOutput(e.target.value)}
        ></textarea>
        <label className="inputLabel" htmlFor={inputId}>
          {placeholder}
        </label>
        <span className="errorMessage"></span>
      </div>
    );
  }
}

export default Input;
