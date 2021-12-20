import React, { useState, useEffect } from 'react'
import SizeBarInfo from '../../components/Khoa/SizeBarInfo'
import MainPage from '../../components/Khoa/MainPage'
import Friend from '../../components/Khoa/Friend'
import { getUserin4 } from '../../controller/firebase/firestore'
import { getSignedIn, signOutfunc } from '../../controller/firebase/authen'
import Playlist from '../../components/Khoa/Playlist'
import { getMusicsliked } from '../../controller/firebase/firestore'
// import { data } from '../../constants/playlist_fake'
import './style.css'
// import { addDataMusic } from '../../controller/firebase/firestore' //Chỉ dùng để push data lên firestore
// import { dataOri } from '../../constants/dataorigin'//Chỉ dùng để push data lên firestore
// dataOri.map((ele, ind) => { addDataMusic(ele, ind) })//Chỉ dùng để push data lên firestore
const Home = () => {
    const [userIn4, setUserIn4] = useState({})
    const [isLogin, setIsLogin] = useState(false)
    const [check, setCheck] = useState({})
    useEffect(() => {
        // console.log(check)
        getSignedIn(setCheck).then((res) => {
            if (typeof res === "string") {
                setIsLogin(true)
                getUserin4(res, setUserIn4)
                return res
            }
            else setIsLogin(false)
        })
    }, [check])
    const onClickSignOut = () => {
        if (window.confirm('Bạn có chắc đăng xuất không?')) { signOutfunc() }

        setIsLogin(false)
    }
    ///---------------Khoa-------------------------------------------------------------------
    const [isDisplayPlaylist, setIsDisplayPlaylist] = useState(false)
    const [dataPlaylist, setDataPlaylist] = useState([])
    useEffect(() => {
        let music = []
        getMusicsliked(userIn4.likedMusic, music, setDataPlaylist)
    }, [userIn4])

    const onHandleOpenPlaylist = () => {
        setIsDisplayPlaylist(!isDisplayPlaylist)
    }
    return (
        <div className="home-khoa">
            <SizeBarInfo
                isDisplayPlaylist={isDisplayPlaylist}
                onHandleOpenPlaylist={onHandleOpenPlaylist} />
            {isDisplayPlaylist === false
                ? <MainPage
                    isLogin={isLogin}
                    userIn4={userIn4}
                    onClickSignOut={onClickSignOut}
                    isDisplayPlaylist={isDisplayPlaylist}
                    setDataPlaylist={setDataPlaylist}
                />
                : <Playlist
                    isDisplayPlaylist={isDisplayPlaylist}
                    data={dataPlaylist}
                    setDataPlaylist={setDataPlaylist}
                    userIn4={userIn4}
                />}
            <Friend userIn4={userIn4} isLogin={isLogin} />

        </div>
    )
}

export default Home
