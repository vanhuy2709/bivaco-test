import heroImage from '../../assets/images/hero/background-hero.png';

const Hero = () => {

  return (
    <div className='flex flex-col items-center lg:flex-row gap-[18px] px-10'>

      <div className='flex-[2]'>
        <h2 className='text-stone-900 text-[40px] xl:text-[75px] font-semibold mb-7'>
          Manifest Perfection
          <br />
          Through Your Style
        </h2>
        <p className='text-stone-900 text-[22px] leading-10 mb-2'>
          Our exquisite collection is here to elevate your fashion game,
          <br />
          ensuring you shine your brightest, and we're dedicated to
          <br />
          delivering nothing but the absolute best for you.
        </p>
      </div>

      <div className='flex-1'>
        <img src={heroImage} alt='hero-image' />
      </div>

    </div>
  );
};

export default Hero;