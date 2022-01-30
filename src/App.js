import { useState } from "react";
import GithubUser from "./components/GithubUser";


function App() {

  const [login, setLogin] = useState('huuquannguyen');
  
  const handleSearch = (e) => {
    setLogin(e.target.value)
  }

  return (
    <>
      <input value={login} 
          placeholder="username"
          onChange={handleSearch} 
      />
      <GithubUser login={login}></GithubUser>
    </>
  );
}

export default App;
