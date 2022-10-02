import React, { ComponentType } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import CollectionItem, {
  CartItemType,
} from '../collection-item/collection-item.component';
import CustomButton from '../custom-button/custom-button.component';

import { CollectionPreviewContainer } from './collection-preview.styles';

type CollectionPreviewProps = {
  title: string;
  items: CartItemType[];
  history: any;
};

const CollectionPreview = ({
  title,
  items,
  history,
}: CollectionPreviewProps): React.ReactElement => (
  <CollectionPreviewContainer>
    <h1 className="title">
      {title.toUpperCase()}{' '}
      <CustomButton
        onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
        inverted>
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
  </CollectionPreviewContainer>
);

export default withRouter(
  CollectionPreview as unknown as ComponentType<
    RouteComponentProps<any, {}, unknown>
  >
);
