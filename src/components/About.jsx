import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import AppearingBlock from "./design/BlockDisplay";
import homeSmile from "../constants";


const About = () => {
  const parallaxRef = useRef(null);
  const paragraph = " Embedded Software Engineer and Software Engineer."

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about"
    >
        
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
{/* rectangle */}
      
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <AppearingBlock>
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative flex items-center justify-center text-center">

    
                <h1 className="p-4 text-lg md:text-xl lg:text-2xl leading-relaxed" >
                    I am a software engineer in Vietnam. In addition, I am interested in the areas of natural language processing and data processing. I write this website in my spare time to practice coding and share my knowledge. I plan to blog about my experience and develop mini apps. Hope you like them
                    <br />
                    <br />A little bit about myself, I love reading books and coding (this is why you see this site). I also love photography, you can find me on Instagram
                </h1>
                

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax> */}
                
              </div>
              </AppearingBlock>


              <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[1.5rem] px-4 py-3 bg-n-9/40 backdrop-blur border border-n-1/20 rounded-2xl xl:flex items-center space-x-3 text-white">
                    <li className="flex items-center space-x-3">
                    {/* Wrap both the text and the image in a single <a> tag to make them both clickable */}
                    <a href="#contact" className="flex items-center space-x-3 font-semibold text-lg hover:text-n-1 transition-colors duration-300">
                        {/* Text */}
                        <span>Contact me</span>
                        
                        {/* Smile Icon */}
                        <img src={homeSmile} width={24} height={25} alt="Smile Icon" />
                    </a>
                    </li>
                </ul>
              </ScrollParallax>


              
            </div>

            <Gradient />
            
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
          
          
        </div>
        <BackgroundCircles/>



      <BottomLine />
      
    </Section>
  );
};

export default About;

