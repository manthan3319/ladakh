import React from 'react'
import bicycle from '../../images/bicycle 1.svg';
import family from '../../images/family 1.svg';
import advanture from '../../images/location 1.svg';
import Rafting from '../../images/rafting 1.svg';
import Treking from '../../images/mountaineer 1.svg';
import honeymoon from '../../images/honeymoon (1) 1.svg';
import Couple from '../../images/wedding 1.svg';
import willdif from '../../images/forest 1.svg';


export const Category = () => {

    const Categories = [
        {
            id:1,
            title:"Bike tours",
            img:bicycle
        },
        {
            id:2,
            title:"Family tours",
            img:family
        },
        {
            id:1,
            title:"Adventure tour",
            img:advanture
        },
        {
            id:1,
            title:"Rafting tour",
            img:Rafting
        },
        {
            id:1,
            title:"Trekking tour",
            img:Treking
        },
        {
            id:1,
            title:"Honeymoon tour",
            img:honeymoon
        },
        {
            id:1,
            title:"Couple tours",
            img:Couple
        },
        {
            id:1,
            title:"Wildlife tour",
            img:willdif
        },
    ]
  return (
    <div className='max-w-[1450px] xl:max-auto m-0 lg:px-[78px] lg:mt-[50px]'>
            <div className='popular_category'>
                <div className='text-center popucategory_title'>
                    <h1 className='text-black font-popin text-[20px] font-400'>Popular Categories For You</h1>
                    <p className='text-[#AAAAAA] text-[13px] font-popin'>Lorem Ipsum is simply dummy text</p>
                </div>

                <div className='popular_category_list flex gap-[40px] flex-wrap mt-[50px]'>
                    {Categories.map(categoty =>(
                        <div key={categoty.id} className='category_title_img lg:w-[13%]'>
                            <p className='categoty_title font-popin'>{categoty.title}</p>
                            <img src={categoty.img} alt='img' className='category_images' />
                        </div>
                    ))}
                        
                </div>
            </div>
    </div>
  )
}
