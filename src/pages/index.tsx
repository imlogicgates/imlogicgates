import ReactFullpage from "@fullpage/react-fullpage";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const SocialLinks = () => {
  return (
    <>
      <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
        <Image src={"/icons/linkedin.svg"} width="50" height="50" alt={""} />
      </a>
      <a href={process.env.NEXT_PUBLIC_GITHUB_URL}>
        <Image src={"/icons/github.svg"} width="50" height="50" alt={""} />
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
      <div className="container mx-auto px-4">
        <h1 className="text-8xl text-primary font-bold my-4 tracking-wide">
          {`Henlo, I'm Jigs!`}
        </h1>
        <p className="text-3xl pb-2 tracking-wider">
          A software engineer capable of empowering
        </p>
        <p className="text-3xl pb-2 tracking-wider">
          businesses with{" "}
          <span className="text-primary font-bold">
            agile <span className="text-white font-normal">and</span> scalable
            solutions.
          </span>
        </p>
        <div className="flex gap-x-20 my-4 align-top">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4">
        <h1 className="text-8xl text-primary font-bold my-4 tracking-wide">
          wuv u.
        </h1>
        <p className="text-4xl pb-2 tracking-wider">have a nice day, fren.</p>

        <div className="flex justify-center gap-x-20 my-4 align-top">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4 flex flex-col justify-evenly column h-[100vh]">
        <div>
          <h1 className="text-8xl text-primary font-bold mb-6 tracking-wide">
            projects
          </h1>
          <p className="text-4xl tracking-wider">
            just some brands I've worked with.
          </p>
        </div>
        <div className="flex justify-center gap-x-20 my-4 flex-wrap align-top">
          <Image
            src={"/logos/sunshield.png"}
            className="grayscale brightness-[500]"
            width="400"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/maison-berger-ph.webp"}
            className="grayscale brightness-[500]"
            width="370"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/ecofoam.png"}
            className="grayscale brightness-200"
            width="400"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/solflex.png"}
            className="grayscale brightness-[500]"
            width="400"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/techniice.png"}
            className="grayscale brightness-200"
            width="400"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/sunlite.png"}
            className="grayscale brightness-[500]"
            width="400"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/jetpack.svg"}
            className="grayscale brightness-[500]"
            width="180"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/solflex-superior.png"}
            className="grayscale brightness-[500]"
            width="400"
            height="100"
            alt={""}
          />
          <Image
            src={"/logos/markee.png"}
            className="grayscale brightness-[500]"
            width="400"
            height="100"
            alt={""}
          />
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
      licenseKey={""}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Hero />
            <Projects />
            <Contact />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
