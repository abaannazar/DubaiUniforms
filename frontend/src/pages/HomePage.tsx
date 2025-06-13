import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import RegionsSection from '../components/home/RegionsSection';
import CtaSection from '../components/home/CtaSection';
import BrandIconsGrid from '../components/home/Brandicon';
import { Helmet } from 'react-helmet-async';


const HomePage = () => {
  useEffect(() => {
    document.title = 'Dubai Uniforms | Premium Uniform Manufacturer in UAE';
  }, []);

  return (
    <>
      <Helmet>
        <title>Dubai Uniform | Custom Uniforms in UAE & GCC</title>
        <meta name="description" content="Custom uniforms for hospitality, medical, corporate, and industrial sectors across the GCC." />
        <meta name="keywords" content="uniforms dubai, gcc workwear, custom uniforms uae" />
        <link rel="canonical" href="https://dubaiuniform.com/" />
      </Helmet>

      <HeroSection />
      <CategorySection />
      <WhyChooseUsSection />
      <RegionsSection />
      <BrandIconsGrid />
      <CtaSection />
    </>
  );
};

export default HomePage;