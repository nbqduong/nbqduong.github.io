import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import {skills} from "../constants";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";



const Skills = () => {
    return (
        <Section id="skills">
        <div className="container relative z-2">
          <Heading className="md:max-w-md lg:max-w-2xl" title="My skills" />

          {/* Centering the content */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-10"> {/* Added flex-wrap */}
            {skills.map((item) => (
              <div
                className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
                key={item.id}
              >
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex flex-wrap justify-center items-center gap-4 mt-auto"> {/* Added flex-wrap here */}
                    {
                      item.icons.map((icon, index) => (
                        <img
                          key={index}
                          src={icon.src}  // Assuming 'icon' is the URL of the icon image
                          alt={icon.alt}  // Descriptive alt text for each icon
                          width={24}
                          height={24}
                          className="icon-class"  // Add any necessary class for styling
                          style={{ marginRight: index === item.icons.length - 1 ? 0 : '10px' }}  // Add margin-right except for the last icon
                        />
                      ))
                    }
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8"
                  style={{ clipPath: "url(#benefits)" }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={362}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            ))}
          </div>
          
        </div>
        <BackgroundCircles/>
      </Section>
      
    );
  };
  
  export default Skills;

