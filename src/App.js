import { useEffect, useState } from 'react';
import './App.css';
import ControlLettre from './ControlLettre';
import Lettre from './Lettre';
import { data } from './data';





const App = () => {

  const [soundLetter, setSoundLetter] = useState("");
  const [volume, setVolume] = useState(1);
  const [voyelles, setVoyelles] = useState([]);
  const [voyelleSound, setVoyelleSound] = useState([]);
  const [indexx, setIndexx] = useState();
  const [ color, setColor] = useState(false);
  let bgColor = setColor ? "black" : "red"

  
  const play = (key, sound, voyelles, voyelleSound) => {
    setSoundLetter(sound);
    setVoyelles(voyelles);
    console.log(voyelles);
    
    setVoyelleSound(voyelleSound);
    console.log(voyelleSound);
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    
    
  };

  const handleVolumeChange = (e) => {
    
    setVolume(e.target.value);

  };
  
  const setKeyVolume = () => {
    const audio = data.letters.map(sound => document.getElementById(sound.id));
    audio.forEach(audio => {
      if (audio) {
        audio.volume = volume;
        
      }
    })
  };

  return (
    <div id="alphabet-machine" className='container-fluid'>
      <div className="drum">
        {setKeyVolume()}
        <h1 className="drum__title"> الحروف الأبجدية العربية </h1>
        <div className='control'>
          <div className='display'>
            <Lettre play={play} 
            />
          </div>
          <div>
            <ControlLettre
              volume={volume}
              handleVolumeChange={handleVolumeChange}
              name={soundLetter}
              nom={voyelles[indexx]}
              voyelles={voyelles}
              voyelleSound={voyelleSound}
            />       
            
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;


