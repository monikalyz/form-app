import styled from "styled-components";
import { useState } from "react";

const InputWrapper = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <Wrapper>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <label htmlFor={id} className="placeholder">
        {label}
      </label>
      <span>{errorMessage}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  font-size: 14px;
  padding-top: 20px;

  & > span {
    display: none;
    width: 400px;
  }

  & > input:invalid[focused="true"] {
    background: linear-gradient(90deg, red, red) center bottom/0 2px no-repeat,
      linear-gradient(90deg, red, red) left bottom/100% 2px no-repeat,
      linear-gradient(90deg, transparent, transparent) left bottom/100% 2px
        no-repeat;
  }

  & > input:invalid[focused="true"] ~ span {
    display: block;
    color: red;
    font-size: 12px;
  }

  & > input {
    border: none;
    appearance: none;
    background: #fff;
    padding: 12px;
    width: 400px;
    outline: none;
    font-size: 20px;
    border-radius: 0;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: linear-gradient(90deg, #222, #222) center bottom/0 2px no-repeat,
      linear-gradient(90deg, #aaa, #aaa) left bottom/100% 2px no-repeat,
      linear-gradient(90deg, transparent, transparent) left bottom/100% 2px
        no-repeat;
    transition: background-size 0.3s ease;
  }

  & > input:focus {
    background-size: 100% 2px, 100% 2px, 100%;
  }

  & > input:focus + .placeholder,
  & > input:not(:placeholder-shown) + .placeholder {
    top: 20px;
    font-size: 12px;
    color: #aaa;
  }

  & > label {
    position: absolute;
    left: 12px;
    top: calc(50% + 0px);
    transform: translateY(-50%);
    color: #000;
    font-size: 16px;
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
  }

  & > label::after {
    content: "";
    top: 20px;
    font-size: 12px;
    color: #aaa;
  }
`;

export default InputWrapper;
