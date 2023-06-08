import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random


  useEffect(() => {
    fetchNewQuote();
  },[]);

  const  fetchNewQuote = () => {
    axios.get("http://api.quotable.io/random")
     .then(res =>{
      setQuote(res.data.content)
      setAuthor(res.data.author)
     }).catch(err=>{
      console.log(err)
     })
  }

  return (
    <div className="App">
      <div className="quote">
        <h2>{quote}</h2>
        <small>-{author}-</small>
      </div>
      <br />
      <button className="btn" onClick={fetchNewQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export default App;
