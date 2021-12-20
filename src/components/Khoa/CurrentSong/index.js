import React from 'react'
import './style.css'

const CurrentSong = (props) => {
    const {songs, currentSongIndex, rotate} = props

    return (
        <div className="musicbar-currentsong-khoa">
            <div className="musicbar-currentsong-khoa-wrap">
                {songs[currentSongIndex] && <
                    img className={rotate === true ? 'img rotate-ani' : 'img'} 
                    src={songs[currentSongIndex].img_src} alt="ava-song" /> }
                {songs[currentSongIndex] && <div className="desc">
                    <p className="name">{songs[currentSongIndex].name}</p>
                    <p className="singer">{songs[currentSongIndex].singer}</p>
                </div>}
            </div>
        </div>
    )
}

export default CurrentSong
