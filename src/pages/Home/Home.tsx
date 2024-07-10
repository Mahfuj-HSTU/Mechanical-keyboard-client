import Banner from './Banner/Banner';
import FeaturedBrands from './Brands/FeaturedBrands';
import CustomizableOptions from './CustomizableOptions/CustomizableOptions';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import WhyMechanicalKeyboards from './WhyMechanicalKeyboard/WhyMechanicalKeyboard';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='max-w-screen-xl mx-auto'>
        <Services />
        <FeaturedProducts />
        <FeaturedBrands />
        <Reviews />
        <WhyMechanicalKeyboards />
        <CustomizableOptions />
      </div>
    </div>
  );
};

export default Home;
