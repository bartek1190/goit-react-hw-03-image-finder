import { Component } from "react";
import css from "./Loader.module.css";
import ContentLoader from 'react-content-loader';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.rowNo = 10;
    }
    render() {
        return (
            <ContentLoader className={css["content-loader"]}>
                {
                    new Array(this.rowNo)
                        .fill()
                        .map((el, index) => (
                            <rect key={index} x="0" y={10 + 50*index} rx="4" ry="4" width="100%" height="20" />
                        ))
                }
                
                {/* <rect x="0" y="60" rx="3" ry="3" width="100%" height="20" />
                <rect x="0" y="110" rx="3" ry="3" width="100%" height="20" />
                <rect x="0" y="160" rx="3" ry="3" width="100%" height="20" />
                <rect x="0" y="210" rx="3" ry="3" width="100%" height="20" /> */}
            </ContentLoader>
        )
        // return <div className={css.loader}>Loading ...</div>;
    }
}

export default Loader;
