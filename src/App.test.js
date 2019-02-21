import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

describe('rendering components',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should not render the Modal component on start',()=>{
    const wrapper = mount(<App/>)
    expect(wrapper.text()).not.toContain('Modal displayed')
  })
})

describe('the modal button',()=>{
  it('should open the modal when button is clicked',()=>{
    const wrapper = mount(<App/>)
    wrapper.find('#openModal').simulate('click')
    expect(wrapper.text()).toContain('Modal displayed')
  })
})
