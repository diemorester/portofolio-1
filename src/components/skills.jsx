import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
    return (
        <div className="text-2xl h-svh justify-center content-center" id="skills">
        
        <div className="flex">
            <div className="flex-1 items-center place mx-[16vh]">
                <div className=" h-[69px] w-[350px] text-base">
                    HTML
                    < ProgressBar completed={21} bgColor="#262727" labelSize="11px" />
                </div>
                <div className="h-[69px] w-[350px] text-base">
                    CSS
                    <ProgressBar completed={23} bgColor="#262727" labelSize="11px" />
                </div>
                <div className="h-[69px] w-[350px] text-base">
                    JavaScript
                    <ProgressBar completed={13} bgColor="#262727" labelSize="11px" />
                </div>
            </div>
            <div className="flex-1">
                <div className="h-[69px] w-[350px] mx-[150px] text-base">
                    React JS
                    < ProgressBar completed={11} bgColor="#262727" labelSize="11px" />
                </div>
                <div className="h-[69px] w-[350px] mx-[150px] text-base">
                    MySQL
                    <ProgressBar completed={98} bgColor="#262727" labelSize="11px" />
                </div>
                <div className="h-[69px] w-[350px] mx-[150px] text-base">
                    Fundamental
                    < ProgressBar completed={33} bgColor="#262727" labelSize="11px" />
                </div>
            </div>
        </div>
        </div>
    )
};

export default Example