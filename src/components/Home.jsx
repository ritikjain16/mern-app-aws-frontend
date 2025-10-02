import React, { useEffect, useState } from "react";
import myAxios from "../axiosConfig";
const Home = () => {
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
      <h1>
        Hello15 We are HR16 Ritik Jain and Harsha Khadgi learning devops16
      </h1>
      <h2>1. {msg}</h2>
      <h2>2. {msg}</h2>
      <h2>3. {msg}</h2>
    </div>
  );
};

export default Home;
