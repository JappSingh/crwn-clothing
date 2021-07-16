import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

// The array functions are called every time the Component is rendered, so could be a performance concern!
// Preview 4 items per collection
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} { ...otherItemProps } />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;
