import { href } from "react-router";
import { Header } from "~/components/header";
import React from "react";
import img from "../images/Anna.png";
import { GetInTouch } from "~/components/GetInTouch";


export function LandingPage() {
  return (
    <main className="flex items-center justify-center pt-4 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">


        <Header/>

        <div className="max-w-[1244px] w-full space-y-6 px-4">

          <div className="flex items-center text-center space-y-2 justify-center flex-col">


            {welcomeText.map(({ text1, text2, text3 }) => (

              <div key={text1}>
                <h1 className=" text-4xl font-bold text-gray-900 dark:text-slate-700 sm:text-5xl">
                  {text1}

                  <span className="text-pink-500">{text2}</span>

                  {text3}
                </h1>
              </div>



 ))}
          </div>

<div className="flex grid-rows-2 gap-6 md:grid-cols-2 md:grid">
  <div>
            <ul className="mt-6">

              {location.map(({  text, icon }) => (
                <li key={text}>
                  <h3
                    className="flex items-center p-1  text-slate-700  dark:text-slate-700"
                    rel="noreferrer"
                  >
                    {icon}
                    {text}

                  </h3>

                </li>
              ))}
            </ul>

            {aboutMe.map(({ text }) => (
            <p className="mt-6 text-gray-700 dark:text-slate-700">{text}</p>
            ))}
</div>

            <div>
              <img src={img} alt="Anna Stenholm" className="w-48 h-48 rounded-full mx-auto" /></div>

            </div>


        </div>
          <span className="w-100 h-1 mx-auto my-4 bg-slate-700 border-0 rounded-sm md:my-10"></span>
            <div className="flex items-center text-center space-y-2 justify-center flex-col">
              {<GetInTouch/>}
            </div>
      </div>

    </main>
  );
}

const welcomeText = [
  {
  text1: "Hi, I'm Anna,",
  },
  {
    text2: "frontend developer/",
  },
  {
  text3: "UX-designer",
}
]

const location = [
  {

    text: "Årsta, Sweden",
    icon: (
      <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
	    width="24px"
      height="24px"
      viewBox="0 0 395.71 395.71"
	 >
  <g>
	<path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
		c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
		C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
		c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
</g>
</svg>
    ),
  }]

const aboutMe = [
  {
    text: "I am a web developer experienced in React and JavaScript with a big passion in design and creating smooth responsive user flows.",
  },
  {
    text: "I have two years of professional experience and have done an internship in UX/UI design at a web consultant firm.",
  },
  {
    text: "Let's connect and build something amazing together!",
  }

];



