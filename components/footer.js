import React from 'react';

const footer = () => {
    return (
        <footer className="h-full py-4 bg-primary dark:bg-navBg">
            <div className="text-2xl flex divide-x-2 divide-navTextDark dark:divide-white  justify-center">
                <a href="https://github.com/try-catch-stack" target="_blank">
                    <i className="fab fa-github hover:scale-110" style={{ margin: '10px 20px' }} />
                </a>
                <a href="https://www.linkedin.com/in/danish306/" target="_blank">
                    <i className="fab fa-linkedin hover:scale-110" style={{ margin: '10px 20px' }} />
                </a>
                <a href="https://www.instagram.com/dan1sh_m1rza/" target="_blank">
                    <i className="fab fa-instagram hover:scale-110" style={{ margin: '10px 20px' }} />
                </a>
            </div>
            <div className="text-lg my-1 flex justify-center">
                Made with <i className="fas fa-coffee" style={{ margin: '5px 5px' }} /> and{' '}
                <i className="far fa-heart" style={{ margin: '5px 5px' }} /> by Danish
            </div>
            <div className="flex justify-center">
                Copyright ©{' '}
                <a className="mx-2" href="/">
                    Danish Ahmed Mirza{' '}
                </a>{' '}
                {new Date().getFullYear()}
            </div>
        </footer>
    );
};

export default footer;
