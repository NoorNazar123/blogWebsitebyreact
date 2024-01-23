import React from 'react'

function Lecture() {
  const videoData=[
    {
      "videoUrl": "https://www.youtube.com/embed/your-video-id",
    },
    {
      "videoUrl": "https://www.youtube.com/embed/your-video-id",
    },
    {
      "videoUrl": "https://www.youtube.com/embed/your-video-id",
    },
  ];
  return (
   <div className="w-[80%] mx-auto p-8 ">
      <h1 className="text-4xl font-bold mb-8">Lecture Blog</h1>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-8 ">
        <h2 className="text-2xl font-semibold mb-4">Exploring [Topic] Through Video</h2>
        <p>
          In this lecture blog, we delve into the fascinating world of [your topic].
          Watch the video below to gain insights and deepen your understanding of
          key concepts in [topic].
        </p>

        {/* Embedded Video */}
        <div className="w-full aspect-w-16 aspect-h-9 mt-4 ">
        {  
         videoData.map((items)=>(
          <iframe
            title="Lecture Video"
            className='rounded-md mb-2 w-[100%] sm:w-[35rem] sm:min-h-[20rem]'
            src="https://www.youtube.com/embed/your-video-id"
            allowFullScreen
          ></iframe>

         ))
        }
         
         
        </div>
      </div>

      <div className="bg-white shadow-lg p-6 rounded-lg mb-8 ">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc pl-6">
          <li>Read more about [topic] in our related articles.</li>
          <li>Join the discussion and share your thoughts in the comments section.</li>
        </ul>
      </div>

      {/* Add more content as needed */}

      <p className="text-center bg-white shadow-lg rounded-md py-4">
        Thank you for exploring blogs with us!
        <br />
        <strong>Abdul Wahab Khan</strong>
        <br />
        Founder, InfoBlog
      </p>
    </div>
  )
}

export default Lecture
