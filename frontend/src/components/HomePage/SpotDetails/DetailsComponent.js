

export default function DetailsComponent({details}) {
    const {name, address, price} = details
    return (
        <>
            <p>{name}</p>
            <p>{address}</p>
            <p>${price} / night</p>
        </>
    )
}