import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";

const NormalInput = styled.input`
  &::placeholder {
    visibility: hidden;
  }

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  width: 100%;
  height: 2.8rem;
  padding: 1rem 0.64rem 0.64rem 0.64rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  border: none;
  outline: none;
  border-bottom: ${(props) =>
    props.invalid === "true" ? "2px solid #F51400" : "none"};

  @media only screen and (min-width: 1440px) {
    height: 9.375rem;
    font-size: 1.125rem;
  }
`;

const InputLabel = styled.label`
  color: ${(props) =>
    props.invalid === "true" ? "#F51400" : "var(--color-gray-dark)"};
  position: absolute;
  top: 0.8rem;
  left: 0.55rem;
  width: 100%;
  margin-left: 3px;
  font-weight: 300;
  font-size: 1rem;
  transition: all 0.3s;

  @media only screen and (min-width: 1440px) {
    top: 0.94rem;
    font-size: 1.125rem;
  }
`;

const Select = styled.select`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  box-sizing: border-box;
  width: 100%;
  height: 2.8rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  border: none;
  outline: none;
`;

const TextArea = styled.textarea`
  &::placeholder {
    visibility: hidden;
  }

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  box-sizing: border-box;
  width: 100%;
  height: 7.01869rem;
  padding: 1.3rem 0.64rem 0.64rem 0.64rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  resize: none;
  border: none;
  outline: none;
  border-bottom: ${(props) =>
    props.invalid === "true" ? "2px solid #F51400" : "none"};

  @media only screen and (min-width: 1440px) {
    height: 9.375rem;
    font-size: 1.125rem;
  }
`;

const EMessage = styled.span`
  display: block;
  justify-self: flex-start;
  margin-top: 0.2rem;
  padding-left: 0.2rem;
  font-size: 14px;
  color: #f51400;
`;

const ColorInput = styled(NormalInput)`
  padding: 0.6rem 0.5rem 0.5rem 0.5rem;

  @media only screen and (min-width: 1440px) {
    padding: 1rem 1rem 0.5rem 1rem;
  }
`;

const InputContainer = styled.div`
  font-family: "Roboto", sans-serif;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;

  ${NormalInput}:not(:placeholder-shown) + ${InputLabel}, ${NormalInput}:focus + ${InputLabel} {
    font-size: 0.6rem !important;
    top: 0.2rem !important;
    transition: all 0.3s;
  }

  ${TextArea}:not(:placeholder-shown) + ${InputLabel}, ${TextArea}:focus + ${InputLabel} {
    font-size: 0.6rem !important;
    top: 0.2rem !important;
    transition: all 0.3s;
  }

  ${NormalInput},${TextArea},${Select} {
    background-color: var(--color-gray-semidark);
    color: var(--color-gray-medium);
  }

  ${NormalInput}:focus,${TextArea}:focus,${Select}:focus {
    border-bottom: 0.25rem solid var(--color-primary-medium);
    transition: 200ms all;
  }

  @media only screen and (min-width: 1440px) {
    ${NormalInput}:not(:placeholder-shown) + ${InputLabel}, ${NormalInput}:focus + ${InputLabel} {
      font-size: 0.75rem !important;
      top: 0.2rem !important;
    }

    ${TextArea}:not(:placeholder-shown) + ${InputLabel}, ${TextArea}:focus + ${InputLabel} {
      font-size: 0.75rem !important;
    }

    ${NormalInput},${Select}, ${ColorInput} {
      height: 3.125rem;
      font-size: 1.125rem;
    }
  }
`;

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

  const types = {
    text: (
      <NormalInput
        className="inputV"
        type="text"
        placeholder={placeholder}
        id={inputId}
        name={placeholder}
        required
        invalid={invalid.toString() || ""}
        maxLength={50}
        value={data}
        onChange={(e) => dataOutput(e.target.value)}
        onBlur={(e) => inputValidation(e)}
      />
    ),
    color: (
      <ColorInput
        className="inputV colorInput"
        type="color"
        placeholder={placeholder}
        id={inputId}
        name={placeholder}
        required
        value={data}
        onChange={(e) => dataOutput(e.target.value)}
      />
    ),
    url: (
      <NormalInput
        className="inputV"
        type="URL"
        placeholder={placeholder}
        id={inputId}
        name={placeholder}
        pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
        required
        invalid={invalid.toString() || ""}
        value={data}
        onChange={(e) => dataOutput(e.target.value)}
        onBlur={(e) => inputValidation(e)}
      />
    ),
    select: (
      <Select
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
        {options &&
          options.map((option, i) => {
            return <option key={i}>{option}</option>;
          })}
      </Select>
    ),
    textArea: (
      <TextArea
        className="textArea inputV"
        placeholder={placeholder}
        name={placeholder}
        id={inputId}
        required
        invalid={invalid.toString() || ""}
        maxLength="300"
        value={data}
        onChange={(e) => dataOutput(e.target.value)}
        onBlur={(e) => inputValidation(e)}
      ></TextArea>
    ),
  };

  if (invalid) {
    return (
      <InputContainer>
        {types[type]}
        {type !== "select" && (
          <InputLabel
            invalid={invalid.toString() || ""}
            className="inputLabel"
            htmlFor={inputId}
          >
            {placeholder}
          </InputLabel>
        )}
        <EMessage>{errorMessage}</EMessage>
      </InputContainer>
    );
  } else {
    return (
      <InputContainer>
        {types[type]}
        {type !== "select" && (
          <InputLabel className="inputLabel" htmlFor={inputId}>
            {placeholder}
          </InputLabel>
        )}
      </InputContainer>
    );
  }
}

export default Input;
