import React from "react";
import StandOutD from "./images/desktop/image-stand-out.jpg";
import StandOutM from "./images/mobile/image-stand-out.jpg";
import TransformD from "./images/desktop/image-transform.jpg";
import TransformM from "./images/mobile/image-transform.jpg";
import PhotographyD from "./images/desktop/image-photography.jpg";
import PhotographyM from "./images/mobile/image-photography.jpg";
import GraphicDesignD from "./images/desktop/image-graphic-design.jpg";
import GraphicDesignM from "./images/desktop/image-graphic-design.jpg";
import GalleryConeD from "./images/desktop/image-gallery-cone.jpg";
import GalleryMilkD from "./images/desktop/image-gallery-milkbottles.jpg";
import GalleryOrangeD from "./images/desktop/image-gallery-orange.jpg";
import GallerySugarcubesD from "./images/desktop/image-gallery-sugarcubes.jpg";
import GalleryConeM from "./images/mobile/image-gallery-cone.jpg";
import GalleryMilkM from "./images/mobile/image-gallery-milkbottles.jpg";
import GalleryOrangeM from "./images/mobile/image-gallery-orange.jpg";
import GallerySugarcubesM from "./images/mobile/image-gallery-sugar-cubes.jpg";
import Emily from "./images/image-emily.jpg";
import Jennie from "./images/image-jennie.jpg";
import Thomas from "./images/image-thomas.jpg";

const MainContent = () => {
  return (
    <main>
      <div
        className="grid md:grid-cols-2 grid-cols-1 auto-cols-auto"
        id="section1"
      >
        <div className="grow md:order-1 order-2 md:text-start text-center">
          <div className="cs:w-[50%] mx-auto cs:mt-[20%] flex flex-col gap-8 md:items-start items-center md:my-auto my-16">
            <h2 className="font-Fraunces text-Very-dark-desaturated-blue cs:text-5xl mc:text-4xl md:text-2xl text-3xl font-extrabold">
              Transform your brand
            </h2>
            <p className="text-Dark-grayish-blue cs:w-[95%] w-[77%] cs:text-lg md:text-[1rem] text-[1.3rem] ">
              We are a full-service creattive agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button className="cursor-pointer font-Fraunces font-extrabold md:self-start text-lg hover:decoration-Yellow   FirstLearnMore">
              LEARN MORE
            </button>
          </div>
        </div>
        <img
          src={TransformD}
          alt="Egg Image"
          className="grow md:order-2 order-1 md:w-full md:block hidden"
        />
        <img
          src={TransformM}
          alt="Egg Image"
          className="grow md:order-2 order-1 md:w-full md:hidden block"
        />
        <div className="grow order-4 md:text-start text-center ">
          <div className="cs:w-[60%] mx-auto cs:mt-[20%] flex flex-col gap-8 md:items-start items-center md:my-auto my-16">
            <h2 className="font-Fraunces text-Very-dark-desaturated-blue cs:text-5xl mc:text-4xl text-4xl md:w-full w-[60%] font-extrabold">
              Stand out to the right audience
            </h2>
            <p className="text-Dark-grayish-blue md:w-[85%] w-[70%] cs:text-lg md:text-[1rem] text-[1.3rem] ">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <button className="cursor-pointer font-Fraunces font-extrabold md:self-start text-lg hover:decoration-Soft-Red SecondLearnMore">
              LEARN MORE
            </button>
          </div>
        </div>
        <img
          src={StandOutD}
          alt="Cup Image Desktop"
          className="grow order-3 md:w-full md:block hidden"
        />
        <img
          src={StandOutM}
          alt="Cup Image Mobile"
          className="grow order-3 md:w-full md:hidden block"
        />
        <div className="relative order-4">
          <img
            src={GraphicDesignD}
            alt="Cherry's image Desktop"
            className="grow md:w-full md:block hidden"
          />
          <img
            src={GraphicDesignM}
            alt="Cherry's Image Mobile"
            className="grow  md:w-full md:hidden block"
          />
          <div className="absolute bottom-[20%] text-center md:w-[38%] w-full left-[50%] left-1/2 transform -translate-x-1/2 text-Dark-Desaturated-Cyan">
            <h3 className="font-Fraunces text-[2rem] font-extrabold">
              Graphic Design
            </h3>
            <p className="">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>
        <div className="relative order-5">
          <img
            src={PhotographyD}
            alt="Orange Image Desktop"
            className="grow md:w-full md:block hidden"
          />
          <img
            src={PhotographyM}
            alt="Orange Image Mobile"
            className="grow  md:w-full md:hidden block"
          />
          <div className="absolute bottom-[20%] md:w-[38%] w-full text-center left-[50%] left-1/2 transform -translate-x-1/2 text-Dark-Blue">
            <h3 className="font-Fraunces text-[2rem] font-extrabold">
              Photography
            </h3>
            <p className="">
              Increase your credibility by getting the most stunning,
              high-quality photos that imporve your business image.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center md:my-[10rem] my-[5rem] text-center">
        <h3 className="text-Grayish-blue font-extrabold md:text-[1.5rem] font-Fraunces uppercase tracking-widest mb-10">
          Client Testimonials
        </h3>
        <div className="flex md:flex-row flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-10 items-center md:w-[20%]">
            <img src={Emily} alt="" className="rounded-full w-20" />
            <p className="text-Dark-grayish-blue text-lg md:w-full w-5/6">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div>
              <p className="text-Very-dark-desaturated-blue font-extrabold font-Fraunces text-xl">
                Emily R.
              </p>
              <p className="text-Dark-grayish-blue">Marketing Director</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center md:w-[20%]">
            <img src={Thomas} alt="" className="rounded-full w-20" />
            <p className="text-Dark-grayish-blue text-lg md:w-full w-5/6">
              Sunnyside's enthusiasm coupled with their keen interest in our
              brand's success made it a satisfying and enjoyable experience.
            </p>
            <div>
              <p className="text-Very-dark-desaturated-blue font-extrabold font-Fraunces text-xl">
                Thomas S.
              </p>
              <p className="text-Dark-grayish-blue">Chief Operating Officer</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center md:w-[20%]">
            <img src={Jennie} alt="" className="rounded-full w-20" />
            <p className="text-Dark-grayish-blue text-lg md:w-full w-5/6">
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <div>
              <p className="text-Very-dark-desaturated-blue font-extrabold font-Fraunces text-xl">
                Jennie F.
              </p>
              <p className="text-Dark-grayish-blue">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-auto md:flex-nowrap flex-wrap">
        <img src={GalleryMilkD} alt="" className="grow  md:block hidden w-[25%]"/>
        <img src={GalleryMilkM} alt="" className="grow  md:hidden block w-[50%]"/>

        <img src={GalleryOrangeD} alt="" className="grow  md:block hidden w-[25%]"/>
        <img src={GalleryOrangeM} alt="" className="grow  md:hidden block w-[50%]"/>

        <img src={GalleryConeD} alt="" className="grow md:block hidden w-[25%]"/>
        <img src={GalleryConeM} alt="" className="grow  md:hidden block w-[50%]"/>

        <img src={GallerySugarcubesD} alt="" className="grow  md:block hidden w-[25%]"/>
        <img src={GallerySugarcubesM} alt="" className="grow  md:hidden block w-[50%]"/>
      </div>
    </main>
  );
};

export default MainContent;
