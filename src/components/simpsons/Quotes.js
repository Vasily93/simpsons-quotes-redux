import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  console.log(quotes);
  
  const quoteElement = quotes.map(oneQuote => (
    <li key={oneQuote.quote}>
      <Quote oneQuote={oneQuote} />
    </li>
  ));

  return (
    <ul>{quoteElement}</ul>
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
