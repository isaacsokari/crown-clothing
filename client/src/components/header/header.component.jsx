import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { ReactComponent as MoonIcon } from '../../assets/moon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun.svg';

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
    <HeaderContainer as="header">
      <LogoContainer
        onClick={() => sessionStorage.removeItem('fromCheckout')}
        to="/"
      >
        <Logo />
      </LogoContainer>
      <OptionsContainer>
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
        <OptionLink
          as="div"
          style={{
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            color: `${isDarkMode ? 'white' : '#232B32'}`,
          }}
          onClick={() => {
            document.body.style.backgroundColor === 'white'
              ? document.body.setAttribute('style', 'background-color:#232B32')
              : document.body.setAttribute('style', 'background-color:white');
            toggleDarkMode();
          }}
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </OptionLink>
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
