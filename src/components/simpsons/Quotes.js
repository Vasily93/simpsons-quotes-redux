import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  
  const quoteElement = quotes.map(oneQuote => (
    <li key={oneQuote.quote}>
      <Quote oneQuote={oneQuote} />
    </li>
  ));

  function refreshPage(){
    window.location.reload();
  } 

  return (
    <>
      <ul>{quoteElement}</ul>
      <button onClick={refreshPage}>Get Random Quote</button>
    </>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string,
    image: PropTypes.string,
    character: PropTypes.string
  }))
};

export default Quotes;
