/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import moment from 'moment';

import * as yup from 'yup';
import { History } from 'history';
import { UserEvent } from '~/store/ducks/UserDetails/types';
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

import * as NewEventActions from '~/store/ducks/NewEvent/actions';
import ApplicationState from '~/store/ducks/ApplicationState';

const NewEventSchema = yup.object().shape({
  title: yup.string().required('Please, enter the event name'),
  type: yup.string().required('Please, select an event type'),
  date: yup
    .date()
    .required('Please, type the event date')
    .typeError('Invalid date')
    .min(new Date('2010-01-01'), 'Date must be after 2010')
    .max(new Date(), 'Date must be before today')
    .transform((_value, originalValue) => {
      const parsed = moment(originalValue, 'DD/MM/YYYY').toDate();
      return moment(parsed).isValid() ? parsed : new Date('');
    }),
  location: yup.string().required('Please, type the event location'),
  url: yup.string().url('Type a valid URL'),
  description: yup.string(),
});

interface MatchProps {
  user: string;
}

interface Props extends RouteComponentProps<MatchProps> {
  history: History;
}

const NewEvent: React.FC<Props> = ({ match, history }) => {
  const dispatch = useDispatch();
  const methods = useForm<UserEvent>({
    validationSchema: NewEventSchema,
  });

  const [submitted, setSubmitted] = useState(false);

  const { handleSubmit, register, errors } = methods;

  const newEvent = useSelector((state: ApplicationState) => state.newEvent);

  const submit = (data: UserEvent) => {
    setSubmitted(true);
    dispatch(NewEventActions.sendRequest(data));
  };

  const options = [
    { value: 'presentation', label: 'Presentation' },
    { value: 'dojo', label: 'Dojo Coding' },
    { value: 'pr', label: 'Pull Request' },
    { value: 'participation', label: 'Listener' },
  ];

  register({ name: 'type', type: 'select' });

  return (
    <Container>
      <Header slim>
        <span>New Event</span>
      </Header>
      <Paper>
        <GoBackButton path="/" />
        {submitted && !newEvent.sending && !newEvent.error ? (
          <Grid direction="column">
            <IoMdCheckmarkCircleOutline size={64} color="#10ac84" />
            <span className="label">Success!</span>
            <Button onClick={() => setSubmitted(false)}>
              Create New Event
            </Button>
            <Button
              secondary
              variant="text"
              onClick={() => history.push(`/user/${match.params.user}/details`)}
            >
              See My Timeline
            </Button>
          </Grid>
        ) : (
          <FormContext {...methods}>
            <form
              name="new-event"
              onSubmit={handleSubmit(submit)}
              autoComplete="off"
            >
              {newEvent.sending && (
                <Loader fullScreen background="rgba(255,255,255,0.8)" />
              )}
              <AlignCenter fullWidth>
                <Grid width="570px" justifyContent="space-between">
                  <Input
                    type="text"
                    name="title"
                    label="Event Name"
                    half
                    error={errors.title?.message}
                  />
                  <Input
                    type="select"
                    name="type"
                    label="Event Type"
                    half
                    error={errors.type?.message}
                    options={options}
                  />
                </Grid>
                <Grid width="570px" justifyContent="space-between">
                  <Input
                    type="date"
                    name="date"
                    label="Date"
                    error={errors.date?.message}
                    half
                  />
                  <Input
                    type="text"
                    name="location"
                    label="Location"
                    error={errors.location?.message}
                    half
                  />
                </Grid>
                <Grid width="570px" direction="column">
                  <Input
                    type="text"
                    name="url"
                    label="Webpage"
                    error={errors.url?.message}
                  />
                  <Input
                    type="text"
                    name="description"
                    label="Description"
                    error={errors.description?.message}
                  />
                </Grid>
              </AlignCenter>
              <Grid justifyContent="flex-end">
                <Button type="submit">Save</Button>
              </Grid>
            </form>
          </FormContext>
        )}
      </Paper>
    </Container>
  );
};

export default NewEvent;
