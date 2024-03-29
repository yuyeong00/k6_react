export default function TailButton({caption, color, handleClick}) { 
    //내 버튼을 쓰려면 캡션을 줘야함. 이름은 마음대로
  
  const hoverObj ={
    'blue' : 'hover:bg-blue-600',
    'red' : 'hover:bg-red-800',
    'orange' : 'hover:bg-orange-800',
    'lime' : 'hover:bg-lime-800'
  }
  const colorObj ={
    'blue' : 'bg-blue-400',
    'red' : 'bg-red-400',
    'orange' : 'bg-orange-400',
    'lime' : 'bg-lime-400'
  }
  const bColor = `px-4 py-2 m-2 rounded-md
                  w-full
                ${hoverObj[color]}
                ${colorObj[color]} text-white`
    return (
    <button className={bColor}
            onClick={handleClick}>
      {caption}
    </button>
  )
}
