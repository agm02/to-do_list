import logo from '../assets/logotipo-LBC.png';

export default function Header() {
    return (
        <header className="app-header">
            <img src={logo} className="header-logo" alt="logo" />
        </header>
    );
}