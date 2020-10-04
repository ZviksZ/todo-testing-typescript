import * as React                   from 'react';
import {shallow}                    from 'enzyme';
import {fireEvent, render, cleanup} from "@testing-library/react";
import {ImgContainer}               from "../components/ImgContainer";

let defImg = './defImg.jpg'

describe('<ImgContainer />', () => {
   afterEach(cleanup);

   it('hasn`t got changes', () => {

      const component = shallow(<ImgContainer imgLink={defImg} />);

      expect(component).toMatchSnapshot();
   });

   it('should be one img',  async () => {

      const component = shallow(<ImgContainer imgLink={defImg} />);


      const img = component.find("img");

      expect(img).toHaveLength(1);
   });

   it('should be two img',  async () => {
      const { container } = render(<ImgContainer imgLink={defImg} />);

      fireEvent.click(container.querySelector('button'))

      const img = container.querySelectorAll("img");

      expect(img).toHaveLength(2);
   });

   it('should btn be clicked',  async () => {
      const mockCallBack = jest.fn();
      const { container } = render(<ImgContainer imgLink={defImg} callback={mockCallBack}/>);


      expect(mockCallBack.mock.calls.length).toBe(0);

      fireEvent.click(container.querySelector('button'))

      expect(mockCallBack.mock.calls.length).toBe(1);
   });


})
