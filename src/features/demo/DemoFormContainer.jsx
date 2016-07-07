
import DemoForm from './DemoForm.jsx';
import {reduxForm} from 'redux-form';
import {handleSave} from './demoActions';

const initialValues = {
  optionType: 1
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(handleSave(data))
});

export default reduxForm({
  form: 'demoForm',
  fields: [
    'optionType',
    'someField',
    'anotherField'
  ],
  initialValues: initialValues
}, mapStateToProps, mapDispatchToProps)(DemoForm);
