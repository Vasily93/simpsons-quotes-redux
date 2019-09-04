import React from 'react';
import PropTypes from 'prop-types';

function Quote({ oneQuote }) {
  return (
    <div>
      <img src={oneQuote.image}/>
      <p>{oneQuote.quote}</p>
      <p>{oneQuote.character}</p>
    </div>
  );
}

Quote.propTypes = {
  oneQuote: PropTypes.shape({
    quote: PropTypes.string,
    image: PropTypes.string,
    character: PropTypes.string
  })
};

export default Quote;
