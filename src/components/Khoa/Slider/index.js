import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import './style.css'
import 'swiper/swiper-bundle.css'

SwiperCore.use([ Navigation, Pagination, Autoplay])

const Slider = (props) => {
    const {songs} = props

    const handleClickMusic = (song) => {
        props.onHandleClickMusic(song.uid)
    }

    const showSlide = () => {
        const slides = []
        const randomIndexSong = []
        for(let i = 0; i < 11; i++) {
            if(i%2 !== 0) {
                randomIndexSong.push(i)
            }
        }
    
        for(let i = 0; i < randomIndexSong.length; i++) {
            slides.push(
                <SwiperSlide 
                    key={randomIndexSong[i]}
                    tag="li"
                    style={{ listStyle: 'none' }}
                    onClick={() => {handleClickMusic(songs[randomIndexSong[i]])}}
                    >
                    {songs[randomIndexSong[i]] && <img 
                        src={songs[randomIndexSong[i]].img_src }
                        alt={songs[randomIndexSong[i]].name}
                    />}
                </SwiperSlide>
            )
        }

        return slides
    }

  return (
      <div className="swiper">
        <Swiper
            navigation={Navigation}
            pagination={Pagination}
            spaceBetween={30}
            slidesPerView={3}
            id="main"
            tag="section"
            wrapperTag="ul"
            loop={true}
            autoplay={{
                "delay": 3500,
                "disableOnInteraction": false
            }}
        >
            {showSlide()}
        </Swiper>

      </div>
  );
}

export default Slider