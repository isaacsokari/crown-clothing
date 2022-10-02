import { CartItemType } from '../../components/collection-item/collection-item.component';
import CartActions from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

type CartActionModule = typeof import('./cart.actions');
type CartActionsFromCreators = ReturnType<
  CartActionModule[keyof CartActionModule]
>;

type CartState = { hidden: boolean; cartItems: CartItemType[] };
const INITIAL_STATE: CartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state = INITIAL_STATE,
  action: CartActionsFromCreators
) => {
  switch (action.type) {
    case CartActions.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload as CartItemType
        ),
      };
    case CartActions.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(
          state.cartItems,
          action.payload as CartItemType
        ),
      };
    case CartActions.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== (action.payload as CartItemType).id
        ),
      };
    case CartActions.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActions.SET_CART_FROM_FIREBASE:
      return {
        ...state,
        cartItems: action.payload as CartItemType[],
      };
    default:
      return state;
  }
};

export default cartReducer;
