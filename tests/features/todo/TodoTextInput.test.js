import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { TodoTextInput } from 'src/features/todo';

describe('todo/TodoTextInput', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <TodoTextInput />
    );

    expect(
      renderedComponent.find('.todo-todo-text-input').getElement()
    ).to.exist;
  });
});
