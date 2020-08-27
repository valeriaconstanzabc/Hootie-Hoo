import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../Styles/Guides.css';
import Relations from '../Assets/guia-cuidando-las-relaciones.png';
import Covid from '../Assets/guia-que-es-el-covid.png';
import WhatsHappening from '../Assets/guia-que-esta-pasando.png';
import PdfRelations from '../Downloadables/HH_GanemosleAlVirus_PDF_M2_T1_cuidando_relaciones.pdf';
import PdfCovid from '../Downloadables/HH_GanemosleAlVirus_PDF_M1_T2_que_es_covid.pdf';
import PdfWhatsHappening from '../Downloadables/HH_GanemosleAlVirus_PDF_M1_T1_que_esta_pasando.pdf';

const Guides = () => {
    return (
        <div className="guideContainer">
            <div className="contentGuideContainer">

                <div>
                    <h1 className="tittleContent">Guías descargables</h1>
                </div>        

             <Splide
                options={
                    {
                        type: 'loop',
                        gap          : '1rem',
                        autoplay     : true,
                        interval: 8000,
					    resetProgress: false,
                        arrows       : 'slider',
                        perPage: 2,
                        focus: 'center',
                    }
                }
                hasSliderWrapper
                hasAutoplayProgress
				>   
                <SplideSlide>
                    <div className="carousel-img-guide">
                        <a href={PdfWhatsHappening} download="HH_GanemosleAlVirus_PDF_M1_T1_que_esta_pasando.pdf"><img width={600} src={WhatsHappening} alt=""/></a>                   
                    </div>
               </SplideSlide>
               
               <SplideSlide>
                    <div className="carousel-img-guide">
                        <a href={PdfCovid} download="HH_GanemosleAlVirus_PDF_M1_T2_que_es_covid.pdf"><img width={600} src={Covid} alt=""/></a>                      
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-guide">
                       <a href={PdfRelations} download="HH_GanemosleAlVirus_PDF_M2_T1_cuidando_relaciones.pdf"><img width={600} src={Relations} alt=""/></a>
                    </div>
                </SplideSlide>     
                                           
              </Splide>                 
            </div>
        </div>
    );
}

export default Guides;
