import React from 'react';
import {connect} from 'react-redux';
import {browserHistory, Link} from 'react-router';
import NavBar from './NavBar';
import AddressForm from './AddressForm';
import CardForm from './CardForm';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {completeOrder} from '../reducers/cart'

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // set order complete (in db), and clear session.order, cart.products, cart.total
    dispatchCompleteOrder: function() {
      dispatch(completeOrder());
    }
  }
}


class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.handlePrev = this.handlePrev.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  state = {
    stepIndex: 0,
    shipping: {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      zip: '',
      city: '',
      country: '',
      state: ''
    },
    billing: {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      zip: '',
      city: '',
      country: '',
      state: ''
    },
    payment: {
      creditCardNumber: '',
      expMonth: '',
      expYear: '',
      cvv: '',
    },
    sameAddress: false
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0: // shipping
        return (
          <AddressForm/>
        );

      case 1: // payment
        return (
          <div>
            <CardForm/>
          </div>
        );

      case 2: // review
        return (
          <div>
            <div>
              <h3>Order</h3>
                <div style={{marginLeft: "20px"}}><b>Total: </b>${this.props.cart.total}</div>
              {this.props.cart.products.map(product => (
                <div key={product.id} style={{marginLeft: "20px"}}>{product.name}</div>
              ))}
            </div>
            <div>
              <h3>Shipping</h3>
              {Object.keys(this.state.shipping).map(key => (
                <div key={key} style={{marginLeft: "20px"}}><b>{key}: </b>{this.state.shipping[key]}</div>
              ))}
            </div>
            <div>
              <h3>Payment</h3>
                {Object.keys(this.state.payment).map(key => (
                <div key={key} style={{marginLeft: "20px"}}><b>{key}: </b>{this.state.payment[key]}</div>
                ))}
            </div>
            <div>
              <h3>Billing</h3>
                {
                  (this.state.sameAddress)
                  ? <div style={{marginLeft: "20px"}}>Same as shipping address.</div>
                  : Object.keys(this.state.billing).map(key => (
                <div key={key} style={{marginLeft: "20px"}}><b>{key}: </b>{this.state.billing[key]}</div>
                    ))
                }
            </div>
            <div>
              <h3>Send Receipt to</h3>
              <TextField
                type="email"
                name="email"
                hintText="Email"
                required
                style={{marginLeft: "20px", width:"65%"}}
              />
            </div>
          </div>
        );
    }
  }

  handleSumbit(e) {
    e.preventDefault();
    const {stepIndex} = this.state;
    if (stepIndex === 0) {
      const shippingInput = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        address1: e.target.address1.value,
        address2: e.target.address2.value,
        zip: e.target.zip.value,
        city: e.target.city.value,
        country: e.target.country.value,
        state: e.target.state.value
      };
      this.setState({
        shipping: shippingInput
      });
    }
    if (stepIndex === 1) {
      const billingInput = (e.target.isSame.value) ? this.state.shipping
        : {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            address1: e.target.address1.value,
            address2: e.target.address2.value,
            zip: e.target.zip.value,
            city: e.target.city.value,
            country: e.target.country.value,
            state: e.target.state.value
          };
      const paymentInput = {
        creditCardNumber: e.target.creditCardNumber.value,
        expMonth: e.target.expMonth.value,
        expYear: e.target.expYear.value,
        cvv: e.target.cvv.value
      };
      this.setState({
        billing: billingInput,
        payment: paymentInput,
        sameAddress: e.target.isSame.value
      });
    }
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
    if (stepIndex === 2) {
      this.props.dispatchCompleteOrder();
      browserHistory.push("/");
    }
  }

  handlePrev() {
    const {stepIndex} = this.state;

    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }

  render() {
    const {stepIndex} = this.state;
    return (
      <div>
        <NavBar/>
        <div style={{width: '100%', maxWidth: 700, margin: 'auto', fontFamily : "Roboto, sans-serif"}}>
          <RaisedButton
              label='Back to Cart'
              href="/cart"
              icon={<FontIcon><ChevronLeft/></FontIcon>}
              style={{margin: "10px"}}
          />
          <Paper zDepth={2} style={{padding: "20px", margin: "10px"}}>
          <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
            <Step>
              <StepLabel>Shipping Info</StepLabel>
            </Step>

            <Step>
              <StepLabel>Payment Method</StepLabel>
            </Step>

            <Step>
              <StepLabel>Review</StepLabel>
            </Step>
          </Stepper>

          <form onSubmit={this.handleSumbit}>
          {this.getStepContent(stepIndex)}

          <div style={{marginTop: 24, marginBottom: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              type="submit"
              label={stepIndex === 2 ? 'Finish' : 'Next'}
              primary={true}
            />
          </div>
          </form>
          </Paper>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);