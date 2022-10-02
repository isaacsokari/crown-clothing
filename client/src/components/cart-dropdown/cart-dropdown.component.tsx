import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyCartMessageContainer,
} from './cart-dropdown.styles';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartItemType } from '../collection-item/collection-item.component';
import { Dispatch } from 'redux';

type CartDropdownProps = {
  cartItems: CartItemType[];
  history: any;
  dispatch: Dispatch;
};

const CartDropdown = ({ cartItems, history, dispatch }: CartDropdownProps) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyCartMessageContainer>
          Your cart is empty
        </EmptyCartMessageContainer>
      )}
    </CartItemsContainer>
    <CustomButton
      onClick={() => {
        dispatch(toggleCartHidden());
        history.push('/checkout');
      }}>
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
