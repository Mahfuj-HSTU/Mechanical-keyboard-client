import Banner from './Banner/Banner';
import FeaturedBrands from './Brands/FeaturedBrands';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='max-w-screen-xl mx-auto'>
        <Services />
        <FeaturedProducts />
        <FeaturedBrands />
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
