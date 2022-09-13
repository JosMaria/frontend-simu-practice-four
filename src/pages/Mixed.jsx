import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { LabelInputField } from '../components/LabelInputField';
import { SectionMessages } from '../components/SectionMessages';
import { Table } from '../components/Table';
import { dataOfMixed } from '../services/axios';

import '../stylesheets/pages/Mixed.css';

const titleHeaders = ['n', 'Xo','a * Xn', 'a * Xn + c', 'Xn+1', 'Un = Xn+1/m'];

export const Mixed = () => {
  const [rows, setRows] = useState([]);
  const [payload, setPayload] = useState({ seed: 0, multiplicative: 0, additive: 0, module: 0 });
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    dataOfMixed(payload.seed, payload.multiplicative, payload.additive, payload.module)
      .then(data => {
        console.log(data.response);
        console.log(data.messages);
        setRows(data.response);
        setMessages(data.messages);
      });
  }, [payload]);

  return (
    <div className='mixed-product-container'>
      <h1>Congruencial Mixto</h1>
      <FormMixed setPayload={setPayload} />
      <Table titleHeaders={titleHeaders} rows={rows} />
      <SectionMessages messages={messages} />
    </div>
  )
}

const FormMixed = ({ setPayload }) => {
  const [isSent, setIsSent] = useState(false);
  
  return (
    <Formik
      initialValues={{ seed: '', multiplicative: '', additive: '', module: '' }}

      onSubmit={(values, { resetForm }) => {
        console.log(values);
        setPayload(values);
        resetForm();
        setIsSent(true);
        setTimeout(() => setIsSent(false), 2000);
      }}

      validate={values => {
        let validation = {};
        validation.seed = !values.seed && 'Ingrese la semilla';
        validation.multiplicative = !values.multiplicative && 'Ingrese la ctte multiplicativa';
        validation.additive = !values.additive && 'Ingrese la ctte aditiva';
        validation.module = !values.module && 'Ingrese el modulo';

        if (parseInt(values.seed) <= 0) {
          validation.seed = 'Semilla debe ser mayor a 0';
        }
        if (parseInt(values.multiplicative) <= 0) {
          validation.multiplicative = 'Ctte Multiplicativa debe ser mayor a 0';
        }
        if (parseInt(values.additive) <= 0) {
          validation.additive = 'Ctte aditiva debe ser mayor a 0';
        }
        if(parseInt(values.module) <= 0) {
          validation.module = 'Modulo debe ser mayor a 0';
        }
        /*
        if (parseInt(values.module) <= parseInt(values.seed) || 
            parseInt(values.module) <= parseInt(values.additive) || 
            parseInt(values.module) <= parseInt(values.multiplicative)) {
          validation.module = 'Modulo debe ser mayor a Xo, c, a';
        }*/
        return validation;
      }}
    >
    {({ errors }) => 
      <Form className='form'>
        <div>
          <LabelInputField textLabel='Semilla' messageError={errors.seed} name='seed' />
          <LabelInputField textLabel='Ctte. Multiplicativa' messageError={errors.multiplicative} name='multiplicative' />
          <LabelInputField textLabel='Ctte. Aditiva' messageError={errors.additive} name='additive' />
          <LabelInputField textLabel='Modulo' messageError={errors.module} name='module' />
        </div>
        <button type='submit' className='button-submit'>Comenzar</button>
        {isSent && <p className='successfully'>Proceso terminado con exito</p>}
      </Form>
    }
    </Formik>
  )
}
