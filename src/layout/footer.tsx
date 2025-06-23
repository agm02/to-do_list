import logo from '../assets/logotipo-LBC.png';
import Separator from '../components/separator';

export default function Footer() {
    return (
        <footer className="app-footer">
            <Separator />
            <div style={{ padding: "0 10px" }}>
                <div className="footer-container">
                    <img src={logo} className="footer-logo" alt="logo" />
                    <p>Exercício desenvolvido por: André Mena</p>
                </div>
            </div>
        </footer>
    );
}