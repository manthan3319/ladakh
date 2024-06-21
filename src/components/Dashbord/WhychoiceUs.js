import React from 'react'
import choose from '../../images/choose.svg';
import offer from '../../images/offer.svg';
import booking from '../../images/booking.svg';
import tourguide from '../../images/tour-guide.svg';
import fire from '../../images/fire.svg';
import toristman from '../../images/touristman.svg';
export const WhychoiceUs = () => {
  return (
    <div className='lg:max-w-[1450px] xl:max-auto m-0 lg:px-[78px] mt-[100px] relative'>

        <img src={fire} alt='img' className='fireimage absolute' />
    <div>
        <div className='text-center popucategory_title'>
            <h1 className='text-black font-popin text-[20px] font-400'>We Serve For You</h1>
            <p className='text-[#AAAAAA] text-[13px] font-popin'>Lorem Ipsum is simply dummy text</p>
        </div>
    </div>


    <div className='flex lg:flex-row lg:mt-[50px] justify-between'>
        <div className='lg:w-[30%]'>
            <div className='why_choise_img why_choise_img1'>
                <img src={choose} alt='img' />
                <div className='why_choise_contant'>
                    <h4>lots of choices</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
            </div>

            <div className='why_choise_img why_choise_img2'>
                <img src={offer} alt='img' />
                <div className='why_choise_contant'>
                    <h4>lots of choices</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
            </div>
        </div>

        <div className='torishmanimg'>
            <img src={toristman} alt='imag' className='toristman' />
        </div>

        <div className='lg:w-[30%]'>
            <div className='why_choise_img'>
                <img src={booking} alt='img' />
                <div className='why_choise_contant'>
                    <h4>lots of choices</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
            </div>

            <div className='why_choise_img why_choise_img2'>
                <img src={tourguide} alt='img' />
                <div className='why_choise_contant'>
                    <h4>lots of choices</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
