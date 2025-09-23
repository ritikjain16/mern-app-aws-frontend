import React, { useEffect, useState } from "react";
import "./App.css";
import myAxios from "./axiosConfig";
const App = () => {
  const [msg, setMsg] = useState("");

  const fetchBackend = async () => {
    try {
      const res = await myAxios.get("/hi");
      setMsg(res.data.msg);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBackend();
  }, []);

  return (
    <div>
      <h1>Hello I am Ritik Jain learning devops</h1>
      <h2>{msg}</h2>
      <h2>{msg}</h2>
      <h2>{msg}</h2>
    </div>
  );
};

export default App;
