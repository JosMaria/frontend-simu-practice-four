import { ErrorMessage, Field } from 'formik';

import '../stylesheets/LabelInputField.css';

export const LabelInputField = ({ textLabel, messageError, name }) => {
  const labelError = <div className='message-error'>{messageError}</div>
  return (
    <div className='label-input-field-container'>
      <div className='label-input'>
        <label className='label'>{textLabel}</label>
        <Field className='field' name={name} placeholder={name} />
      </div>
      <ErrorMessage name={name} component={() => labelError}/>
    </div>  
  )
}