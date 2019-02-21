import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from 'enzyme'

describe('rendering components',()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render the Vote component on start',()=>{
    const wrapper = mount(<App/>)
    expect(wrapper.text()).toContain('Vote for players')
  })
})

describe('the results page', ()=>{
  it('should render the results page when admin closes votation',()=>{
    const wrapper = mount(<App/>)
    wrapper.setState({admin: true})
    wrapper.find('#adminCloseVote').simulate('click')
    expect(wrapper.text()).toContain('Results for voting in each region')
  })
})

describe('admin buttons',()=>{
  it('shoulder render a button to close votation for admins only',()=>{
      const wrapper = mount(<App/>)
      expect(wrapper.text()).not.toContain('Close Votation')
      wrapper.setState({admin: true})
      expect(wrapper.text()).toContain('Close Votation')
  })
})