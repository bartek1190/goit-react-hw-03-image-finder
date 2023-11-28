import { Component } from "react";
import PropTypes from "prop-types";
import css from "./Article.module.css";

class Article extends Component {
    render() {
        return (
            <a className={css.item} href={this.props.url}>
                <div>
                    <span className={css.bold}>Author: </span> {this.props.author}
                </div>
                <div>
                    <span className={css.bold}>Title: </span> {this.props.title}
                </div>
            </a>
        );
    }
}

Article.defaultProps = {
    author: "lack of data",
    title: "lack of data",
    url: "#",
};

Article.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default Article;
