import React from 'react';
import { TextInput, Button, Anchor } from 'grommet';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import AuthModal from '../AuthModal/AuthModal';
import AuthFormLabel from '../AuthFormLabel/AuthFormLabel';
import AuthFormButtons from '../AuthFormButtons/AuthFormButtons';
import * as routes from '../../../constants/routes';
import FocusOnMount from '../../../utils/FocusOnMount';
import { loginStart } from '../../../store/auth';
import LoadingLabel from '../../common/LoadingLabel/LoadingLabel';
import callOnEnter from '../../../utils/callOnEnter';

const LoginForm = ({
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors,
    values: { name, password },
    focusElRef,
    loading,
    failed,
    success,
  }) => (
  <form onSubmit={handleSubmit}>
    <fieldset disabled={loading}>
      <AuthFormLabel label="Почта:" error={touched.name && errors.name} required >
        <TextInput
          name="email"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={focusElRef}
        />
      </AuthFormLabel>
      <AuthFormLabel label="Пароль:" required error={touched.password && errors.password} >
        <TextInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={callOnEnter(handleSubmit)}
        />
      </AuthFormLabel>
      {/* <Link to={routes.FORGET}><Anchor label="Забыли пароль?" /></Link> */}
      <AuthFormButtons>
      <Button
            label={
              <LoadingLabel
                loading={loading}
                failed={failed}
                success={success}
                title="Войти"
              />
            }
            onClick={handleSubmit}
            disabled={loading}
          />
          {loading
            ? <Button className="auth-form-buttons__button" label="Регистрация" disabled />
            : <Link to={routes.SIGNIN} ><Button className="auth-form-buttons__button" label="Регистрация" /></Link>
          }
      </AuthFormButtons>
    </fieldset>
  </form>
)

const schema = Yup.object().shape({
  email: Yup.string().trim().required('Заполните поле').email('Введите правильную почту'),
  password: Yup.string().required('Заполните поле'),
});

const initialValues = {
  email: '',
  password: '',
}

const FocusedForm = FocusOnMount(LoginForm);

const mapStateToProps = ({ auth: { logIn } }) => ({
  ...logIn,
});

const mapDispatchToProps = (dispatch) => ({
  login: (values) => dispatch(loginStart(values)),
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

const Login = ({ login, ...otherProps }) => (
  <AuthModal title="Вход">
    <Formik
      validationSchema={schema}
      validateOnChange={false}
      onSubmit={login}
      initialValues={initialValues}
    >
      { props => <FocusedForm {...props} {...otherProps} /> }
    </Formik>
  </AuthModal>
);

export default enhance(Login);

