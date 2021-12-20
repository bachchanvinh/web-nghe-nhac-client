import React from 'react'
import './style.css'

const NextSong = (props) => {
    const {songs, nextSongIndex} = props

    return (
        <div className="musicbar-nextsong-khoa">
            <h1>next song:</h1>
            <div className="musicbar-nextsong-khoa-wrap">
                {songs[nextSongIndex] && <img className="img" src={songs[nextSongIndex].img_src} alt="ava-song"/>}
                {songs[nextSongIndex] && <div className="desc">
                    <p className="name">{songs[nextSongIndex].name}</p>
                    <p className="singer">{songs[nextSongIndex].singer}</p>
                </div>}
            </div>
        </div>
    )
}

export default NextSong
