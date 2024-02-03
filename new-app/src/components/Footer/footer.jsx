import './footer.css';
import { Link } from 'react-router-dom';

function Footer()
{
 return (
  <footer>
    <Link to="/">О проекте</Link>
    <Link to='https://github.com/FOLLOO'>GitHub</Link>
    <Link to='#'>Поделиться</Link>
  </footer>
 )
}

export default Footer;