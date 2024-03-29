import BoxOfficeData from "./BoxOffice.json";
import { FaArrowAltCircleDown, FaArrowAltCircleUp  } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import {useState} from "react";

export default function BoxOfficeTb() {
    const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList

    // state변수
    const [selMv, setSelMv] = useState();
    const handleClick = (mv)=> {
        console.log(mv);
        setSelMv(mv);
    };

    const trs = boxList.map( item =>
        <tr key={item.movieCd} onClick={()=>{handleClick(item)}}
                                className="h-10 p-1
                                hover:bg-blue-100 hover:font-bold">
            <td className="text-center">
                {item.rank}
            </td>
            <td className="text-center">
                {item.movieNm}
            </td>
            <td className="text-right">
                {parseInt(item.salesAmt).toLocaleString()}원
            </td>
            <td className="text-right">
                {parseInt(item.audiCnt).toLocaleString()}명
            </td>
            <td className="h-10 flex justify-center items-center">
                {parseInt(item.rankInten) > 0 ? <FaArrowAltCircleUp className="text-red-500"/>
                : parseInt(item.rankInten) < 0 ? <FaArrowAltCircleDown className="text-blue-600"/>
                :  <CgLoadbar/>}
                {parseInt(item.rankInten)!== 0 && (item.rankInten)}
            </td>
        </tr>
        );
    
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border-2">
        <thead className="">
          <tr className="h-11 text-center bg-slate-900 text-white">
            <th className="w-20">순위</th>
            <th>영화명</th>
            <th className="w-1/5">매출액</th>
            <th className="w-1/5">관객수</th>
            <th className="w-30">증감율</th>
          </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="5" className="text-center h-10
                                            bg-slate-800 text-white">
                    {selMv === undefined &&'영화를 선택해주세요'}
                    {selMv &&
                    `${selMv.movieNm} // 누적관객수 : ${selMv.audiCnt}
                    // 개봉일 : ${selMv.openDt}`}
                </td>
            </tr>
        </tfoot>
      </table>
      <div className="w-4/5 h-10 flex justify-center items-center
                        font-bold text-center
                        bg-slate-600 text-slate-200">
        {selMv === undefined &&'영화를 선택해주세요'}
        {selMv &&
        `${selMv.movieNm} // 누적관객수 : ${selMv.audiCnt}
        // 개봉일 : ${selMv.openDt}`}
      </div>
    </div>
  );
}
