import React, { useState, useEffect } from "react";
import '../Styles/Games.css';
import Audio3 from '../Audios/3.mp3'
import Audio4 from '../Audios/4.mp3'

const useAudio3 = () => {
    const [audio] = useState(new Audio(Audio3));
    const [playing, setPlaying] = useState(false);
  
    const toggle1 = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    )
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [])
  
    return [playing, toggle1];
}

const useAudio4 = () => {
    const [audio] = useState(new Audio(Audio4));
    const [playingg, setPlayingg] = useState(false);
  
    const toggle2 = () => setPlayingg(!playingg);
  
    useEffect(() => {
        playingg ? audio.play() : audio.pause();
      },
      [playingg]
    )
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlayingg(false));
      return () => {
        audio.removeEventListener('ended', () => setPlayingg(false));
      };
    }, [])
  
    return [playingg, toggle2];
}

const Games = ({ Audio3, Audio4 }) => {
    const [playing, toggle1] = useAudio3(Audio3);
    const [playingg, toggle2] = useAudio4(Audio4);
    return (
        <div className="containerGames">
            <div className="gamesContainer">
                <div className="contentContainerGames">
                    <div className="container ">
                        <div className="row justify-content-between">
                            <div className="col">
                            <div className="containerImgGamesRed">
                                <div className="hoverBtnAudioWelcome">
                                    <button onClick={toggle1} className="btnAudio">
                                        <img className="imgAudio" src="https://i.ibb.co/gPX08Lp/Group-10.png" alt="Audio"/>
                                    </button>
                                </div>
                                <p className="text text-justify">
                                            La memoria es esencial para el aprendizaje, las habilidades 
                                            comunicativas y sociales de los niños. 
                                            <br/><br/>
                                            Pon a prueba tus habilidades con nuestro juego de memoria. 
                                            Encuentra las parejas de todas las tarjetas en el menor 
                                            número de movimientos posible.
                                </p>
                            </div>
                            </div>
                            <div className="col">
                                <div className="containerText">
                                    <div className='row '>
                                         
                                        <h3 className='col text-center'>Juguemos</h3>
                                </div>
                                    <img className="imgCenterGames" src="https://i.ibb.co/FnqY3PG/imgGames.png" alt="imgGames" alt="Buho hootie hoo"/>
                                </div>
                            </div>
                                <div className="col">
                                    <div className="containerImgGames">
                                        <div className="hoverBtnAudioWelcome">
                                            <button onClick={toggle2} className="btnAudio">
                                                <img className="imgAudio" src="https://i.ibb.co/gPX08Lp/Group-10.png" alt="Audio"/>
                                            </button>
                                        </div>
                                        <p className="text text-justify">
                                            Sube de nivel y aumentarán los personajes, asi como los premios 
                                            que puedes ganar: imagenes de nuestros personajes del escuadrón 
                                            prevención y entretenidos cuentos para afianzar tus conocimientos 
                                            sobre como ganarle al virus y mantenerte sano y feliz. 
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Games
