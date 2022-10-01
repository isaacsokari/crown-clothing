import userActionTypes, { TUserActionValues } from './user.types';

type ActionCreator = <Payload>(payload?: Payload) => {
  type: TUserActionValues;
  payload?: Payload;
};

export const googleSignInStart: ActionCreator = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

export const signInSuccess: ActionCreator = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure: ActionCreator = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const emailSignInStart: ActionCreator = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const checkUserSession: ActionCreator = () => ({
  type: userActionTypes.CHECK_USER_SESSION,
});

export const signOutStart: ActionCreator = () => ({
  type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess: ActionCreator = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS,
});

export const signOutFailure: ActionCreator = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart: ActionCreator = (userData) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userData,
});

// export const signUpSuccess = ({
//   user,
//   additionalData,
// }: {
//   user: Record<string, any>;
//   additionalData: Record<string, any>[];
// }) => ({
//   type: userActionTypes.SIGN_UP_SUCCESS,
//   payload: { user, additionalData },
// });

export const signUpSuccess: ActionCreator = (data) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpFailure: ActionCreator = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error,
});
