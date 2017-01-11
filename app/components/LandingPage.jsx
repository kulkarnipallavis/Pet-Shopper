import React, { Component } from 'react';
import ProductNavigation from './ProductNavigation';
import NavBar from './NavBar';

export default class LandingPage extends Component {

  constructor(props) {
    super(props)
  }

  render() {
  	return (
  		<div>
				<NavBar/>
	  		<div id="container" style={{'backgroundImage': 'url(images/backgroundimage.jpg)', backgroundRepeat: 'repeat'}}>
	  			<img src="/images/banner.jpeg" style={{'display': 'block', 'margin': 'auto'}}/>
					<ProductNavigation />
	  		</div>

  		</div>

  	)

}

}