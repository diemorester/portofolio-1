import img1 from "../assets/foto1.jpeg"
import img2 from "../assets/foto2.jpeg"
import img3 from "../assets/foto3.jpeg"
import img4 from "../assets/foto4.jpeg"
import img5 from "../assets/foto5.jpeg"

function Experiences() {
    return (
        <div className="h-svh w-[99%] bg-stone-50 flex flex-wrap justify-evenly place-content-center " id="experiences">
            <div>
                <img src={img1} alt="foto1" className="h-[200px] hover:scale-110 duration-150  mt-[50px]" />
            </div>
            <div>
                <img src={img2} alt="foto2" className="h-[200px] hover:scale-110 duration-150  mt-[50px]" />
            </div>
            <div>
                <img src={img3} alt="foto3" className="h-[200px] hover:scale-110 duration-150  mt-[50px]" />
            </div>
            <div>
                <img src={img4} alt="foto4" className="h-[200px] hover:scale-110 duration-150  mt-[50px]" />
            </div>
            <div>
                <img src={img5} alt="foto5" className="h-[200px] hover:scale-110 duration-150  mt-[50px]" />
            </div>
        </div>
    )
}
export default Experiences