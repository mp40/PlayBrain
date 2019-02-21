import React from 'react';
import {shallow} from 'enzyme';
import Vote from './Vote';
import App from './App'

describe("Vote works",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Vote/>)
    })
    describe('selecting region',()=>{
        it('should select Japan when the Japan button is selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            expect(wrapper.state().selectedRegion).toEqual('Japan')
        })
        it('should select Taiwan when the Taiwan button is selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectTaiwan').simulate('click')
            expect(wrapper.state().selectedRegion).toEqual('Taiwan')
        })
        it('should select Hong Kong when the Hong Kong button is selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectHongKong').simulate('click')
            expect(wrapper.state().selectedRegion).toEqual('Hong Kong')
        })
        it('should select South East Asia when the South East Asia button is selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectSouthEastAsia').simulate('click')
            expect(wrapper.state().selectedRegion).toEqual('South East Asia')
        })
        it('should display the votes remaining message when region selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            expect(wrapper.text()).toContain('Click up to 3 Players')
        })
    })
})