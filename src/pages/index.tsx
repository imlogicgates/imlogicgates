import ReactFullpage from "@fullpage/react-fullpage";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
      <div className="container mx-auto px-4 block lg:flex justify-between align-middle">
        <div className="flex flex-col justify-center">
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
          <p className="pb-6 text-lg tracking-wider">I also love cats.</p>
          <div className="flex gap-x-20 my-8 lg:my-4 align-top">
            <SocialLinks />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={"/cats/cat-curled.svg"}
            width="600"
            height="50"
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src={"/cats/cat-satisfied.svg"}
            width="500"
            height="50"
            alt={""}
          />
        </div>
        <h1 className="text-6xl lg:text-8xl text-primary font-bold my-4 tracking-wide">
          wuv u.
        </h1>
        <p className="text-2xl lg:text-4xl pb-2 tracking-wider">
          have a nice day, friend.
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
      url: "https://www.hellotherma.com",
    },
    {
      image: "maison-berger-ph.svg",
      alt: "Maison Berger",
      classes: "brightness-[500] px-8",
      url: "https://maison-berger.ph/",
    },
    {
      image: "activelamp.svg",
      alt: "ActiveLAMP",
      url: "https://www.activelamp.com/",
    },
    {
      image: "jetpack.svg",
      alt: "Jetpack",
      classes: "brightness-[500] px-32",
      url: "https://jetpack.to/",
    },
    {
      image: "doyo.svg",
      alt: "Jetpack",
      classes: "brightness-[500] px-20",
      url: "https://stage-app.getdoyo.com/",
    },
    {
      image: "ecofoam.png",
      alt: "Ecofoam",
      classes: "brightness-200",
      url: "https://www.ecofoam.com.ph/",
    },
    {
      image: "solflex.png",
      alt: "Solflex",
      classes: "brightness-[6]",
      url: "https://solflex.com.ph/",
    },
    {
      image: "techniice-edited.png",
      alt: "Techniice",
      url: "https://techniice.com.ph/",
    },
    {
      image: "sunlite.png",
      alt: "Sunlite",
      url: "https://sunshield.com.ph/products/sunlite-polycarbonate-sheets/",
    },
    {
      image: "solflex-superior.png",
      alt: "Soflex Superior",
      classes: "brightness-[6]",
      url: "https://solflex.com.ph/our-brands/solflex-superior-solid-surface/",
    },
    {
      image: "markee.png",
      alt: "Markee",
      url: "https://solflex.com.ph/our-brands/markee-absolute-quartz-countertop/",
    },
    {
      image: "sunshield.png",
      alt: "Sunshield",
      url: "https://www.sunshield.com.ph/",
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
              <Link key={`${logo}`} href={logo.url}>
                <Image
                  src={`/logos/projects/${logo.image}`}
                  className={`grayscale ${
                    logo.classes ? logo.classes : "brightness-[500]"
                  }`}
                  width="400"
                  height="100"
                  alt={`${logo.alt}`}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

const Tech = () => {
  const logos = [
    {
      image: "html.svg",
      alt: "HTML",
      url: "https://www.testdome.com/certificates/dc1b8124d2fb499480fab0fd17ed0d20",
    },
    {
      image: "css.svg",
      alt: "CSS",
      url: "https://www.testdome.com/certificates/dc1b8124d2fb499480fab0fd17ed0d20",
    },
    {
      image: "angular.svg",
      alt: "NextJS",
      url: "",
    },
    {
      image: "js.svg",
      alt: "JavaScript",
      url: "https://www.testdome.com/certificates/5f54ee70f1894a4aa1bb6783469f32be",
    },
    {
      image: "ts.svg",
      alt: "TypeScript",
      url: "https://www.testdome.com/certificates/e0be89e891f54e08b5c830f150e48aad",
    },
    {
      image: "react.svg",
      alt: "React",
      url: "",
    },
    {
      image: "sql.svg",
      alt: "SQL",
      url: "https://www.testdome.com/certificates/db6daa553f4a460b8d53b88da4b1baf8",
    },
    {
      image: "github.svg",
      alt: "NextJS",
      url: "",
    },
    {
      image: "api.svg",
      alt: "API",
      url: "",
    },
    {
      image: "next.svg",
      alt: "NextJS",
      url: "",
    },
    {
      image: "vercel.svg",
      alt: "Vercel",
      url: "",
    },
  ];
  return (
    <div className="section">
      <div className="text-center container mx-auto px-4 flex flex-col justify-evenly column lg:h-[100vh]">
        <div>
          <h1 className="text-6xl lg:text-8xl text-primary font-bold mb-6 tracking-wide">
            skills
          </h1>
          <p className="text-xl lg:text-4xl tracking-wider">
            {`just some that I'm confident with.`}
          </p>
        </div>
        <div className="flex justify-evenly my-4 flex-wrap align-top">
          {!!logos.length &&
            logos.map((logo) => (
              <Link href={logo.url} target="_blank" key={`${logo}`}>
                <Image
                  src={`/logos/tech/${logo.image}`}
                  className="invert p-16"
                  width="350"
                  height="100"
                  alt={`${logo.alt}`}
                />
              </Link>
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
            <Tech />
            <Projects />
            <Contact />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
