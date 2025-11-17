import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import Services from '../Services/Services';
import ClientSlider from '../ClientLogosMarquee/ClientSlider';
import Benefits from '../Benefits/Benefits';
import FAQ from '../FAQ/FAQ';
import Reviews from '../Reviews/Reviews';


const reviewsPromise = fetch('/reviews.json').then(res => res.json());

const Home = () => {
  return (  
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <ClientSlider></ClientSlider>
      <Benefits></Benefits>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;