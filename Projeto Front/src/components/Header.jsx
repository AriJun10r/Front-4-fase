import { CardsSpade } from './Conteudo/icons/CardsPade'
import './Header.css'

function Header() {
  const iconBig={
    with:'148px',
    height:'148px'
  };
  return (
    <div className="header-container">
        <h1>Página bonita</h1>
        <CardsSpade/>
    </div>

  )
}

export default Header
