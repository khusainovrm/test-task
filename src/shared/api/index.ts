import axios from 'axios';

const DEFAULT_ERROR_TEXT = "Произошла ошибка...";

const api = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/',
});

export const getErrorMessage = (error: any, defaultMessage?: string): string => {
  if ([400, 404].includes(error?.response?.status) && error?.response?.data?.error?.message) {
    return error.response.data.error.message;
  } else if (defaultMessage) {
    return defaultMessage;
  } else return DEFAULT_ERROR_TEXT;
};

export default api;
