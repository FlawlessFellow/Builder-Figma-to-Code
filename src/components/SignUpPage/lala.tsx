import React, { useState, useRef, useEffect } from 'react';
import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import taskTrackersImg from '../../../assets/images/tasktrackers.svg';
import handImg from '../../../assets/images/hand.svg';
import successGreenIcon from '../../../assets/images/success-green-icon.svg';
import closeIcon from '../../../assets/images/close-icon.png';
import passwordIcon from '../../../assets/images/password-icon.svg';
import BlueBtn from '../../BlueBtn/BlueBtn';
import trackerTrelloImg from '../../../assets/images/time-tracker-trello.svg';
import appGitHubImg from '../../../assets/images/app-github.svg';
import toolGitHubImg from '../../../assets/images/tool-github.svg';

const SignUpSection = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <section id="sign__up-section">
            <div className="left__module-wrapper">
                <div className="left__module-topImages">
                    <img src={taskTrackersImg} className="task__tracker-img" alt="task-tracker-img" />
                    <img src={handImg} className="hand-img" alt="hand-img" />
                </div>
                <div className="left__module-bottomContent">
                    <div>
                        <img src={successGreenIcon} alt="" className="first__leftBottom-image" />
                        <span className="left__bottom-text">Get All Features for Free</span>
                    </div>
                    <div>
                        <img src={successGreenIcon} alt="" className="second__leftBottom-image" />
                        <span className="left__bottom-text">Set up in 1 minute</span>
                    </div>
                </div>
            </div>

            <div className="right__module-wrapper">
                <div className="right__closeModule-wrapper">
                    <img src={closeIcon} alt="close-icon" />
                </div>
                <div className="right__module-content">
                    <h4 className="right__module-subtitle">Create DueFocus Account</h4>
                    <span className="right__module-text">Already have an Account? Sign In</span>
                    <div className="right__form-wrapper">
                        <form onSubmit={handleSubmit} className="right-form">
                            <div className="email__input-wrapper">
                                <span className="email-desc">Email</span>
                                <input
                                    type="text"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    name="email"
                                    className="email-input"
                                    placeholder="name@email.com"
                                />
                            </div>
                            <div className="password__input-wrapper">
                                <span className="password-desc">Password</span>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    name="password"
                                    className="password-input"
                                    placeholder="8+ Characters"
                                />
                                <img src={passwordIcon} className="password-image" alt="password-image" />
                            </div>
                            <div className="agreement-wrapper">
                                <input type="checkbox" id="checkbox" className="check-box" name="checkbox" />
                                <label htmlFor="checkbox" className="agreement-label">
                                    <div className="agreement__label-wrapper">
                                        I agree to the
                                        <a href="#!" className="agreement-link">
                                            {' '}
                                            Terms Of Use
                                        </a>{' '}
                                        and{' '}
                                        <a href="#!" className="agreement-link">
                                            {' '}
                                            Privacy Policy
                                        </a>
                                        , and{' '}
                                        <a href="#!" className="agreement-link">
                                            Cookie Use
                                        </a>
                                        .
                                    </div>
                                </label>
                            </div>
                            <BlueBtn text="Create Free Account" classNames="agreement-btn" onClick={() => {}} />
                        </form>

                        <div className="right__module-bottomDesc">
                            <div className="bottom-border"></div>
                            <span className="bottom-desc">Or Sign Up With</span>
                        </div>
                        <div className="trackers-2sd"></div>
                        <div className="trackers-wrapper">
                            <div className="trackers-items">
                                <div className="item-logo">
                                    <a href="#!" className="item-link">
                                        <img
                                            src={trackerTrelloImg}
                                            style={{ width: '33px', height: '33px' }}
                                            alt="time-tracker-trello"
                                        />
                                    </a>
                                </div>
                                <div className="item-logo">
                                    <a href="#!" className="item-link">
                                        <img
                                            src={appGitHubImg}
                                            style={{ width: '33px', height: '33px' }}
                                            alt="app-github-image"
                                        />
                                    </a>
                                </div>
                                <div className="last__item-logo">
                                    <a href="#!" className="item-link">
                                        <img
                                            src={toolGitHubImg}
                                            style={{ width: '33px', height: '33px' }}
                                            alt="tool-github-image"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUpSection;

// const redBorder = () => {
//     if (isEmptyEmailError) {

//     }
// }
