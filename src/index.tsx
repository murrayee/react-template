import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/modal";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

const App = () => {
  const [visible, setVisble] = useState<boolean>(false);
  const openModal = () => {
    setVisble(true);
  };
  return (
    <div className="body-content">
      <p>duansijia shishabi dashabi ahahhahaah </p>
      <button onClick={openModal}> open moadl</button>
      <Modal visible={visible}>
        <ul className="list">
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>

          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
          <li>apsdadasdasd</li>
        </ul>
      </Modal>
      <ul className="list">
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>

        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
        <li>apsdadasdasd</li>
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function test(obj: string | { [key: string]: any }) {
  console.log(obj);
}

test({ sub: "213" });

test({ otherKey: 12323 });
