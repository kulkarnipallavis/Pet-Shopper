import React from 'react';
import TextField from 'material-ui/TextField';

export default () => (
    <div>
      <div>
        <TextField
          name="firstName"
          hintText="First Name"
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="lastName"
          hintText="Last Name"
          required
          style={{margin: "10px"}}
        />
      </div>
      <div>
        <TextField
          name="address1"
          hintText="Address 1"
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="address2"
          hintText="Address 2 (optional)"
          style={{margin: "10px"}}
        />
      </div>
      <div>
        <TextField
          name="city"
          hintText="City"
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="zip"
          hintText="Zip Code"
          required
          style={{margin: "10px"}}
        />
      </div>
      <div>
        <TextField
          name="country"
          hintText="Country"
          required
          style={{margin: "10px"}}
        />
        <TextField
          name="state"
          hintText="State"
          required
          style={{margin: "10px"}}
        />
      </div>
    </div>
)