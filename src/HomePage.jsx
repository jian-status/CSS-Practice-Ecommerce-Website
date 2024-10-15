import person from "./assets/pexels-homepage-person.jpg";
import about from './assets/about.txt';
import Inksplash_part3_1 from "./assets/ink-42357.svg?react";
import diagonal_lines from './assets/vecteezy_abstract-geometric-black-diagonal-stripe-line-pattern-design_21798571.jpg'
import {Link} from "react-router-dom";
import { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function HomePage() {
    const [about_results, set_about_results] = useState("");
    fetch(about).then(raw => raw.text()).then(text => set_about_results(text));

    return (
        <>
            <div id="part1" className="h-screen relative mb-5">
                <div
                    className="relative w-[70%] top-1/2 -translate-y-1/2 z-10 bg-white box-border border-white border-[15px]">
                    <img src="/src/assets/pexels-nail-polish-bottle.jpg"
                         className="hover:opacity-95"
                    />
                    <div
                        className="size-[27rem] z-[1] bg-[#e8e6e6] container border-[15px] border-white p-10 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
                        <p className="text-4xl w-[10rem] font-Fatface">WE CHANGE THE WORLD ONE 💅 AT A TIME</p>
                        <Link>Book an Appointment →</Link>
                    </div>
                </div>
                <div className="absolute top-0 right-0 bg-[#cbdac5] w-1/2 h-screen z-0 flex items-center">
                </div>
            </div>

            <div id="part2" className="relative flex items-center overflow-hidden">
                <div className="bg-[#e8e6e6] w-1/2 h-screen z-0">
                    <img src={person} alt="person"
                         className="object-cover w-full h-3/5 top-1/2 relative -translate-y-[60%] left-1/4 border-white border-[15px]"/>
                    <Inksplash_part3_1 className="absolute -translate-y-1/2 opacity-10"/>

                </div>

                <div className="relative left-48">
                    <p className="w-72">{about_results}</p>
                </div>
            </div>
            <div className="blank-space-separator h-[15rem] bg-blue-100"></div>
            <div id="part3" className="flex h-screen">
                <div className="bg-black w-[60rem] h-[20rem] p-10 rounded relative">
                    <p className="absolute font-Fatface text-5xl text-white ml-14 mt-6">Set up an Appointment</p>
                    <div className="relative bg-white w-full h-[400px] mt-24 rounded p-4 shadow-xl">
                        <div className="flex items-end border-gray-300 border-x-0 border-t-0 pb-2 mt-6 border-[1px]">
                            <div
                                className="font-medium">
                                Select a Date and Time
                            </div>
                            <div className="ml-auto">
                                Eastern Daylight Time (EST)
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-4">
                            <Calendar className="flex flex-col w-[20rem] items-center"/>
                            <div className="bg-blue-100"></div>
                            <div className="bg-amber-50"></div>
                        </div>
                        <img src={diagonal_lines} className="absolute translate-x-1/4 -translate-y-[18rem] w-[33rem] h-[25rem] right-0 -z-10 rounded"/>
                    </div>
                </div>
            </div>
            <div className="blank-space-separator h-[10rem] bg-amber-100"></div>
        </>
    )
}