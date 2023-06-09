import "./SingUp.css";
import { GoogleLogin ,useGoogleOneTapLogin } from "@react-oauth/google";
export default function SingUp() {
  return (
    <div id="Singup-page">
      <div id="Singup-page2">
        <div id="box-SingUp">
          <div id="box-SingUp-logo">logo</div>
          <div id="box-SingUp-form">
            <form id="formId">
              <label>full name </label>
              <br></br>
              <input></input>
              <br></br>
              <label>email</label>
              <br></br>
              <input></input>
              <br></br>
              <label>password </label>
              <br></br>
              <input></input>
              <br></br>
              <div> Sing up </div>
            </form>

            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
