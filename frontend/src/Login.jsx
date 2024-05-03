import React, { useState, useContext, useRef } from 'react';
import profileImage from './image6.png';
import { IsLogin } from './LoginPageHandler';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isLogin,setIsLogin] = useContext(IsLogin);//placeholder for login

  const containerStyle = {
    background: 'linear-gradient(180deg, #F9F1C9 12.67%, #FFE2A9 44.67%)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const boxStyle = {
    position: 'relative',
    borderRadius: '90px',
    background: '#FFF',
    boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    width: '421px',
    height: '397px', // Change height to auto to accommodate dynamic content
    flexShrink: '0',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const circleStyle = {
    position: 'absolute',
    top: '-50px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '132px',
    height: '132px',
    borderRadius: '50%',
    background: `url(${profileImage})`,
  };

  const inputStyle = {
    width: '80%',
    marginBottom: '30px',
    padding: '10px',
    boxSizing: 'border-box',
    borderRadius: '30px',
    border: '1px solid #D9D9D9',
    backgroundColor: '#FFF',
    color: '#000',
    fill: '#FFF',
    strokeWidth: '1px',
    stroke: '#D9D9D9',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '30%',
    padding: '12px 20px',
    borderRadius: '30px',
    border: 'none',
    backgroundColor: '#FFF3B4',
    color: 'gray',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const usernameInput = useRef();
  const passwordInput = useRef();

  function mockLogin(){
    let name = usernameInput.current.value
    let pass = passwordInput.current.value
    if(name == 'Admin' && pass == 'nimda'){
      setIsLogin(!isLogin)
    }
  }
  return (
      <div style={containerStyle}>
        <div style={boxStyle}>
          <div style={circleStyle}></div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={inputStyle}
            ref={usernameInput}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={inputStyle}
            ref={passwordInput}
          />
          <button style={buttonStyle} onClick={() => {mockLogin()}}>Login</button>
        </div>
      </div>
  );
}
