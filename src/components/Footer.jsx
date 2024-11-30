import React from 'react';
import { socials } from '../constants';
import Heading from './Heading';
import Section from './Section';

const currentYear = new Date().getFullYear();
function Footer(){
    return(
      <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="contacts"
    >
            <Heading title = "Contact Information"/>
            <ul className="flex justify-center items-center gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-14 h-14 bg-n-4 rounded-full transition-colors hover:bg-n-1"

                >
                  <img src={item.iconUrl} width={24} height={24} alt={item.title} />
                </a>
              ))}
            </ul>
        </Section>
    );
};

export default Footer;