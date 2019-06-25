function Header(props) {
    return (
        <header>
            <nav className="headernav1">
                <h1 className="headernav1h1">Dylan Barber</h1>
                <ul className="headernav1ul">
                    <li className="headernav1ulli">Projects</li>
                    <li className="headernav1ulli">Background</li>
                    <li className="headernav1ulli">Experience</li>
                </ul>
            </nav>
        </header>
    );
}
function Footer(props) {
    return (
        <footer>
            <p className="footerp">Follow Me on GitHub!</p>
            <nav className="footernav">
                <ul className="footernavul">
                    <li className="footernavulli">GitHub</li>
                </ul>
            </nav>
        </footer>
    )
}
ReactDOM.render(
    <Header />,
    document.getElementById('root')
)