/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-1 sm:grid-cols-2 justify-center items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-center mb-5 sm:mb-0">
              <p className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </p>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex justify-center"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                alt={item.name}
                                src={item.icon}
                                width={20}
                                height={20}
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <Image
                  alt="react-original"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  height={26}
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <Image
                  alt="nextjs-original-wordmark"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  height={40}
                  className="invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <Image
                  alt="tailwindcss-plain"
                  src="https://firebasestorage.googleapis.com/v0/b/mind-care-b5645.appspot.com/o/portfolio%2Ftailwind.png?alt=media&token=12bf14dd-771e-4564-adc6-0c6ad3d7a6f5"
                  width="26"
                  height={26}
                  title="TailwindCSS"
                />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
