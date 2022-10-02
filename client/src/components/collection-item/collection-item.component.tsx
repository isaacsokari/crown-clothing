import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer } from './collection-item.styles';
import { Dispatch } from 'redux';

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type TCollectionItemProps = {
  item: CartItemType;
};

const CollectionItem = ({
  item,
  addItem,
}: TCollectionItemProps &
  ReturnType<typeof mapDispatchToProps>): React.ReactElement => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        className="custom-button"
        onClick={() => addItem(item)}
        inverted>
        Add to Cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: CartItemType) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
