import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import all Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import imag1 from '../../images/Mask group.svg';
import imag2 from '../../images/tripimge.svg';
import imag3 from '../../images/tripimage2.svg'
const slides = [
  { id: 1, title: "Nubra Valley", image: imag1 },
  { id: 2, title: "Shyok Valley", image: imag1 },
  { id: 3, title: "Keylong", image: imag1 },
  { id: 3, title: "Keylong", image: imag1 },
  // Add more slides as needed
];

const Lehladak = () => {
  return (
    <div className='lasladak_section2'>
      <div className='flex lasladak_section pt-[80px] max-w-[1450px] xl:max-auto m-0 lg:px-[78px]'>
        <div className='lg:mt-[180px] lg:w-[40%]'>
          <h1 className='text-[#FFFFFF] font-playfair lg:text-[80px] font-bold'>Leh Ladakh</h1>
          <p className='text-[#FFFFFF] font-playfair text-[13px] font-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard text ever.</p>
          <Link to="/" className='bg-custom px-[15px] py-[10px] font-popin inline-block text-[13px] explore_more_link'>explore More <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> </Link>
        </div>

        <div className='lg:w-[60%] mt-[70px] section1_slider'>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            autoplay={{ delay: 3000 }} // Add autoplay settings
            loop={true}
            modules={[Autoplay]} // Add modules here
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="slide-content">
                  <div className="slide-title font-popin">{slide.title}</div>
                  <img src={slide.image} alt={slide.title} className="slide-image" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Lehladak;
