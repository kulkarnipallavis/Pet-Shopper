import React, { Component } from 'react';
import ProductNavigation from './ProductNavigation';

export default class LandingPage extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<div>
	  		<div id="container" style={{'backgroundColor': 'gray'}}>
	  			<img src="/images/banner.jpeg" style={{'display': 'block', 'margin': 'auto'}}/>
	  		</div>
	  		<ProductNavigation />
  		</div>

  	)

}

}