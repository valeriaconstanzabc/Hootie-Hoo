import React, { useState, useEffect } from "react";
import '../Styles/Covid.css';
import Audio2 from '../Audios/2.mp3'

const useAudio = () => {
    const [audio] = useState(new Audio(Audio2));
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

const Covid = () => {
    const [playing, toggle] = useAudio(Audio2);

    return (
        <div className="containerCovid">
            <div className="covidContainer">
                <div className="contentContainerCovid">
                    <div className="container ">
                        <div className="row justify-content-between">
                            <div className="col">
                            <div className="containerImgCovidRed">
                                <img className="imgCovidRed" src="https://i.ibb.co/tMQkXx0/GAV-Personaje07.png" alt="Buho hootie hoo"/>
                            </div>
                            </div>
                            <div className="col-7">
                                <div className="containerText">
                                    <div className='row '>
                                        <div className="hoverBtnAudioWelcome">
                                            <button onClick={toggle} className="btnAudio">
                                                <img className="imgAudio" src="https://i.ibb.co/gPX08Lp/Group-10.png" alt="Audio"/>
                                            </button> 
                                        </div>
                                        <h3 className='col align-content-center'>Covid</h3>
                                    </div>
                                    <p className="text text-justify">
                                           Según la Organización Mundial de la Salud (OMS), el conavirus 
                                        es un virus que puede  causar enfermedades respiratorias, el 
                                        cual, puede ser muy leve e incluso asintomático; pero, también,  
                                        puede llegar a generar graves  consecuencias e incluso muerte.
                                        <br/><br/>
                                           Dada esta situación, las autoridades a nivel mundial han dado 
                                        algunas recomendaciones generales relacionadas con resguardos 
                                        higiénicos (lavado de manos, sanitización de espacios, entre otros) 
                                        como también físicos (distanciamiento social, confinamiento, 
                                        entre otros). 
                                    </p>
                                </div>
                            </div>
                                <div className="col">
                                    <div className="containerImgCovid">
                                        <img className="imgCovid" src="https://i.ibb.co/J39RKs1/GAV-Personaje02.png" alt="Buho hootie hoo"/>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default Covid
