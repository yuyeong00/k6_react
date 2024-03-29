import MyDiv3 from "./MyDiv3";

export default function MyDiv2({d1,d2,d3}) {
  return (
    <div
      className="w-4/5 h-4/5
                flex flex-col justify-center items-center
                 bg-neutral-600
                 text-lime-50
                ">
      <p className="w-4/5 flex justify-start
                    font-bold
                    text-2xl
                    my-5
                    ">
        {`${d1} > ${d2}`}
      </p>
      <MyDiv3 d11={d1} d21={d2} d31={d3}/>
    </div>
  )
}