  //이미지, css도 모듈처럼 
import './App.css';
import { LiaHomeSolid } from "react-icons/lia";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// import Hello from './01/Hello';
// import MainHeader from './01/MainHeader';
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from "./03_1/MyDiv1";
// git icon 임폴트 한 뒤 컴포넌트처럼 사용
// import MyListMain from './04/MyListMain';
// import BoxOfficeTb from './05_1/BoxOfficeTb';
import Lotto from './06/Lotto';
// import FoodCard from './07/FoodCard';
import FoodMain from './07/FoodMain';
import MyClock from './08/MyClock';
// import TrafficMain from './09/TrafficMain';
// import RefVal from './10/RefVal';
// import RefInput from './10/RefInput';
import BoxOffice from './10/BoxOffice';
// import GalleryCard from './11/GalleryCard';
import GalleryMain from './11/GalleryMain';
import BfestMain from './11/BfestMain';
import Frcst from './14/Frcst';
// import RouteMain from './13/RouteMain';
import UltraSrtFcst from './14/UltraSrtFcst';
import VilageFcst from './14/VilageFcst';


function App() {
  return (
    <BrowserRouter>
    <div className='flex flex-col 
                    w-full max-w-screen-2xl h-screen
                    mx-auto
                    overscroll-y-auto'>
      <header className='flex justify-between items-center
                        h-20 p-10
                        text-xl font-bold text-slate-100
                        bg-slate-400'>
        <div className='text-2xl'>리액트 실습</div>
        <div className='flex justify-center items-center'>
          <div className='mx-4 p-2 hover:bg-gray-800 rounded-xl'>
            <Link to="/frcst">예보</Link>
          </div>
          <div className='mx-4 p-2 hover:bg-gray-800 rounded-xl'>
            <Link to="/bfest">부산축제</Link>
          </div>
          <div className='mx-4 p-2 hover:bg-gray-800 rounded-xl'>
            <Link to="/gallery">관광정보</Link>
          </div>
          <div className='mx-4 p-2 hover:bg-gray-800 rounded-xl'>
            <Link to="/boxoffice">박스오피스</Link>
          </div>
          <div className='mx-4 p-2 hover:bg-gray-800 rounded-xl'>
            <Link to="/lotto">로또</Link>
          </div>
          <div className='mx-4 p-2 hover:bg-gray-800 rounded-xl'>
            <Link to="/food">푸드</Link>
          </div>
          <Link to="/"><LiaHomeSolid className='text-4xl hover:text-gray-950'/></Link>
        </div>
      </header>
      
      <main className='grow flex flex-col
                      justify-center items-center'>
        <Routes>
          <Route path='/' element={<MyClock/>} />
          <Route path='/lotto' element={<Lotto/>} />
          <Route path='/boxoffice' element={<BoxOffice/>} />
          <Route path='/bfest' element={<BfestMain/>} />
          <Route path='/gallery' element={<GalleryMain/>} />
          <Route path='/frcst' element={<Frcst/>} />
          <Route path='/food' element={<FoodMain/>} />
          <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst/>} />
          <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst/>} />
        </Routes>
      </main>
      
      <footer className='flex justify-center items-center
                        h-20 p-10
                        text-m text-white
                        bg-slate-700'>
        © 2024 k-digital 6기 react Tailwindcss 실습
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;