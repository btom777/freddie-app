import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {search: ""}
  }
  handleChange(event) {
    this.setState({search: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
    this.getThatShit(this.state.search);
    this.setState({search: ""})
  }

  getThatShit(giphy) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=dc6zaTOxFJmzC`;
    console.log(url);

    axios.get(url)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => console.log('err', err));
  }

  render() {
    return (
      <div><NavBar
        show={false}
        handleChange={this.handleChange.bind(this)}
        search={this.state.search}
        handleSubmit={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}

export default Home;
