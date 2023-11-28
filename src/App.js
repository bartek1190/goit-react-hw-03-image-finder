import { Component } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Articles from './components/Articles/Articles';
import Loader from './components/Loader/Loader';

import { default as getAllItemsHackerNews } from './services/hackerNewsAPI';

import './App.css';

const DEFAULT_QUERY = 'react';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    errorMsg: '',
  };

  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData(DEFAULT_QUERY);
  }

  async fetchData(query) {
    try {
      this.setState({ isLoading: true, articles: [], errorMsg: '' });
      const articles = await getAllItemsHackerNews(query);
      this.setState({ articles });
    } catch (err) {
      this.setState({ errorMsg: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar handleSearch={this.fetchData} placeholder={DEFAULT_QUERY} />
        {this.state.isLoading && <Loader />}
        {this.state.errorMsg && (
          <div className="error">{this.state.errorMsg}</div>
        )}
        {!this.state.errorMsg && <Articles data={this.state.articles} />}
      </div>
    );
  }
}

export default App;
