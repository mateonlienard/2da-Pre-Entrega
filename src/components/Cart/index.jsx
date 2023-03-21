import { useContext } from "react"
import { MyContext } from "../../routes/root"

export const Cart = () => {
    const { carrito } = useContext(MyContext);

    return (
        <div></div>
    )
}