import { useState } from "react";
import { CircleLoader } from "react-spinners";
import "./Quotes.css";

const Quotes = () => {
  const [quotes, setQuote] = useState(null);
  const [loader, setLoader] = useState(null);

  const handleQuote = async (e) => {
    e.preventDefault;

    try {
      const api_url = "https://api.adviceslip.com/advice";
      const response = await fetch(api_url);
      setLoader(true);
      const result = await response.json();
      console.log(result.slip.advice);
      setQuote(result.slip.advice);
      setLoader(false);
    } catch (error) {
      setQuote("There was an error");
    }
  };

  return (
    <section className="container">
      <div className="quotes-maintitle">
      <h1 className="maintitle">Quote Generator</h1>
      <div className="container-items">
        <h1>{quotes}</h1>
        <h1>{loader && <CircleLoader color="red" size={50} />}</h1>
        <div className="btn"><button type="button" onClick={handleQuote}>
          Generate a quote
        </button>
        </div>
        
      </div>
      
      </div>
    </section>
  );
};
export default Quotes;
