import { useState } from "react";

const Login = () => {
  return (
    <>
      <div className="login-form">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

const Registration = () => {
  return (
    <>
      <div className="registration-form">
        <h1>Registration</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

const LoginRegistration = () => {
  const [isRegistered, setIsRegistered] = useState(true);

  return (
    <div className="Login-or-Registration">
      {isRegistered ? <Login /> : <Registration />}
    </div>
  );
};

export default LoginRegistration;
