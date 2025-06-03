import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import RegionsSection from '../components/home/RegionsSection';
import CtaSection from '../components/home/CtaSection';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Dubai Uniforms | Premium Uniform Manufacturer in UAE';
  }, []);

  return (
    <>
      <HeroSection />
      <CategorySection />
      <WhyChooseUsSection />
      <RegionsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;