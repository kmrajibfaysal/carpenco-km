import React from 'react';

function Recommandation() {
    return (
        <div className="bg-[url('https://i.ibb.co/18MfMGR/carpenter-banner-2.webp')]">
            <div
                className="container mx-auto flex h-[550px] w-5/12 flex-col items-center justify-center px-4  font-karla uppercase
        text-white"
            >
                <h4 className="text-md text-center font-josefin ">Power Tools You Should Own</h4>
                <h4 className="my-2 text-center text-4xl ">
                    Enjoy the best quality and features made by our team
                </h4>
                <div className="my-4 flex space-x-3">
                    <button className="scale-75 border-2 border-white bg-white px-7 py-3 font-josefin text-base font-bold text-black transition duration-500 ease-in-out hover:border-white  hover:bg-transparent hover:text-white md:scale-90  lg:scale-100">
                        Shop Now
                    </button>
                    <button className="scale-75 border-2 px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-white  hover:bg-white  hover:text-black md:scale-90  lg:scale-100">
                        View More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recommandation;
