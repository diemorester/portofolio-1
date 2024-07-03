import Menu from "./menu";

function Navbar() {
    return (
        <div className="flex bg-stone-50 h-14 justify-center gap-8 items-center font-sans sticky top-0 text-lg">
            <a href="#home">
                <Menu>Home</Menu>
            </a>
            <a href="#about">
                <Menu>About</Menu>
            </a>
            <a href="#skills">
                <Menu>Skills</Menu>
            </a>
            <a href="#experiences">
                <Menu>Experiences</Menu>
            </a>
            <a href="#educations">
               <Menu>Services</Menu>
            </a>
        </div>
    )
}
export default Navbar