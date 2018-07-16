import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeathers } from '../actions';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: '',
    }
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchWeathers(this.state.term);
    this.setState({
      term: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeathers }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
