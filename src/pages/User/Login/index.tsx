/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm, FormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import { UserSignInData } from '~/store/ducks/UserSignIn/types';
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
import history from '~/services/history';

import * as UserSignInActions from '~/store/ducks/UserSignIn/actions';
import ApplicationState from '~/store/ducks/ApplicationState';

const UserSignInSchema = yup.object().shape({
  username: yup.string().required('Please, enter your Github User Name'),
  password: yup.string().required('Please, type a password'),
});


const NewEvent: React.FC = () => {
  const dispatch = useDispatch();
  const methods = useForm<UserSignInData>({
    validationSchema: UserSignInSchema,
  });

  const [submitted, setSubmitted] = useState(false);

  const { handleSubmit, errors } = methods;

  const UserSignIn = useSelector((state: ApplicationState) => state.userSignIn);

  const submit = (data: UserSignInData) => {
    setSubmitted(true);
    dispatch(UserSignInActions.sendRequest(data));
  };
  return (
    <Container>
      <Header slim>
        <span>Sign In</span>
      </Header>
      <Paper>
        <GoBackButton path="/" />
        {submitted && !UserSignIn.sending && !UserSignIn.error ? (
          <Redirect to="/" />
        ) : (
          <FormContext {...methods}>
            <form
              name="user-login"
              onSubmit={handleSubmit(submit)}
              autoComplete="off"
              noValidate
            >
              {UserSignIn.sending && (
                <Loader fullScreen background="rgba(255,255,255,0.8)" />
              )}
              <AlignCenter fullWidth>
                <Grid
                  width="570px"
                  justifyContent="space-between"
                  direction="column"
                >
                  <Input
                    type="text"
                    name="username"
                    label="Github Username"
                    half
                    error={errors.username?.message}
                  />
                  <Input
                    type="password"
                    name="password"
                    label="Password"
                    error={errors.password?.message}
                    half
                  />
                </Grid>
              </AlignCenter>
              <Grid justifyContent="flex-end">
                <Button
                  variant="text"
                  onClick={() => history.push('/register')}
                >
                  Register
                </Button>
                <Button type="submit">Sign In</Button>
              </Grid>
            </form>
          </FormContext>
        )}
      </Paper>
    </Container>
  );
};

export default NewEvent;
