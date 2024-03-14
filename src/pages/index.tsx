import { projectLogos, techLogos } from "@/_data";
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
  return (
    <div className="section">
      <div className="container mx-auto  grid grid-cols-2 items-center">
        <div>
          <h1 className="text-6xl lg:text-8xl text-primary font-bold mb-6 tracking-wide">
            projects
          </h1>
          <p className="text-xl lg:text-4xl tracking-wider">
            {`just some that I've worked with.`}
          </p>
        </div>
        <div className="grid grid-cols-4">
          {!!projectLogos.length &&
            projectLogos.map((logo, idx) => (
              <Link key={`${logo.alt}-${idx}`} href={logo.url} className="flex">
                <Image
                  src={`/logos/projects/${logo.image}`}
                  className={`grayscale flex-1 p-8 ${
                    logo.classes ? logo.classes : "brightness-[500]"
                  }`}
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

const Tech = () => {
  return (
    <div className="section">
      <div className="container mx-auto  grid grid-cols-2 items-center">
        <div>
          <h1 className="text-6xl lg:text-8xl text-primary font-bold mb-6 tracking-wide">
            skills
          </h1>
          <p className="text-xl lg:text-4xl tracking-wider">
            {`just some that I'm confident with.`}
          </p>
        </div>
        <div className="grid grid-cols-4">
          {!!techLogos.length &&
            techLogos.map((logo, idx) => (
              <Link
                href={logo.url}
                target="_blank"
                key={`${logo.alt}-${idx}`}
                className="flex"
              >
                <Image
                  src={`/logos/tech/${logo.image}`}
                  className="invert flex-1 p-8"
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
