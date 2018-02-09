import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Footer } from 'src/features/todo';

describe('todo/Footer', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Footer />
    );

    expect(
      renderedComponent.find('.todo-footer').getElement()
    ).to.exist;
  });
});
