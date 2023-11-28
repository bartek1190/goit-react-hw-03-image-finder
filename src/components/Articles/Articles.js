import { Component } from "react";
import PropTypes from "prop-types";

import Article from "../Article/Article";

class Articles extends Component {
    render() {
        return <div>
            {
                this.props.data
                    .map(article => <Article key={article.objectID} author={article.author} title={article.title} url={article.url}/>)
            }
        </div>
    }
}

Articles.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Articles;
