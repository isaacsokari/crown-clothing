const { default: ThemeActionType } = require('./theme.types');

export const toggleDarkMode = () => ({
  type: ThemeActionType.TOGGLE_DARK_MODE,
});
