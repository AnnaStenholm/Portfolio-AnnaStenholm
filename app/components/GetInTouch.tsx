import React from "react";
import Email from "../icons/Email.svg";
import LinkedIn from "../icons/LinkedIn.svg";
import GitHub from "../icons/GitHub.svg";
import Instagram from "../icons/Instagram.svg";


export function GetInTouch() {
    return(

        <div className="max-w-[1244px] w-full space-y-6 px-4 mb-16">
           <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-700 sm:text-3xl">
              Get in Touch
              <span className="text-pink-500">.</span>
            </h2>
          <div className="flex items-center text-center space-y-2 justify-center flex-row gap-6">



                  <a href="mailto:stenholm.a@gmail.com">
                 <img src={Email} className="w-12 h-12" alt="Email" />
                 </a>

                  <a href="https://www.linkedin.com/in/anna-stenholm-aa11783a/" target="_blank">
                  <img src={LinkedIn} className="w-12 h-12" alt="LinkedIn" />
                 </a>
                  <a href="https://github.com/AnnaStenholm" target="_blank">
                  <img src={GitHub} className="w-12 h-12" alt="GitHub" />
                 </a>
                  <a href="https://www.instagram.com/annastenholm/" target="_blank">
                  <img src={Instagram} className="w-12 h-12" alt="Instagram" />
                 </a>

          </div>
        </div>

    );
}
