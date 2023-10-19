import { FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/logo.png';
import carrinhoService from '../model/carrinhoService';

const carrinhoServiceInstance = new carrinhoService();

const HeaderMenu = () => {

    return (
        <header className="Header">
        <div className="Logo">
          <img src={logo} alt="Logo" />
          <h1>Restaurante Não Sei</h1>
        </div>
        <nav className="Nav">
          <ul>
            <li>
              <FiShoppingCart />
              <span className="CartItemCount">{carrinhoServiceInstance.totaldeitens()}</span>
            </li>
          </ul>
        </nav>
      </header>
    )
}
export default HeaderMenu;