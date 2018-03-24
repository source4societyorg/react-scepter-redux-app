import React from 'react';
import { shallow } from 'enzyme';
import createHistory from 'history/createMemoryHistory';
import { ScepterReduxApp } from '../src/index';
test('ScepterReduxApp renders without problems', () => {
  const history = createHistory();
  const MyApp = () => <div />;
  shallow(<ScepterReduxApp MyApp={MyApp} history={history} />);
});
