export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
    .then(res => {
      if(!res.ok) throw 'unable to get quotes';

      return res.json();
    });
};
