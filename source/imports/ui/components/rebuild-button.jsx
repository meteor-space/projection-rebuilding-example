import React, { PropTypes }  from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CachedIcon from 'material-ui/svg-icons/action/cached';
import { red500 } from 'material-ui/styles/colors';

const RebuildButton = ({ onRebuild }) => (
  <FloatingActionButton mini={true} onClick={onRebuild()} backgroundColor={red500}>
    <CachedIcon />
  </FloatingActionButton>
);

RebuildButton.propTypes = {
  onRebuild: PropTypes.func.isRequired,
};

export default RebuildButton;
