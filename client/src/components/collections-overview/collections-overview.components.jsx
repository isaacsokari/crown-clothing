import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.jsx';
import { CollectionOverviewStyle } from './collections-overview.styles';

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewStyle>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewStyle>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
