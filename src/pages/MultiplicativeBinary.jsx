import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { LabelInputField } from '../components/LabelInputField';
import { SectionMessages } from '../components/SectionMessages';
import { Table } from '../components/Table';
import { dataOfMultiplicativeBinary } from '../services/axios';
import { validatorMultiplicative } from './Multiplicative';

import '../stylesheets/pages/MultiplicativeBinary.css';

const titleHeaders = ['n', 'Xn'];

export const MultiplicativeBinary = () => {
  const [rows, setRows] = useState([]);
  const [messages, setMessages] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, multiplicative: 0, module: 0 });
  
  useEffect(() => {
    dataOfMultiplicativeBinary(payload.seed, payload.multiplicative, payload.module)
      .then(data => {
        setRows(data.response);
        setMessages(data.messages);
      })
  }, [payload])

  return (
    <div className='multiplicative-binary-product-container'>
      <h1>Congruencial Multiplicativo Binario</h1>
      <FormMultiplicativeBinary setPayload={setPayload} />
      <Table titleHeaders={titleHeaders} rows={rows} />
      <SectionMessages messages={messages} />
    </div>
  )
}

const FormMultiplicativeBinary = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);

  return (
    <Formik
      initialValues={{ seed: '', multiplicative: '', module: '' }}
      
      onSubmit={values => {
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
          <LabelInputField textLabel='Modulo' messageError={errors.module} name='module' />
        </div>
        <button type='submit' className='button-submit'>Comenzar</button>
        {isSent && <p className='successfully'>Proceso terminado con exito</p>}
      </Form>}
    </Formik>
  )
}
