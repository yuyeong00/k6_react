import BoxOfficeData from "./BoxOffice.json"
import BoxOfficeThead from "./BoxOfficeThead";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeInfo from "./BoxOfficeInfo";
import {useState} from "react";

export default function BoxOfficeTb() {
  const boxList = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList
  const [selMv, setSelMv] = useState();
    
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <table className="w-4/5 border-2">
        <BoxOfficeThead/>
        <BoxOfficeTbody boxList={boxList} setSelMv={setSelMv} />
      </table>
      <BoxOfficeInfo selMv={selMv} />
    </div>
  );
}
