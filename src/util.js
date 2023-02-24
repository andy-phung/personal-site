import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

import { 
    Routes, 
    Route, 
    Outlet, 
    Link
    } from "react-router-dom";

export class NavBar extends React.Component {
    render() {
        return (
            <div className='top_container'>
                <div className='navbar_container'>
                    <Link to="/" className={"navbar_link"}>Home</Link>
                    <Link to="/about" className={"navbar_link"}>About</Link>
                    <Link to="/projects" className={"navbar_link"}>Projects</Link>
                    <Link to="/resume" className={"navbar_link"}>Resume</Link>
                </div>
                <Outlet />
                <Footer />
            </div>
        );
    }
}

export class Footer extends React.Component {

    render() {
        return (
            <div className='footer_container'>
                <p>Made with ♡ by Andy Phung</p>
                <div className='icon_container'>
                    <a href="mailto:andyphung64@gmail.com">
                    <svg height="30px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Email</title><path d="M506.283,77.48C491.449,32.488,448.945,0,399.118,0H112.882C62.977,0,20.488,32.574,5.732,77.559
                        C2.016,88.693,0,100.543,0,112.882v13.22v273.016c0,1.449,0,2.898,0.079,4.354c0.567,15.716,4.441,30.638,10.819,44.103
                        C29.118,485.63,67.969,512,112.882,512h286.236c44.835,0,83.701-26.37,101.921-64.347v-0.078
                        c6.457-13.465,10.237-28.3,10.804-44.024v-0.079c0.157-1.456,0.157-2.905,0.157-4.354V126.024v-13.142
                        C512,100.543,509.984,88.606,506.283,77.48z M48.378,168.267l110.787,96.599L48.378,361.378V168.267z M399.118,463.622H112.882
                        c-30.709,0-56.362-21.449-62.882-50.158l139.811-121.913l16.85,14.677c14.11,12.339,31.764,18.543,49.26,18.464
                        c17.575,0.079,35.244-6.126,49.354-18.464l16.85-14.677l139.89,122C455.402,442.252,429.764,463.622,399.118,463.622z
                        M463.622,361.465l-110.866-96.678l110.866-96.598V361.465z M463.622,114.732L278.74,275.913
                        c-6.536,5.646-14.598,8.464-22.819,8.464c-8.142,0-16.205-2.819-22.74-8.464L48.378,114.732v-1.85
                        c0-35.638,28.866-64.504,64.504-64.504h286.236c35.56,0,64.504,28.866,64.504,64.504V114.732z"/>
                    </svg>
                    </a>
                    <a href="https://github.com/andy-phung">
                        <svg height="33px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>GitHub</title>
                            <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#FFFFFF"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/andy-phung/">
                        <svg height="33px" role="img" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title>
                            <path d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z" fill="#FFFFFF"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/andy.ipynb/">
                        <svg height="45px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-100.7682 -167.947 873.3244 1007.682"><title>Instagram</title>
                            <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959"/><path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308"/>
                        </svg>
                    </a>
                </div>
            </div>
            
        );
    }
}

export class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h2>not found</h2>
            </div>
        );
    }
}



export class ExternalLink extends React.Component {
    constructor(props) {
        super(props);
        window.location.replace(props.link);
    }
    render() {
        // lmao
        return (
            <div style={{height: '10000vh'}}> 
            </div>
        );
    }
}