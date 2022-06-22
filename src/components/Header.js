function Header() {
    return (
        <div className="header">
            <header>
                <nav>
                    <a className="logo" href="/">Petter's CEP</a>
                    <div className="mobile-menu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <ul className="nav-list">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/">Projetos</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header