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
        it('should not reduce vote if player already selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            wrapper.find('#img1').simulate('click')
            wrapper.find('#img1').simulate('click')
            expect(wrapper.text()).toContain('2 votes remaining')
        })
        it('should not reduce votes below 0',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectTaiwan').simulate('click')
            wrapper.find('#img1').simulate('click')
            wrapper.find('#img2').simulate('click')
            wrapper.find('#img3').simulate('click')
            wrapper.find('#img4').simulate('click')
            expect(wrapper.text()).toContain('0 votes remaining')
        })
        it('should add a "Your selection" tag',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectTaiwan').simulate('click')
            wrapper.find('#img1').simulate('click')
            expect(wrapper.text()).toContain('Your selection')
        })
        it('should reset votes to three if different country selected',()=>{
            const wrapper = shallow(<Vote/>)
            wrapper.find('#selectJapan').simulate('click')
            wrapper.find('#img1').simulate('click')
            wrapper.find('#selectTaiwan').simulate('click')
            expect(wrapper.text()).toContain('3 votes remaining')
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
    describe('admin buttons',()=>{
        it('shoulder render a button to close votation for admins only',()=>{
            const wrapper = shallow(<Vote/>)
            expect(wrapper.text()).toContain('Close Votation')
            wrapper.setState({admin: true})
            expect(wrapper.text()).toContain('Close Votation')
        })
    })
})