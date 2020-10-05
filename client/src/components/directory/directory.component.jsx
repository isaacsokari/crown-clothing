import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...OtherSectionProps }) => (
      <MenuItem key={id} {...OtherSectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
