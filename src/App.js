import "./App.css";
import React, { useState } from "react";
import { auth, githubProvider, googleProvider } from "./firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";

function App() {
  const [usr, setusr] = useState(null);

  const googlelogin = async () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setusr(res.user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const githublogin = async () => {
    await signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <div>
        <div className="buttonContainer">
          <img src="https://blog.hubspot.com/hubfs/image8-2.jpg" alt="" />
          <button onClick={googlelogin}>Google login</button>
        </div>

        <div className="buttonContainer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          <button onClick={githublogin}>Github login</button>
        </div>
      </div>
      <h2>{usr}</h2>
    </section>
  );
}

export default App;
