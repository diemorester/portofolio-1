import Menu from "./menu";

function Navbar() {
    return (
        <div className="flex bg-stone-50 h-14 justify-center gap-8 items-center font-sans sticky top-0">
            <a href="#home">
                <Menu>Home</Menu>
            </a>
            <a href="#about">
                <Menu>About</Menu>
            </a>
            <a href="#skills">
                <Menu>Skills</Menu>
            </a>
            <Menu>Educations</Menu>
            <Menu>Experiences</Menu>
        </div>
    )
}
export default Navbar