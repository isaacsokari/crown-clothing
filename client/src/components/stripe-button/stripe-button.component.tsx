import React, { ComponentType } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import axios from 'axios';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { clearCart } from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button.component';
import { Dispatch } from 'redux';

type StripeCheckoutButtonProps = {
  price: number;
  history: any;
} & (ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>);

const StripeCheckoutButton = ({
  price,
  clearCart,
  currentUser,
  history,
}: StripeCheckoutButtonProps) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HSmsmFTfspbHEo5XdP0XJa8CYRQECWVexRbYVKBlHqi0TXe0jcIGJt5r5wgEeBWWamVRdGQuB8n60NxJ2KB2Dxl00wqAnEzA9';

  const onToken = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          clearCart();
        }
        alert('Payment Successful');
      })
      .catch((error: string) => {
        console.log(`Payment Error: ${JSON.parse(error)}`);
        alert(
          'There was an issue with your payment, please make sure you use the provided test card.'
        );
      });
  };

  sessionStorage.removeItem('fromCheckout');

  return currentUser ? (
    <StripeCheckout
      label="Pay Now"
      name="My Shop"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  ) : (
    <CustomButton
      onClick={() => {
        sessionStorage.setItem('fromCheckout', JSON.stringify(true));
        history.push('/signin');
      }}>
      SIGN IN TO PAY
    </CustomButton>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withRouter(
    StripeCheckoutButton as unknown as ComponentType<
      RouteComponentProps<any, {}, unknown> & StripeCheckoutButtonProps
    >
  )
);
