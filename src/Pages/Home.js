import React from "react";
import Banner from "../components/Banner";
import FeaturesServices from "../components/HomePage/FeaturesServices";
import AboutSection from "../components/HomePage/AboutSection";
import CounterSection from "../components/HomePage/CounterSection";
import TeamMembers from "../components/HomePage/TeamMembers";
import ServicesSection from "../components/HomePage/ServicesSection";
import ExperienceSection from "../components/HomePage/ExperienceSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import WorkSection from "../components/HomePage/WorkSection";
import CallToAction from "../components/HomePage/CallToAction";
import PricingSection from "../components/HomePage/PricingSection";






const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      
      <FeaturesServices></FeaturesServices>
      
      <AboutSection></AboutSection>
      <CounterSection></CounterSection>
      <PricingSection></PricingSection>
     
      <ServicesSection></ServicesSection>
     
      <TestimonialSection></TestimonialSection>
      <WorkSection></WorkSection>
      
      






      




    </div>
  );
};

export default Home;
