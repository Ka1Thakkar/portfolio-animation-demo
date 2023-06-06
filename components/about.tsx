/* eslint-disable react/no-unescaped-entities */
import react from 'react';
import Image from 'next/image'

export default function About() {
    return (
        // <section id="about" className=' text-white overflow-auto 2xl:overflow-y-scroll py-20 2xl:px-10 rounded-xl scrollbar-thin sm:py-32'>
        //     <div>
              // <h3 className='text-7xl text-teal-500 font-mono font-bold text-center'>About Me</h3>
              // <p className='text-xl py-5 font-sans text-center'>
              // My name is Kavan Thakkar. I am pursuing a dual degree in <span>MSc Physics</span> and <span className='font-bold'>B.E. Electronics and
              // Instrumentation</span>. I have fundamental knowledge of web development and am currently mastering
              // React.js. As a part of the <span className='font-bold'>GDSC BITS Pilani {"chapter's"} core team</span>, I have gained invaluable expertise in leadership, teamwork, and cutting-edge technology. I am passionate about keeping up of the latest developments in my profession and utilising them to produce excellent results.
              // </p>
        //     </div>
            // <div className="lg:flex gap-10 font-mono">
            //   <div className=" bg-opacity-30 bg-black p-10 rounded-xl my-10 basis-1/2">
            //     <h1 className="text-3xl text-center md:text-left text-orange-600 font-extrabold">Experience:</h1>
            //     <ul className=" list-disc text-orange-500">
            //       <li className="py-2">
            //         <div className="">
            //           <h2 className="text-white text-xl py-1 font-extrabold">Bhaskaracharya Institute for Space Applications and Geoinformatics (BISAG-N), Gandhinagar</h2>
            //           <h2 className="text-white text-xl">(June 2023-August 2023)</h2>
            //         </div>
            //       </li>
            //       <li className="py-2">
            //         <div className="">
            //           <h2 className="text-white text-xl py-1 font-extrabold">Google Developer Student Clubs, BITS Pilani</h2>
            //           <h2 className="text-white text-xl">(2021-present)</h2>
            //         </div>
            //         <h2 className="text-gray-100 text-xl py-1 font-bold">Positions:</h2>
            //         <p className="text-lg text-gray-200 py-0.5">Core Team Member (Dec 2022 - present)</p>
            //         <p className="text-lg text-gray-200 py-0.5">Front-end development team lead (Feb 2023 - present)</p>
            //         <h2 className="text-gray-100 text-lg py-1 font-bold">Skills Gathered:</h2>
            //         <p className="text-gray-200 py-1">React.js, Vue.js, Vuetify, WAMP, HTML, HTML5, Cascading Style Sheets (CSS), JavaScript, Python (Programming Language), MySQL, Version Control</p>
            //       </li>
            //     </ul>
            //   </div>
            //   <div className=" bg-opacity-30 bg-black p-10 rounded-xl my-10 basis-1/2">
            //     <h1 className="text-3xl text-center md:text-left text-orange-600 font-extrabold">Education:</h1>
            //     <ul className="list-disc text-orange-500">
            //       <li className="py-2">
            //         <div className="">
            //           <h2 className="text-white text-xl py-1 font-bold">Birla Institute of Technology and Sciences, Pilani, Rajasthan</h2>
            //           <h2 className="text-white text-xl">(2021-pesent)</h2>
            //         </div>
            //         <p className="text-lg text-gray-100">Cumulative Grade: 7.05</p>
            //       </li>
            //       <li className="py-2">
            //         <div className="">
            //           <h2 className="text-white text-xl py-1 font-bold">Rahul International School, Nallasopara, Palghar</h2>
            //           <h2 className="text-white text-xl">(2019-2021)</h2>
            //         </div>
            //         <p className="text-lg text-gray-100">12th grade: 93.2%</p>
            //       </li>
            //       <li className="py-2">
            //         <div className="">
            //           <h2 className="text-white text-xl py-1 font-bold">Delhi Public School, Bopal, Ahmedabad</h2>
            //           <h2 className="text-white text-xl">(2007-2019)</h2>
            //         </div>
            //         <p className="text-lg text-gray-100">10th grade: 95.7%</p>
            //       </li>
            //     </ul>
            //   </div>
            // </div>
        //   </section>
        <section id="about" className="2xl:flex 2xl:py-32 2xl:max-h-screen overflow-hidden 2xl:justify-center 2xl:gap-10 pt-32">
            <div className=' text-black overflow-auto 2xl:overflow-y-scroll 2xl:px-10 rounded-xl scrollbar-thin 2xl:py-10 2xl:w-auto'>
            <h3 className='text-6xl 2xl:text-4xl text-white underline decoration-red-600 decoration-4 underline-offset-8 font-mono font-bold sm:text-right pb-5 2xl:pb-0'>About Me</h3>
            <p className='text-2xl 2xl:text-4xl text-white font-mono font-bold sm:text-right 2xl:pt-5 2xl:pb-0 py-5'>Hi. I'm Kavan, nice to meet you. Please take a look around.</p>
            </div>
            <div className=' 2xl:max-h-screen 2xl:overflow-y-scroll scrollbar-thin text-white overflow-visible py-5 xl:px-10 rounded-xl 2xl:w-auto 2xl:py-auto'>
            <p className='text-md sm:text-xl py-5 font-sans text-left'>
              I am pursuing a dual degree in <span>MSc Physics</span> and <span className='font-bold'>B.E. Electronics and
              Instrumentation</span>. I have fundamental knowledge of web development and am currently mastering
              React.js. As a part of the <span className='font-bold'>GDSC BITS Pilani {"chapter's"} core team</span>, I have gained invaluable expertise in leadership, teamwork, and cutting-edge technology. I am passionate about keeping up of the latest developments in my profession and utilising them to produce excellent results.
              </p>
            <div className="gap-10 font-mono">
              <div className=" p-10 rounded-xl my-10 basis-1/2 bg-black bg-opacity-30">
                <h1 className="text-3xl text-center md:text-left text-orange-500 font-extrabold">Experience:</h1>
                <ul className=" list-disc text-orange-500">
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-white text-xl py-1 font-extrabold">Bhaskaracharya Institute for Space Applications and Geoinformatics (BISAG-N), Gandhinagar</h2>
                      <h2 className="text-white text-xl">(June 2023-August 2023)</h2>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-white text-xl py-1 font-extrabold">Google Developer Student Clubs, BITS Pilani</h2>
                      <h2 className="text-white text-xl">(2021-present)</h2>
                    </div>
                    <h2 className="text-gray-100 text-xl py-1 font-bold">Positions:</h2>
                    <p className="text-lg text-gray-200 py-0.5">Core Team Member (Dec 2022 - present)</p>
                    <p className="text-lg text-gray-200 py-0.5">Front-end development team lead (Feb 2023 - present)</p>
                    <h2 className="text-gray-100 text-lg py-1 font-bold">Skills Gathered:</h2>
                    <p className="text-gray-200 py-1">React.js, Vue.js, Vuetify, WAMP, HTML, HTML5, Cascading Style Sheets (CSS), JavaScript, Python (Programming Language), MySQL, Version Control</p>
                  </li>
                </ul>
              </div>
              <div className=" p-10 rounded-xl my-10 basis-1/2 bg-black bg-opacity-30">
                <h1 className="text-3xl text-center md:text-left text-orange-500 font-extrabold">Education:</h1>
                <ul className="list-disc text-orange-500">
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-white text-xl py-1 font-bold">Birla Institute of Technology and Sciences, Pilani, Rajasthan</h2>
                      <h2 className="text-white text-xl">(2021-pesent)</h2>
                    </div>
                    <p className="text-lg text-gray-100">Cumulative Grade: 7.05</p>
                  </li>
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-white text-xl py-1 font-bold">Rahul International School, Nallasopara, Palghar</h2>
                      <h2 className="text-white text-xl">(2019-2021)</h2>
                    </div>
                    <p className="text-lg text-gray-100">12th grade: 93.2%</p>
                  </li>
                  <li className="py-2">
                    <div className="">
                      <h2 className="text-white text-xl py-1 font-bold">Delhi Public School, Bopal, Ahmedabad</h2>
                      <h2 className="text-white text-xl">(2007-2019)</h2>
                    </div>
                    <p className="text-lg text-gray-100">10th grade: 95.7%</p>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </section>
    )
}