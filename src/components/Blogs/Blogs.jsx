import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
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

  return (
    <div className="w-[100%] sm:flex sm:gap-4 mx-auto ">
      {data.data.map((blog) => (
        <Link to={`/blog/${blog.id}`} key={blog.id}>
          <div className="w-[20rem] cursor-pointer">
            <header className="w-[98%] h-[12rem] overflow-hidden rounded-md">
              <img
                src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
                alt="#"
                className="rounded-md w-[100%] h-full scale-125 hover:scale-100 duration-500"
              />
            </header>
            <main className="px-1">
              <section>
                <h2 className="text-sm my-3 font-bold">
                  {blog.attributes.category}
                  <span style={{ color: "gray", fontSize: "16px" }}>
                    {blog.attributes.date}
                  </span>
                </h2>
              </section>
              <section>
               
                <p>
                {blog.attributes.blogContent[0].children[0].text.length > 100
                  ? blog.attributes.blogContent[0].children[0].text.slice(0, 100) + "..."
                  : blog.attributes.blogContent[0].children[0].text}
              </p>
               
              </section>
            </main>
            <footer className="px-1 text-blue-800">see more</footer>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
