import PropTypes from 'prop-types';
import { propTypes, defaultProps } from '../src/props';

test('propTypes is defined properly', () => {
  expect(propTypes).toEqual({
    history: PropTypes.object.isRequired,
    MyApp: PropTypes.any.isRequired,
  });
});

test('defaultProps is defined properly', () => {
  expect(defaultProps).toEqual({});
});
