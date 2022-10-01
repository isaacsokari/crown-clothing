import React, { FunctionComponent } from 'react';
import { match, RouteComponentProps, withRouter } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

type MenuItemProps = {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
  match: match;
  history: any;
};

const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}: MenuItemProps) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    />
    <ContentContainer className="content">
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(
  MenuItem as unknown as FunctionComponent<
    RouteComponentProps<any, {}, unknown>
  >
);
