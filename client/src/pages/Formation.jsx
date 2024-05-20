import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserContext } from '../../context/userContext';

function Formation() {
  const { user } = useContext(UserContext);

  
  const [selectedVideo, setSelectedVideo] = useState(null);

  // You can manually provide the video links here
  const videos = [
      '6QAELgirvjs',
    '7LxA9qXUY5k',
    'QG5aEmS9Fu0',
    'dVgTBEYCseU',
    '3lXuWHtm7PM',
    'sBFemL2Mfj4',
    'XxkX8wnRq3s',
    // Add more video IDs as needed
  ];
  
  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  return (
    <>
    
    <Navbar />
      <div className="h-full p-6 bg-[--secondary-color]">
      {!!user && <h1 className='text-black'>Welcom {user.name}!</h1>}

        <h1 className="w-full flex justify-center text-[--button-color] text-6xl font-bold p-4 text-center leading-[120%]">
          Grow up your skills by online courses with LogoName
        </h1>

        <div className="w-full flex flex-col items-center justify-center p-12 ">
          <div className="flex gap-10 justify-between w-full bg-none">
          <div className="flex flex-col gap-4 p-1 mb-8 w-48  max-w-52 h-[400px]   rounded-md shadow-xl shadow-slate-100  max-h-[720px] hide-scrollbar overflow-x-auto scroll-snap-type-x-mandatory">
              {videos.map((videoId, index) => (
                <img
                key={index}
                src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
                alt="Video Thumbnail"
                className="rounded-md shadow-xl cursor-pointer   "
                onClick={() => handleVideoClick(videoId)}
              />
              
              ))}
            </div>
            <div className='w-full h-full rounded-md shadow-md shadow-black '>
              {selectedVideo && (
                <div className="w-full h-96 ">
                  <iframe
                    id="player"
                    type="text/html"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo}?enablejsapi=1&origin=http://localhost:3000`}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-md shadow-xl"
                  ></iframe>
                  <script src="https://www.youtube.com/iframe_api"></script>
                  <script>
                    {`
                      let player;
                      function onYouTubeIframeAPIReady() {
                        player = new YT.Player('player', {
                          events: {
                            'onReady': onPlayerReady
                          }
                        });
                      }
                      function onPlayerReady(event) {
                        event.target.playVideo();
                      }
                    `}
                  </script>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="py-2 border-[3px] border-[--button-color] rounded-xl mb-10">
          <h1 className="w-full text-[--button-color] text-3xl font-bold p-4 text-start leading-[120%]">
            Grow up your skills by online courses with LogoName
          </h1>
          <ul className="py-4 w-4/5">
            <li>
              <p className="w-full text-justify text-[--primary-color] text-xl font-medium p-4">
                <ArrowForwardIosIcon fontSize="small" />
                <span className="font-semibold text-2xl">Result 1:</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                obcaecati at vitae quod molestias
              </p>
            </li>
            <li>
              <p className="w-full text-justify text-[--primary-color] text-xl font-medium p-4">
                <ArrowForwardIosIcon fontSize="small" />
                <span className="font-semibold text-2xl">Result 2:</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                obcaecati at vitae quod molestias
              </p>
            </li>
            <li>
              <p className="w-full text-justify text-[--primary-color] text-xl font-medium p-4">
                <ArrowForwardIosIcon fontSize="small" />
                <span className="font-semibold text-2xl">Result 3:</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                obcaecati at vitae quod molestias
              </p>
            </li>
            <li>
              <p className="w-full text-justify text-[--primary-color] text-xl font-medium p-4">
                <ArrowForwardIosIcon fontSize="small" />
                <span className="font-semibold text-2xl">Result 4:</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                obcaecati at vitae quod molestias
              </p>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <Link to="/form">
            <button
              type="button"
              className="bg-[--button-color] text-[--text-color] hover:text-[--button-color] hover:bg-transparent border-[3px]  hover:border-[--button-color] text-lg font-bold rounded-xl p-4 mb-5"
            >
              Request Your Certificate
            </button>
          </Link>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default Formation;
