import { FaDigitalOcean } from "react-icons/fa";
import HeroContent from "./HeroContent";
import { SiAzuredevops } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { FaCloudflare, FaLinode } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden mx-auto px-4 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <HeroContent />
      <TrustedBy />
    </section>
  );
};

export default Hero;

function TrustedBy() {
  return (
    <>
     
        <div className="grid text-white grid-cols-2 lg:grid-cols-6 gap-24 md:gap-52 lg:gap-3 lg:mx-20 py-4 text-4xl md:text-5xl pt-20">
          <div className="flex flex-col items-center justify-center">
            <FaDigitalOcean />
            <span className="text-lg lg:text-3xl">Digital Ocean</span>
          </div>
          <div className="flex gap-2 items-center justify-end">
            <SiAzuredevops />
            <span className="text-lg lg:text-3xl">Azure</span>
          </div>
          <div className="flex justify-center items-center">
            <BsGithub />
          </div>

          <div className="flex flex-col items-center justify-center">
            <BiLogoGoogleCloud />
            <span className="text-lg lg:text-3xl">Google Cloud</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaLinode />
            <span className="text-lg lg:text-3xl">Linode</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaCloudflare />
            <span className="text-lg lg:text-3xl">Cloudflare</span>
          </div>
        </div>
     
    </>
  );
}
