import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

const App = () => {
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

  return (
    <AppWrapper>
      <GlobalReset />
      <LoginForm>
        <label>
          Jesteś już użytkownikiem?
          <FormContent>
            <label htmlFor="loginemail">
              Email
              <input
                type="email"
                id="loginemail"
                name="loginemail"
                onChange={handleChange}
                checked={values.loginemail}
              />
            </label>
            <label htmlFor="loginpassword">
              Hasło
              <input
                type="password"
                id="loginpassword"
                name="loginpassword"
                onChange={handleChange}
                checked={values.loginpassword}
              />
            </label>

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
          <Button>Zaloguj się</Button>
        </label>
      </LoginForm>

      <RegistrationForm noValidate>
        <label>
          Jesteś tu pierwszy raz?
          <FormContent>
            <label htmlFor="registrationemail">
              Email
              <input
                type="email"
                id="registrationemail"
                name="registrationemail"
                onChange={handleChange}
                checked={values.registrationemail}
              />
            </label>

            <label htmlFor="name">
              Imię
              <input
                type="name"
                id="name"
                name="name"
                onChange={handleChange}
                checked={values.name}
              />
            </label>
            <label htmlFor="surname">
              Nazwisko
              <input
                type="password"
                id="surname"
                name="surname"
                onChange={handleChange}
                checked={values.surname}
              />
            </label>
            <label htmlFor="registrationpassword">
              Hasło
              <input
                type="password"
                id="registrationpassword"
                name="registrationpassword"
                onChange={handleChange}
                checked={values.registrationpassword}
              />
            </label>

            <label htmlFor="confirmpassword">
              Powtórz hasło
              <input
                type="confirmpassword"
                id="confirmpassword"
                name="confirmpassword"
                onChange={handleChange}
                checked={values.confirmpassword}
              />
            </label>
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
          <SdButton>Załóż konto</SdButton>
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
`;

const LoginForm = styled.form`
  width: 50%;
  height: 100vh;
  background-color: #fff;
  transition: 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const RegistrationForm = styled(LoginForm)`
  background-color: #f2f2f2;
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
  background-color: transparent;
  margin: 30px 20px 40px 20px;
  padding: 5px 10px;
  width: 400px;
  cursor: pointer;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

const SdButton = styled(Button)`
  background-color: transparent;
`;

const Link = styled.a`
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
  letter-spacing: 1px;
  color: #000;
`;

const CheckboxContent = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  width: 400px;
  margin-top: 10px;

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
