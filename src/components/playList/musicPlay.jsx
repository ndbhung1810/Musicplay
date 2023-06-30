import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import { getDuration } from 'helper';

// import audio from 'assets/music/coaycuaanhay.mp3';
// import thumbnail from 'assets/image/music/1.jpg';

import './music.css';

// const audio = require('assets/music/coaycuaanhay.mp3');

function MusicPlay(props) {
  const { name, artist, cover, id, src, currentIndex, allList, onHandleSelectedMusic } = props;

  console.log('currentIndex: ', currentIndex)

  const audioRef = useRef();

  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    // if (audioRef?.current) {
    //   setIsPlaying(true);

    //   audioRef.current.play();
    // }
    setIsPlaying(false);
    // setTimeout(() => {
    //   audioRef.current.play();
    //   setIsPlaying(true);
    // }, 1000);
  }, [id]);

  // useEffect(() => {
  //   setIsPlaying(false);
  // }, []);

  const onChangeSlider = useCallback((event) => {
    // setTimer(event.target.value);
    audioRef.current.currentTime = event.target.value;
  }, []);

  useEffect(() => {
    function getTrackLength() {
      audioRef.current.addEventListener('loadedmetadata', function () {
        setDuration(audioRef.current.duration);
      });
    }

    getTrackLength();

    // if (audioRef.current) {
    //   getTrackLength(audioRef.current);
    // }
  }, []);

  const onUpdateTimer = useCallback(() => {
    setTimer(audioRef.current.currentTime);
  }, []);

  const onTogglePlayMusic = useCallback(
    (event) => {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the song if it is playing
      } else {
        audioRef.current.play(); // Play the song if it is paused
      }

      setIsPlaying((prevState) => !prevState);
    },
    [isPlaying],
  );

  

  return (
    <div className="musicSpace">
      <div className="music-player">
        <h1 className="music-name">{name}</h1>

        <p className="artist-name">{artist}</p>

        <div
          className={`disk ${isPlaying ? 'play' : ''}`}
          style={{
            backgroundImage: `url(${cover})`,
          }}
        />

        <div className="song-slider">
          <input
            type="range"
            // min="1"
            max={duration}
            value={timer}
            className="slider"
            id="myRange"
            onInput={onChangeSlider}
          />
          <span className="current-time">{getDuration(timer)}</span>
          <span className="song-duration">{getDuration(duration)}</span>
        </div>

        <div className="controls">
          <button className="btn backward-btn"
          className="btn forward-btn"
          disabled={currentIndex === 0}
            onClick={() => {
              const nextIndex = currentIndex - 1
              const newSelectMusic = allList[nextIndex]
              onHandleSelectedMusic(newSelectMusic.id, nextIndex)
            }}
          >
            <i className="fa-solid fa-caret-left"></i>
          </button>
          <button className="play-btn pause" onClick={onTogglePlayMusic}>
            {isPlaying ? (
              <i className="fa-solid fa-pause fa-2xl"></i>
            ) : (
              <i className="fa-solid fa-play fa-2xl"></i>
            )}
          </button>
          <button
            className="btn forward-btn"
            disabled={currentIndex === allList.length - 1}
            onClick={() => {
              const nextIndex = currentIndex + 1
              const newSelectMusic = allList[nextIndex]
              onHandleSelectedMusic(newSelectMusic.id, nextIndex)
            }}
          >
            <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>

        <audio
          className="d-none"
          // controls
          src={src}
          id="audio"
          ref={audioRef}
          onTimeUpdate={onUpdateTimer}
          // onEnded={} handle next song
        />
      </div>
    </div>
  );
}

export default memo(MusicPlay);