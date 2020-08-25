import React from 'react'
import '../Styles/Buttons.css';

const Buttons = () => {
    return (
        <div className="containerButtons">
            <div className="containerBtns">
                <div className="containerAllBtn">
                    <button className="btnGames">
                        <h4 className="tittleBtn">Juegos</h4>
                        <img className="iconBtn" src="https://i.ibb.co/xSkf8dW/puzzle.png" alt="Botón juegos"/>
                    </button>
                </div>
                <div className="containerAllBtn">
                    <button className="btnVideos">
                        <h4 className="tittleBtn">Videos</h4>
                        <img className="iconBtn" src="https://i.ibb.co/1zPFZX0/video-camara.png" alt="Botón videos"/>
                    </button>
                </div>
                <div className="containerAllBtn">
                    <button className="btnCovid">
                        <h4 className="tittleBtn">Covid</h4>
                        <img className="iconBtn" src="https://i.ibb.co/HhYyrNV/covid.png" alt="Botón covid"/>
                    </button>
                </div>
                <div className="containerAllBtn">
                    <button className="btnCare">
                        <h4 className="tittleBtn">Cuidados</h4>
                        <img className="iconBtn" src="https://i.ibb.co/0XZhpYC/casita.png" alt="Botón cuidados"/>
                    </button>
                </div>
                <div className="containerAllBtn">
                    <button className="btnGuides">
                        <h4 className="tittleBtn">Guías</h4>
                        <img className="iconBtn" src="https://i.ibb.co/5MLWDj7/libro.png" alt="Botón guías"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buttons
