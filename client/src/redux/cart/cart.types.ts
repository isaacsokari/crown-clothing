const CartActions = Object.freeze({
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  UPDATE_CART_IN_FIREBASE: 'UPDATE_CART_IN_FIREBASE',
  SET_CART_FROM_FIREBASE: 'SET_CART_FROM_FIREBASE',
});

export type TCartActionsMap = typeof CartActions;
export type TCartActionTypes = TCartActionsMap[keyof TCartActionsMap];

export default CartActions;
