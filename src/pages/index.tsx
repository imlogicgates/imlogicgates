import { projectLogos, techLogos } from "@/_data";
import ReactFullpage from "@fullpage/react-fullpage";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Link from "next/link";
import Mail from "../_animations/contact.json";
import Programmer from "../_animations/programmer.json";
const SocialLinks = () => {
  return (
    <>
      <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
        <Image src={"/icons/linkedin.svg"} width="50" height="50" alt={""} />
      </a>
      <a href={process.env.NEXT_PUBLIC_GITHUB_URL}>
        <Image
          src={"/icons/github.svg"}
          width="50"
          height="50"
          alt={""}
          className="cursor-pointer"
        />
      </a>
      <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>
        <Image src={"/icons/email.svg"} width="60" height="60" alt={""} />
      </a>
    </>
  );
};
const Hero = () => {
  return (
    <div className="section">
      <div className="container overflow-hidden mx-auto px-4 h-screen flex flex-col-reverse justify-evenly align-middle">
        <div className="flex flex-col items-center justify-center gap-y-4 max-h-3/4">
          <h1 className="text-4xl lg:text-8xl text-primary font-bold my-4 tracking-wide">
            {`Henlo, I'm Jigs!`}
          </h1>
          <p className="text-2xl lg:text-3xl pb-4 lg:pb-2 tracking-wider">
            A software developer capable of empowering
          </p>
          <p className="text-2xl lg:text-3xl pb-2 tracking-wider">
            businesses with{" "}
            <span className="text-primary font-bold">
              agile <span className="text-white font-normal">and</span> scalable
              solutions.
            </span>
          </p>

          <div className="flex gap-x-20 my-8 lg:my-4 align-top">
            <SocialLinks />
          </div>
        </div>
        <div className="h-fit scale-125 md:scale-150">
          <Player
            autoplay
            loop
            src={Programmer}
            className="block w-fit h-fit"
          />
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4 flex flex-wrap flex-row jusitfy-between items-center">
        <div className="flex flex-col m-auto items-center justify-center w-full md:w-1/2">
          <Player autoplay loop src={Mail} className="block  w-fit h-fit" />
        </div>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-5xl lg:text-8xl text-primary font-bold my-4 tracking-wide">
            {`get in touch`}
          </h1>
          <p className="text-2xl lg:text-4xl pb-2 tracking-wider">
            {`let's bring your
          ideas to life!`}
          </p>

          <div className="flex justify-center gap-x-20 my-4 align-top">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="section">
      <div className="container px-4 mx-auto grid md:grid-cols-2  gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-8xl text-primary font-bold mb-6 tracking-wide">
            projects
          </h1>
          <p className="text-md lg:text-4xl tracking-wider">
            {`sharing some of my collaborative endeavors.`}
          </p>
        </div>
        <div className="grid grid-cols-3">
          {!!projectLogos.length &&
            projectLogos.map((logo, idx) =>
              !logo.url ? (
                <div className="flex" key={`${logo.alt}-${idx}`}>
                  <Image
                    src={`/logos/projects/${logo.image}`}
                    className={`grayscale flex-1 p-4 ${
                      logo.classes ? logo.classes : "brightness-[500]"
                    }`}
                    width="400"
                    height="100"
                    alt={`${logo.alt}`}
                  />
                </div>
              ) : (
                <Link
                  key={`${logo.alt}-${idx}`}
                  href={logo.url}
                  className="flex"
                >
                  <Image
                    src={`/logos/projects/${logo.image}`}
                    className={`grayscale flex-1 p-4 cursor-pointer ${
                      logo.classes ? logo.classes : "brightness-[500]"
                    }`}
                    width="400"
                    height="100"
                    alt={`${logo.alt}`}
                  />
                </Link>
              )
            )}
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="section">
      <div className="container px-4 mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-8xl text-primary font-bold mb-6 tracking-wide">
            skills
          </h1>
          <p className="text-md lg:text-4xl tracking-wider leading-relaxed">
            {`refined expertise from over 7 years of experience.`}
          </p>
        </div>
        <div className="grid grid-cols-3">
          {!!techLogos.length &&
            techLogos.map((logo, idx) =>
              logo.url ? (
                <Link
                  href={logo.url}
                  target="_blank"
                  key={`${logo.alt}-${idx}`}
                  className="flex"
                >
                  <Image
                    src={`/logos/tech/${logo.image}`}
                    className="invert flex-1 p-8 cursor-pointer"
                    width="350"
                    height="100"
                    alt={`${logo.alt}`}
                  />
                </Link>
              ) : (
                <div className="flex" key={`${logo.alt}-${idx}`}>
                  <Image
                    src={`/logos/tech/${logo.image}`}
                    className="invert flex-1 p-8"
                    width="350"
                    height="100"
                    alt={`${logo.alt}`}
                  />
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <ReactFullpage
      //fullpage options
      credits={{ enabled: false }}
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Hero />
            <Tech />
            <Projects />
            <Contact />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
