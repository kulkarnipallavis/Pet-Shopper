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
      checked: false,
      month: 1,
      year: 2017
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  handleCheck(event, isChecked) {
    this.setState({checked: isChecked});
  }

  handleMonth(event, index, value) {
    console.log(value)
    this.setState({month: value});
  }

  handleYear(event, index, value) {
    this.setState({year: value});
  }

  render() {
    return (
      <div>
        <div>
          <TextField
            name="creditCardNumber"
            hintText="Credit Card Number"
            required
            style={{margin: "10px", width:"65%"}}
          />
        </div>
        <div style={{display: "block"}}>
          <DropDownMenu name="expMonth" value={this.state.month} onChange={this.handleMonth}>
            <MenuItem value={1} primaryText="Jan" />
            <MenuItem value={2} primaryText="Feb" />
            <MenuItem value={3} primaryText="Mar" />
            <MenuItem value={4} primaryText="Apr" />
            <MenuItem value={5} primaryText="May" />
            <MenuItem value={6} primaryText="Jun" />
            <MenuItem value={7} primaryText="Jul" />
            <MenuItem value={8} primaryText="Aug" />
            <MenuItem value={9} primaryText="Sep" />
            <MenuItem value={10} primaryText="Oct" />
            <MenuItem value={11} primaryText="Nov" />
            <MenuItem value={12} primaryText="Dec" />
          </DropDownMenu>
          <DropDownMenu name="expYear" value={this.state.year} onChange={this.handleYear}>
            <MenuItem value={2017} primaryText="2017" />
            <MenuItem value={2018} primaryText="2018" />
            <MenuItem value={2019} primaryText="2019" />
            <MenuItem value={2020} primaryText="2020" />
            <MenuItem value={2021} primaryText="2021" />
            <MenuItem value={2022} primaryText="2022" />
            <MenuItem value={2023} primaryText="2023" />
          </DropDownMenu>
          <TextField
            name="cvv"
            hintText="CVV"
            maxLength="3"
            style={{marginBottom: "4px", marginLeft: "20px", verticalAlign: "bottom", width: "20%"}}
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