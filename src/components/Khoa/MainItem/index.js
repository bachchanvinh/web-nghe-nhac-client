import React from 'react'
import './style.css'

const MainItem = (props) => {
    const {song, isActiveId, isDisplayPlaylist, 
        onHandleAddSong} = props

    const handleClickMusic = (uid) => {
        props.onHandleClickMusic(uid)
    }

    const handleAddSong = (song) => {
        onHandleAddSong(song)
    }

    const handleDelSong = (song) => {
        props.onHandleDelSong(song)
    }

    return (
        <div className={isActiveId === song.uid ? "main-item-khoa active" : "main-item-khoa"}>
            <div className="details-info">
                <img src={song.img_src} alt="" />
                <button onClick={() => {handleClickMusic(song.uid)}} 
                        className="details-name">
                    {song.name}
                </button>
            </div>
            <p className="details-singer">{song.singer}</p>
            <p className="details-time">{song.time}</p>
            {!isDisplayPlaylist && 
            <div className="details-like" onClick={() => handleAddSong(song)}>
                <i className="details-like-icon-empty details-like-icon far fa-heart"></i>
                <i className="details-like-icon-fill details-like-icon fas fa-heart"></i>
            </div>}
            {isDisplayPlaylist && 
            <div className="details-like"
            onClick={() => {
                if(window.confirm('Bạn có chắc xóa bài hát này khỏi playlist?'))
                {handleDelSong(song)}
            }}
            >
                <i className="details-like-icon fas fa-trash"></i>
            </div>}
        </div>
    )
}

export default MainItem
