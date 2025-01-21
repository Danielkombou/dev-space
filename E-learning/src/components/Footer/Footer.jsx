import React from "react";
import Branding from "./Branding";
import FooterLinks from "./FooterLinks";
import SocialProfiles from "./SocialProfiles";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const homLinks = [
  { text: "Benefits", href: "#benefits" },
  { text: "Our internships", href: "#internships" },
  { text: "Our Testimonials", href: "#testimonials" },
  { text: "Our FAQ", href: "#faqs" },
];

const aboutLinks = [
  { text: "Company", href: "#company" },
  { text: "Achievements", href: "#achievements" },
  { text: "Our Goals", href: "#goals" },
];

const socialProfiles = [
  {
    label: "Facebook",
    href: "#facebook",
    icon: <Facebook className="w-6 h-6 " />,
  },
  { label: "Twitter", href: "#twitter", icon: <Twitter fill="black" /> },
  { label: "LinkedIn", href: "#linkedin", icon: <Linkedin /> },
];

const FooterBottom = () => {
  return (
    <div className="text-center border-t border-gray-300 pt-10">
      <p className="text-sm text-gray-500">@ 2024 instant. All rights reserved.</p>
    </div>
  );
};

function Footer() {
  return (
    <footer className="bg-white py-10 md:px-20">
      <div>
        <div className="flex justify-between py-4 pb-10">
          <div className=" flex flex-1">
            <Branding />
          </div>
          <div className="flex flex-1 justify-between gap-4 ">
            <FooterLinks title="Home" links={homLinks} />
            <FooterLinks title="About Us" links={aboutLinks} />
            <SocialProfiles profiles={socialProfiles} />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}

export default Footer;
