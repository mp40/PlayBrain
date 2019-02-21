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
  it('should render the Vote component on start',()=>{
    const wrapper = mount(<App/>)
    expect(wrapper.text()).toContain('Vote for players')
  })
})

