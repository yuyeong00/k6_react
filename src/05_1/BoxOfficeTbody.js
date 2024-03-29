import { FaArrowAltCircleDown, FaArrowAltCircleUp  } from "react-icons/fa";
import { CgLoadbar } from "react-icons/cg";


export default function BoxOfficeTbody({boxList, setSelMv}) {

    const handleClick = (mv)=> {
        setSelMv(mv);
    };

    const trs = boxList.map( item =>
        <tr key={item.movieCd} onClick={()=>{handleClick(item)}}
                                className="h-12 p-1
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
            <td className="h-12 flex justify-center items-center">
                {parseInt(item.rankInten) > 0 ? <FaArrowAltCircleUp className="text-red-500"/>
                : parseInt(item.rankInten) < 0 ? <FaArrowAltCircleDown className="text-blue-600"/>
                :  <CgLoadbar/>}
                {parseInt(item.rankInten)!== 0 && (item.rankInten)}
            </td>
        </tr>
        );

  return (
    <tbody>
      {trs}
    </tbody>
  )
}
