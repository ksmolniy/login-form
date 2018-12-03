import React from 'react';
import { TextInput, Button, Anchor } from 'grommet';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthModal from '../AuthModal/AuthModal';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import AuthFormButtons from '../AuthFormButtons/AuthFormButtons';
import * as Yup from 'yup'
import * as routes from '../../constants/routes';
import FocusOnMount from '../../utils/FocusOnMount';

const SigninForm = ({ handleChange, handleBlur, handleSubmit, errors, touched, values, focusElRef }) => (
  <form onSubmit={handleSubmit}>
    <AuthFormLabel label="Логин:" error={touched.name && errors.name} reqired >
      <TextInput
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        ref={focusElRef}
      />
    </AuthFormLabel>
    <AuthFormLabel label="Электронная почта:" error={touched.email && errors.email} reqired >
      <TextInput
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthFormLabel>
    <AuthFormLabel label="Пароль:" reqired error={touched.password && errors.password} >
      <TextInput
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthFormLabel>
    <AuthFormLabel label="Повторите пароль:" reqired error={touched.repitedPassword && errors.repitedPassword} >
      <TextInput
        name="repitedPassword"
        type="password"
        value={values.repitedPassword}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </AuthFormLabel>
    <AuthFormButtons>
      <Button label="Зарегестрироваться" onClick={handleSubmit} />
      <Link to={routes.LOGIN} ><Button className="auth-form-buttons__button" label="Логин" /></Link>
    </AuthFormButtons>
  </form>
)

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Заполните поле'),
  password: Yup.string().required('Заполните поле'),
  repitedPassword: Yup.string()
    .required('Заполните поле')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
  email: Yup.string()
    .required('Заполните поле')
    .email('Введите правильную почту'),
});

const initialValues = {
  name: '',
  password: '',
  repitedPassword: '',
  email: '',
}

const formSubmited = (values) => {
  console.log(values);
}

const FocusedForm = FocusOnMount(SigninForm);

const mapStateToProps = () => {};

const enhance = connect()

const Signin = () => (
  <AuthModal title="Регистрация">
    <Formik
      component={FocusedForm}
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={formSubmited}
      initialValues={initialValues}
    />
  </AuthModal>
);

export default Signin;
