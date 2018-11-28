import React from 'react';
import { TextInput, Button, Anchor } from 'grommet';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthModal from '../AuthModal/AuthModal';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import AuthFormButtons from '../AuthFormButtons/AuthFormButtons';
import * as routes from '../../constants/routes';
import './Login.scss';

const LoginForm = ({ handleChange, handleSubmit, errors, values: { name, password } }) => (
  <form onSubmit={handleSubmit}>
    <AuthFormLabel label="Логин:" error={errors.name} reqired >
      <TextInput
        name="name"
        value={name}
        onChange={handleChange}
      />
    </AuthFormLabel>
    <AuthFormLabel label="Пароль:" reqired error={errors.password} >
      <TextInput
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
      />
    </AuthFormLabel>
    <Link to={routes.FORGET}><Anchor label="Забыли пароль?" /></Link>
    <AuthFormButtons>
      <Button label="Войти" onClick={handleSubmit} />
      <Button label={<Link to={routes.SIGNIN} >Зарегестрироваться</Link>} />
    </AuthFormButtons>
  </form>
)

const validate = async (values) => {
  let errors = {};

  if (!values.name || values.name.trim() === '') {
    errors.name = 'Заполните поле';
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Заполните поле';
  }

  if (Object.keys(errors).length) {
    throw errors;
  }
}

const formSubmited = (values) => {
  console.log(values);
}

const Login = () => (
  <AuthModal title="Вход">
    <Formik 
      component={LoginForm}
      validate={validate}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={formSubmited}
    />
  </AuthModal>
);

export default Login;

