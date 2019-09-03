import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quotes from '../components/simpsons/Quotes';
import { fetchQuotes } from '../actions/simpsonsQuotesActions';
import { getQuotes, getQuotesLoading } from '../selectors/simpsonsQuotesSelectors';

class AllQuotes extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quotes, loading } = this.props;
    if(loading) return <h2>LOADING</h2>;

    return <Quotes quotes={quotes} />;
  }
}

const mapStateToProps = state => ({
  quotes: getQuotes(state),
  loading: getQuotesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllQuotes);
