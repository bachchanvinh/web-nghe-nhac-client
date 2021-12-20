import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const MainMenu = (props) => {
    const { isLogin, onClickSignOut, userIn4 } = props
    const [keyword, setKeyword] = useState('')

    const onChangeSearch = (e) => {
        const target = e.target
        const value = target.value
        setKeyword(value)
        props.onSearch(keyword)
    }

    const sign = () => {
        if (!isLogin) {
            return <>
                <Link to={"/signup"} className="sign-item">Đăng ký</Link>
                <Link to={"/signin"} className="sign-item">Đăng nhập</Link>
            </>
        }
        if (userIn4 !== undefined) {
            return <div className="user-info">
                <div className="friend-list-item">
                    <img alt="avatar" className="friend-list-img" src={userIn4.ava_src}></img>
                    <span className="friend-list-name">{userIn4.userName}</span>
                </div>
                <button className='sign-item' onClick={onClickSignOut} >Đăng xuất</button>
            </div>
        }
    }

    return (
        <div className="main-menu-khoa">
            <div className="search">
                <i className="search-icon fas fa-search"></i>
                <input className="input" type="text"
                    value={keyword}
                    onChange={onChangeSearch}
                    placeholder="Nhập tên bài hát" />
            </div>
            <div className="sign">
                {/* {isLogin && <>
                    <Link to={"/signup"} className="sign-item">Đăng ký</Link>
                    <Link to={"/signin"} className="sign-item">Đăng nhập</Link>
                </>} */}
                {sign()}
            </div>
        </div>
    )
}

export default MainMenu
