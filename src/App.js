import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import InputWrapper from "./InputWrapper";

const App = () => {
  const [state, setState] = useState({
    widthLoginForm: 55 + "%",
    widthRegistrationForm: 45 + "%",
    clickedLeft: true,
    clickedRight: false,
    bgColorBtnL: "#000",
    txtColorBtnL: "#fff",
    bgColorBtnR: "transparent",
    txtColorBtnR: "#000",
    heightLoginForm: 50 + "vh",
  });

  const [values, setValues] = useState({
    loginemail: "",
    loginpassword: "",
    logincheckbox: false,
    registrationemail: "",
    name: "",
    surname: "",
    registrationpassword: "",
    confirmpassword: "",
    registrationcheckbox: true,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    if (type === "text" || type === "email" || type === "password") {
      const value = e.target.value;
      setValues({ ...values, [name]: value });
    } else {
      const checked = e.target.checked;
      setValues({
        ...values,
        [name]: checked,
      });
    }
  };

  const logininputs = [
    {
      id: 1,
      name: "loginemail",
      type: "email",
      errorMessage: "Wpisz poprawny adres email!",
      label: "Email",
      pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
      placeholder: " ",
    },
    {
      id: 2,
      name: "loginpassword",
      type: "password",
      errorMessage:
        "Hasło powinno mieć 8-20 znaków i zawierać co najmniej 1 literę, 1 cyfrę i 1 znak specjalny!",
      label: "Hasło",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      placeholder: " ",
    },
  ];

  const registrationinputs = [
    {
      id: 1,
      name: "registrationemail",
      type: "email",
      errorMessage: "Wpisz poprawny adres email!",
      label: "Email",
      pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
      placeholder: " ",
    },
    {
      id: 2,
      name: "name",
      type: "text",
      errorMessage:
        "Imię powinno mieć 3-16 znaków i nie powinno zawierać znaków specjalnych!",
      label: "Imię",
      pattern: "^[A-Za-z0-9]{3,16}$",
      placeholder: " ",
    },
    {
      id: 3,
      name: "surname",
      type: "text",
      errorMessage:
        "Nazwisko powinno mieć 3-16 znaków i nie powinno zawierać znaków specjalnych!",
      label: "Nazwisko",
      pattern: "^[A-Za-z0-9]{3,16}$",
      placeholder: " ",
    },
    {
      id: 4,
      name: "registrationpassword",
      type: "password",
      errorMessage:
        "Hasło powinno mieć 8-20 znaków i zawierać co najmniej 1 literę, 1 cyfrę i 1 znak specjalny!",
      label: "Hasło",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      placeholder: " ",
    },
    {
      id: 5,
      name: "confirmpassword",
      type: "password",
      errorMessage: "Hasła nie pasują!",
      pattern: values.registrationpassword,
      label: "Potwierdź hasło",
      placeholder: " ",
    },
  ];

  const handleClickToLeft = (e) => {
    setState({
      ...state,
      widthLoginForm: 55 + "%",
      widthRegistrationForm: 45 + "%",
      clickedLeft: true,
      clickedRight: false,
      bgColorBtnL: "#000",
      txtColorBtnL: "#fff",
      bgColorBtnR: "transparent",
      txtColorBtnR: "#000",
    });
    setValues({
      ...values,
      registrationemail: "",
      name: "",
      surname: "",
      registrationpassword: "",
      confirmpassword: "",
      registrationcheckbox: true,
    });
  };

  const handleClickToRight = (e) => {
    setState({
      ...state,
      widthLoginForm: 45 + "%",
      widthRegistrationForm: 55 + "%",
      clickedLeft: false,
      clickedRight: true,
      bgColorBtnR: "#000",
      txtColorBtnR: "#fff",
      bgColorBtnL: "transparent",
      txtColorBtnL: "#000",
    });
    setValues({
      ...values,
      loginemail: "",
      loginpassword: "",
      logincheckbox: false,
      registrationcheckbox: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (values.loginemail.match(`^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$`) &&
        values.loginpassword.match(
          `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
        )) ||
      (values.registrationemail.match(`^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$`) &&
        values.name.match(`^[A-Za-z0-9]{3,16}$`) &&
        values.surname.match(`^[A-Za-z0-9]{3,16}$`) &&
        values.registrationpassword.match(
          `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
        ) &&
        values.confirmpassword === values.registrationpassword)
    ) {
      alert("formularz wypełniony poprawnie!");
    }
  };

  return (
    <AppWrapper>
      <GlobalReset />
      <LoginForm
        width={state.widthLoginForm}
        onSubmit={handleSubmit}
        noValidate
      >
        <label>
          Jesteś już użytkownikiem?
          {state.clickedLeft ? (
            <FormContent>
              {logininputs.map((input) => (
                <InputWrapper
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
              ))}
              <CheckboxContent>
                <input
                  type="checkbox"
                  id="login-checkbox"
                  name="logincheckbox"
                  onChange={handleChange}
                  checked={values.logincheckbox}
                />
                <label htmlFor="login-checkbox" className="gray">
                  Zapamiętaj moje hasło
                </label>
              </CheckboxContent>
            </FormContent>
          ) : null}
          <Button
            bgCBtnL={state.bgColorBtnL}
            txtColor={state.txtColorBtnL}
            onClick={handleClickToLeft}
          >
            Zaloguj się
          </Button>
          {state.clickedLeft ? <Link>Nie pamiętam hasła?</Link> : null}
        </label>
      </LoginForm>

      <RegistrationForm
        width={state.widthRegistrationForm}
        onSubmit={handleSubmit}
        noValidate
      >
        <label>
          Jesteś tu pierwszy raz?
          {state.clickedRight ? (
            <FormContent>
              {registrationinputs.map((input) => (
                <InputWrapper
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
              ))}
              <CheckboxContent>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="registrationcheckbox"
                  onChange={handleChange}
                  required
                  checked={values.registrationcheckbox}
                />
                <label htmlFor="checkbox" className="gray">
                  Zgadzasz się z naszą <Link>Polityką prywatności</Link>
                  {!values.registrationcheckbox ? (
                    <span className="error">
                      Oznacz to pole, aby dokończyć rejestrację!
                    </span>
                  ) : null}
                </label>
              </CheckboxContent>
            </FormContent>
          ) : null}
          <SdButton
            bgCBtnR={state.bgColorBtnR}
            txtColor={state.txtColorBtnR}
            onClick={handleClickToRight}
          >
            Załóż konto
          </SdButton>
        </label>
      </RegistrationForm>
    </AppWrapper>
  );
};

const GlobalReset = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-family: 'Lato', sans-serif;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 1280px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const LoginForm = styled.form`
  width: ${(props) => props.width};
  height: 100vh;
  background-color: #fff;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    width: 100%;
    height: 100%;
  }

  @media (orientation: portrait) {
    width: 100%;
    min-height: 40vh;
  }

  @media (orientation: portrait) and (max-width: 412px) {
    min-height: 50vh;
  }

  & > label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1280px) {
      padding-top: 40px;
    }

    @media (orientation: portrait) and (max-width: 300px) {
      font-size: 20px;
    }
  }
`;

const RegistrationForm = styled(LoginForm)`
  background-color: #f2f2f2;

  @media (orientation: portrait) {
    height: 50vh;
  }
  @media (orientation: portrait) and (max-width: 600px) {
    height: 80vh;
    justify-content: flex-start;
  }

  @media (orientation: portrait) and (max-width: 390px) {
    height: 90vh;
  }
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  position: relative;
  font-size: 14px;
  padding-top: 20px;

  & > label {
    color: #000;
    font-size: 16px;
    transition: top 0.3s ease, font-size 0.3s ease, color 0.3s ease;
  }

  & > label > input {
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
`;

const Button = styled.button`
  background-color: ${(props) => props.bgCBtnL};
  margin: 30px 20px 40px 20px;
  padding: 5px 10px;
  width: 400px;
  cursor: pointer;
  color: ${(props) => props.txtColor};

  @media (orientation: portrait) and (max-width: 600px) {
    width: 300px;
  }

  @media (orientation: portrait) and (max-width: 300px) {
    width: 200px;
  }

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const SdButton = styled(Button)`
  background-color: ${(props) => props.bgCBtnR};
`;

const Link = styled.a`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;

  @media (max-width: 1280px) {
    padding-bottom: 40px;
  }
`;

const CheckboxContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 400px;
  margin-top: 10px;

  @media (orientation: portrait) and (max-width: 600px) {
    width: 300px;
  }

  @media (orientation: portrait) and (max-width: 300px) {
    width: 200px;
  }

  & > input {
    width: 20px;
    height: 20px;
    background-color: black;
    accent-color: black;
    margin-top: 20px;
    cursor: pointer;
  }

  & > label {
    margin: 18px 10px;
    font-size: 16px;
    cursor: pointer;

    & > span {
      display: block;
      color: red;
      font-size: 14px;
    }
  }

  & > label.gray {
    color: #777;
  }
`;

export default App;
