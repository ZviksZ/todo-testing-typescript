import * as React from 'react';
import {useState} from "react";

interface Props {
   imgLink: string
   callback?: () => void
}

const mock = () => {}

export const ImgContainer: React.FC<Props> = ({imgLink, callback = mock}) => {
   const [show, setShow] = useState<Boolean>(false)

   const clickHandler = () => {
      setShow(prevState => !prevState)
      callback()
   }

   return (
      <div className="container">
         <img src={imgLink} alt={imgLink}/>
         {show &&  <img src={imgLink} alt={imgLink}/>}
         <button onClick={clickHandler}>Add img</button>
      </div>
   );
}

