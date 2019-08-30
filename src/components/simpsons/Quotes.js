import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteElement = quotes.map(quote => (
    <li key={quote.name}>
      <Quote quote={Quote} />
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
    name: PropTypes.string
  }))
};

export default Quotes;
