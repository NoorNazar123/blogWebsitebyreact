import React from "react";
import myImage from "../../image/contactus.jpg"
const AboutMe = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to InfoBlog</h1>

      <div className="flex items-center mb-8">
        <img
          src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/347278333_748317513693405_5232536514386863199_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=_htCB-RZEzQAX9Ec7dC&_nc_ht=scontent.fkhi17-1.fna&oh=00_AfB3nPkJb3Lhg6LUnMjqT4P5kudIkMs8CEyaG9TctIKVzQ&oe=65AFE16B"
          alt="Abdul Wahab Khan"
          className="rounded-full w-20 h-20 mr-4"
        />
        <h2 className="text-2xl font-semibold">Meet Abdul Wahab Khan</h2>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Meet Abdul Wahab Khan</h2>
        <p>
          Hello, and welcome to InfoBlog! I'm Abdul Wahab Khan, a passionate
          and enthusiastic writer based in Pakistan. I am a recent graduate
          with a deep love for exploring and sharing knowledge, and I've been on
          a journey of blogging for the past two years.
        </p>
      </div>

      <div className="bg-white shadow-lg  p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          As a recent graduate, I have harnessed my curiosity to delve into
          various topics and bring them to life through the art of blogging. I
          believe in the power of words to inform, inspire, and connect people
          across the globe. Through InfoBlog, my goal is to create a space where
          information is not just shared but experienced.
        </p>
      </div>

      <div className="bg-white shadow-lg  p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">The InfoBlog Vision</h2>
        <ul className="list-disc pl-6">
          <li>
            <strong>Quality Content:</strong> Expect well-researched and
            thoughtfully written articles.
          </li>
          <li>
            <strong>Diverse Topics:</strong> Explore a variety of subjects
            tailored for curious minds.
          </li>
          <li>
            <strong>Community Engagement:</strong> Join the conversation, share
            your thoughts, and be a part of the InfoBlog community.
          </li>
        </ul>
      </div>

      <div className="bg-white shadow-lg  p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Join Me on this Journey</h2>
        <p>
          I am excited to share my experiences, insights, and discoveries with
          you. Join me on this journey of exploration and learning. Whether
          you're a seasoned reader or just starting, InfoBlog is here to provide
          content that adds value to your life.
        </p>
        <p className="mb-4">
          Feel free to reach out, share your thoughts, or suggest topics you'd
          like to see covered. Let's embark on this knowledge-sharing adventure
          together!
        </p>
        <a
          href="mailto:abdulwahab@infoblog.com"
          className=" hover:underline  py-2 px-4 rounded-md bg-orange-500 hover:bg-orange-600 text-white"
        >
          Contact Me
        </a>
      </div>

      <p className="text-center">
        Thank you for being a part of InfoBlog!
        <br />
        <strong>Abdul Wahab Khan</strong>
        <br />
        Founder, InfoBlog
      </p>
    </div>
  );
};

export default AboutMe;
