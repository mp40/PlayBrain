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
})

describe('The Vote component',()=>{
  it('should render the Vote component on start',()=>{
    const wrapper = mount(<App/>)
    expect(wrapper.text()).toContain('Vote for players')
  })
  describe('selecting region',()=>{
    it('should select Japan when the Japan button is selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        expect(wrapper.state().selectedRegion).toEqual('Japan')
    })
    it('should select Taiwan when the Taiwan button is selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectTaiwan').simulate('click')
        expect(wrapper.state().selectedRegion).toEqual('Taiwan')
    })
    it('should select Hong Kong when the Hong Kong button is selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectHongKong').simulate('click')
        expect(wrapper.state().selectedRegion).toEqual('Hong Kong')
    })
    it('should select South East Asia when the South East Asia button is selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectSouthEastAsia').simulate('click')
        expect(wrapper.state().selectedRegion).toEqual('South East Asia')
    })
    it('should display the votes remaining message when region selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        expect(wrapper.text()).toContain('Click up to 3 Players')
    })
    it('should display message on valid region',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        expect(wrapper.text()).toContain('The remainder of your votes must be for Japan')
    })
  })
  
  describe('voting',()=>{
    it('should start with three votes',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        expect(wrapper.text()).toContain('3 votes remaining')
    })
    it('should reduce remaining votes by one when avatar clicked',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        wrapper.find('#img1').simulate('click')
        expect(wrapper.text()).toContain('2 votes remaining')
    })
    it('should not reduce vote if player already selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        wrapper.find('#img1').simulate('click')
        wrapper.find('#img1').simulate('click')
        expect(wrapper.text()).toContain('2 votes remaining')
    })
    it('should not reduce votes below 0',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectTaiwan').simulate('click')
        wrapper.find('#img1').simulate('click')
        wrapper.find('#img2').simulate('click')
        wrapper.find('#img3').simulate('click')
        wrapper.find('#img4').simulate('click')
        expect(wrapper.text()).toContain('0 votes remaining')
    })
    it('should add a "Your selection" tag',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectTaiwan').simulate('click')
        wrapper.find('#img1').simulate('click')
        expect(wrapper.text()).toContain('Your selection')
    })
    it('should reset votes to three if different country selected',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        wrapper.find('#img1').simulate('click')
        wrapper.find('#selectTaiwan').simulate('click')
        expect(wrapper.text()).toContain('3 votes remaining')
    })
  })
  describe('Available Players',()=>{
    it('should render the players names',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        expect(wrapper.text()).toContain('Narvi')
    })
    it('should render the players message',()=>{
        const wrapper = mount(<App/>)
        wrapper.find('#selectJapan').simulate('click')
        expect(wrapper.text()).toContain('the anchor/captain of the Singapore team')
    })
  })
})

describe('The Resuts component',()=>{
  describe('View Region',()=>{
    const wrapper = mount(<App/>)
    wrapper.setState({admin: true})
    wrapper.find('#adminCloseVote').simulate('click')
      it('should select Japan when the Japan button is selected',()=>{
          wrapper.find('#viewJapan').simulate('click')
          expect(wrapper.state().selectedRegion).toEqual('Japan')
      })
      it('should select Taiwan when the Taiwan button is selected',()=>{
          wrapper.find('#viewTaiwan').simulate('click')
          expect(wrapper.state().selectedRegion).toEqual('Taiwan')
      })
      it('should select Hong Kong when the Hong Kong button is selected',()=>{
          wrapper.find('#viewHongKong').simulate('click')
          expect(wrapper.state().selectedRegion).toEqual('Hong Kong')
      })
      it('should select South East Asia when the South East Asia button is selected',()=>{
          wrapper.find('#viewSouthEastAsia').simulate('click')
          expect(wrapper.state().selectedRegion).toEqual('South East Asia')
      })
  })
  describe('View Players',()=>{
      it('should render the players names',()=>{
          const wrapper = mount(<App/>)
          wrapper.setState({admin: true})
          wrapper.find('#adminCloseVote').simulate('click')
          wrapper.find('#viewJapan').simulate('click')
          expect(wrapper.text()).toContain('Narvi')
      })
      it('should render the players message',()=>{
          const wrapper = mount(<App/>)
          wrapper.setState({admin: true})
          wrapper.find('#adminCloseVote').simulate('click')
          wrapper.find('#viewJapan').simulate('click')
          expect(wrapper.text()).toContain('the anchor/captain of the Singapore team')
      })
      it('should display the relivant "Your selection" tag',()=>{
        const wrapper = mount(<App/>)
        wrapper.setState({admin: true})
        wrapper.find('#selectTaiwan').simulate('click')
        wrapper.find('#img1').simulate('click')
        wrapper.find('#adminCloseVote').simulate('click')
        wrapper.find('#viewTaiwan').simulate('click')
        expect(wrapper.text()).toContain('Your selection')
    })
    it('should display percentage of votes recieved for each player',()=>{
          const wrapper = mount(<App/>)
          wrapper.setState({admin: true})
          wrapper.find('#adminCloseVote').simulate('click')
          wrapper.find('#viewJapan').simulate('click')
          expect(wrapper.text()).toContain('15.69')
    })
  })
})

describe('admin',()=>{
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
})