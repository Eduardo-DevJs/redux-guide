import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import rootReducer from "../../redux/root-reducer";
import userActionTypes from "../../redux/user/action-types";
import { LoginUser, LogoutUser } from "../../redux/user/actions";

function Header() {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const dispatch = useDispatch();

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLogin = () => {
    dispatch(LoginUser({ name: "Eduardo", email: "dudev2001@gmail.com" }));
  };

  const handleLogout = () => {
    dispatch(LogoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogout}>Sair</div>
        ) : (
          <div onClick={handleLogin}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
