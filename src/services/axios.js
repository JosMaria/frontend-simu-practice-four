import axios from 'axios';

const domain = axios.create({ baseURL: 'http://localhost:8080/' })

export const dataOfMixed = async (seed, multiplicative, additive, module ) => {
  if (seed !== 0 &&  multiplicative !== 0 && additive !== 0 && module !== 0) {
    const response = await domain.get(`api/mixed?seed=${seed}&multiplicative=${multiplicative}&additive=${additive}&module=${module}`);
    return response.data;
  }
  return { response: [], messages: [] };
};

export const dataOfMultiplicative = async (seed, multiplicative, module) => {
  if (seed !== 0 && multiplicative !== 0 && module !== 0) {
    const response = await domain.get(`api/multiplicative?seed=${seed}&multiplicative=${multiplicative}&module=${module}`);
    return response.data;
  }

  return { response: [], messages: [] };
};

export const dataOfMultiplicativeBinary = async (seed, multiplicative, module) => {
  if (seed !== 0 && multiplicative !== 0 && module !== 0) {
    const response = await domain.get(`api/multiplicative/binary?seed=${seed}&multiplicative=${multiplicative}&module=${module}`);
    return response.data;
  }

  return { response: [], messages: [] };
};