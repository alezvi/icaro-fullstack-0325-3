export default function Square(props) {
    function showItem(item) {
        console.log(item)
    }

    return (
        <div 
            key={props.key} 
            onClick={() => showItem(props.item)} 
            className="col-3 border p-3 text-center">
            { props.item.visible ? props.item.value : '#' }
        </div>
    )
}
