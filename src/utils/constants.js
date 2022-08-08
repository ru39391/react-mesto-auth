import iconError from '../images/icons/icon-error.svg';
import iconSuccess from '../images/icons/icon-success.svg';

export const access = {
  authUrl: 'https://auth.nomoreparties.co',
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-43',
  token: 'bee12215-09da-441f-9f38-f7f695bca43f',
}

export const tooltipConfig = {
  success: {
    className: 'success',
    title: 'Вы успешно зарегистрировались!',
    icon: iconSuccess,
  },
  error: {
    className: 'error',
    title: 'Что-то пошло не так! Попробуйте ещё раз.',
    icon: iconError,
  }
}