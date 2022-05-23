import React from 'react';

function LoginPageHeader({ text1 }) {
    return (
        <div className="bg-[url('https://i.ibb.co/18MfMGR/carpenter-banner-2.webp')]">
            <div
                className="container mx-auto flex h-[220px] max-w-[700px] flex-col items-center justify-center font-karla uppercase
        text-white"
            >
                <h4 className="text-center font-josefin text-3xl ">
                    {text1.split('/').slice(0, 1)}
                </h4>
                <h4 className="text-md my-2 text-center ">Home / {text1}</h4>
            </div>
        </div>
    );
}

export default LoginPageHeader;
