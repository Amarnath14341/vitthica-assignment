import axios from 'axios';
import React, { Component } from 'react';
import Display from './Display';
import Login1 from './app1';
// import AddInfo from './AddInfo';

class App extends Component {
  state = {
    post: [],
    newUser: {}
  }

  componentDidMount = () => {
    axios.get('http://3.6.93.159:7883/machstatz/get_all_users').then(res => {
      console.log(res.data);
      this.setState({
        post: res.data
      })
    }).catch(error => {
      console.log(error);
    });

     axios.post('http://3.6.93.159:7883/machstatz/get_all_users', this.state.newUser)
       .then(res => this.setState({ id: res.data._id })
       )
     .catch(function (error) {
        console.log(error);
       });

  }
    

   addData = (prop) => {
     let newUser = { ...this.state.post, prop, id: 'X-12' };
   this.setState({
    newUser
   })
  
   }
  

  render() {
    return (
      <div>
        {/*<AddInfo addData={this.addData} />*/}
        <Display post={this.state.post} />
      </div>
    )
  }
}

export default App;
