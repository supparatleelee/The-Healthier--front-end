// import Joi from 'joi';

// const registerschema = Joi.object({
//   firstName: Joi.string().required(),
//   lastName: Joi.string()
//     .pattern(/(?=.*?[A-Za-z0-9#?!@$ %^&*-]).{6,}/)
//     .required(),
//   password: Joi.string().required(),
//   confirmPassword: Joi.ref('password'),
//   lastName: Joi.string().required(),
//   email: Joi.string()
//     .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
//     .required(),
// }).with('password', 'confirmpassword');

// export const validateRegister = (input) =>
//   registerschema.validate(input, { abortEarly: false });

import validator from 'validator';

const validateRegister = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  const error = {};
  if (validator.isEmpty(firstName.trim())) {
    error.firstName = 'Firstname is require';
  }
  if (validator.isEmpty(lastName.trim())) {
    error.lastName = 'Lastname is require';
  }

  if (validator.isEmpty(email.trim())) {
    error.email = 'Email is require';
  } else if (!email.trim().includes('.com')) {
    error.email = 'Email invalid';
  }

  if (
    validator.isEmpty(password.trim()) ||
    validator.isEmpty(confirmPassword.trim())
  ) {
    error.password = 'Password or ConfirmPassword is require';
  } else if (String(password.trim()) !== String(confirmPassword.trim())) {
    error.password = 'Password not match confirmPassword';
  } else if (password.trim().length < 6 || confirmPassword.trim().length < 6) {
    error.password = 'Password and confirmPassword must more than 6 character';
  }

  return Object.keys(error).length > 0 ? error : false;
};

const validateLogin = ({ email, password }) => {
  const error = {};

  if (validator.isEmpty(email.trim())) {
    error.email = 'Email is require';
  }

  if (validator.isEmpty(password.trim())) {
    error.password = 'Password is require';
  } else if (password.trim().length < 6) {
    error.password = 'Password must more than 6 character';
  }

  return Object.keys(error).length > 0 ? error : false;
};

export { validateRegister, validateLogin };
