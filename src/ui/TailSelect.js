
export default function TailSelect({ops, opDefault, selRef, handleSel}) {
    const optags = ops.map(item => 
        <option value={item} key={item}>
            {item}
        </option>
        )
    return (
    <select onChange={handleSel}
            ref = {selRef}
            id="sel"
            className="h-full w-3/4 p-2.5 bg-gray-50 border border-gray-300
                     text-gray-900 text-base rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block">
        <option value>{opDefault}</option>
        {optags}
    </select>
  )
}
