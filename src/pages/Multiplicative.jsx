import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { LabelInputField } from '../components/LabelInputField';
import { SectionMessages } from '../components/SectionMessages';
import { Table } from '../components/Table';
import { dataOfMultiplicative } from '../services/axios';

import '../stylesheets/pages/Multiplicative.css';

const titleHeaders = ['n', 'Xn', 'a * Xn', 'Xn+1', 'Un = Xn+1/m'];

export const Multiplicative = () => {
  const [rows, setRows] = useState([]);
  const [messages, setMessages] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, multiplicative: 0, module: 0 });

  useEffect(() => {
    dataOfMultiplicative(payload.seed, payload.multiplicative, payload.module)
      .then(data => {
        setRows(data.response);
        setMessages(data.messages);
      })
  }, [payload])

  return (
    <div className='multiplicative-product-container'>
      <h1>Congruencial Multiplicativo Decimal</h1>
      <FormMultiplicative setPayload={setPayload} />
      <Table titleHeaders={titleHeaders} rows={rows} />
      <SectionMessages messages={messages} />
    </div>
  )
}

const FormMultiplicative = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);
  const [defaultCheckedNormal, setDefaultCheckedNormal] = useState(true);

  return (
    <Formik
      initialValues={{ seed: '', multiplicative: '', module: '' }}
      
      onSubmit={values => {
        if (!defaultCheckedNormal) {
          values.module = Math.pow(10, parseInt(values.module)).toString();
        }
        setPayload(values);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 3000);
      }}

      validate={values => validatorMultiplicative(values)}
    >
    {({errors}) => 
      <Form className='form'>
        <div>
          <LabelInputField textLabel='Semilla' messageError={errors.seed} name='seed' />
          <LabelInputField textLabel='Ctte. Multiplicativa' messageError={errors.multiplicative} name='multiplicative' />
          
          <div className='radio-button-section-container'>
            <div>
              <input type='radio' name='select-module' value='m' defaultChecked={defaultCheckedNormal} onChange={() => setDefaultCheckedNormal(!defaultCheckedNormal)} />
              <label className='label-radio-button'>Normal (m)</label>
            </div>
            <div>
              <input type='radio' name='select-module' value='d' onChange={() => setDefaultCheckedNormal(!defaultCheckedNormal)} />
              <label className='label-radio-button'>Calculado 10^d </label>
            </div>           
          </div>
          
          <LabelInputField 
            textLabel={`${defaultCheckedNormal ? 'Modulo (m)' : 'Modulo = (10^d)'}` }
            messageError={errors.module} 
            name='module' />
        </div>
        <button type='submit' className='button-submit'>Comenzar</button>
        {isSent && <p className='successfully'>Proceso terminado con exito</p>}
      </Form>}
    </Formik>
  )
}

export const validatorMultiplicative = values => {
  let errors = {};

  if (!values.seed) { errors.seed = 'Ingrese la semilla'; }
  if (!values.multiplicative) { errors.multiplicative = 'Ingrese la ctte multiplicativa'; }
  if (!values.module) { errors.module = 'Ingrese la modulo'; }

  if (parseInt(values.seed) <= 0) { errors.seed = 'Semilla debe ser mayor a 0'; }
  if (parseInt(values.multiplicative) <= 0) { errors.multiplicative = 'Ctte. multiplicativa debe ser mayor a 0'; }
  if (parseInt(values.module) <= 0) { errors.module = 'Modulo debe ser mayor a 0'; }
  return errors;
}; 