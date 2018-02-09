import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Header } from 'src/features/todo';

describe('todo/Header', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Header />
    );

    expect(
      renderedComponent.find('.todo-header').getElement()
    ).to.exist;
  });
});
