

export default function DeleteComponent({spot}) {
    console.log("spot in delete component", spot)
   async function onDelete(spot) {

    }
    return (
        <button type="button" onClick={() => onDelete(spot)}> Delete Spot</button>
    )
}