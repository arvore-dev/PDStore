// ================= FOOTER =================
// Componente responsável pelo rodapé da aplicação.
// Contém informações institucionais, navegação e formas de pagamento.

import { Link } from "react-router-dom"

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* ================= MARCA =================
                   Exibe nome da loja e descrição */}
                <div className="footer-section">
                    <h3>PDStore</h3>
                    <p>
                        Sua loja online com os melhores produtos
                        e ofertas imperdíveis.
                    </p>
                </div>

                {/* ================= NAVEGAÇÃO =================
                   Links principais do sistema */}
                <div className="footer-section">
                    <h4>Navegação</h4>
                    <ul>
                        <li><Link to="/">Produtos</Link></li>
                        <li><Link to="/cart">Carrinho</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                {/* ================= INSTITUCIONAL =================
                   Informações sobre a empresa */}
                <div className="footer-section">
                    <h4>Institucional</h4>
                    <ul>
                        <li><Link to="/about">Sobre nós</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </div>

                {/* ================= PAGAMENTOS =================
                   Exibição das bandeiras aceitas */}
                <div className="footer-section">
                    <h4>Pagamentos</h4>

                    <div className="payment-icons">
                        <img src="/visa.png" alt="Visa" />
                        <img src="/mastercard.png" alt="Mastercard" />
                        <img src="/elo.png" alt="Elo" />
                        <img src="/pix.png" alt="Pix" />
                    </div>

                </div>

            </div>

            {/* ================= COPYRIGHT ================= */}
            <div className="footer-bottom">
                <p>© 2026 PDStore - Todos os direitos reservados</p>
            </div>

        </footer>

    )

}

export default Footer