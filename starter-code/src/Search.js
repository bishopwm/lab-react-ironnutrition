import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Search.css';

class Search extends Component {

    render() {
        return (
            <div>
				<input onChange={this.props.search} type="text" placeholder="Search..."/>
            </div>
        );
    }
}

export default Search;