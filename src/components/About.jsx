import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import AppearingBlock from "./design/BlockDisplay";
import homeSmile from "../constants";
import Heading from "./Heading"
import TextByTextDisplay from "./design/AffectDisplayText";


const About = () => {
  const getGreeting = () =>{
    const currentHour = new Date().getHours();
    if(currentHour > 5 && currentHour <= 7) return "Why you get up so early? Great morning ya?";
    if(currentHour > 7 && currentHour <= 11) return "Wish you have great things this morning";
    if(currentHour > 11 && currentHour <= 13) return "Btw, did you have a lunch?";
    if(currentHour > 13 && currentHour <= 17) return "Good afternoon!";
    if(currentHour > 17 && currentHour <= 20) return "Good everning🌙";
    if(currentHour > 20 && currentHour <= 23) return "Good night✨";
    return "Btw, why are you still here this time 😨?";
  }
  const greeting = getGreeting();

  const parallaxRef = useRef(null);
  const paragraph = "I am passionate about building efficient, real-time, user-friendly applications that solve real-world problems. I thrive in collaborative environments focused on productivity and innovation."
  const paragraph2 = greeting;
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
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490] relative flex items-center justify-center text-top">

    
                <h1 className="p-1 text-lg md:text-xl lg:text-2xl leading-relaxed" >
                    {paragraph}
                    <br />
                    <br />
                    {paragraph2}
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
              <a href="https://drive.usercontent.google.com/uc?id=1ihBLVtSDZbibWkGtU6CXDAMTXkMmN8hA&export=download" className="flex items-center space-x-3 font-semibold text-lg hover:text-n-1 transition-colors duration-300">
                <ul className="hidden absolute -left-[6.0rem] bottom-[1.5rem] px-4 py-3 bg-n-9/40 backdrop-blur border border-n-1/20 rounded-2xl xl:flex items-center space-x-3 text-white">
                    <li className="flex items-center space-x-3">
                    {/* Wrap both the text and the image in a single <a> tag to make them both clickable */}
                    
                        {/* Text */}
                        <span>My CV</span>
                        
                        {/* Smile Icon */}
                        {/* <img src={homeSmile} width={24} height={24} alt="Smile Icon" /> */}
                    
                    </li>
                </ul>
                </a>
              </ScrollParallax>

              <ScrollParallax isAbsolutelyPositioned>
              <a href="#contacts" className="flex items-center space-x-3 font-semibold text-lg hover:text-n-1 transition-colors duration-300">
                <ul className="hidden absolute -left-[6.0rem] bottom-[5.5rem] px-4 py-3 bg-n-9/40 backdrop-blur border border-n-1/20 rounded-2xl xl:flex items-center space-x-3 text-white">
                    <li className="flex items-center space-x-3">
                    {/* Wrap both the text and the image in a single <a> tag to make them both clickable */}
                    
                        {/* Text */}
                        <span>Contact</span>
                        
                        {/* Smile Icon */}
                        {/* <img src={homeSmile} width={24} height={25} alt="Smile Icon" /> */}
                    
                    </li>
                </ul>
                </a>
              </ScrollParallax>



              
            </div>

            <Gradient />
            
          </div>

          
          
        </div>
        <BackgroundCircles/>



      <BottomLine />
      
    </Section>
  );
};

export default About;

