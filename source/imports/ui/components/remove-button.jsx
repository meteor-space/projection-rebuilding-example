import React, { PropTypes }  from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentRemove from 'material-ui/svg-icons/content/remove';

const RemoveButton = ({ onRemove }) => (
  <FloatingActionButton mini={true} onClick={onRemove()}>
    <ContentRemove />
  </FloatingActionButton>
);

RemoveButton.propTypes = {
  onRemove: PropTypes.func.isRequired,
};

export default RemoveButton;
