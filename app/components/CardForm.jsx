import React from 'react';
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import AddressForm from './AddressForm';
import Checkbox from 'material-ui/Checkbox';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default (props) => (
  <div>
    <div>
      <TextField
        name="creditCardNumber"
        hintText="Credit Card Number"
        defaultValue={props.payment.creditCardNumber}
        required
        maxLength={16}
        style={{margin: "10px", width:"65%"}}
      />
    </div>
    <div style={{display: "block"}}>
      <TextField
        name="expMonth"
        hintText="Month (e.g., Jan)"
        defaultValue={props.payment.expMonth}
        required
        maxLength={3}
        style={{margin: "10px", width:"30%"}}
      />
      <TextField
        name="expYear"
        hintText="Year (e.g., 2017)"
        defaultValue={props.payment.expYear}
        required
        maxLength={4}
        style={{margin: "10px", width:"30%"}}
      />
      <TextField
        name="cvv"
        hintText="CVV"
        defaultValue={props.payment.cvv}
        maxLength="3"
        style={{margin: "10px", width: "25%"}}
      />
    </div>
    <div>
        <Checkbox
        name="isSame"
        defaultChecked={props.same}
        onCheck={props.handleCheck}
        label="Billing address same as shipping?"
      />
    </div>
    {(!props.same)
    ? (<div>
      <AddressForm address={props.address}/>
    </div>)
    : null
    }
  </div>
)