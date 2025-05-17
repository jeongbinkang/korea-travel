import React, { useState, useRef } from 'react';
import './style/App.css';
import './style/reset.css';
import Overlay from './components/overlay';
import type { TravelInfo } from './types/travel';
// 슬릭
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const travelList: TravelInfo[] = [
  {
    id: 1,
    name: '서울',
    description: '과거와 현재가 만나는 활기찬 도시',
    image: '/images/seoul.jpg',
    details: {
      hashtag: [
        '#한강',
        '#남산타워',
        '#서울숲',
        '#경복궁'
      ],
      intro: '서울은 대한민국의 수도이자, 정치·경제·문화의 중심지입니다. 한강을 따라 펼쳐진 이 도시는 전통과 현대가 조화를 이루며 독특한 매력을 뽐냅니다. 경복궁, 북촌한옥마을 같은 유서 깊은 명소와 함께, 강남이나 홍대의 트렌디한 거리도 여행자들에게 큰 인기를 끌고 있죠. 밤이 되면 남산타워에서 바라보는 서울의 야경은 또 다른 감동을 선사합니다. 맛집, 쇼핑, 예술, 자연이 어우러진 서울은 누구에게나 잊지 못할 경험을 제공합니다.',
      places: [
        {
          name: '경복궁',
          image: '/images/sub/seoul1.jpg'
        },
        {
          name: '한강',
          image: '/images/sub/seoul2.jpg'
        },
        {
          name: '남산타워',
          image: '/images/sub/seoul3.jpg'
        },
        {
          name: '청계천',
          image: '/images/sub/seoul4.jpg'
        },
        {
          name: '롯데타워',
          image: '/images/sub/seoul5.jpg'
        },
      ],
      restaurant: [
        {
          name: '우래옥',
          menu: '평양냉면',
          tag: '#미슐랭가이드 #웨이팅주의',
          url: 'https://map.naver.com/p/search/%EC%9A%B0%EB%9E%98%EC%98%A5/place/11679381?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp',
          image: '/images/restaurant/seoul1.jpg'
        },
        {
          name: '파틱',
          menu: '프랑스 음식',
          tag: '#서촌 #와인 #느좋',
          url: 'https://map.naver.com/p/entry/place/1534186654?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/seoul2.jpg'
        },
        {
          name: '금돼지식당',
          menu: '고깃집',
          tag: '#연예인맛집 #오픈런필수',
          url: 'https://map.naver.com/p/search/%EA%B8%88%EB%8F%BC%EC%A7%80%EC%8B%9D%EB%8B%B9/place/37869877?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/seoul3.jpg'
        },
        {
          name: '콘매',
          menu: '이탈리아 음식',
          tag: '#데이트코스',
          url: 'https://map.naver.com/p/entry/place/1768499760?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/seoul4.jpg'
        },
        {
          name: '마일스톤 커피',
          menu: '카페',
          tag: '#라떼맛집 #티라미수',
          url: 'https://map.naver.com/p/entry/place/33972716?c=14.37,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/seoul5.jpg'
        },
        {
          name: '런던베이글뮤지엄',
          menu: '디저트',
          tag: '#베이글 #빵지순례',
          url: 'https://map.naver.com/p/entry/place/1466975947?lng=126.986213&lat=37.5792099&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh',
          image: '/images/restaurant/seoul6.jpg'
        }
      ]
    }
  },
  {
    id: 2,
    name: '강릉',
    description: '커피 향 가득한 여유로운 해변 도시',
    image: '/images/gangneung.jpg',
    details: {
      hashtag: [
        '#주문진',
        '#정동진해변',
        '#대관령',
        '#강릉카페거리',
        '#강릉중앙시장'
      ],
      intro: '강릉은 동해의 푸른 바다와 설악산 자락의 수려한 자연 경관이 어우러진, 강원도의 대표적인 관광 도시입니다. 조용한 해변 산책부터 활기찬 서핑까지 즐길 수 있는 경포대와 안목해변은 사계절 내내 많은 여행자들의 발길을 끕니다. 바다와 함께한 이 도시에는 오랜 역사도 함께 흐르고 있어요. 오죽헌, 선교장 같은 유서 깊은 고택들은 조선시대의 숨결을 간직하고 있으며, 커피 향 가득한 안목항 카페거리에서는 여유로운 시간을 보낼 수 있죠.특히 강릉은 커피 도시로도 유명해, 매년 커피 축제가 열리고, 바다를 바라보며 마시는 핸드드립 한 잔은 여행의 낭만을 더해줍니다. 또, 초당순두부, 감자옹심이, 강릉 물회 등 바다와 산이 함께 빚어낸 지역 먹거리도 빼놓을 수 없죠.자연과 문화, 미식과 여유가 조화를 이루는 강릉은, 바쁜 일상에 지친 이들에게 쉼표가 되어주는 곳입니다.',
      places: [
        {
          name: '정동진해변',
          image: '/images/sub/gangneung1.jpg'
        },
        {
          name: '대관령',
          image: '/images/sub/gangneung2.jpg'
        },
        {
          name: '강릉중앙시장',
          image: '/images/sub/gangneung3.jpg'
        },
        {
          name: '주문진',
          image: '/images/sub/gangneung4.jpg'
        },
      ],
      restaurant: [
        {
          name: '엄지네포장마차',
          menu: '해물,생선요리',
          tag: '#꼬막비빔밥 #육사시미 #친절',
          url: 'https://map.naver.com/p/search/%EC%97%84%EC%A7%80%EB%84%A4%ED%8F%AC%EC%9E%A5%EB%A7%88%EC%B0%A8/place/15305467?c=14.41,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gangneung1.jpg'
        },
        {
          name: '동화가든',
          menu: '두부요리',
          tag: '#짬뽕순두부 #웨이팅 #해장',
          url: 'https://map.naver.com/p/search/%EB%8F%99%ED%99%94%EA%B0%80%EB%93%A0/place/11859878?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gangneung2.jpg'
        },
        {
          name: '툇마루',
          menu: '카페, 디저트',
          tag: '#흑임자라떼 #미친슈',
          url: 'https://map.naver.com/p/search/%EA%B0%95%EB%A6%89%ED%88%87%EB%A7%88%EB%A3%A8/place/998885728?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gangneung3.jpg'
        },
        {
          name: '순두부젤라또',
          menu: '아이스크림',
          tag: '#이색디저트 #두부젤라또',
          url: 'https://map.naver.com/p/search/%EC%88%9C%EB%91%90%EB%B6%80%EC%A0%A4%EB%9D%BC%EB%98%90/place/674248763?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp',
          image: '/images/restaurant/gangneung4.jpg'
        },
        {
          name: '감자적 1번지',
          menu: '향토음식',
          tag: '#감자전 #옹심이 #차예련맛집',
          url: 'https://map.naver.com/p/entry/place/1291372141?c=14.67,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gangneung5.jpg'
        }
      ]
    }
  },
  {
    id: 3,
    name: '경주',
    description: '천년의 시간이 숨 쉬는 고즈넉한 역사 도시',
    image: '/images/gyeongju.jpg',
    details: {
      hashtag: [
        '#천년도시',
        '#불국사',
        '#첨성대',
        '#석굴암',
        '#동궁과월지'
      ],
      intro: '경주는 대한민국의 역사와 전통이 살아 숨 쉬는 고도입니다. 신라 천년의 수도였던 이 도시는 곳곳에 문화유산이 자리 잡고 있어, 마치 살아 있는 박물관을 거니는 듯한 느낌을 줍니다. 불국사, 석굴암 같은 세계문화유산부터 첨성대, 동궁과 월지에 이르기까지 유서 깊은 명소들이 여행자들의 발길을 이끌죠. 최근에는 황리단길 같은 감성적인 거리도 인기를 끌며, 전통과 현대가 어우러진 매력을 선사합니다. 고즈넉한 야경 속에 비치는 경주의 문화유산은 깊은 여운을 남기며, 누구에게나 특별한 시간을 선물합니다.',
      places: [
        {
          name: '불국사',
          image: '/images/sub/gyeongju1.jpg'
        },
        {
          name: '첨성대',
          image: '/images/sub/gyeongju2.jpg'
        },
        {
          name: '석굴암',
          image: '/images/sub/gyeongju3.jpg'
        },
        {
          name: '동궁과월지',
          image: '/images/sub/gyeongju4.jpg'
        },
      ],
      restaurant: [
        {
          name: '향화정',
          menu: '꼬막무침비빔밥',
          tag: '#웨이팅1등 #블루리본',
          url: 'https://map.naver.com/p/entry/place/1131021882?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gyeongju1.jpg'
        },
        {
          name: '경주십원빵',
          menu: '십원빵',
          tag: '#십원빵원조 #길거리음식',
          url: 'https://map.naver.com/p/search/%EA%B2%BD%EC%A3%BC%20%EC%8B%AD%EC%9B%90%EB%B9%B5/place/1953533029?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gyeongju2.jpg'
        },
        {
          name: '교리김밥',
          menu: '김밥',
          tag: '#전국3대김밥 #계란폭탄김밥',
          url: 'https://map.naver.com/p/search/%EA%B8%88%EB%8F%BC%EC%A7%80%EC%8B%9D%EB%8B%B9/place/37869877?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gyeongju3.jpg'
        },
        {
          name: '소옥',
          menu: '갈비찜',
          tag: '#황리단길맛집 #감태주먹밥필수',
          url: 'https://map.naver.com/p/entry/place/1742593543?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gyeongju4.jpg'
        },
        {
          name: '함양집',
          menu: '한우물회',
          tag: '#육회비빔밥 #한우물회',
          url: 'https://map.naver.com/p/entry/place/1154479478?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gyeongju5.jpg'
        }
      ]
    }
  },
  {
    id: 4,
    name: '광주',
    description: '따뜻한 사람들과 예술이 흐르는 도시',
    image: '/images/gwangju.jpg',
    details: {
      hashtag: [
        '#문화도시',
        '#5.18 민주화운동',
        '#무등산',
        '#아문당'
      ],
      intro: '광주광역시는 예술과 민주주의의 정신이 살아 숨 쉬는 도시입니다. 5·18 민주화운동의 역사적 현장인 국립 5·18 민주묘지와 전일빌딩245는 이 도시가 품고 있는 깊은 이야기를 전해줍니다. 또한 대인예술시장과 국립아시아문화전당은 전통과 현대 예술이 조화를 이루며, 여행자에게 색다른 감동을 선사하죠. 맛있는 남도 음식도 광주의 매력을 더합니다. 송정떡갈비, 광주김치, 한정식 등은 미식가들의 마음을 사로잡기에 충분합니다. 도심 속 푸르른 푸른정원과 무등산 자락을 따라 걷는 길은 바쁜 일상에 지친 이들에게 휴식을 선물해줍니다. 문화와 역사, 예술과 자연이 조화된 광주는 깊이 있는 여행을 원하는 이들에게 꼭 추천하고 싶은 도시입니다.', places: [
        {
          name: '아시아문화전당',
          image: '/images/sub/gwangju1.jpg'
        },
        {
          name: '무등산국립공원',
          image: '/images/sub/gwangju2.jpg'
        },
        {
          name: '비엔날레',
          image: '/images/sub/gwangju3.jpg'
        },
        {
          name: '송정역시장',
          image: '/images/sub/gwangju4.jpg'
        },
        {
          name: '기아챔피언스필드',
          image: '/images/sub/gwangju5.png'
        },
      ],
      restaurant: [
        {
          name: '영미오리탕',
          menu: '오리요리',
          tag: '#미나리추가요 #초장들깨가루필수',
          url: 'https://map.naver.com/p/entry/place/11718943?lng=126.9055099&lat=35.1613929&placePath=%2Fhome&entry=plt&searchType=place&c=15.00,0,0,0,dh',
          image: '/images/restaurant/gwangju1.jpg'
        },
        {
          name: '25시참숯구이',
          menu: '한식',
          tag: '#또간집 #오돌뼈 #잔치국수',
          url: 'https://map.naver.com/p/search/%EA%B4%91%EC%A3%BC25%EC%8B%9C%EC%B0%B8%EC%88%AF%EA%B5%AC%EC%9D%B4/place/16247697?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gwangju2.jpg'
        },
        {
          name: '엄마네돼지찌개',
          menu: '한식',
          tag: '#핵매움 #맵부심 #침샘자극',
          url: 'https://map.naver.com/p/search/%EC%97%84%EB%A7%88%EB%84%A4%EB%8F%BC%EC%A7%80%EC%B0%8C%EA%B0%9C/place/19882323?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gwangju3.jpg'
        },
        {
          name: '칠봉이짬뽕',
          menu: '중식당',
          tag: '#짬뽕맛집 #매운맛',
          url: 'https://map.naver.com/p/entry/place/21021865?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gwangju4.jpg'
        },
        {
          name: '미드픽',
          menu: '브런치',
          tag: '#브런치맛집 #데이트',
          url: 'https://map.naver.com/p/entry/place/33972716?c=14.37,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/gwangju5.jpg'
        },
        {
          name: '무등콩물',
          menu: '국수',
          tag: '#소금말고설탕 #콩물',
          url: 'https://map.naver.com/p/search/%EB%AC%B4%EB%93%B1%EC%BD%A9%EB%AC%BC/place/1189787105?c=15.00,0,0,0,dh&placePath=%3Fentry%253Dbmp',
          image: '/images/restaurant/gwangju6.jpg'
        }
      ]
    }
  },
  {
    id: 5,
    name: '부산',
    description: '바다와 도시의 활력이 공존하는 항구 도시',
    image: '/images/busan.jpg',
    details: {
      hashtag: [
        '#해운대',
        '#자갈치시장',
        '#부산국제영화제',
        '#광안리',
        '#제2의수도'
      ],
      intro: '부산은 대한민국을 대표하는 해양 도시이자, 바다와 도시의 활력이 어우러진 역동적인 공간입니다. 해운대와 광안리 같은 아름다운 해변을 따라 펼쳐지는 풍경은 여행자들에게 시원한 자유로움을 선사하고, 자갈치시장과 국제시장에서는 부산만의 살아 있는 삶의 이야기를 느낄 수 있습니다. 감천문화마을과 흰여울문화마을처럼 감성을 자극하는 공간들도 가득해, 도시 곳곳이 여행의 포토존이 되죠. 밤이 되면 광안대교 너머로 펼쳐지는 야경은 부산의 또 다른 매력을 보여줍니다. 미식, 예술, 자연, 사람 냄새가 어우러진 부산은 누구에게나 생생하고 따뜻한 기억을 안겨주는 도시입니다.',
      places: [
        {
          name: '광안대교',
          image: '/images/sub/busan1.jpg'
        },
        {
          name: '감천문화마을',
          image: '/images/sub/busan2.jpg'
        },
        {
          name: '태종대',
          image: '/images/sub/busan3.jpg'
        },
        {
          name: '해운대',
          image: '/images/sub/busan4.jpg'
        },
        {
          name: '해동용궁사',
          image: '/images/sub/busan5.jpg'
        },
      ],
      restaurant: [
        {
          name: '수변최고돼지국밥',
          menu: '돼지국밥',
          tag: '#항정국밥 #수육백반',
          url: 'https//map.naver.com/p/search/%EC%88%98%EB%B3%80%EC%B5%9C%EA%B3%A0%EB%8F%BC%EC%A7%80%EA%B5%AD%EB%B0%A5/place/37535404?placePath=/home&c=15.00,0,0,0,dh',
          image: '/images/restaurant/busan1.jpg'
        },
        {
          name: '톤쇼우',
          menu: '돈가스',
          tag: '#인생돈카츠 #웨이팅필수',
          url: 'https://map.naver.com/p/entry/place/1374328442?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/busan2.jpg'
        },
        {
          name: '문화양곱창',
          menu: '양곱창',
          tag: '#노포맛집 #이모님손맛 #김치말이',
          url: 'https://map.naver.com/p/search/%EB%AC%B8%ED%99%94%EC%96%91%EA%B3%B1%EC%B0%BD/place/1644501282?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/busan3.jpg'
        },
        {
          name: '이재모피자',
          menu: '피자',
          tag: '#이재명아니고이재모 #오븐스파게티',
          url: 'https://map.naver.com/p/search/%EC%9D%B4%EC%9E%AC%EB%AA%A8%ED%94%BC%EC%9E%90/place/16433174?placePath=/home',
          image: '/images/restaurant/busan4.jpg'
        },
        {
          name: '초필살돼지구이',
          menu: '돼지껍데기',
          tag: '# #필살껍데기 #진짜뒷고기',
          url: 'https://map.naver.com/p/search/%EC%B4%88%ED%95%84%EC%82%B4%EB%8F%BC%EC%A7%80%EA%B5%AC%EC%9D%B4/place/38252085?c=15.00,0,0,0,dh&placePath=/home',
          image: '/images/restaurant/busan5.jpg'
        }
      ]
    }
  },
  {
    id: 6,
    name: '제주',
    description: '자연과 평화가 어우러진 아름다운 섬',
    image: '/images/jeju.jpg',
    details: {
      hashtag:[
        '#한라산',
        '#귤',
        '#흑돼지',
        '#해녀',
        '#고기국수'
      ],
      intro: '제주도는 대한민국 최남단에 위치한 섬으로, 천혜의 자연과 독특한 문화가 어우러진 휴양지입니다. 푸른 바다와 검은 현무암이 어우러진 해안선, 한라산을 중심으로 펼쳐진 수려한 풍경은 일상에서 벗어난 특별한 시간을 선물하죠. 성산일출봉, 만장굴, 협재해수욕장 같은 자연 명소는 물론, 오름과 돌담길을 따라 걷다 보면 제주의 고유한 정취를 온몸으로 느낄 수 있습니다. 제주의 해녀 문화와 전통 가옥은 이 섬만의 이야기를 들려주고, 제주 흑돼지, 고기국수 같은 향토 음식은 여행의 즐거움을 더합니다. 조용한 쉼과 새로운 영감을 동시에 주는 제주도는 누구에게나 다시 찾고 싶은 마음을 남깁니다.',
      places: [
        {
          name:'섭지코지와 유채꽃',
          image:'/images/sub/jeju1.jpg'
        },
        {
          name:'한라산 백록담',
          image:'/images/sub/jeju2.jpg'
        },
        {
          name:'천지연폭포',
          image:'/images/sub/jeju3.jpg'
        },
        {
          name:'제주올레길',
          image:'/images/sub/jeju4.jpg'
        },
        {
          name:'주상절리대',
          image:'/images/sub/jeju5.jpg'
        },
        {
          name:'해안도로',
          image:'/images/sub/jeju6.jpg'
        },
      ],
      restaurant: [
        {
          name:'우진해장국',
          menu:'고사리육개장',
          tag:'#제주로컬맛집 #향토음식',
          url:'https://map.naver.com/p/search/%EC%9A%B0%EC%A7%84%ED%95%B4%EC%9E%A5%EA%B5%AD/place/13418405?c=15.00,0,0,0,dh&placePath=/home',
          image:'/images/restaurant/jeju1.jpg'
        },
        {
          name:'숙성도',
          menu:'흑돼지',
          tag:'#숙성뼈등심 #숙성뼈목살',
          url:'https://map.naver.com/p/search/%EC%88%99%EC%84%B1%EB%8F%84/place/1249805999?c=13.00,0,0,0,dh&placePath=/home',
          image:'/images/restaurant/jeju2.jpg'
        },
        {
          name:'미영이네',
          menu:'고등어회',
          tag:'#고등어회풀코스 #고등어탕 #겨울엔방어회',
          url:'https://map.naver.com/p/entry/place/13434137?c=15.00,0,0,0,dh&placePath=/home',
          image:'/images/restaurant/jeju3.jpg'
        },
        {
          name:'자매국수',
          menu:'고기국수',
          tag:'#고기국수 #비빔국수 #돔베고기',
          url:'https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%8F%84%20%EA%B3%A0%EA%B8%B0%EA%B5%AD%EC%88%98%20%EB%A7%9B%EC%A7%91/place/37060300?c=15.00,0,0,0,dh&placePath=/home',
          image:'/images/restaurant/jeju4.jpg'
        },
        {
          name:'일통이반',
          menu:'보말죽',
          tag:'#왕보말죽 #생성게알',
          url:'https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%8F%84%20%EC%9D%BC%ED%86%B5%EC%9D%B4%EB%B0%98/place/32041782?c=15.00,0,0,0,dh&placePath=/home&isCorrectAnswer=true',
          image:'/images/restaurant/jeju5.jpg'
        },
        {
          name:'오복떡집',
          menu:'오메기떡',
          tag:'#향토음식 #선물로도굿',
          url:'https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%EB%8F%84%20%EC%98%A4%EB%A9%94%EA%B8%B0%EB%96%A1/place/13511969?c=10.00,0,0,0,dh&placePath=/home',
          image:'/images/restaurant/jeju6.jpg'
        }
      ]
    }
  },
];


function App() {
  const [selected, setSelected] = useState<TravelInfo | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // useRef 선언 (초기값 null)
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1, 
          },
      },
  ],
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const pageNumber = currentSlide + 1;

  return (
    <div className="Container" >
      {selected && <Overlay data={selected} onClose={() => setSelected(null)} />}
      <div className='left-content'>
        <div className='left-text'>
          <p>느리게 걷는 한국, 깊게 보는 여행</p>
          <h1>KOREA</h1>
          <h1>TRAVEL</h1>
          <p>
            지역별 명소부터 문화, 숨은 맛집까지, 여행자에게 꼭 필요한 모든 정보를 한눈에 담았습니다. <br/>
            지금, 당신만의 한국 여행이 시작됩니다.
          </p>
        </div>
      </div>
      <div className="right-content">
      <Slider {...settings} ref={sliderRef}>
          {travelList.map((item) => (
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
        </Slider>

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