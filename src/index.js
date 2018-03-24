
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { configureStore } from '@source4society/scepter-app-utilities';
import { propTypes, defaultProps } from './props';
const initialState = {};
export const ScepterReduxApp = (props) => {
  const { history, MyApp, ...rest } = props;
  const store = configureStore(initialState, history);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MyApp {...rest} />
      </ConnectedRouter>
    </Provider>
  );
};

ScepterReduxApp.propTypes = propTypes;
ScepterReduxApp.defaultProps = defaultProps;
export default ScepterReduxApp;
