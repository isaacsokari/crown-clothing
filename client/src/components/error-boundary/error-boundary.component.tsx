import React, { ErrorInfo } from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component<{ children: JSX.Element }> {
  state = { hasErrored: false };

  static getDerivedStateFromError(error: Error) {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer
            imageUrl={require('../../assets/broken-clock.png')}
          />
          <ErrorImageText>Sorry, this page is broken!</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
