import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./components/modal";
import * as serviceWorker from "./serviceWorker";

const App = () => {
  const [visible, setVisble] = useState<boolean>(false);
  const openModal = () => {
    setVisble(!visible);
  };
  return (
    <div>
      <p>测试提交 </p>
      <button onClick={openModal}> open moadl</button>
      <Modal visible={visible}>
        <div>123</div>
      </Modal>
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
