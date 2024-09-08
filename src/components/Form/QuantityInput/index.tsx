import { Minus, Plus } from "phosphor-react";
import { Container } from "./style";

type Props = {
    quantity: number
    incrementQuantity: () => void
    decrementQuantity: () => void
}

export function QuantityInput({
    quantity,
    incrementQuantity,
    decrementQuantity,
}:Props){

    return(
        <Container>
            <button onClick={decrementQuantity}>
                <Minus size={20}/>
            </button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>
                <Plus size={20} />
            </button>
        </Container>
    )
}