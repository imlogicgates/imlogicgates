import ReactFullpage from "@fullpage/react-fullpage";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

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
            <div className="section">
              <div className="container mx-auto px-4">
                <h1 className="text-6xl text-primary font-bold my-4 tracking-wide">
                  {`Hej där, I'm Jigs!`}
                </h1>
                <p className="text-3xl pb-2 tracking-wider">
                  A software engineer capable of empowering
                </p>
                <p className="text-3xl pb-2 tracking-wider">
                  businesses with{" "}
                  <span className="text-primary font-bold">
                    agile <span className="text-white font-normal">and</span>{" "}
                    scalable solutions.
                  </span>
                </p>
                <div className="flex gap-x-20 my-4 align-top">
                  <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
                    <Image
                      src={"/icons/linkedin.svg"}
                      width="50"
                      height="50"
                      alt={""}
                    />
                  </a>
                  <a href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                    <Image
                      src={"/icons/github.svg"}
                      width="50"
                      height="50"
                      alt={""}
                    />
                  </a>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>
                    <Image
                      src={"/icons/email.svg"}
                      width="60"
                      height="60"
                      alt={""}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="text-center container mx-auto px-4">
                <h1 className="text-8xl text-primary font-bold my-4 tracking-wide">
                  wuv u.
                </h1>
                <p className="text-4xl pb-2 tracking-wider">
                  have a nice day, fren.
                </p>

                <div className="flex justify-center gap-x-20 my-4 align-top">
                  <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
                    <Image
                      src={"/icons/linkedin.svg"}
                      width="50"
                      height="50"
                      alt={""}
                    />
                  </a>
                  <a href={process.env.NEXT_PUBLIC_GITHUB_URL}>
                    <Image
                      src={"/icons/github.svg"}
                      width="50"
                      height="50"
                      alt={""}
                    />
                  </a>
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>
                    <Image
                      src={"/icons/email.svg"}
                      width="60"
                      height="60"
                      alt={""}
                    />
                  </a>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
