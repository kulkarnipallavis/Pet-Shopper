import React from 'react';
import {connect} from 'react-redux';
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

/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    //this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  state = {
    stepIndex: 1,
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
          <p>
            {'Try out different ad text to see what brings in the most customers, and learn ' +
            'how to enhance your ads using features like ad extensions. If you run into any ' +
            'problems with your ads, find out how to tell if they\'re running and how to ' +
            'resolve approval issues.'}
          </p>
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
      console.log(e.target.expMonth)
      this.setState({
        billing: billingInput,
        payment: paymentInput,
        sameAddress: e.target.isSame.value
      });
    }
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
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

export default Checkout;