/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionTitle from "../global/SectionTitle";

function About() {
  return (
    <div className="flex flex-col text-left max-w-md md:max-w-full w-full m-auto">
      <SectionTitle title="Breif Intro About me!" />
      <div className="max-w-5xl m-auto md:max-h-[200px] grid grid-cols-1 gap-10 md:gap-10 md:grid-cols-1 items-start">
        <h1 className="text-2xl text-center">I'm a recent graduate from COMSATS University Islamabad, with a passion for web and app development. I enjoy creating user-friendly websites and mobile apps. I'm always excited to learn new technologies and improve my skills. I'm eager to work on innovative projects.</h1>
      </div>
    </div>
  );
}

export default About;
