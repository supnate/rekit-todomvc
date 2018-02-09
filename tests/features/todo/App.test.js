import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { App } from 'src/features/todo/App';

describe('todo/App', () => {
  it('renders node with correct class name', () => {
    const props = {
      todo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <App {...props} />
    );

    expect(
      renderedComponent.find('.todo-app').getElement()
    ).to.exist;
  });
});
