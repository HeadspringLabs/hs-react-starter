import React, {PropTypes} from 'react';

const FieldValidationError = ({touched, error}) => (
  <span>{touched && error && <small className="text-danger">{error}</small>}</span>
);

FieldValidationError.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string
};

export default FieldValidationError;
