import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/api")
      .then(response => {
        setMessage(response.data.content);
      })
      .catch(error => {
        console.error(error);
        setMessage("Erreur de connexion au backend");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React ↔ Spring Boot</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
