import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import { LabelInputField } from '../components/LabelInputField';
import { SectionMessages } from '../components/SectionMessages';
import { Table } from '../components/Table';
import { dataOfMultiplicative } from '../services/axios';

import '../stylesheets/pages/Multiplicative.css';

const titleHeaders = ['n', '1', '2', '3', '4'];

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
  return (
    <Formik
      initialValues={{ seed: '', multiplicative: '', module: '' }}
      
      onSubmit={values => {
        setPayload(values);
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);
      }}
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
