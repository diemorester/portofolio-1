import img1 from "../assets/web.svg"
import img2 from "../assets/branding.svg"
import img3 from "../assets/development.svg"
import img4 from "../assets/remote.svg"
import img5 from "../assets/goodlaugh.svg"
import img6 from "../assets/creative.svg"

function Services() {
    return (
        <div className="h-svh w-[99%] bg-neutral-800 mx-auto rounded-xl content-center" id="educations">
            <div className="flex justify-center gap-3 pt-16 drop-shadow">
                <div className="h-[200px] w-[260px] bg-stone-50 place-content-center text-center">
                    <img src={img1} alt="web" className="pl-[110px]" />
                    <h1 className="font-semibold">Web Design</h1> 
                    <h2 className="text-xs pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, recusandae?</h2>
                </div>
                <div className="h-[200px] w-[260px] bg-stone-50 place-content-center text-center">
                    <img src={img2} alt="branding" className="pl-[110px]" />
                    <h1 className="font-semibold">Branding</h1>
                    <h2 className="text-xs pt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, voluptatibus dicta.</h2>
                </div>
                <div className="h-[200px] w-[260px] bg-stone-50 place-content-center text-center">
                    <img src={img3} alt="development" className="pl-[110px]" />
                    <h1 className="font-semibold">Development</h1>
                    <h2 className="text-xs pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quae animi.</h2>
                </div>
            </div>
            <div className="flex justify-center gap-3 mt-3 drop-shadow">
                <div className="h-[200px] w-[260px] bg-stone-50 place-content-center text-center">
                    <img src={img4} alt="remote" className="pl-[110px]" />
                    <h1 className="font-semibold">Remote Working</h1>
                    <h2 className="text-xs pt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos.</h2>
                </div>
                <div className="h-[200px] w-[260px] bg-stone-50 place-content-center text-center">
                    <img src={img5} alt="laugh" className="pl-[110px]" />
                    <h1 className="font-semibold">Good Laugh</h1>
                    <h2 className="text-xs pt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, dolores.</h2>
                </div>
                <div className="h-[200px] w-[260px] bg-stone-50 place-content-center text-center">
                    <img src={img6} alt="creative" className="pl-[110px]" />
                    <h1 className="font-semibold">Creative Design</h1>
                    <h2 className="text-xs pt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente.</h2>
                </div>
            </div>
        </div>
    )
}

export default Services