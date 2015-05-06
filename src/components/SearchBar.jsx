import React from 'react';

import AppActions from '../actions/AppActions.jsx';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div className="bar bar-standard bar-header-secondary">
        <input type="search" ref="searchKey" onChange={this._searchHandler.bind(this)} value={this.props.searchKey} />
      </div>
    );
  }
  
  _searchHandler() {
    this.props.searchHandler(React.findDOMNode(this.refs.searchKey).value);
  }
};