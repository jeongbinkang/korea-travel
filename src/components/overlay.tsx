import React from 'react';
import '../style/overlay.css';
import type { TravelInfo } from '../types/travel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type OverlayProps = {
    data: TravelInfo;
    onClose: () => void;
};

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: false,
    arrows: true
};

const handleMapOpen = (placeName: string) => {
    const query = encodeURIComponent(placeName);
    const url = `https://map.kakao.com/?q=${query}`;
    window.open(url, '_blank');
};

const Overlay = ({ data, onClose }: OverlayProps) => {
    return (
        <div className='overlay' onClick={onClose}>
            <div className='overlay-content scroll-area' onClick={(e) => e.stopPropagation()}>
                <button className='close-btn' onClick={onClose}>✕</button>
                <div className='overlay-info'>
                    <div className='subimages-content'>
                        <h1>" {data.name}에서 만나는 KOREA TRAVEL "</h1>
                    </div>

                    <div className='details-intro'>
                        <h1>{data.name} 여행</h1>
                        <h2>{data.description}</h2>
                        <div className="hashtags">
                            {data.details?.hashtag.map((tag, index) => (
                                <span key={index} className='hastag'>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className='details-introduction'>
                        <h1>{data.name}, 어떤 도시일까?</h1>
                        <p>{data.details?.intro}</p>
                    </div>

                    <div className='details-introduction'>
                        <h1>꼭 가봐야 할 여행 스팟</h1>
                        <Slider {...sliderSettings}>
                            {data.details?.places.map((place, index) => (
                                <div key={index} className="place-card">
                                    <img src={place.image} alt={place.name} />
                                    <div>
                                        <p>{place.name}</p>
                                        <button onClick={() => handleMapOpen(place.name)}>길찾기</button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    <div className="travel-route-section">
                        <h1>작성자가 추천하는 여행 코스</h1>
                        <div className="route-u-shape">
                            {data.details?.route?.map((place, index) => (
                                <div key={index} className={`u-route-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                                    <div className="u-circle">{index + 1}</div>
                                    <span className="u-label">{place}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overlay;