import React, {PropTypes} from 'react';
import classNames from 'classnames';
import Submitting from '../shared/Submitting.jsx';
import FieldValidationError from '../shared/FieldValidationError.jsx';

const DemoForm = ({
  fields: {
    optionType,
    someField,
    anotherField
  },
  error,
  resetForm,
  handleSubmit,
  submitting
}) => (
  <div>
    <h2>Demo</h2>
    <form
      className="form-horizontal"
      onSubmit={handleSubmit}
    >

      <div className="panel panel-default">
        <div className="panel-body">
          <h4>Choose Option <small>(Required)</small></h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Option Type</th>
                <th>Cost ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    name="optionType"
                    type="radio"
                    defaultChecked={optionType.initialValue === 1}
                  />
                </td>
                <td>{`Option 1`}</td>
                <td>122.00</td>
              </tr>
              <tr className="align-right">
                <td>
                  <input
                    name="optionType"
                    type="radio"
                    defaultChecked={optionType.initialValue === 2}
                  />
                </td>
                <td>{`Option 2`}</td>
                <td>167.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="panel panel-default">
        <div className="panel-body">
          <h4>Details <small>(Required)</small></h4>
          <div className={getFieldClasses(someField)}>
            <label htmlFor="someField" className="col-md-3 control-label">Some Field</label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Some Field"
                {...someField}
              />
            <FieldValidationError {...someField} />
            </div>
          </div>
          <div className={getFieldClasses(anotherField)}>
            <label htmlFor="anotherField" className="col-md-3 control-label">Another Field</label>
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Another Field"
                {...anotherField}
              />
            </div>
          </div>
          {error && <p className="text-danger text-right"><strong>{error}</strong></p>}
        </div>
      </div>

      <div className="form-group text-right">
        <div className="col-md-9 col-md-offset-3">
          <button
            type="reset"
            className="btn btn-link"
            disabled={submitting}
            onClick={resetForm}
          >Cancel</button>
          {` `}
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={submitting}
          >{submitting ? <Submitting /> : <i className="fa fa-floppy-o" />} {`Save`}</button>
        </div>
      </div>

    </form>
  </div>
);

DemoForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

const getFieldClasses = field => classNames(
  'form-group',
  {'has-error': field.touched && field.error}
);

export default DemoForm;
