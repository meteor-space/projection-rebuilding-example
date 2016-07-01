import React, { PropTypes }  from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const AddButton = ({ onAdd }) => (
  <FloatingActionButton mini={true} onClick={onAdd()}>
    <ContentAdd />
  </FloatingActionButton>
);

AddButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddButton;
