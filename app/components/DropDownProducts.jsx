import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

export default class DropDownProducts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      radio: 'name'
    };
  };



  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleItemTap = (event, child) => {
    event.preventDefault();
    event.stopPropagation();
  };
  handleClick = (event, child) => {
    event.preventDefault();
    event.stopPropagation();
  };
  handleRadioChange = (event, value) => {
    console.log(value);
    this.setState({
      radio: value
    });
  };

  render() {
    const style = {
      color: 'white'
    };

    return (
      <div>

  <IconMenu
    iconButtonElement={<IconButton iconStyle={style}><MenuIcon/></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
    onItemTouchTap={this.handleItemTap}
    touchTapCloseDelay={0}
  >
    <MenuItem value="Products" primaryText="Browse All Products" />
    <Divider />
    <MenuItem value="Clothing" primaryText="Clothing" />
    <MenuItem value="Food" primaryText="Food" />
    <MenuItem value="Accessories" primaryText="Accessories" />
    <Divider />
    <MenuItem
      children={[
          <TextField
            key={1}
            hintText="Hint Text"
            floatingLabelText="Floating Label Text"
          />,
          <RadioButtonGroup key={2} name="shipSpeed" defaultSelected="name" onChange={this.handleradioChange}>
            <RadioButton
              value="name"
              label="name"
            />
            <RadioButton
              value="tags"
              label="tags"
            />
          </RadioButtonGroup>
      ]
        }
      leftIcon={<Search />}
      value='search'
    />
  </IconMenu>
      </div>
    );
  }
}
