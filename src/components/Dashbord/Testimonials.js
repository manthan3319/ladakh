import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import buissnisgirl from '../../images/businessgirl.svg';
import quote from '../../images/quote 1.svg';
import sliderdot1 from '../../images/slider1.svg';
import sliderdot2 from '../../images/silder2.svg';
import sliderdot3 from '../../images/slider4.svg';
import sliderdot4 from '../../images/slider5.svg';
import sliderdot5 from '../../images/slider6.svg';
import sliderdot6 from '../../images/slider7.svg';
import bike from '../../images/bike.svg';

// Testimonial data
const testimonialsData = [
    {
        image: buissnisgirl,
        dote:sliderdot1,
        quoteImage: quote,
        quoteText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        author: "Lorem Ipsum",
        designation: "UI/UX designer"
    },
    {
        image: buissnisgirl,
        dote:sliderdot2,
        quoteImage: quote,
        quoteText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        author: "Lorem Ipsum",
        designation: "UI/UX designer"
    },
    ,
    {
        image: buissnisgirl,
        dote:sliderdot3,
        quoteImage: quote,
        quoteText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        author: "Lorem Ipsum",
        designation: "UI/UX designer"
    },
    ,
    {
        image: buissnisgirl,
        dote:sliderdot4,
        quoteImage: quote,
        quoteText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        author: "Lorem Ipsum",
        designation: "UI/UX designer"
    },
    ,
    {
        image: buissnisgirl,
        dote:sliderdot5,
        quoteImage: quote,
        quoteText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        author: "Lorem Ipsum",
        designation: "UI/UX designer"
    },,
    {
        image: buissnisgirl,
        dote:sliderdot6,
        quoteImage: quote,
        quoteText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
        author: "Lorem Ipsum",
        designation: "UI/UX designer"
    }
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow next testimonial_left" onClick={onClick}>
            <i className="fa fa-angle-right" aria-hidden="true" style={{ color: 'black' }}></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow prev testimonial_right" onClick={onClick}>
            <i className="fa fa-angle-left" aria-hidden="true" style={{ color: 'black' }}></i>
        </div>
    );
};

export const Testimonials = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index);
    };

    const CustomDot = ({ index, active }) => (
        <div className={`custom-dot ${active ? 'active' : ''}`} onClick={() => handleDotClick(index)}>
            <img src={testimonialsData[index].dote} alt="dot-img" className="dot-image" />
        </div>
    );

    return (
        <div className='lg:max-w-[1450px] xl:max-auto m-0 lg:px-[78px] mt-[100px] relative'>
            <div>
                <div className='text-center popucategory_title'>
                    <h1 className='text-black font-popin text-[20px] font-400'>Testimonials</h1>
                    <p className='text-[#AAAAAA] text-[13px] font-popin'>Lorem Ipsum is simply dummy text</p>
                </div>
            </div>

            <div className='testimonials_slider mt-[50px]'>
                <Slider {...settings} ref={sliderRef}>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index}>
                            <div className='flex lg:flex-row items-center pt-[54px]'>
                                <div className='w-[50%] business_girls_image2'>
                                    <img src={testimonial.image} alt='img' className='business_girls_image' />
                                </div>

                                <div className='flex gap-[30px] lg:mt-[70px] testimoni_contant w-[50%]'>
                                    <div>
                                        <img src={testimonial.quoteImage} alt='img' className='quote_img' />
                                    </div>

                                    <div className='testimoni_slider_contant'>
                                        <p>{testimonial.quoteText}</p>
                                        <h4>-{testimonial.author}</h4>
                                        <h6>{testimonial.designation}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="custom-dots flex">
                <PrevArrow onClick={() => sliderRef.current.slickPrev()}  />
                    {testimonialsData.map((testimonial, index) => (
                        <CustomDot key={index} index={index} />
                    ))}
                <NextArrow onClick={() => sliderRef.current.slickNext()}  />
                </div>
            </div>

            <img src={bike} className='bikeimage' alt='image' />
        </div>
    );
};
