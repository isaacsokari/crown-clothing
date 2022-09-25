import { createSelector } from 'reselect';

const theme = (state) => state.theme;

const selectTheme = createSelector([theme], (theme) => theme.isDarkMode);

export default selectTheme;
