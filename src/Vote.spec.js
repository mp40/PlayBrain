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
    })
})