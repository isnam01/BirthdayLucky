import "./styles.css";
import { useState } from "react";

export default function App() {
  const [date, setdate] = useState("");
  const [num, setnum] = useState(undefined);
  const [multiple, setmultiple] = useState(false);
  const [show, setshow] = useState(false);

  const sumofdigits = (i) => {
    let s = 0;
    for (let j = 0; j < i.length; j++) {
      s = s + Number(i[j]);
    }
    return s;
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (date && num) {
      setshow(true);
      let sum = 0;
      for (let i of date.split("-")) {
        sum = sum + sumofdigits(i);
      }
      if (sum % num === 0) {
        setmultiple(true);
      } else {
        setmultiple(false);
      }
    }
  };

  return (
    <div className="App">
      <h1>Is your birthday lucky ?</h1>
      <h5>Privacy note : We are not going to store your data</h5>
      <form className="form" onSubmit={(e) => onClickHandler(e)}>
        <div>
          <label>Enter your birthdate </label>
          <input
            type="date"
            required
            onChange={(e) => setdate(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Enter your lucky number</label>
          <input
            type="number"
            required
            onChange={(e) => setnum(e.target.value)}
          ></input>
        </div>
        <button type="submit">Calculate</button>
        {show ? (
          !multiple ? (
            <img
              alt="unhappyImage"
              src="https://codesandbox.io/api/v1/sandboxes/rv9hp/fs/src/unhappy.svg"
              width="100%"
              height="200px"
            />
          ) : (
            <img
              alt="happyImage"
              src="https://codesandbox.io/api/v1/sandboxes/rv9hp/fs/src/happy.svg"
              width="100%"
              height="200px"
            />
          )
        ) : (
          ""
        )}
      </form>

      <div className="footer">
        <div>
          <p>Connect with me</p>
        </div>
        <div>
          <li>
            <a href="https://github.com/isnam01">
              <img
                src="https://build-is-your-birthday-lucky.netlify.app/images/github.svg"
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <img
                src="https://build-is-your-birthday-lucky.netlify.app/images/twitter.svg"
                alt="twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <img
                src="https://build-is-your-birthday-lucky.netlify.app/images/instagram.svg"
                alt="instagram"
              />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}
