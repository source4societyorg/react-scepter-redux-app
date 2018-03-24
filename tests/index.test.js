import React from 'react';
import { mount } from 'enzyme';
import createHistory from 'history/createMemoryHistory';
import ScepterReduxApp from '../src/index';
test('ScepterReduxApp renders without problems', () => {
  const history = createHistory();
  const MyApp = () => <div />;
  const renderComponent = mount(<ScepterReduxApp MyApp={MyApp} history={history} />);
  renderComponent.render();
});
