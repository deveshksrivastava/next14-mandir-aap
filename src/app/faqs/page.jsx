// pages/about.js
"use client";
import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQS = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // ...

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
        {/* ... */}
        <section className="px-4 py-8 bg-white rounded shadow-xl">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">FAQs</h2>
          <div>
            <button onClick={toggleCollapse} className="flex justify-between w-full px-2 py-4 mb-2 text-left text-sm font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
              <span>What are the opening hours?</span>
              {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <Collapse isOpened={isOpen}>
              <div className="px-4 pt-4 pb-2 text-gray-500">
                Our Mandir is open from 6am to 8pm every day.
              </div>
            </Collapse>
          </div>
          <hr className="my-4" />
          <div>
            <button onClick={toggleCollapse} className="flex justify-between w-full px-2 py-4 mb-2 text-left text-sm font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
              <span>What are the opening hours?</span>
              {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <Collapse isOpened={isOpen}>
              <div className="px-4 pt-4 pb-2 text-gray-500">
                Our Mandir is open from 6am to 8pm every day.
              </div>
            </Collapse>
          </div>
          <hr className="my-4" />
          <div>
            <button onClick={toggleCollapse} className="flex justify-between w-full px-2 py-4 mb-2 text-left text-sm font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
              <span>What are the opening hours?</span>
              {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <Collapse isOpened={isOpen}>
              <div className="px-4 pt-4 pb-2 text-gray-500">
                Our Mandir is open from 6am to 8pm every day.
              </div>
            </Collapse>
          </div>
          <hr className="my-4" />
          <div>
            <button onClick={toggleCollapse} className="flex justify-between w-full px-2 py-4 mb-2 text-left text-sm font-medium text-black bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
              <span>What are the opening hours?</span>
              {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <Collapse isOpened={isOpen}>
              <div className="px-4 pt-4 pb-2 text-gray-500">
                Our Mandir is open from 6am to 8pm every day.
              </div>
            </Collapse>
          </div>
        </section>
      </div>
    </div>
  );
};

export default  FAQS;