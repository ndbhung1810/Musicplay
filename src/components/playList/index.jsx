import React, { memo, useCallback, useEffect, useState } from 'react';
import MusicPlay from 'components/playList/musicPlay';

import './playList.css';

const allList = [
  {
    id: 1,
    name: 'Em Đồng Ý',
    cover: require('assets/image/music/aa.jpg'),
    src: require('assets/music/EmDongY.mp3'),
    artist: 'Đức Phúc - 911',
    isLiked: false,
  },
  {
    id: 2,
    name: 'Nếu Lúc Đó',
    cover: require('assets/image/music/ab.jpg'),
    src: require('assets/music/NeuLucDo.mp3'),
    artist: 'Tlinh - 2Pillz',
    isLiked: false,
  },
  {
    id: 3,
    name: 'Waiting For You',
    cover: require('assets/image/music/ac.jpg'),
    src: require('assets/music/WaitingForYou.mp3'),
    artist: 'MONO',
    isLiked: false,
  },
  {
    id: 4,
    name: 'Yêu 5',
    cover: require('assets/image/music/ad.jpg'),
    src: require('assets/music/Yeu5.mp3'),
    artist: 'Rhymastic',
    isLiked: false,
  },
  {
    id: 5,
    name: 'Hãy Trao Cho Anh',
    cover: require('assets/image/music/ae.jpg'),
    src: require('assets/music/HayTraoChoAnh.mp3'),
    artist: 'Sơn Tùng MT-P',
    isLiked: false,
  },
  {
    id: 6,
    name: 'Em Là Kẻ Đáng Thương',
    cover: require('assets/image/music/af.jpg'),
    src: require('assets/music/EmLaKeDangThuong.mp3'),
    artist: 'Phát Huy',
    isLiked: false,
  },
  {
    id: 7,
    name: 'Chưa Quên Người Yêu Cũ',
    cover: require('assets/image/music/ai.jpg'),
    src: require('assets/music/ChuaQuenNguoiYeuCu.mp3'),
    artist: 'Hà Nhi',
    isLiked: false,
  },
  {
    id: 8,
    name: 'Ánh Sao Và Bầu Trời',
    cover: require('assets/image/music/ah.jpg'),
    src: require('assets/music/AnhSaoVaBauTroi.mp3'),
    artist: 'T.R.I',
    isLiked: false,
  },
  {
    id: 9,
    name: 'Cô Đơn Trên Sofa',
    cover: require('assets/image/music/ag.jpg'),
    src: require('assets/music/CoDonTrenSofa.mp3'),
    artist: 'Hồ Ngọc Hà',
    isLiked: false,
  },
]

function PlayList(props) {
  const [selectedMusic, setSelectedMusic] = useState(allList[0]);
  const [selectedIndexMusic, setSelectedIndexMusic] = useState(0);
  // const [playList, setPlayList] = useState([]);

  // useEffect(() => {
  //   setPlayList(allList.filter((m) => m.id !== selectedMusic.id));
  // }, [selectedMusic.id]);

  const onHandleSelectedMusic = useCallback((id, index) => {
    const selected = allList.find((m) => m.id === id);
    setSelectedMusic(selected);
    setSelectedIndexMusic(index)
  }, [allList]);

  return (
    <div className="music-space">
      <div className="music-list">
        <div className="list-title text-strong">Top 10 V-Pop</div>

        <div className="list-sub">10 songs</div>

        <div className="play-list">
          {
            allList?.length > 0 ? allList.map((m, index) => {
              const isActive = selectedMusic.id === m.id
              return (
                <div className={isActive ? "play-item active" : "play-item"} key={m.name} onClick={() => onHandleSelectedMusic(m.id, index)}>
                <button className="play-block">
                  <span className="index text-strong">{m.id}</span>
    
                  <img
                    src={m.cover}
                    alt="My Stress"
                    className="thumbnail"
                  />
  
                  {
                    selectedMusic?.id === m.id
                      ? <i className="fa-solid fa-volume-high play-icon"></i>
                      : <i className="fa-solid fa-play play-icon"></i>
                  }
  
                  <span className="music-name text-strong" >{m.name}</span>
                </button>
    
                <span className="play-author">{m.artist}</span>
    
                <span className="timer">00:00</span>
    
                <i className={`fa-solid fa-heart ${m.isLike ? 'icon-like' : ''}`}></i>
              </div>
              )
            }) : <p>There are no music in playlist</p>
          }
        </div>
      </div>

      <div className="music-playing">
        <MusicPlay
          name={selectedMusic.name}
          artist={selectedMusic.artist}
          cover={selectedMusic.cover}
          id={selectedMusic.id}
          src={selectedMusic.src}
          currentIndex={selectedIndexMusic}
          allList={allList}
          onHandleSelectedMusic={onHandleSelectedMusic}
        />
      </div>
    </div>
  );
}

export default memo(PlayList);