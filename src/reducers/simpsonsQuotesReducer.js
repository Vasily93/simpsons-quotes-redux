import { FETCH_QUOTES, FETCH_QUOTES_LOADING } from '../actions/simpsonsQuotesActions';


const initialState = {
  quotes: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTES:
      return { ...state, quotes: action.payload, loading: false };
    default:
      return state;
  }
}
