import logo from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo DSMeta" />
                    <h1>DsMeta</h1>
                    <p>
                        Desenvolvido por:
                        <a href="https://www.linkedin.com/in/mbpicazzio/">@mbpicazzio</a>
                    </p>
            </div>
        </header>
    )
}

export default Header;
