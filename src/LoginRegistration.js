import { useState } from "react";

const Login = ({ handleChangeCard }) => {
  return (
    <>
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button type="submit">Login</button>
          <a onClick={handleChangeCard}>New User</a>
        </form>
      </div>
    </>
  );
};

const Registration = ({ handleChangeCard }) => {
  return (
    <>
      <div className="registration-form">
        <h1>Registration</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          <a onClick={handleChangeCard}>Already Registered? Click Here</a>
        </form>
      </div>
    </>
  );
};

const LoginRegistration = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleChangeCard = () => {
    if (isRegistered) {
      setIsRegistered(false);
    } else {
      setIsRegistered(true);
    }
  };

  return (
    <div className="Login-or-Registration">
      {isRegistered ? (
        <Login handleChangeCard={handleChangeCard} />
      ) : (
        <Registration handleChangeCard={handleChangeCard} />
      )}
    </div>
  );
};

export default LoginRegistration;
