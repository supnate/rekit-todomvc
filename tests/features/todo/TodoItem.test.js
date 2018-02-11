import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TodoItem } from 'src/features/todo';

describe('todo/TodoItem', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <TodoItem />
    );

    expect(
      renderedComponent.find('.todo-todo-item').getElement()
    ).to.exist;
  });
});
