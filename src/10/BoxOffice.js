import BoxOfficeData from "../05/BoxOffice.json";
import { FaArrowAltCircleDown, FaArrowAltCircleUp  } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";
import {useState, useEffect, useRef} from "react";
import TailInput from "../ui/TailInput"

export default function BoxOffice() {
  const [boxList,setBoxList] = useState([]);
  const [trs, setTrs] = useState([]);
  const boxRef = useRef();

  useEffect(()=>{
    if (!boxList) return;
    const tm = boxList.map( item =>
      <tr key={item.movieCd} onClick={()=>{}}
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
      setTrs(tm);
  },[boxList])



  const handleSelDate = () => {
    console.log(boxRef.current.value.replaceAll('-',''))
    getData(boxRef.current.value.replaceAll('-',''));
  };



  // boxoFfice 데이터 fetch (데이터 가져오려고)
  const getData = (dt)=>{
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = url + `key=${process.env.REACT_APP_MV_API_KEY}&targetDt=${dt}`
    console.log(url)

    fetch(url) //데이터를 패치해옴
    .then(r => r.json()) // 결과를 받을 변수. 읽기위해 json으로 만들어야됨
    .then(d => setBoxList(d.boxOfficeResult.dailyBoxOfficeList)) //결과를 받을 변수.
    .catch(err => console.log(err))
  };





    
  return (
    <div className="w-full flex flex-col justify-center items-center">

      <div className="w-4/5 flex justify-end items-center
                      ">
        <span className="text-sm font-bold mx-5 ">날짜 선택 :</span> 
        <div className="flex justify-center items-center">
          <TailInput type="date" 
                  inputRef={boxRef} 
                  handleChange={handleSelDate}
                  ph="" />
        </div>
      </div>
      <table className="w-4/5 border-2">
        <thead className="">
          <tr className="h-11 text-center bg-slate-900 text-white">
            <th className="w-1/12">순위</th>
            <th className="w-3/12">영화명</th>
            <th className="w-3/12">매출액</th>
            <th className="w-3/12">관객수</th>
            <th className="w-2/12">증감율</th>
          </tr>
        </thead>
        <tbody>
            {trs}
        </tbody>
        <tfoot>
            <tr>
                <td colSpan="5" className="text-center h-10
                                            bg-slate-800 text-white">
                    
                </td>
            </tr>
        </tfoot>
      </table>
    </div>
  );
}
