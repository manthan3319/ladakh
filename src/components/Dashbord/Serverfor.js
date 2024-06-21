import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import serve1img from '../../images/serve1.svg';
import serve2img from '../../images/serve2.svg';
import serve3img from '../../images/serve3.svg';
import { Link } from 'react-router-dom';

const slideData = [
    {
        img: serve1img,
        title: "Ladakh Bike Trip 2022",
        days: "10 days",
        start: "Manali",
        end: "Manali",
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the and typesetting industry."
    },
    {
        img: serve2img,
        title: "Adventure Trip 2022",
        days: "12 days",
        start: "Leh",
        end: "Leh",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the and typesetting industry."
    },
    {
        img: serve3img,
        title: "Himalayan Trekking 2022",
        days: "8 days",
        start: "Delhi",
        end: "Delhi",
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the and typesetting industry."
    },
    {
        img: serve2img,
        title: "Adventure Trip 2022",
        days: "12 days",
        start: "Leh",
        end: "Leh",
        rating: 5,
        description: "Lorem Ipsum is simply dummy text of the and typesetting industry."
    },
];

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow next" onClick={onClick}>
            <i className="fa fa-angle-right" aria-hidden="true" style={{ color: 'black' }}></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="arrow prev" onClick={onClick}>
            <i className="fa fa-angle-left" aria-hidden="true" style={{ color: 'black' }}></i>
        </div>
    );
};

export const Serverfor = () => {
    const sliderRef = React.useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };

    return (
        <div className='lg:max-w-[1450px] xl:max-auto m-0 lg:px-[78px] max-w-auto lg:mt-[150px] overflow-hidden'>
            <div className='flex justify-end gap-[30%] items-center'>
                <div className='text-center popucategory_title'>
                    <h1 className='text-black font-popin text-[20px] font-400'>We Serve For You</h1>
                    <p className='text-[#AAAAAA] text-[13px] font-popin'>Lorem Ipsum is simply dummy text</p>
                </div>

                <div className='flex justify-center left_right_arrow'>
                    <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
                    <NextArrow onClick={() => sliderRef.current.slickNext()} />
                </div>
            </div>

            <div className='mt-[50px]'>
                <Slider ref={sliderRef} {...settings} className='slider'>
                    {slideData.map((slide, index) => (
                        <div key={index} className='we_serve'>
                            <div className='bg-white'>
                                <div>
                                    <img src={slide.img} alt='img' />
                                </div>
                                <div className='we_serve_contant'>
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h1 className='font-popin text-[#665A48] font-semibold text-[15px]'>{slide.title}</h1>
                                        </div>
                                        <div>
                                            <p className='px-[25px] py-[12px] days bg-custom text-white font-popin text-[10px] mr-[-24px]'>{slide.days}</p>
                                        </div>
                                    </div>

                                    <div className='flex flex-row gap-[15px] my-[10px]'>
                                        <p className='font-popin text-custom text-[14px]'><span className='font-semibold text-black'>Start :</span> {slide.start}</p>
                                        <p className='font-popin text-custom text-[14px]'><span className='font-semibold text-black'>End :</span> {slide.end}</p>
                                    </div>

                                    <div className='flex flex-row gap-[10px] items-center'>
                                        <p className='font-popin text-custom text-[14px]'><span className='font-semibold text-black'>Rating :</span></p>
                                        <div className='flex flex-row gap-[5px]'>
                                            {[...Array(5)].map((star, i) => (
                                                <i key={i} className={`fa ${i < slide.rating ? 'fa-star' : 'fa-star-o'}`} aria-hidden="true"></i>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className='text-custom text-[16px] font-light mt-[15px]'>{slide.description}</p>
                                    </div>

                                    <div className='text-center mt-[20px]'>
                                        <Link className='text-[white] font-popin py-[14px] rounded-[7px] font-normal px-[30px] bg-custom text-[14px] inline-block'>Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                
            </div>
        </div>
    );
}
