import { FaFacebook, FaInstagram, FaTumblr } from 'react-icons/fa';
import React from "react";
import { Link } from 'react-router-dom';
import Form from './Form';

import ganggang from './../../assets/images/ganggang.png'

const Contact = () => {
  return (
    <>
      <div className="bg-[#faeada] w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl py-2 rounded-3xl">
        <div className="mt-14">
          <div className="max-w-3xl mx-auto px-1 py-1 sm:py-2 md:py-3">
            <div className="grid grid-col-2">
              <div className="col-span-1">
                <Form />
              </div>
              <div className="col-span-1">
                <div className="grid grid-cols-5">
                  <span className='col-span-1' />
                  <Link to="https://pizzainthecity.tumblr.com/" className="btn col-span-1 py-3 flex justify-center">
                    <FaTumblr className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10" />
                  </Link>
                  <Link to="https://www.facebook.com/fakepizzafoodtruck" className="btn col-span-1 py-3 flex justify-center">
                    <FaFacebook className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10" />
                  </Link>
                  <Link to="https://www.instagram.com/fakepizza_id/" className="btn col-span-1 py-3 flex justify-center">
                    <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-10 xl:h-10" />
                  </Link>
                  <span className='col-span-1' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="px-12" src={ganggang} atl="a bundle of cute furry buddiesenjoying pizza together" />
      </div>
    </>
  );
};

export default Contact;
