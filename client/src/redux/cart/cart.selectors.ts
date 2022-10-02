import { createSelector } from 'reselect';
import { CartItemType } from '../../components/collection-item/collection-item.component';
import { RootState } from '../store';

const selectCart = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems: CartItemType[]) =>
    cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: CartItemType[]) =>
    cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity * cartItem.price;
    }, 0)
);
