

export default function DetailsComponent({details}) {
    console.log(details, "<===== details")
    const {name, address, price} = details
    return (
        <>
            <p>{name}</p>
            <p>{address}</p>
            <p>${price} / night</p>
        </>
    )
}