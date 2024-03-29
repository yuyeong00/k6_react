  //이미지, css도 모듈처럼 
import './App.css';
import { LiaHomeSolid } from "react-icons/lia";
// import Hello from './01/Hello';
// import MainHeader from './01/MainHeader';
// import MyClock from './01_1/MyClock';
// import HelloCss from './02/HelloCss';
// import MyDiv1 from "./03_1/MyDiv1";
// git icon 임폴트 한 뒤 컴포넌트처럼 사용
// import MyListMain from './04/MyListMain';
// import BoxOfficeTb from './05_1/BoxOfficeTb';
// import Lotto from './06/Lotto';
// import FoodCard from './07/FoodCard';
// import FoodMain from './07/FoodMain';
// import MyClock from './08/MyClock';
// import TrafficMain from './09/TrafficMain';
// import RefVal from './10/RefVal';
// import RefInput from './10/RefInput';
// import BoxOffice from './10/BoxOffice';
// import GalleryCard from './11/GalleryCard';
// import GalleryMain from './11/GalleryMain';
import BfestMain from './11/BfestMain';


function App() {
  return (
    <div className='flex flex-col 
                    w-full max-w-screen-2xl h-screen
                    mx-auto
                    overscroll-y-auto
                    '>
      <header className='flex justify-between items-center
                        h-20 p-10
                        text-xl font-bold text-slate-100
                        bg-slate-400
                        '>
        <div className='text-2xl'>리액트 실습</div>
        <div><LiaHomeSolid className='text-4xl' /></div>
      </header>
      <main className='grow flex flex-col
                      justify-center items-center
                      '>
        <BfestMain />
      </main>
      <footer className='flex justify-center items-center
                        h-20 p-10
                        text-m text-white
                        bg-slate-700
                        '>
        2024 k-digital 6기 react Tailwindcss 실습
      </footer>
    </div>
  );
}

// const App = () => {
//   return ();
// }

export default App;