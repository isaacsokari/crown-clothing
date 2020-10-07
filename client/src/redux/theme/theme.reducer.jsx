import ThemeActionType from './theme.types';

const INITIAL_STATE = {
  isDarkMode: true,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionType.TOGGLE_DARK_MODE:
      return { isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export default themeReducer;
