import React from 'react';
import { connect } from 'react-redux';
import { TextInput, Button } from 'grommet';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthModal from '../AuthModal/AuthModal';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import AuthFormButtons from '../AuthFormButtons/AuthFormButtons';
import * as Yup from 'yup'
import * as routes from '../../../constants/routes';
import FocusOnMount from '../../../utils/FocusOnMount';
import { registrationStart } from '../../../store/auth';
import LoadingLabel from '../../common/LoadingLabel/LoadingLabel';
import callOnEnter from '../../../utils/callOnEnter';

const SigninForm = ({
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    focusElRef,
    loading,
    failed,
    success,
  }) => (
  <form onSubmit={handleSubmit} >
    <fieldset disabled={loading}>
      <AuthFormLabel label="Логин:" error={touched.name && errors.name} required >
        <TextInput
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={focusElRef}
        />
      </AuthFormLabel>
      <AuthFormLabel label="Электронная почта:" error={touched.email && errors.email} required >
        <TextInput
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </AuthFormLabel>
      <AuthFormLabel label="Пароль:" required error={touched.password && errors.password} >
        <TextInput
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </AuthFormLabel>
      <AuthFormLabel label="Повторите пароль:" required error={touched.repeatedPassword && errors.repeatedPassword} >
        <TextInput
          name="repeatedPassword"
          type="password"
          value={values.repeatedPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={callOnEnter(handleSubmit)}
        />
      </AuthFormLabel>
      <AuthFormButtons>
        <Button
          label={
            <LoadingLabel
              loading={loading}
              failed={failed}
              success={success}
              title="Зарегестрироваться"
            />
          }
          onClick={handleSubmit}
          disabled={loading}
        />
        {loading
          ? <Button className="auth-form-buttons__button" label="Логин" disabled />
          : <Link to={routes.LOGIN} ><Button className="auth-form-buttons__button" label="Логин" /></Link>
        }
      </AuthFormButtons>
    </fieldset>
  </form>
)

const schema = Yup.object().shape({
  name: Yup.string().trim().required('Заполните поле'),
  password: Yup.string().required('Заполните поле'),
  repeatedPassword: Yup.string()
    .required('Заполните поле')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
  email: Yup.string()
    .required('Заполните поле')
    .email('Введите правильную почту'),
});

const initialValues = {
  name: '',
  password: '',
  repeatedPassword: '',
  email: '',
}

const FocusedForm = FocusOnMount(SigninForm);

const mapStateToProps = ({ auth: { signIn } }) => ({
  ...signIn,
});
const mapDispatchToProps = (dispatch) => ({
  register: (values) => {
    const valuesCopy = {...values};
    delete valuesCopy.repeatedPassword;

    dispatch(registrationStart(valuesCopy));
  }
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

const Signin = ({ register, ...otherProps }) => (
  <AuthModal title="Регистрация">
    <Formik
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={register}
      initialValues={initialValues}
    >
      { props => <FocusedForm {...props} {...otherProps} /> }
    </Formik>
  </AuthModal>
);

export default enhance(Signin);
