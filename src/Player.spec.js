import React from 'react';
import {shallow} from 'enzyme';
import Player from './Player';

describe('Player card',()=>{
    it('should render',()=>{
        const wrapper = shallow(<Player/>)
    })
})