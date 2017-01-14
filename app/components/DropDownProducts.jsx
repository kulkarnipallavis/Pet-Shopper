import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Search from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {browserHistory, Link} from 'react-router';

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
  };
  handleClick = (event, child) => {
    event.preventDefault();
    event.stopPropagation();
  };

  handleSubmit = (value) => {
    event.preventDefault();
    browserHistory.push('/products');
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
          <MenuItem value="Products" primaryText="Browse All Products" containerElement={<Link to="/products" />}/>
          <Divider />
          <MenuItem value="Clothing" primaryText="Clothing" containerElement={<Link to="/products/categories/1" />}/>
          <MenuItem value="Food" primaryText="Food" containerElement={<Link to="/products/categories/2" />}/>
          <MenuItem value="Accessories" primaryText="Accessories" containerElement={<Link to="/products/categories/3" />}/>
          <Divider />
          <MenuItem
            primaryText={[
                <form onSubmit={this.handleSubmit} key="search">
                <TextField
                  name={this.state.radio}
                  key={1}
                  hintText="Search"
                  style={{width: '100%'}}
                />
                </form>,
                <RadioButtonGroup
                  key={2}
                  name="shipSpeed"
                  labelPosition="left"
                  defaultSelected="name"
                  onChange={this.handleRadioChange}
                  style={{width: '150px'}}
                >
                  <RadioButton
                    value="name"
                    label="by name"
                  />
                  <RadioButton
                    value="tags"
                    label="by tags"
                  />
                </RadioButtonGroup>
            ]}

            leftIcon={<Search />}
            value='search'
          />
        </IconMenu>
      </div>
    );
  }
}
