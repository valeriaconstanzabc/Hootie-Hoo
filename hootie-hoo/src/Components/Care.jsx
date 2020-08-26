import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/Care.css';
import Thoughts from '../Assets/infografia-pensamientos3.JPG';
import Handwashing from '../Assets/infografia-lavado.jpg';
import Together from '../Assets/infografia-juntos-contra-el-virus2.png';

const Care = props => {
    return (
        <div className="careContainer">
            <div className="contentCareContainer">

                <div>
                    <h1 className="tittleContent">Cuidados en casa</h1>
                </div>                

                <div className="carouselCare" data-flickity='{ "autoPlay": true}'>
                    <div className="carousel-cell-care">
                        {/* <img className="imgCare" width={250} height={300} src="https://i.ibb.co/xg4MG9b/infografia-pensamientos3.jpg" alt="infografia-pensamientos3" border="0"/> */}
                        <img src={Thoughts} alt=""/>
                    </div>

                    <div className="carousel-cell-care">
                        <img src={Handwashing} alt=""/>
                        {/* <img className="imgCare" width={300} height={400} src="https://i.ibb.co/gWNpp4G/infografia-lavado.jpg" alt="infografia-lavado" border="0"/> */}
                    </div>

                    <div className="carousel-cell-care">
                        <img src={Together} alt=""/>
                        {/* <img className="imgCare" width={300} height={400} src="https://i.ibb.co/54zcPSL/infografia-juntos-contra-el-virus.png" alt="infografia-juntos-contra-el-virus" border="0"/> */}
                    </div>

                </div>


            </div>
        </div>
    )
}

Care.propTypes = {

}

export default Care
