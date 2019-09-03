export const getQuotes = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) throw 'unable to get quotes';

      return res.json();
    });
};
