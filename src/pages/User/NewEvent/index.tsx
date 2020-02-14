/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import * as yup from 'yup';
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
} from '~/components';

const NewEventSchema = yup.object().shape({
  title: yup.string().required('Please, enter the event name'),
  type: yup.string().required('Please, select an event type'),
  date: yup.date().required('Please, type the event date'),
  location: yup.string().required('Please, type the event location'),
  url: yup.string().url('Type a valid URL'),
  description: yup.string(),
});

const NewEvent = () => {
  const methods = useForm<UserEvent>({
    validationSchema: NewEventSchema,
  });
  const { handleSubmit, register, errors } = methods;

  const submit = (data: UserEvent) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
        <FormContext {...methods}>
          <form name="new-event" onSubmit={handleSubmit(submit)}>
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
                  type="text"
                  name="date"
                  label="Date"
                  error={errors.title?.message}
                  half
                />
                <Input
                  type="text"
                  name="location"
                  label="Location"
                  error={errors.title?.message}
                  half
                />
              </Grid>
              <Grid width="570px">
                <Input
                  type="text"
                  name="url"
                  label="Webpage"
                  error={errors.title?.message}
                />
              </Grid>
              <Grid width="570px">
                <Input
                  type="text"
                  name="description"
                  label="Description"
                  error={errors.title?.message}
                />
              </Grid>
            </AlignCenter>
            <Grid justifyContent="flex-end">
              <Button type="submit">Save</Button>
            </Grid>
          </form>
        </FormContext>
      </Paper>
    </Container>
  );
};

export default NewEvent;
