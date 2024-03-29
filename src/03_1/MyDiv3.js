export default function MyDiv3({d11,d21,d31}) {
  return (
    <div
      className="w-4/5 h-3/5
                flex flex-col justify-start items-start
                 bg-neutral-400
                 text-lime-50
                ">
      <p className="w-4/5 flex justify-start
                    font-bold
                    text-2xl
                    bg-slate-600
                    m-5
                    ">
        {`${d11} > ${d21} > ${d31}`}
      </p>
    </div>
  )
}
