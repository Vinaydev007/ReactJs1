import React, { useState } from "react";
import MyVerticallyCenteredModal from "./modal";

export default function FormEvent() {
  const [modalShow, setModalShow] =useState(false);
  const [inp, setinp] = useState("");
  const [result, setResult] = useState("");
  const [output, setoutput] = useState({ user: "", mobile: "", email: "" });
  const Handlechange = (e) => {
    const { type, name, value } = e.target
    setoutput((prevval) => 
      ({ ...prevval, [name]: value })
    );
  };
  const Submithandler = (e) => {
    e.preventDefault();
    setModalShow(true)
  };
  return (<div>
    <form onSubmit={Submithandler}>
      <input
        type="text"
        name="user"
        value={output.user}
        onChange={Handlechange}
      ></input>
      <input
        type="tel"
        name="mobile"
        value={output.mobile}
        onChange={Handlechange}
      ></input>
      <input
        type="email"
        name="email"
        value={output.email}
        onChange={Handlechange}
      ></input>
      {/* <input type="t=-32" name="tel" value={}></input> */}
      <input type="submit" name="submit"></input>
      <h1>{result}</h1>
    </form>
    <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
    user={output.user}
    mobile={output.mobile}
    email={output.email}
  /></div>
  );
}
