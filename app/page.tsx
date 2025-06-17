import Image from "next/image";

export default function Home() {
  const videos = [
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    },
    {
      title: "First Video",
      description: "Discription of video",
      Thumbnail: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    }
  ]

  return (
    <>
      <section className="w-full">
        <div className="flex justify-around w-full">

        <div className="left w-[15%]">
          <ul className="bg-gray-800 text-white p-4">
              <li>Home</li>
              <li>Subscription</li>
              <li>ForYou</li>
              <li>Shorts</li>
          </ul>
        </div>
        <div className="right w-[85%] bg-slate-900">
          <div id="videos" className="flex grid grid-cols-4 flex-wrap justify-between items-center p-4">
            <video
        controls
        className="w-full rounded-xl shadow-lg"
        poster="https://images.pexels.com/videos/1841356/free-video-1841356.jpg"
      >
        <source
          src="https://videos.pexels.com/video-files/1841356/1841356-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
          {videos.map((item, index) => {
            return <div key={index} id="video" className="bg-gray-800 cursor-pointer w-[200px] text-white p-4 m-2 h-fit rounded-lg">
              <img src={item.Thumbnail} className="rounded-xl w-full" alt="video thumbnail"/>
              <h3 className="text-xl text-center">{item.title}</h3> 
              <p className="text-sm text-center">{item.description}</p>
          </div>
            })
            }
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
