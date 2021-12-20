import React, { useState, useEffect } from 'react'
import MainList from '../MainList'
import MainMenu from '../MainMenu'
import CurrentSong from '../CurrentSong'
import Player from '../Player'
import NextSong from '../NextSong'
import { updateLikedMusic } from '../../../controller/firebase/firestore'
import './style.css'

const Playlist = (props) => {
  const { isDisplayPlaylist, data, setDataPlaylist, userIn4 } = props
  let [songs, updateSongs] = useState([]);
  const [isLogin, setIsLogin] = useState(true)
  const [keywordFilter, setKeywordFilter] = useState('')
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [isActiveId, setIsActiveId] = useState(1)
  const [rotate, setRotate] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false)


  useEffect(() => {
    updateSongs(data)
  }, [data])

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  const onHandleClickMusic = (uid) => {
    setIsActiveId(uid)
    setCurrentSongIndex(uid - 1)
  }

  const onSearch = (key) => {
    setKeywordFilter(key.toLowerCase())
  }

  const onHandleDelSong = (song) => {
    setDataPlaylist(prev => {
      let newSongs = [...prev]
      let indexSongDel = prev.findIndex(item => item.name === song.name)
      newSongs.splice(indexSongDel, 1)
      for (let i = 0; i < newSongs.length; i++) {
        if (i >= indexSongDel) {
          newSongs[i].uid--
        }
      }
      let songListUID = []
      newSongs.map((song) => songListUID.push(song.uid_name))
      updateLikedMusic(userIn4.uid, songListUID)
      return [...newSongs]
    })
  }

  if (keywordFilter) {
    let newSong = songs.filter((song) => song.name.toLowerCase().indexOf(keywordFilter) !== -1);
    if (newSong.length > 0) {
      songs = newSong
    }
  }

  return (
    <div className="main-khoa">
      <MainMenu
        onSearch={onSearch}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />

      <div className="container">
        <MainList
          currentSongIndex={currentSongIndex}
          songs={songs}
          onHandleClickMusic={onHandleClickMusic}
          isActiveId={isActiveId}
          isDisplayPlaylist={isDisplayPlaylist}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onHandleDelSong={onHandleDelSong}
        />
      </div>

      <div className="musicbar">
        <CurrentSong
          currentSongIndex={currentSongIndex}
          songs={songs}
          rotate={rotate}
        />
        <Player
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          nextSongIndex={nextSongIndex}
          songs={songs}
          onHandleClickMusic={onHandleClickMusic}
          setRotate={setRotate}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <NextSong
          nextSongIndex={nextSongIndex}
          songs={songs}
        />
      </div>
    </div>
  )
}

export default Playlist