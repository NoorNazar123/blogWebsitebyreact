import React from "react";
import Blogs from "../Blogs/Blogs";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  

  return (
    <div className="w-[100%] mt-10">
      
        <h1 className="Animated_heading sm:flex items-center font-semibold mb-8 hidden">
          <span>&#9829;</span>
          Welcome to my blogs
          <span>&#9829;</span>
        </h1> 


        <header className="mx-auto w-[80%] sm:flex sm:gap-4 md:flex">
          
            {/* left start */}
            <div className=" h-96 rounded-md overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/768472/pexels-photo-768472.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="#"
                  className="h-full w-full scale-125 duration-1000 hover:scale-100"
                />
            </div>
            {/* right start */}
            <div className=" font-sans py-2 ">
              <header className="mb-4">
                <h1 className="text-3xl font-bold mb-4">
                  Welcome to InfoBlogs:
                </h1>
                <p>
                  Where inspiration meets information! and knowledge! Immerse
                  yourself in a rich tapestry of articles that cover a myriad of
                  topics.
                </p>
              </header>
              <main>
                <section className="my-2">
                  <h2 className="font-bold">About Us</h2>
                  <p>
                    Learn more about our mission to provide diverse and engaging
                    content for our community.
                  </p>
                </section>
                <section className="my-2">
                  <h2 className="font-bold">Featured Articles</h2>
                  <p>
                    Explore our curated collection of thought-provoking articles
                    and entertaining stories.
                  </p>
                </section>
                <section className="my-2">
                  <h2 className="font-bold">Join Our Community</h2>
                  <p>
                    Connect with like-minded readers who value insight,
                    creativity, and the joy of learning.
                  </p>
                </section>
              </main>
              <footer className="my-2">
                <p>&copy; 2024 InfoBlogs. All rights reserved.</p>
              </footer>
            </div>
         
        </header>
     


        <footer className="mx-auto w-[80%] my-16 flex flex-col gap-16">

          <div className="flex justify-between flex-wrap">
             <Blogs />  
          </div>

          <div className="text-center flex justify-center ">
            <Link to="/Blog/1">
              <button className="w-20rem py-3 px-6 text-white bg-orange-500 rounded-sm hover:bg-orange-600 hover:duration-500">
                See All Blogs
              </button>
            </Link>
          </div>
        </footer>
        
    </div>
  );
}

export default Home;
