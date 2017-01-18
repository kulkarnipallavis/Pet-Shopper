import React from 'react';
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import AddressForm from './AddressForm';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class CardForm extends React.Component {
  constructor() {
    super();

    this.state = {
      checked: false
    }
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(event, isChecked) {
    this.setState({checked: isChecked});
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            name="creditCardNumber"
            hintText="Credit Card Number"
            required
            maxLength={16}
            style={{margin: "10px", width:"65%"}}
          />
        </div>
        <div style={{display: "block"}}>
          <TextField
            name="expMonth"
            hintText="Month (e.g., Jan)"
            required
            maxLength={3}
            style={{margin: "10px", width:"30%"}}
          />
          <TextField
            name="expYear"
            hintText="Year (e.g., 2017)"
            required
            maxLength={4}
            style={{margin: "10px", width:"30%"}}
          />
          <TextField
            name="cvv"
            hintText="CVV"
            maxLength="3"
            style={{margin: "10px", width: "25%"}}
          />
        </div>
        <div>
            <Checkbox
            name="isSame"
            value={this.state.checked}
            onCheck={this.handleCheck}
            label="Billing address same as shipping?"
          />
        </div>
        {(!this.state.checked)
        ? (<div>
          <AddressForm/>
        </div>)
        : null
        }
      </div>
    )
  }
}

export default connect()(CardForm);
