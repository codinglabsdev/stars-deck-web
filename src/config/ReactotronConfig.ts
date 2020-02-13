import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

declare global {
  interface Console {
    tron: any
  }
}

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure({
    name: 'CodingLabs CRA TS Template',
  })
    .use(reactotronRedux())
    .use(reactotronSaga({}))
    .connect();

  tron.clear!();

  console.tron = tron;
}
