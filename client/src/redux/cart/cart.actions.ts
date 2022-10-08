import { CartItemType } from '../../components/collection-item/collection-item.component';
import CartActions, { TCartActionsMap } from './cart.types';

type TypesWithoutPayload =
  | TCartActionsMap['TOGGLE_CART_HIDDEN']
  | TCartActionsMap['CLEAR_CART'];

type ActionWithoutPayload = () => {
  type: TypesWithoutPayload;
};

export const toggleCartHidden: ActionWithoutPayload = () =>
  ({
    type: CartActions.TOGGLE_CART_HIDDEN,
  } as const);

export const addItem = (item: CartItemType) =>
  ({
    type: CartActions.ADD_ITEM,
    payload: item,
  } as const);

export const removeItem = (item: CartItemType) =>
  ({
    type: CartActions.REMOVE_ITEM,
    payload: item,
  } as const);

export const clearItemFromCart = (item: CartItemType) =>
  ({
    type: CartActions.CLEAR_ITEM_FROM_CART,
    payload: item,
  } as const);

export const clearCart = () =>
  ({
    type: CartActions.CLEAR_CART,
  } as const);

export const setCartFromFirebase = (cartItems: CartItemType[]) =>
  ({
    type: CartActions.SET_CART_FROM_FIREBASE,
    payload: cartItems,
  } as const);

export const updateCartInFirebase = (payload: CartItemType[]) =>
  ({
    type: CartActions.UPDATE_CART_IN_FIREBASE,
    payload,
  } as const);
