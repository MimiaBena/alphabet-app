
import { data } from './data'

const Lettre = ({ play}) => {
    
    
  
    return (
       
        data.letters.map((sound, id) => {
            return <button key={sound.id} className='buttonLetter'  onClick={() => {play(sound.id, 
            sound.letter, sound.voyelles, sound.voyellesound)}}  >
                <audio id={sound.id} src={sound.path} />
               
                {sound.letter}
                
            </button>
        })
    );

};

export default Lettre;