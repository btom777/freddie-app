import React, {Component} from "react";
import NavBar from '../components/NavBar';
import axios from 'axios';


class Giphy extends Component {

  constructor (props){
      super(props);
      this.state = {
          search: ""
      }
  }

  handleSubmit(e){
      e.preventDefault();
      this.getThatShit(this.state.search);
      this.setState({search:""})

  }

  handleChange(e){
      this.setState({search: e.target.value});
  }

  getThatShit(giphy) {
    const url = "http://localhost:3001/nfl";
    const url2 = "http://api.fantasy.nfl.com/v1/players/stats?statType=weekStats&season=2016&week=6&position=QB&format=json"
    console.log(url2);

    // $.ajax({
    //   type: 'GET',
    //   url: url2
    // }).then(function(res){
    //   self.setState({
    //     response: res
    //   })
    //   console.log(res);
    // })
    var self = this;
    var stats = [];
    axios.get(url2)
    .then(function(res) {
      stats.push(res.data.players);
      self.setState({
        response: stats
      })
      console.log(stats);
    })
    .catch(err => console.log('err', err));
  }

  render() {
    var schedule = this.state.response;

    return (
      <div>
       	<div>
          <NavBar
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            show={true}
          />
        </div>

        <div id="stuff">
        {schedule[0].id}
        </div>
      </div>
    );
  }
}

export default Giphy
