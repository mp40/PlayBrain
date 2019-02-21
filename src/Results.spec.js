import React from 'react';
import {shallow} from 'enzyme';
import Results from './Results';

describe("Vote works",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Results/>)
    })
})
describe('View Region',()=>{
    it('should select Japan when the Japan button is selected',()=>{
        const wrapper = shallow(<Results/>)
        wrapper.find('#viewJapan').simulate('click')
        expect(wrapper.state().viewRegion).toEqual('Japan')
    })
    it('should select Taiwan when the Taiwan button is selected',()=>{
        const wrapper = shallow(<Results/>)
        wrapper.find('#viewTaiwan').simulate('click')
        expect(wrapper.state().viewRegion).toEqual('Taiwan')
    })
    it('should select Hong Kong when the Hong Kong button is selected',()=>{
        const wrapper = shallow(<Results/>)
        wrapper.find('#viewHongKong').simulate('click')
        expect(wrapper.state().viewRegion).toEqual('Hong Kong')
    })
    it('should select South East Asia when the South East Asia button is selected',()=>{
        const wrapper = shallow(<Results/>)
        wrapper.find('#viewSouthEastAsia').simulate('click')
        expect(wrapper.state().viewRegion).toEqual('South East Asia')
    })
})

describe('View Players',()=>{
    it('should render the players names',()=>{
        const wrapper = shallow(<Results/>)
        wrapper.find('#viewJapan').simulate('click')
        expect(wrapper.text()).toContain('Narvi')
    })
    it('should render the players message',()=>{
        const wrapper = shallow(<Results/>)
        wrapper.find('#viewJapan').simulate('click')
        expect(wrapper.text()).toContain('the anchor/captain of the Singapore team')
    })
})