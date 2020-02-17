/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { History } from 'history';
import * as yup from 'yup';
import { UserRegistrationData } from '~/store/ducks/UserRegistration/types';
import { Container } from './styles';
import {
  Header,
  Paper,
  GoBackButton,
  Input,
  AlignCenter,
  Grid,
  Button,
  Loader,
} from '~/components';

import * as UserRegistrationActions from '~/store/ducks/UserRegistration/actions';
import * as SignInActions from '~/store/ducks/UserSignIn/actions';
import ApplicationState from '~/store/ducks/ApplicationState';

const UserRegistrationSchema = yup.object().shape({
  username: yup.string().required('Please, enter your Github User Name'),
  email: yup
    .string()
    .email('Please, type a valid e-mail')
    .required('Please, enter your e-mail'),
  password: yup.string().required('Please, type a password'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please, confirm your password'),
});

interface Props {
  history: History;
}

const NewEvent: React.FC<Props> = ({ history }) => {
  const dispatch = useDispatch();
  const methods = useForm<UserRegistrationData>({
    validationSchema: UserRegistrationSchema,
  });

  const { handleSubmit, getValues, errors } = methods;

  const UserRegistration = useSelector(
    (state: ApplicationState) => state.userRegistration
  );

  const submit = (data: UserRegistrationData) => {
    dispatch(UserRegistrationActions.sendRequest(data));
  };

  useEffect(() => {
    if (UserRegistration.success) {
      const { username, password } = getValues();
      dispatch(SignInActions.sendRequest({ username, password }));
    }
  }, [UserRegistration.success, dispatch, getValues]);

  return (
    <Container>
      <Header slim>
        <span>Register</span>
      </Header>
      <Paper>
        <GoBackButton path="/" />
        {UserRegistration.success && !UserRegistration.error ? (
          <Grid direction="column">
            <IoMdCheckmarkCircleOutline size={64} color="#10ac84" />
            <span className="label">Success!</span>
            Sign In
          </Grid>
        ) : (
          <FormContext {...methods}>
            <form
              name="user-registration"
              onSubmit={handleSubmit(submit)}
              autoComplete="off"
              noValidate
            >
              {UserRegistration.sending && (
                <Loader fullScreen background="rgba(255,255,255,0.8)" />
              )}
              <AlignCenter fullWidth>
                <Grid width="570px" justifyContent="space-between">
                  <Input
                    type="text"
                    name="username"
                    label="Github Username"
                    half
                    error={
                      errors.username?.message ||
                      UserRegistration.fields.username
                    }
                  />
                  <Input
                    type="text"
                    name="email"
                    label="E-mail"
                    error={
                      errors.email?.message || UserRegistration.fields.email
                    }
                    half
                  />
                </Grid>
                <Grid width="570px" justifyContent="space-between">
                  <Input
                    type="password"
                    name="password"
                    label="Password"
                    error={
                      errors.password?.message ||
                      UserRegistration.fields.password
                    }
                    half
                  />
                  <Input
                    type="password"
                    name="password_confirmation"
                    label="Password Confirmation"
                    error={
                      errors.password_confirmation?.message ||
                      UserRegistration.fields.password
                    }
                    half
                  />
                </Grid>
              </AlignCenter>
              <Grid direction="column">
                <Button type="submit">Create Account</Button>
                <Button
                  variant="text"
                  onClick={() => history.push('/login')}
                  secondary
                >
                  Sign In
                </Button>
              </Grid>
            </form>
          </FormContext>
        )}
      </Paper>
    </Container>
  );
};

export default NewEvent;
