import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';
import { toggleDarkMode } from '../../redux/theme/theme.actions';
import selectTheme from '../../redux/theme/theme.selectors';

const Header = ({
  currentUser,
  hidden,
  signOutStart,
  toggleDarkMode,
  isDarkMode,
}) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <div
          style={{ color: `${isDarkMode ? 'white' : 'black'}` }}
          onClick={() => {
            document.body.style.backgroundColor === 'black'
              ? document.body.setAttribute('style', 'background-color:white')
              : document.body.setAttribute('style', 'background-color:black');
            toggleDarkMode();
          }}
        >
          Toggle
        </div>
        <OptionLink to="/shop">SHOP</OptionLink>
        {/* <OptionLink to="/contact">CONTACT</OptionLink> */}
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  isDarkMode: selectTheme,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  toggleDarkMode: () => dispatch(toggleDarkMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
