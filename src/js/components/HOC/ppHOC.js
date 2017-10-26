import React, { Component } from 'react';
import PropTypes 						from 'prop-types';

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
}
export default ppHOC;