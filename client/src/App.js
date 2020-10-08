import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ThemeProvider } from 'styled-components';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import GlobalStyle from './global.styles';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import selectTheme from './redux/theme/theme.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInSignUpPage = lazy(() =>
  import('./pages/signin-signup/signin-signup.component')
);
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ currentUser, checkUserSession, isDarkMode }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  useEffect(() => {
    isDarkMode
      ? document.body.setAttribute('style', 'background-color:#232B32')
      : document.body.setAttribute('style', 'background-color:white');
  }, [isDarkMode]);

  return (
    <div>
      <ThemeProvider theme={isDarkMode === true ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isDarkMode: selectTheme,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
