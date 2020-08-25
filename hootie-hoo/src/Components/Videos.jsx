import React from 'react'
import '../Styles/Videos.css';
import ReactPlayer from 'react-player'

const Videos = () => {
    return (
        <div className="containerVideos">
            <div className="contentContainer">
                <div>
                    <h1 className="tittleContent">Videos</h1>
                </div>
                <div class="carousel" data-flickity='{ "wrapAround": true }'>
                    <div className="carousel-cell" >
                        <ReactPlayer width={900} height={500} url="https://www.youtube.com/watch?v=9skA9MFlcs4" controls={true} />
                    </div>
                    <div className="carousel-cell" >
                        <ReactPlayer width={900} height={500} url="https://www.youtube.com/watch?v=G2BHb6kWnRc&t=23s" controls={true} />
                    </div>
                    <div className="carousel-cell" >
                        <ReactPlayer width={900} height={500} url="https://www.youtube.com/watch?v=tuILs6Zedco&t=2s" controls={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos
