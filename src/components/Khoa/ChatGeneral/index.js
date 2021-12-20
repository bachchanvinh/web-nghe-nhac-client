import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { io } from "socket.io-client";
import './style.css'

const ChatGeneral = (props) => {
    const { isLoginprops, userNameprops } = props
    const [messageValue, setMessageValue] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [isLogin, setIsLogin] = useState(isLoginprops);
    const socketRef = useRef(null);
    const options = {
        "force new connection": true,
        reconnectionAttempts: "Infinity",
        timeout: 10000,
        transports: ["websocket"]
    }

    // https://web-nghe-nhac-sever.herokuapp.com
    useEffect(() => {
        const socket = io("https://web-nghe-nhac-sever.herokuapp.com");
        socketRef.current = socket;
        setIsLogin(isLoginprops)

        if (userNameprops !== undefined) {

            socket.emit("NEW_USER", userNameprops);
            socket.on("NEW_MESSAGE", (message) => {
                setMessageList((prev) => [message, ...prev]);
            });
        }
    }, [isLoginprops, userNameprops])

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (!socketRef.current) {
            return;
        }

        socketRef.current.emit("NEW_MESSAGE", messageValue);
        setMessageValue("")
    };

    return (
        <>
            <div className="chat-general-screen">
                {messageList.map((message) => {
                    return (
                        <div
                            key={message.id}
                            className={`chat-general-group ${socketRef.current.id === message.sender.socketId
                                ? "my-message" : ""}`}
                        >
                            <p className="chat-name">{message.sender.username} :</p>
                            <p className="chat-mess">{message.content}</p>
                        </div>
                    );
                })}
            </div>
            <form className={isLogin === true ? "chat-general-form" : "chat-general-form please-sign"}
                onSubmit={handleSendMessage}>
                <input type="text"
                    className="chat-general-form-item"
                    placeholder="Nói gì đó ..."
                    value={messageValue}
                    onChange={(event) => {
                        setMessageValue(event.target.value);
                    }}
                />
                <Link to={"/signin"} className="chat-general-form-sign">Đăng nhập để chat</Link>
            </form>
        </>
    )
}

export default ChatGeneral
