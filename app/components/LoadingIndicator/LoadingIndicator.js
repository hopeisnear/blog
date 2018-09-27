import React from 'react';
import { shape, bool } from 'prop-types';
import './Loadingindicator.scss';

const LoadingIndicator = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error!</div>;
  }
  if (pastDelay) {
    return (
      <div className="LoadingIndicator">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
  return null;
};

LoadingIndicator.propTypes = {
  error: shape({}),
  pastDelay: bool
};

LoadingIndicator.defaultProps = {
  error: undefined,
  pastDelay: false
};

export default LoadingIndicator;
