import bank from "./img/bank.png";
import busan from "./img/busan.png";
import market from "./img/market.png";
import { useState } from "react";

export default function FoodCard({fobj}) {

  const [isClick, setIsClick] = useState(false); // isClick 되기 전 초기 상태를 (false)로 지정

  const handleIsClick = () => {
    setIsClick(!isClick) // onClick 해서 handleIsClick 실행되면 false였는데 (!isClick) 반대가 됨
  }

  const fimg = fobj["구분"]==="기초푸드뱅크" ? bank :
                fobj["구분"]==="광역지원센터" ? busan : market

  return (
    <div onClick={handleIsClick}
      className="flex justify-center items-center
                    w-11/12
                    border mx-2 my-2">
      <div className="w-1/5 flex justify-center items-center">
        <img className="w-full"
          src={fimg}
          alt="사업장 구분 이미지"/>
      </div>
      <div className="w-4/5 h-40 mx-3
                      flex flex-col justify-between items-start">
        <div className="w-full">
          <h1 className="text-3xl text-slate-700 font-bold my-2">
              {fobj.사업장명}</h1>
          <h2 className="text-2xl text-slate-500">
              {fobj.운영주체명}</h2>
          <h3 className="text-xl text-slate-400 truncate">
              {fobj["사업장 소재지"]}</h3>
        </div>
        <div className="w-full h-8 text-sm truncate">
          <p className="bg-slate-600 text-slate-100
                      text-base font-bold">
            {isClick && `tel : ${fobj["연락처(대표번호)"]}, fax : ${fobj.팩스번호}`}
          </p>
        </div>
      </div>
    </div>
  );
}
