import React from 'react'
import MainItem from '../MainItem'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlay,
    faPause
}  from "@fortawesome/free-solid-svg-icons";
import './style.css'

const MainList = (props) => {
    const {onHandleClickMusic, currentSongIndex, songs, isActiveId, 
        isDisplayPlaylist, onHandleAddSong, onHandleDelSong} = props
    
    return (
        <div className="row main-list-khoa">
            {isDisplayPlaylist && <div className="title-playlist">
                {songs[currentSongIndex] && <img className="img" 
                    src={songs[currentSongIndex].img_src} alt="ava-song" />}
                <div className="title-playlist-wrap">
                    {songs[currentSongIndex] && <p className="name" >{songs[currentSongIndex].name}</p>}
                    {songs[currentSongIndex] && <p className="singer" >{songs[currentSongIndex].singer}</p>}
                    <button className="btn"
                    onClick={() => props.setIsPlaying(!props.isPlaying)}
                    >
                        {props.isPlaying ? <FontAwesomeIcon icon={faPause} />
                                        : <FontAwesomeIcon icon={faPlay} />}
                        {" "}
                        Play
                    </button>
                </div>
            </div>}

            <div className="main-title">
                <div className="title-name">Tên bài hát</div>
                <p className="title-singer">Tên nghệ sĩ</p>
                <p className="title-time">Thời gian</p>
                {!isDisplayPlaylist && <div className="title-like">Thêm vào playlist</div>}
                {isDisplayPlaylist && <div className="title-like">Xóa khỏi playlist</div>}
            </div>

            {songs.map((song, idx) => {
                return <MainItem  
                key = {idx}
                song={song}
                onHandleClickMusic={onHandleClickMusic}
                currentSongIndex={currentSongIndex}
                isActiveId={isActiveId}
                isDisplayPlaylist={isDisplayPlaylist}
                onHandleAddSong={onHandleAddSong}
                onHandleDelSong={onHandleDelSong}
                />
            })}
        </div>
    )
}

export default MainList
