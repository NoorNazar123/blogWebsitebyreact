import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BlogContent = () => {
  const {id} = useParams();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [id]); // Re-run the effect when the id changes

  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/blogs?populate=*');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  

  // const BlogCard = [
  //   {
  //     "id": 1,
  //     "title": "1 Interesting Facts About Caffeine. ",
  //     "imgUrl": "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "category": "Business, Travel Copy code",
  //     "date": "— July 2, 2024",
  //     "content": " sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
  //     "authorName": "Hammad Khan",
  //     "authorimg:": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "authorDescript": "Developer"
  //   },
  //   {
  //     "id": 2,
  //     "title": "2 Interesting Facts About Caffeine.",
  //     "imgUrl": "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "category": "Business, Travel Copy code",
  //     "date": "— July 2, 2024",
  //     "content": " sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
  //     "authorName": "Hammad Khan",
  //     "authorimg:": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "authorDescript": "Developer"
  //   },
  //   {
  //     "id": 3,
  //     "title": "3 Interesting Facts About Caffeine.",
  //     "imgUrl": "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "category": "Business, Travel Copy code",
  //     "date": "— July 2, 2024",
  //     "content": " sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua...",
  //     "authorName": "Hammad Khan",
  //     "authorimg:": "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "authorDescript": "Developer"
  //   },
  // ];
 
  let blogCard = data.data.filter(blog => blog.id == id);
  blogCard = blogCard[0];

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Blog Page {id}
      </h1>

      {
        data.data.map((blog) => (
          
        <div className="bg-white shadow-lg p-6 rounded-lg mb-8 sm:flex">
         <div className="w-[100%] sm:w-[90%]">
          <h2 className="text-2xl font-semibold mb-4">{blog.attributes.blogTitle}</h2>
          <img
            src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
            alt={`Image for ${blog.title}`}
            className=" mb-4 rounded-md sm:w-[95%] sm:h-80"
          />
          <h2 className="text-sm my-3 font-bold">
                  {blog.attributes.category}
                  <span style={{ color: "gray", fontSize: "16px" }}>
                    {blog.attributes.date}
                  </span>
                </h2>
          <p>{blog.attributes.blogContent[0].children[0].text}</p>
          </div>
          <div className="w-60 sm:h-40 sm:mx-2 shadow-md flex flex-col items-center gap-1 font-thin p-4 mt-14 mx-auto">
             
          <img
            src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
            alt={`${blog.attributes.authorName}'s Image`}
            className="w-16 h-16 rounded-full"
          />
             <p className="text-sm font-semibold">{blog.attributes.authorName}</p>
             <p className="px-4">{blog.attributes.authorDescript}</p>

          </div>
          </div>

        
      ))
      }

      

      <p className="text-center">
        Thank you for reading our blog posts!
        <br />
        <strong>Abdul Wahab Khan</strong>
        <br />
        Founder, InfoBlog
      </p>
    </div>
  );
};

export default BlogContent;
