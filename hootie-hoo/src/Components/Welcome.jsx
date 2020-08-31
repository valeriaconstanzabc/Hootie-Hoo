import React, { useState, useEffect } from "react";
import '../Styles/Welcome.css';
import Audio1 from '../Audios/1.mp3'

const useAudio = () => {
    const [audio] = useState(new Audio(Audio1));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing, audio]
    )
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, [audio])
  
    return [playing, toggle];
}

const Welcome = ({ Audio1 }) => {
    const [playing, toggle] = useAudio(Audio1);
    return (
        <div className="containerWelcome">
            <div className="welcomeContainer">
                <div className="contentContainerWelcome">
                    <div className="containerBtnAudioWelcome">
                        <div className="hoverBtnAudioWelcome">
                            <button onClick={toggle} className="btnAudio">
                                { playing ?
                                    <img className="imgAudio" src="https://i.ibb.co/F3dRg0X/Group-10-copiaa.png" alt="Audio"/> : 
                                    <img className="imgAudio" src="https://i.ibb.co/gPX08Lp/Group-10.png" alt="Audio"/>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="containerText">
                        <p className="text">
                            En este lugar, podrás encontrar herramientas de autocuidado 
                            para niñas/niños en edad escolar y sus familias, durante esta
                            la contingencia sanitaria.
                            <br/><br/>
                            Este programa, está dirigido a familias con pequeños 
                            entre 4 a 8 años, con usuarios pensados en madres, padres, 
                            formadores y/o cuidadores de niños y niñas en edad escolar.
                        </p>
                    </div>
                </div>
                <div className="containerImgWelcome">
                    <img className="imgWelcome" src="https://i.ibb.co/7KsnYmj/Group-8.png" alt="Buho hootie hoo"/>
                </div>
            </div>
        </div>
    )
}

export default Welcome
