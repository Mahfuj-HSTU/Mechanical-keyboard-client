import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className='max-w-screen-xl mx-auto'>
        <Services />
      </div>
    </div>
  );
};

export default Home;
