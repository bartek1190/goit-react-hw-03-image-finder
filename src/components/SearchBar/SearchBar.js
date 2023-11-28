import { Component } from "react";
import PropTypes from "prop-types";

import css from "./SearchBar.module.css";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    handleKeyUp(event) {
        if (event.code === "Enter") {
            this.props.handleSearch(event.target.value);
        }
    }
    render() {
        debugger;
        return  <input className={css.query} placeholder={this.props.placeholder} onKeyUp={this.handleKeyUp}/>
    }
}

SearchBar.propTypes ={
    placeholder: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
