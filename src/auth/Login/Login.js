import React from 'react';
import { TextInput, Button, Anchor } from 'grommet';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthModal from '../AuthModal/AuthModal';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import AuthFormButtons from '../AuthFormButtons/AuthFormButtons';
import * as routes from '../../constants/routes';
import FocusOnMount from '../../utils/FocusOnMount';

const LoginForm = ({ handleChange, handleSubmit, handleBlur, touched, errors, values: { name, password }, focusElRef }) => (
  <form onSubmit={handleSubmit}>
    <AuthFormLabel label="Логин:" error={touched.name && errors.name} reqired >
      <TextInput
        name="name"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        ref={focusElRef}
      />
    </AuthFormLabel>
    <AuthFormLabel label="Пароль:" reqired error={touched.password && errors.password} >
      <TextInput
        name="password"
        type="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthFormLabel>
    <Link to={routes.FORGET}><Anchor label="Забыли пароль?" /></Link>
    <AuthFormButtons>
      <Button label="Войти" onClick={handleSubmit} />
      <Link to={routes.SIGNIN} ><Button className="auth-form-buttons__button" label="Регистрация" /></Link>
    </AuthFormButtons>
  </form>
)

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Заполните поле'),
  password: Yup.string().required('Заполните поле'),
});

const formSubmited = (values) => {
  console.log(values);
}

const initialValues = {
  name: '',
  password: '',
}

const FocusedForm = FocusOnMount(LoginForm);

const Login = () => (
  <AuthModal title="Вход">
    <Formik
      component={FocusedForm}
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={formSubmited}
      initialValues={initialValues}
    />
  </AuthModal>
);

export default Login;

