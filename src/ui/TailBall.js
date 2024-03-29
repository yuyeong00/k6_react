export default function TailBall({n}) {

    const bcolor = [
        'bg-red-300',
        'bg-orange-300',
        'bg-yellow-300',
        'bg-blue-300',
        'bg-pupple-300'
    ]

    const ballColor = `p-2 m-2 h-16 w-16 rounded-full
                    bg-blue-500 text-slate-50
                    text-2xl font-bold
                    flex justify-center items-center
                    ${bcolor[parseInt(n/10)]}`
  return (
    <div className={ballColor}>
      {n}
    </div>
  )
}
