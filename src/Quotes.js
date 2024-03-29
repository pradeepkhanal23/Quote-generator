import React from "react";
// import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Quotes = ({ quotes, newQuote }) => {
  return (
    <>
      <section>
        <div className="quote-container">
          <div className="quote-text">
            <FaQuoteLeft className="fa-quote-left" />
            <span>{quotes.text}</span>
            <div className="quote-author">
              <span>- {quotes.author || "Unknown"}</span>
            </div>
            <div className="btn-container">
              <a
                href={`https://twitter.com/intent/tweet?text=${quotes.text} - ${quotes.author}`}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="twitter-button"
                  id="twitter"
                  title="Tweet This"
                >
                  <TiSocialTwitter className="twitter-icon" />
                </button>
              </a>

              <button onClick={newQuote} className="new-quote-btn">
                New Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Quotes.propTypes = {
//   text: PropTypes.string,
//   author: PropTypes.string,
// };

// Quotes.defaultProps = {
//   author: "Unknown",
//   text: "Where there is a will, there is a way",
// };

export default Quotes;
