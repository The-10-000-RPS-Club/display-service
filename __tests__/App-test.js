/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/components/App';
import Description from '../client/src/components/description';
import Name from '../client/src/components/name';
import Rating from '../client/src/components/rating';
import Pictures from '../client/src/components/pictures';
import Price from '../client/src/components/price';
import Color from '../client/src/components/color';
import Size from '../client/src/components/size';





describe('A suite', function() {
  it('have a product object', function() {
    expect(shallow(<App />).find('product')).toEqual({});
  });
  it('should render without throwing an error', function() {
    const descriptions =renderer
    .create(<Description description={'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design'} />);
    expect(descriptions).toMatchSnapshot();
  });
  it('should render without throwing an error', function() {
    const names =renderer
    .create(<Name name={'Ergonomic Rubber Hat'}/>);
    expect(names).toMatchSnapshot();
  });
  it('should render without throwing an error', function() {
    const images =renderer
    .create(<Pictures image={'https://fecclothes.s3-us-west-2.amazonaws.com/Project/1.jpg'}/>);
    expect(images).toMatchSnapshot();
  });
  it('should render without throwing an error', function() {
    const rating =renderer
    .create(<Rating ratings={4} id={1} ratingsAmt={292}/>);
    expect(rating).toMatchSnapshot();
  });
  it('should render without throwing an error', function() {
    const pricing =renderer
    .create(<Price price={'186.48'}/>);
    expect(pricing).toMatchSnapshot();
  });
  it('should render without throwing an error', function() {
    const colors =renderer
    .create(<Color price={'186.48'} color={'maroon'}/>);
    expect(colors).toMatchSnapshot();
  });
});



