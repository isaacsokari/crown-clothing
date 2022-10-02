import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from '../../redux/cart/cart.actions';
import { CartItemType } from '../collection-item/collection-item.component';

import { CheckoutItemContainer } from './checkout.styles';

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
}: ReturnType<typeof mapDispatchToProps> & {
  cartItem: CartItemType;
}): React.ReactElement => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: CartItemType) => dispatch(clearItemFromCart(item)),
  addItem: (item: CartItemType) => dispatch(addItem(item)),
  removeItem: (item: CartItemType) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
