import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

function LoginModal({open, close}) {

    const loginModal = useRef() ;

    function clickOutside(t) {        
        if(t.classList.contains("outside")) {
            close() ;
        }        
    }

    return (
        <Modal ref={loginModal}>
            {
                open ? (
                    <div className="modal">
                        <div  className='outside' onClick={e => clickOutside(e.target)}>
                            <div className="login-modal">
                                <button onClick={close} className="closeBtn">×</button>
                                <span className="logo">
                                    <img src="https://cdn.inflearn.com/public/files/pages/4c8987f9-1d40-42f3-b6cc-f316c2d0a8d5/logo1.png" alt="" />
                                </span>
                                <form action="#">
                                    <div className="form-input">
                                        <Input className="input-email">
                                            <input type="text" placeholder='이메일'  />
                                        </Input>                                                    
                                        <Input className="input-pw">
                                            <input type="password" placeholder='비밀번호'  />
                                            <span><iconify-icon icon="akar-icons:eye-open"></iconify-icon></span>
                                        </Input>
                                    </div>
                                    <button className='subBtn' type="submit">로그인</button>                                                    
                                </form>
                                <p className="more">
                                    <a href="/">아이디(이메일) 찾기</a>
                                    <span className='divider'> | </span>
                                    <a href="/">비밀번호 찾기</a>
                                    <span className='divider'> | </span>
                                    <a href="/">회원가입 찾기</a>
                                </p>
                                <div className="social-login">
                                    <hr />
                                    <span>간편 로그인</span>
                                    <div className="social-wrap">
                                        <button><img src="https://cdn-icons-png.flaticon.com/512/3991/3991999.png" alt="" /></button>
                                        <button><img src="http://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/aFrEyVpANu07FvoBZQbIB4aF_uc" alt="" /></button>
                                        <button><img src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png" alt="" /></button>
                                        <button><img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/facebook_original_logo_icon_146526.png" alt="" /></button>
                                        <button><img src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuqJpZ%2FbtqyenBIIXx%2Fmh1Cc5F023UGpfQTFBdqV0%2Fimg.jpg" alt="" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            } 
        </Modal>       
    );
}

export default LoginModal;

const Modal = styled.div`

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background:  rgba(0, 0, 0, 0.6);
        z-index: 1;
        height: 100%;
    }
    .outside {
        height: 100%;
    }

/* white login modal  */
    .login-modal {           
        background-color: white;
        width: 360px;
        height: 432px;
        position: relative;
        margin: 150px auto;
        padding: 10px 20px;
        border-radius: 6px;
        z-index: 100;
    }
    .closeBtn {
        width: 100%;
        text-align:end ;
        color: black;
        font-size: 25px;
    }
    .logo {
        margin: 10px 0 30px ;
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .logo img {        
        width: 135px;
        height: 24px;
    }

    .subBtn {
        width: 312px;
        height: 48px;
        background-color: #00c471;
        border-radius: 4px;
        color: white;
        margin: 15px 0;
    }

    .more {
        font-size: 13px;
        line-height: 15px;
        text-align: center;
    }
    .more a {
        text-decoration: underline;
    }

    .social-login hr {
        position: relative;
        bottom: -15px;
        display: block;
        width: 100%;
        height: 1px;
        z-index: 0;
        border: none;
        background-color: #f1f3f5;
    }
    .social-login span {
        padding: 0 8px;
        display: flex;
        justify-content: center;
        background-color: white;
        color: #abb0b5;
        font-size: 11px;
        z-index: 111  ;
        text-align: center;
        margin-bottom: 16px;
    }

    .social-wrap {
        display: flex;
        justify-content: center;
    }
    .social-wrap button {
        margin-right: 6px;
        border-radius: 4px;
    }
    .social-wrap img {
        width: 44px ;
        height: 44px;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
        border-radius: 4px;
    }
`

const Input = styled.div`
    display: flex;
    padding: 0 10px;
    width: 312px;
    height: 48px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    input {        
        width: 100%;
    }
    input:focus {
        /* border: 1px solid #1AC078; */
    }

    /* 눈 깜빡이 버튼 */
    span {
        cursor: pointer;
    }
`