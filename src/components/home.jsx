import img1 from "../assets/kokop.jpeg"

function Home() {
    return (
      <div id="home">
        <div className="flex bg-neutral-800 text-stone-50 h-svh w-[99%] mx-auto rounded-xl ">
          <div className="flex-1 place-content-center w-2/4 p-14">
            <h1 className="text-2xl font-sans font-semibold">
              Hello! My name is Rahadian Nirwan Zulfikar
            </h1>
            <p className="font-sans pt-4 justify-center">
              I am a web developer, specialised on JavaScript Fundamentals,
            </p>
            <p className="font-sans justify-center">
              Front-end Developing, and Back-end Developing based in Indonesia.
            </p>
          </div>
          <div className="flex-1 place-content-center w-2/4 p-14">
            <img src={img1} alt="pusing" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;