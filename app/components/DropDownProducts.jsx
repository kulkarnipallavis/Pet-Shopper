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
      searchType: 'name'
    };
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOpenMenu = this.handleOpenMenu.bind(this);
  };

  handleSubmit(value) {
    event.preventDefault();
    browserHistory.push('/products');
  };

  handleRadioChange(event, value) {
    this.setState({
      searchType: value
    });
  };

  handleClick(event, child) {
    console.log(child.props.value)
    if (child.props.value !== "search") this.setState({
      openMenu: false,
    });
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

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
          touchTapCloseDelay={0}
          onItemTouchTap={this.handleClick}
          open={this.state.openMenu}
          onTouchTap={this.handleOpenMenu}
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
                name={this.state.searchType}
                key={1}
                hintText="Search products"
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
