import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Care.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Thoughts from '../Assets/infografia-pensamientos3.JPG';
import Handwashing from '../Assets/infografia-lavado.jpg';
import Together from '../Assets/infografia-juntos-contra-el-virus2.png';

const Care = () => {
    return (
        <div className="careContainer">
            <div className="contentCareContainer">

                <div>
                    <h1 className="tittleContent">Cuidados en casa</h1>
                </div>        

                <Splide
                options={
                    {
                        type: 'loop',
                        gap          : '1rem',
                        autoplay     : true,
                        interval: 10000,
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
                    <div className="carousel-img-care">
                        {/* <img className="imgCare" width={250} height={300} src="https://i.ibb.co/xg4MG9b/infografia-pensamientos3.jpg" alt="infografia-pensamientos3" border="0"/> */}
                        <img width={350} height={500} src={Thoughts} alt=""/>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-care">
                        <img width={350} height={500} src={Handwashing} alt=""/>
                        {/* <img className="imgCare" width={300} height={400} src="https://i.ibb.co/gWNpp4G/infografia-lavado.jpg" alt="infografia-lavado" border="0"/> */}
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className="carousel-img-care">
                        <img width={350} height={500} src={Together} alt=""/>
                        {/* <img className="imgCare" width={300} height={400} src="https://i.ibb.co/54zcPSL/infografia-juntos-contra-el-virus.png" alt="infografia-juntos-contra-el-virus" border="0"/> */}
                    </div>

                </SplideSlide>
                </Splide>     
               
            </div>
        </div>
    );
}

export default Care;
