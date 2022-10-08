import { AnyAction } from 'redux';
import userActionTypes from './user.types';

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
