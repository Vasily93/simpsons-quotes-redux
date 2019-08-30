import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <div>
      <p>{quote.quote}</p>
      <p>{quote.image}</p>
      <p>{quote.name}</p>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    quote: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string
  })
};

export default Quote;
