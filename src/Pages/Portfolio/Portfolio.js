import React from 'react';

function Portfolio() {
    return (
        <div className="mx-auto flex max-w-7xl flex-col content-center justify-center">
            <div className="container mx-auto mt-10 mb-10 rounded-sm border border-gray-300 py-10 px-10 shadow-lg">
                <header>
                    <ul className="flex flex-wrap justify-end gap-2">
                        <li>
                            <a
                                href="https://www.linkedin.com/in/k-m-rajib-faysal-2489aa215/"
                                className="inline-flex items-center space-x-2 rounded bg-blue-600 p-2 font-semibold text-white"
                            >
                                <svg
                                    className="h-5 w-5 fill-current"
                                    role="img"
                                    viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/kmrajibfaysal/"
                                className="inline-flex items-center space-x-2 rounded bg-gray-700 p-2 font-medium text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    role="img"
                                    className="w-5"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24"
                                >
                                    <g fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                                            fill="currentColor"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-52 w-52 rounded-full bg-cover bg-no-repeat" />
                        </div>
                        <div className="grid justify-items-end">
                            <h1 className="text-6xl font-extrabold">K. M. Rajib Faysal</h1>
                            <p className="mt-5 text-xl">Web Developer</p>
                        </div>
                    </div>
                </header>

                <div className="flex">
                    <div className="mt-10 flex w-2/6 gap-x-10">
                        <div className="w-11/12">
                            <strong className="text-xl font-medium">Contact Details</strong>
                            <ul className="mt-2 mb-10">
                                <li className="mt-1 px-2">
                                    <strong className="mr-1">Phone </strong>
                                    <p className="block">+880 1704 241525</p>
                                </li>
                                <li className="mt-1 px-2">
                                    <strong className="mr-1">E-mail </strong>
                                    <a href="mailto:" className="block">
                                        kmrajibfaysal@gmail.com
                                    </a>
                                </li>
                                <li className="mt-1 px-2">
                                    <strong className="mr-1">Location</strong>
                                    <span className="block">Pabna, Bangladesh</span>
                                </li>
                            </ul>

                            <strong className="text-xl font-medium">Skills</strong>
                            <ul className="mt-2 mb-10 flex uppercase">
                                <ul>
                                    <li className="mt-1 px-2">React</li>
                                    <li className="mt-1 px-2">JavaScript</li>
                                    <li className="mt-1 px-2">Node.js</li>
                                    <li className="mt-1 px-2">HTML</li>
                                    <li className="mt-1 px-2">CSS</li>
                                </ul>
                                <ul>
                                    <li className="mt-1 px-2">Axios</li>
                                    <li className="mt-1 px-2">API</li>
                                    <li className="mt-1 px-2">expressjs</li>
                                    <li className="mt-1 px-2">MongoDB</li>
                                    <li className="mt-1 px-2">TailwindCss</li>
                                </ul>
                            </ul>
                            <strong className="text-xl font-medium">Further Education</strong>
                            <ul className="mt-2 mb-10">
                                <span className="mb-2 inline-block text-base font-bold">
                                    Web Development with Jhankar Mahbub
                                </span>
                                <br />- Programming Hero From Dec, 2021 - May, 2022
                                <br />
                                <span className="text-base font-bold">
                                    Web Development Bootcamp by Colt stele
                                </span>
                                <br />- Colt academy From Dec, 2020 - May, 2021
                            </ul>

                            <strong className="text-xl font-medium">Currently learning</strong>
                            <ul className="mt-2 mb-10">
                                <li className="mt-1 px-2">About Web Accessibility</li>
                                <li className="mt-1 px-2">and User Experience</li>
                            </ul>
                            <strong className="text-xl font-medium">Interests & Hobbies</strong>
                            <ul className="mt-2">
                                <li className="mt-1 px-2">Sustainability</li>
                                <li className="mt-1 px-2">New technologies</li>
                                <li className="mt-1 px-2">Blogging on dev.to</li>
                                <li className="mt-1 px-2">Investment</li>
                                <li className="mt-1 px-2">Travel</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-4/6">
                        <section>
                            <h2 className="border-b pb-1 text-2xl font-semibold">Summery</h2>
                            <p className="text-md mt-4">
                                I am an enthusiastic, organized, and multi-tasking ability person. I
                                can work in a team and individually from any perspective. I want to
                                make a difference and give the best shot in my career.
                            </p>
                        </section>
                        <section>
                            <h2 className="mt-6 border-b pb-1 text-2xl font-semibold">Projects</h2>
                            <ul className="mt-1">
                                <li className="py-2">
                                    <div className="my-1 flex justify-between">
                                        <strong>Storage Management Website - Pronex Wood</strong>
                                        <p className="flex">
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                React
                                            </span>
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                Nodejs
                                            </span>
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                MongoDB
                                            </span>
                                        </p>
                                    </div>
                                    <ul className="mb-2 flex">
                                        <li>
                                            <a
                                                href="https://pronex-wood.web.app/"
                                                className="mr-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                                            >
                                                Live
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/kmrajibfaysal/pronex-wood-km"
                                                className="mr-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                                            >
                                                Code
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-xs">
                                        ● A RESTful React Application where people can rent spaces
                                        for their wholesale products.
                                        <br /> ● Implemented user authentication and verification
                                        using jwt, made an admin panel and designed the whole system
                                        to explore technology.
                                        <br /> ● Technologies: ReactJs, Javascript, React query,
                                        React hook-form, Firebase,TailwindCSS, Nodejs, Expressjs,
                                        MongoDB.
                                    </p>
                                </li>
                                <li className="py-2">
                                    <div className="my-1 flex justify-between">
                                        <strong>Private Health Consultant - Talking Minds</strong>
                                        <p className="flex">
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                React
                                            </span>
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                Nodejs
                                            </span>
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                MongoDB
                                            </span>
                                        </p>
                                    </div>
                                    <ul className="mb-2 flex">
                                        <li>
                                            <a
                                                href="https://talking-minds-40b18.web.app/home"
                                                className="mr-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                                            >
                                                Live
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/kmrajibfaysal/talking-minds"
                                                className="mr-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                                            >
                                                Code
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-xs">
                                        ● A RESTful React Application where people can rent spaces
                                        for their wholesale products.
                                        <br /> ● Implemented user authentication and verification
                                        using jwt, made an admin panel and designed the whole system
                                        to explore technology.
                                        <br /> ● Technologies: ReactJs, Javascript, React query,
                                        React hook-form, Firebase,TailwindCSS, Nodejs, Expressjs,
                                        MongoDB.
                                    </p>
                                </li>
                                <li className="py-2">
                                    <div className="my-1 flex justify-between">
                                        <strong>REST Task Manager web application</strong>
                                        <p className="flex">
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                React
                                            </span>
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                Nodejs
                                            </span>
                                            <span className="ml-1 rounded bg-gray-600 px-2 py-1 text-xs text-white">
                                                MongoDB
                                            </span>
                                        </p>
                                    </div>
                                    <ul className="mb-2 flex">
                                        <li>
                                            <a
                                                href="https://rest-task-manager.web.app/"
                                                className="mr-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                                            >
                                                Live
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/kmrajibfaysal/rest-task-manager"
                                                className="mr-1 rounded bg-blue-600 px-2 py-1 text-sm text-white"
                                            >
                                                Code
                                            </a>
                                        </li>
                                    </ul>
                                    <p className="text-xs">
                                        ● A RESTful React Application where people can rent spaces
                                        for their wholesale products.
                                        <br /> ● Implemented user authentication and verification
                                        using jwt, made an admin panel and designed the whole system
                                        to explore technology.
                                        <br /> ● Technologies: ReactJs, Javascript, React query,
                                        React hook-form, Firebase,TailwindCSS, Nodejs, Expressjs,
                                        MongoDB.
                                    </p>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="mt-6 border-b pb-1 text-2xl font-semibold">Education</h2>
                            <ul className="mt-2">
                                <li className="pt-2">
                                    <p className="flex justify-between text-sm">
                                        <span className="mt-3">
                                            <span className="text-base font-bold">
                                                B.Sc. in Textile Engineering
                                            </span>
                                            <br /> - Pabna Textile Engineering College, Pabna From
                                            May, 2018 - present
                                        </span>
                                    </p>
                                    <p className="flex justify-between text-sm">
                                        Production Engineering<small>GPA 3.6</small>
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
