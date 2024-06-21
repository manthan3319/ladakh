import React from 'react'
import send from '../../images/send 1.svg';
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
];

const slideData2 = [
    {
        img: serve1img,
        title: "Ladakh Bike Trip 2022",
        days: "10 days",
        start: "Manali",
        end: "Manali",
        rating: 4,
        description: "Lorem Ipsum is simply dummy text of the and typesetting industry."
    },
]

export const Inspirationfuture = () => {
    return (
        <div className='lg:max-w-[1450px] xl:max-auto m-0 lg:px-[78px] mt-[314px]'>
            <div className='flex lg:flex-row justify-between items-center inspiration_section'>
                <div className='lg:w-[30%]'>
                    <h2>get inspiration for
                        future trips weekly</h2>

                    <div>
                        <p><span><i class="fa fa-check" aria-hidden="true"></i></span>Lorem Ipsum is simply dummy text</p>
                        <p><span><i class="fa fa-check" aria-hidden="true"></i></span>Lorem Ipsum is simply dummy text</p>
                        <p><span><i class="fa fa-check" aria-hidden="true"></i></span>Lorem Ipsum is simply dummy text</p>
                        <p><span><i class="fa fa-check" aria-hidden="true"></i></span>Lorem Ipsum is simply dummy text</p>
                    </div>

                    <div className='input_send'>
                        <input type='text' placeholder='please enter your email' />
                        <img src={send} alt='img' className='send_image' />
                    </div>
                </div>

                <div className='lg:w-[60%] flex lg:flex-row lg:gap-[10px] items-center'>
                    <div className='inspirationfuture'>
                        {slideData.map((slide, index) => (
                            <div key={index}  className={`we_serve we_serve2 ${index === 1 ? 'me' : ''} ${index === 0 ? 'me2' : ''}`}> 
                                <div className='bg-white'>
                                    <div>
                                        <img src={slide.img} alt='img' style={{ width: "100%" }} />
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
                    </div>
                    <div  className='inspirationfuture'>
                        {slideData2.map((slide, index) => (
                            <div key={index} className='we_serve we_serve2'>
                                <div className='bg-white'>
                                    <div>
                                        <img src={slide.img} alt='img' style={{ width: "100%" }} />
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
                    </div>
                </div>
            </div>
        </div>
    )
}
