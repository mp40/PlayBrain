import React from 'react';
import {shallow} from 'enzyme';
import Vote from './Vote';

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
        it('should display message on valid region',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            expect(wrapper.text()).toContain('The remainder of your votes must be for Japan')
        })
    })
    describe('voting',()=>{
        it('should start with three votes',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            expect(wrapper.text()).toContain('3 votes remaining')
        })
        it('should reduce remaining votes by one when avatar clicked',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            wrapper.find('#img1').simulate('click')
            expect(wrapper.text()).toContain('2 votes remaining')
        })
    })
    describe('Available Players',()=>{
        it('should render the players names',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            expect(wrapper.text()).toContain('Narvi')
        })
        it('should render the players message',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            expect(wrapper.text()).toContain('the anchor/captain of the Singapore team')
        })
    })
})