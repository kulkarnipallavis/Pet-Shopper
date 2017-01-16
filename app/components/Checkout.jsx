import React from 'react';
import {connect} from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

/**
 * It is possible to specify your own step connector by passing an element to the `connector`
 * prop. If you want to remove the connector, pass `null` to the `connector` prop.
 */
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
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
      state: '',
      email: ''
    },
    billing: {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      zip: '',
      city: '',
      country: '',
      state: '',
      email: ''
    },
    payment: {
      creditCardNumber: '',
      expMonth: '',
      expYear: '',
      cvv: '',
      sameAddress: false
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0: // shipping
        return (
          <div>
            <div>
              <TextField
                hintText="First Name"
                style={{margin: "10px", width: "40%"}}
              />
              <TextField
                hintText="Last Name"
                style={{margin: "10px", width: "40%"}}
              />
            </div>
            <TextField
                hintText="Address 1"
                style={{marginLeft: "10px", width: "80%"}}
            />
            <TextField
                hintText="Address 2 (optional)"
                style={{margin: "10px", width: "100%"}}
            />
            <div>
              <TextField
                hintText="City"
                style={{margin: "10px"}}
              />
              <TextField
                hintText="Zip Code"
                style={{margin: "10px"}}
              />
            </div>
            <div>
              <TextField
                hintText="Country"
                style={{margin: "10px"}}
              />
              <TextField
                hintText="State"
                style={{margin: "10px"}}
              />
            </div>
          </div>
        );

      case 1: // payment
        return (
          <div>

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

  handleNext() {
    const {stepIndex} = this.state;

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
      <div style={{width: '100%', maxWidth: 700, margin: 'auto', fontFamily : "Roboto, sans-serif"}}>
        <RaisedButton
            label='Back to Cart'
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

        {this.getStepContent(stepIndex)}

        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onTouchTap={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
        </Paper>
      </div>
    );
  }
}

export default Checkout;