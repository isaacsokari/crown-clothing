import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history }) => (
  <div className="collection-preview">
    <h1 className="title">
      {title.toUpperCase()}{' '}
      <CustomButton
        onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
        inverted
      >
        Go to {title}
      </CustomButton>
    </h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
