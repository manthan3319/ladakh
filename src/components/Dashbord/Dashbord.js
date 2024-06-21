import React from 'react'
import { Navbar } from './Navbar';
import Lehladak from './Lehladak';
import { Departuredate } from './Departure';
import { Category } from './Category';
import { Getconnected } from './Getconnected';
import { Serverfor } from './Serverfor';
import { WhychoiceUs } from './WhychoiceUs';
import { Testimonials } from './Testimonials';
import { Inspirationfuture } from './Inspirationfuture';
export const Dashbord = () => {
  return (
    <>
      <Navbar />
      <Lehladak />
      <Departuredate />
      <Category />
      <Getconnected />
      <Serverfor />
      <WhychoiceUs/>
      <Testimonials/>
      {/* <Inspirationfuture/> */}
    </>
  )
}
