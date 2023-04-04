import { useState } from "react";
import LoginRegistration from "./LoginRegistration";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import WorkSpace from "./workspace/Workspace";

function App() {
  const [registered, setRegistered] = useState(true);

  return (
    <div className="App">
      {registered ? (
        <SignIn registered={registered} setRegistered={setRegistered} />
      ) : (
        <SignUp registered={registered} setRegistered={setRegistered} />
      )}
    </div>
  );
}

export default App;
