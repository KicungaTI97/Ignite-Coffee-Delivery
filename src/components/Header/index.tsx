import { HeaderContainer, Actions} from "./style";

import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
export function Header(){
  const {cart} = useCart()

    return(
      <HeaderContainer>
        <Link to={'/'}>
          <img src='/Logo.svg' alt="Coffee Delivery" />
        </Link>

        <Actions>
          <a href="#">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </a>
          <Link to={`cart`} aria-disabled={cart.length === 0}>
          <ShoppingCart size={22} weight="fill" />
            {cart.length > 0 ? <span>{cart.length}</span>: null}
          </Link>
        </Actions>
      </HeaderContainer>
    )
}