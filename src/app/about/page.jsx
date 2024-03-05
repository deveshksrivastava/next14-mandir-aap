// pages/about.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/5">
        <h1 className="mb-4 text-4xl font-bold bg-red-700 text-center sm:text-5xl">
          About Us
        </h1>
        <section className="px-4 py-8 mb-8 bg-white rounded shadow-xl">
          <img
            className="w-full h-64 mb-4 rounded"
            src="https://via.placeholder.com/500"
            alt="Mandir"
          />
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Our History
          </h2>
          <article className="text-gray-700">
            Our Mandir was established in 1990 with the aim of serving the
            spiritual needs of our community. Over the years, we have grown into
            a vibrant and active place of worship, attracting devotees from all
            over the region.
          </article>
        </section>
        <section className="px-4 py-8 mb-8 bg-white rounded shadow-xl">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Our Mission
          </h2>
          <article className="text-gray-700">
            Our mission is to promote the teachings and values of our faith, and
            to build a strong and vibrant community. We aim to provide a
            welcoming and inclusive environment for all our devotees, and to
            serve as a spiritual beacon for our community.
          </article>
        </section>
        <section className="px-4 py-8 bg-white rounded shadow-xl">
          <h2 className="mb-3 text-2xl font-semibold text-gray-900">
            Our Team
          </h2>
          <article className="text-gray-700">
            Our Mandir is run by a dedicated team of volunteers who are
            passionate about serving the community. We are always looking for
            more people to join our team, so if you're interested in
            volunteering, please get in touch!
          </article>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
