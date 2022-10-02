import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import { getUserCartRef } from '../../firebase/firebase.utils';

import userActionTypes from '../user/user.types';
import { selectCurrentUser } from '../user/user.selectors';
import { clearCart, setCartFromFirebase } from './cart.actions';
import { selectCartItems } from './cart.selectors';
import CartActions from './cart.types';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();

  const cartItemsFromFirebase = yield cartSnapshot.data().cartItems;

  yield put(setCartFromFirebase(cartItemsFromFirebase));
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(userActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
}
export function* onCartChange() {
  yield takeLatest(
    [
      CartActions.ADD_ITEM,
      CartActions.CLEAR_ITEM_FROM_CART,
      CartActions.REMOVE_ITEM,
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onUserSignIn), call(onCartChange)]);
}
