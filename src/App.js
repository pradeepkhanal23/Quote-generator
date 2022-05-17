import React, { useState, useEffect } from "react";
import "./index.css";
import Quotes from "./Quotes";
import Loader from "./Loader";

const url = "https://type.fit/api/quotes";

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getQuotes = () => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      })
      .catch((err) => console.log(err));
  };

  function newQuote() {
    getQuotes();
    setLoading(false);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  if (loading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  return (
    <>
      <main>
        <Quotes quotes={quotes} newQuote={newQuote} />
      </main>
    </>
  );
};

export default App;
