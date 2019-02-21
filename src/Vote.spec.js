import React from 'react';
import {shallow} from 'enzyme';
import Vote from './Vote';
import App from './App'

describe("Vote works",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Vote/>)
    })
})