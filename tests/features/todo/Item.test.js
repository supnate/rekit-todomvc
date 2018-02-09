import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Item } from 'src/features/todo';

describe('todo/Item', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Item />
    );

    expect(
      renderedComponent.find('.todo-item').getElement()
    ).to.exist;
  });
});
