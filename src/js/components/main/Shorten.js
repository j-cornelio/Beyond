import React, { Component } from 'react';

function ellipse(str, bool){
  if(bool){
    return str.slice(0, 200) + '...';
    } else {
    return str;
  }
}

class Shorten extends Component{
  constructor(props){
    super(props);

    this.state = {
      toggleText: true
    }
  }
  _showHide(str, length){
    this.setState({toggleText: !this.state.toggleText})
    console.log('show func: ', str, this.state.toggleText);

    ellipse(str, this.state.toggleText)
  }

	render(){
    var { str } = this.props;
   return (
      <span onClick={this._showHide.bind(this, str)}>
        {ellipse(str, str.length > 200)}
      </span>
    ) 
  }
}

export default Shorten;