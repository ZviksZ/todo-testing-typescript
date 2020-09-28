import * as React from 'react';
import {useState} from "react";

interface Props {
   imgLink: string
}

export const ImgContainer: React.FC<Props> = ({imgLink}) => {
   const [show, setShow] = useState<Boolean>(false)

   return (
      <div className="container">
         <img src={imgLink} alt={imgLink}/>
         {show &&  <img src={imgLink} alt={imgLink}/>}
         <button onClick={() => setShow(prevState => !prevState)}>Add img</button>
      </div>
   );
}

