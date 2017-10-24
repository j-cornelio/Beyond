import React, { Component } from 'react';

function ellipse(str, length){
  if(length > 200){
    return str.slice(0, 200) + '...';
    } else {
    return str;
  }
}

class Shorten extends Component{
  _show(str, length){
    console.log(str, length)
  }

	render(){
    var { str } = this.props;
   return (
      <span onClick={this._show.bind(null, str, str.length)}>
        {ellipse(str, str.length)}
      </span>
    ) 
  }
}

export default Shorten;