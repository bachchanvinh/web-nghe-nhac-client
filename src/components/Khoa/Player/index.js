import React, { useEffect, useRef, useState } from 'react'
import Control from '../Control'
import './style.css'

const Player = (props) => {
    const {songs, currentSongIndex, setCurrentSongIndex,
        setRotate, onHandleClickMusic, isPlaying, setIsPlaying} = props
    const audioEl = useRef(null)

    useEffect(() => {
        if(audioEl.current) {
            if (isPlaying) {
                audioEl.current.play();
                setRotate(true)
            }
            else {
                audioEl.current.pause()
                setRotate(false)
            }
        }
     })

    const SkipSong = (fowards = true) => {
        if(fowards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp ++

                if(temp > songs.length - 1) {
                    temp = 0
                }
                onHandleClickMusic(songs[temp].uid)
                return temp
            })
        }

        else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex
                temp --

                if(temp < 0) {
                    temp = songs.length - 1
                }
                onHandleClickMusic(songs[temp].uid)
                return temp
            })
        }

    }   

    return (
        <div className="player-khoa">
            <Control 
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                SkipSong={SkipSong}
            />
            {songs[currentSongIndex] && <audio
                className="c-player--audio"
                controls
                ref={audioEl}
                src={songs[currentSongIndex].src}
                onEnded={() => SkipSong()}
            ></audio> }
        </div>
    )
}

export default Player
