import './footer.css';
import { Link } from 'react-router-dom';

function Footer()
{
    const handleShare = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Ссылка успешно скопирована!');
      } catch (error) {
        console.error('Не удалось скопировать ссылку:', error);
        alert('Ошибка при копировании ссылки.');
      }
    };
 return (
  <footer>
    <Link to="/">О проекте</Link>
    <Link to='https://github.com/FOLLOO'>GitHub</Link>
    <Link to='#' onClick={handleShare}>Поделиться</Link>
  </footer>
 )
}

export default Footer;