import React from 'react'
import leh from "../../images/leh.svg";
import Nubra from "../../images/nubravalley.svg";
import team from "../../images/sun 1.svg";
import wind from "../../images/wind 1.svg";
import snowflake from "../../images/snowflake.svg";
import { Link } from 'react-router-dom';
import camp from "../../images/camp.svg";
export const Getconnected = () => {
    return (
        <div className='max-w-[1450px] xl:max-auto m-0 lg:px-[78px] lg:mt-[100px] mb-[50px] relative'>
            <div className='flex lg:flex-row gap-[20px]'>
                <div className='lg:w-[70%]'>
                    <div className='get_connecr_left flex gap-[20px]'>
                        <div className='get_connect_left_img get_connect_left_img2'>
                            <img src={leh} alt='img' />
                            <p>Leh</p>
                        </div>

                        <div className='get_connect_left_img'>
                            <img src={Nubra} alt='img' />
                            <p>Nubra Valley</p>
                        </div>
                    </div>

                    <div className='team'>
                        <div className='teamp_wind flex justify-between'>
                            <div className='snow_section'>
                                <img src={team} alt='img' />
                                <div className='snow_title_team'>
                                    <h5 className='font-popin'>-15 c</h5>
                                    <p className='font-popin'>temp</p>
                                </div>
                            </div>

                            <div className='snow_section'>
                                <img src={wind} alt='img' />
                                <div className='snow_title_team'>
                                    <h5 className='font-popin'>13 km</h5>
                                    <p className='font-popin'>wind</p>
                                </div>
                            </div>

                            <div className='snow_section'>
                                <img src={snowflake} alt='img' />
                                <div className='snow_title_team'>
                                    <h5 className='font-popin'>100 cm </h5>
                                    <p className='font-popin'>snow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:w-[30%]'>
                    <div className='get-connected_right'>
                            <h1 className='font-popin'>Get Connected</h1>
                            <h6 className='font-popin'>it is better to travel well than to  arrive</h6>

                            <p className='font-popin'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                            <Link className='bg-custom p-[15px] rounded-[7px] font-popin text-[12px] inline-block'>Let’s Contact</Link>
                    </div>
                </div>

            </div>

            <img src={camp} alt='img'  className='camp_img'/>
        </div>
    )
}
