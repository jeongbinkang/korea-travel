import { useState } from 'react';
import './App.css';
import './reset.css';
import type { TravelInfo } from './types/travel';

const travelList: TravelInfo[] = [
  {
    id: 1,
    name: '서울',
    description: '과거와 현재가 만나는 활기찬 도시',
    image: '/images/seoul.jpg',
  },
  {
    id: 2,
    name: '강릉',
    description: '커피 향 가득한 여유로운 해변 도시',
    image: '/images/gangneung.jpg',
  },
  {
    id: 3,
    name: '경주',
    description: '천 년의 역사를 품은 고요한 도시',
    image: '/images/gyeongju.jpg',
  },
  {
    id: 4,
    name: '광주',
    description: '따뜻한 사람들과 예술이 흐르는 도시',
    image: '/images/gwangju.jpg',
  },
  {
    id: 5,
    name: '전주',
    description: '한옥과 전통이 살아있는 매력적인 도시',
    image: '/images/jeonju.jpg',
  },
  {
    id: 6,
    name: '부산',
    description: '넓은 바다와 함께하는 활기찬 도시',
    image: '/images/busan.jpg',
  },
  {
    id: 7,
    name: '제주도',
    description: '자연과 평화가 어우러진 아름다운 섬',
    image: '/images/jeju.jpg',
  },
];

function App() {
  const [selected, setSelected] = useState<TravelInfo | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = travelList.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    if (startIndex + 4 < travelList.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const pageNumber = Math.floor(startIndex) + 1; // 한 칸씩 넘어갈 때마다 페이지 번호가 증가

  return (
    <div className="Container">
      <div className='left-content'>
        <div className='left-text'>
          <p>느르게 걷는 한국, 깊게 보는 여행</p>
          <h1>KOREA</h1>
          <h1>TRAVEL</h1>
          <p>
            지역별 명소부터 문화, 숨은 맛집까지, 여행자에게 꼭 필요한 모든 정보를 한눈에 담았습니다. <br />
            지금, 당신만의 한국 여행이 시작됩니다.
          </p>
        </div>
      </div>
      <div className='right-content'>
        <div className="card-list">
          {visibleCards.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => setSelected(item)}
            >
              <img src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
        <div className="slide-btn">
          <div className='nav-btn'>
            <button className="left-btn" onClick={handlePrev}>←</button>
            <button className="right-btn" onClick={handleNext}>→</button>
          </div>
          <hr className="custom-hr" />
          <h1>{String(pageNumber).padStart(2, '0')}</h1>
        </div>
      </div>
    </div>
  )
}

export default App;