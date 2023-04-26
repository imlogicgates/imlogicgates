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
        <h1 className="text-4xl lg:text-8xl text-primary font-bold my-4 tracking-wide">
          {`Henlo, I'm Jigs!`}
        </h1>
        <p className="text-2xl lg:text-3xl pb-4 lg:pb-2 tracking-wider">
          A software engineer capable of empowering
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
    </div>
  );
};
const Contact = () => {
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4">
        <h1 className="text-6xl lg:text-8xl text-primary font-bold my-4 tracking-wide">
          wuv u.
        </h1>
        <p className="text-2xl lg:text-4xl pb-2 tracking-wider">
          have a nice day, fren.
        </p>

        <div className="flex justify-center gap-x-20 my-4 align-top">
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const logos = [
    {
      image: "therma.svg",
      alt: "Therma",
    },
    {
      image: "maison-berger-ph.svg",
      alt: "Maison Berger",
      classes: "brightness-[500] px-8",
    },
    {
      image: "activelamp.svg",
      alt: "ActiveLAMP",
    },
    {
      image: "jetpack.svg",
      alt: "Jetpack",
      classes: "brightness-[500] px-32",
    },
    {
      image: "ecofoam.png",
      alt: "Ecofoam",
      classes: "brightness-200",
    },
    {
      image: "solflex.png",
      alt: "Solflex",
    },
    {
      image: "techniice-edited.png",
      alt: "Techniice",
    },
    {
      image: "sunlite.png",
      alt: "Sunlite",
    },
    {
      image: "solflex-superior.png",
      alt: "Soflex Superior",
    },
    {
      image: "markee.png",
      alt: "Markee",
    },
    {
      image: "sunshield.png",
      alt: "Sunshield",
    },
  ];
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4 flex flex-col justify-evenly column lg:h-[100vh]">
        <div>
          <h1 className="text-6xl lg:text-8xl text-primary font-bold mb-6 tracking-wide">
            projects
          </h1>
          <p className="text-xl lg:text-4xl tracking-wider">
            {`just some that I've worked with.`}
          </p>
        </div>
        <div className="flex justify-evenly my-4 flex-wrap align-top">
          {!!logos.length &&
            logos.map((logo, idx) => (
              <Image
                key={`${idx}-${logo}`}
                src={`/logos/${logo.image}`}
                className={`grayscale ${
                  logo.classes ? logo.classes : "brightness-[500]"
                }`}
                width="400"
                height="100"
                alt={`${logo.alt}`}
              />
            ))}
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
            <Projects />
            <Contact />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
