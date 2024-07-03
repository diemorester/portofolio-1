import img2 from "../assets/contact.png"
import { FiPhoneCall } from "react-icons/fi";

function Contact() {
    return (
        <div className="flex fixed bottom-5 right-8 bg-neutral-700 rounded-full size-16">
            <FiPhoneCall className="relative size-10 text-stone-50 left-3 top-3 " />
        </div>
    )
}
export default Contact