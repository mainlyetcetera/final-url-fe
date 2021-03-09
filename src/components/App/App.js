import React, { Component } from 'react';
import './App.css';
import { getUrls, postUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.fetchUrls()
  }

  fetchUrls = () => {
    getUrls()
      .then(data => this.setState({
        urls: data.urls
      }))
      .catch(err => console.log('err', err))
  }

  postUrl = async data => {
    await postUrls(data)
      .then(response => this.setState({
        urls: [...this.state.urls, response]
      }))
      .catch(err => console.error(err))
  }
  
  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm postUrl={this.postUrl} fetchUrls={this.fetchUrls}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
