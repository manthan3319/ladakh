import React from 'react'
import { Link } from 'react-router-dom'

export const Departuredate = () => {
    return (
        <div className='max-w-[1450px] xl:max-auto m-0 lg:px-[78px] lg:mt-[-41px]'>
            <div className='tures_date'>
                <div className='date_select_sec2 flex gap-[15px] bg-white justify-between w-[90%]'>
                    <div className='from_city_sec2'>
                        <h3 >From City</h3>
                        <div className='select_sec2 select2_sec2'>
                            <select name="city" id="city">
                                <option value="Surat">Surat</option>
                                <option value="Ahmedabad">Ahmedabad</option>
                                <option value="mumbai">mumbai</option>
                                <option value="Goa">Goa</option>
                            </select>
                        </div>
                    </div>

                    <div className='from_city_sec2'>
                        <h3>Tours Themes</h3>
                        <div className='select_sec2 select2_sec2'>
                            <select name="themes" id="themes">
                                <option value="GOa">Goa</option>
                                <option value="Saputara">Saputara</option>
                                <option value="Ladakh">Ladakh</option>
                                <option value="kedarnath">kedarnath</option>
                            </select>
                        </div>
                    </div>

                    <div className='from_city_sec2'>
                        <h3>Departure Date</h3>
                        <div className='select_sec2'>
                            <input type='date' placeholder='Select Date' />
                        </div>
                    </div>

                    <div className='from_city_sec2'>
                        <h3>Rooms & Guests</h3>
                        <div className='select_sec2'>
                            <p>select rooms</p>
                        </div>
                    </div>

                    <div className='from_city_sec2'>
                        <Link className='bg-custom px-[30px] font-popin py-[15px] text-[13px] rounded-[17px] text-white'>Search</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
