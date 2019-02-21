import React from 'react';
import {shallow} from 'enzyme';
import Results from './Results';

describe("Vote works",()=>{
    it('should render',()=>{
        const wrapper = shallow(<Results/>)
    })
})