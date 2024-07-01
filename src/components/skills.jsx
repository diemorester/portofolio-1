import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

const Example = () => {
    return (
        <div className="text-2xl h-svh justify-center content-center" id="skills">
        
        <div className="flex">
            <div className="flex-1 items-center place mx-[16vh]">
                <div className=" h-[69px] w-[350px]">
                    HTML
                    < ProgressBar completed={21} bgColor="#262727" labelSize="11px" />
                </div>
                <div className="h-[69px] w-[350px]">
                    CSS
                    <ProgressBar completed={23} bgColor="#262727" labelSize="11px" />
                </div>
            </div>
            <div className="flex-1">
                <div className="h-[69px] w-[350px] mx-[150px]">
                    JavaScript
                    < ProgressBar completed={13} bgColor="#262727" labelSize="11px" />
                </div>
                <div className="h-[69px] w-[350px] mx-[150px]">
                    MySQL
                    <ProgressBar completed={98} bgColor="#262727" labelSize="11px" />
                </div>
            </div>
        </div>
        </div>
    )
};

export default Example