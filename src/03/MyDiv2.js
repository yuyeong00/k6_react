import MyDiv3 from "./MyDiv3";

export default function MyDiv2(probs) {
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
        {`${probs.d1} > ${probs.d2}`}
      </p>
      <MyDiv3 d11={probs.d1} d21={probs.d2} d31={probs.d3}/>
    </div>
  )
}
