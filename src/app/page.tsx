use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap, Award } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/3764402/pexels-photo-3764402.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman with curly hair using a laptop while sitting outdoors, showcasing modern remote work lifestyle."},
  {"id":"about-image","url":"https://images.pexels.com/photos/6981024/pexels-photo-6981024.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Businesswoman giving presentation in office with bookshelves and clock."},
  {"id":"feature-image1","url":"https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling teacher writing on a whiteboard in a lively classroom setting with students."},
  {"id":"feature-image2","url":"https://images.pexels.com/photos/34351909/pexels-photo-34351909.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"technology workshop - Photo by Erik Mclean"}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Features", id: "features" }, { name: "Contact", id: "contact" }]}
          brandName="Techno Main Salt Lake"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit 
            title="Welcome to Techno Main Salt Lake"
            description="Empowering your future with technology and innovation."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "Learn More", href: "about" }, { text: "Visit Us", href: "contact" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout 
            title="About Us"
            description={["At Techno Main Salt Lake, we are committed to delivering cutting-edge educational experiences.", "Our mission is to foster innovation and creativity among students."]}
            buttons={[{ text: "Our Mission", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo 
            title="Our Features"
            description="Explore our diverse offerings that enhance your educational journey."
            features={[
              { title: "Innovative Labs", description: "State-of-the-art laboratories for modern education.", icon: Zap },
              { title: "Expert Faculty", description: "Learn from industry leaders and experienced educators.", icon: Award }
            ]}
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqBase 
            title="Frequently Asked Questions"
            description="Find answers to common queries about our institution."
            faqs={[
              { id: "1", title: "What programs do you offer?", content: "We offer a wide range of technology and management programs." },
              { id: "2", title: "How can I apply?", content: "Visit our admissions page for application details." }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter 
            tag="Get In Touch"
            title="Contact Us"
            description="Reach out for more information or inquiries."
            inputPlaceholder="Your email address"
            buttonText="Submit"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase 
            columns={[
              { title: "Institution", items: [{ label: "About", href: "about" }, { label: "Programs", href: "programs" }] },
              { title: "Support", items: [{ label: "FAQs", href: "faq" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 Techno Main Salt Lake"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
