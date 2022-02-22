import { BiHappyBeaming } from "react-icons/bi";
import Voyelle from "./Voyelle";
import { useState } from "react";

const ControlLettre = ({name, volume, handleVolumeChange, voyelles, voyelleSound}) => {

  const [indexx, setIndexx] = useState();


    const play2 = (index ) =>{  
        {setIndexx(index)}
        const audio = document.getElementById(index);
        audio.currentTime = 0;
        audio.play();  
         
      };
    
    
    return (
        <div className="volume">
            <h1 className="viv">  {name}  </h1> 
            <h4>Volume:</h4>
            <input className="slider"
            max="1" min="0" step='0.01' type="range" value={volume} onChange={handleVolumeChange} />  
            <BiHappyBeaming />
            <Voyelle data1={voyelles} play2={play2}
           voyelleSound={voyelleSound}
           />
           <h1 className="voyelle">  {voyelles[indexx] }  </h1>       
        </div>
    );  
};
export default ControlLettre;