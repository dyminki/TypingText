import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { TypingText } from '../components/TypingText.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<TextTyper />', () => {
    it('renders one Div element', () => {
      const wrapper = shallow(<TypingText text="text"/>);
      expect(wrapper.find('div')).toMatchSnapshot();
    });
  
    it('have correct props', () => {
      const wrapper = shallow(<TypingText text={['1 text', '2 text', '3 text', '4 text', '5 text']} />);
      expect(wrapper.instance().props.text[0]).to.equal('1 text');
      expect(wrapper.instance().props.text[1]).to.equal('2 text');
      expect(wrapper.instance().props.text[2]).to.equal('3 text');
      expect(wrapper.instance().props.text[3]).to.equal('4 text');
      expect(wrapper.instance().props.text[3]).to.equal('5 text');
    });
    
  });
