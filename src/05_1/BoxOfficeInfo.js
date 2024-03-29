

export default function BoxOfficeInfo({selMv}) {

  return (
    <div className="w-4/5 h-14 flex justify-center items-center
                    font-bold text-center
                     bg-slate-900 text-slate-100 text-xl">
    {selMv === undefined &&'영화를 선택해주세요'}
    {selMv &&
    `${selMv.movieNm} // 누적관객수 : ${selMv.audiAcc}
    // 개봉일 : ${selMv.openDt}`}
    </div>
  )
}
