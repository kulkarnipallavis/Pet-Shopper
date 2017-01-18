import React from 'react';
import TextField from 'material-ui/TextField';

export default (props) => {
  return (
    <div>
      <div>
        <TextField
          name="firstName"
          hintText="First Name"
          defaultValue={props.address.firstName}
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="lastName"
          hintText="Last Name"
          defaultValue={props.address.lastName}
          required
          style={{margin: "10px"}}
        />
      </div>
      <div>
        <TextField
          name="address1"
          hintText="Address 1"
          defaultValue={props.address.address1}
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="address2"
          hintText="Address 2 (optional)"
          defaultValue={props.address.address2}
          style={{margin: "10px"}}
        />
      </div>
      <div>
        <TextField
          name="city"
          hintText="City"
          defaultValue={props.address.city}
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="zip"
          hintText="Zip Code"
          defaultValue={props.address.zip}
          required
          maxLength={5}
          style={{margin: "10px"}}
        />
      </div>
      <div>
        <TextField
          name="country"
          hintText="Country"
          defaultValue={props.address.country}
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="state"
          hintText="State"
          defaultValue={props.address.state}
          required
          style={{margin: "10px"}}
        />
      </div>
    </div>
  )
}