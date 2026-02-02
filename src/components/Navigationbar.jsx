import { Link, Outlet } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <>

            <nav className="Navigationbar">
                <div className="logo-container">
                    <a href="Homepagina"><img className="Logo" src="/images/logo.jpg" alt="" /></a>
                </div>
                <ul className="Navigationlist">
                    <li className="Navigationitem"> <Link to="/Homepagina">Homepagina</Link></li>
                    <li className="Navigationitem"> <Link to="/Projectpagina">Projectpagina</Link></li>
                    <li className="Navigationitem"> <Link to="/Overmijpagina">Over Mij</Link></li>
                    <li className="Navigationitem"> <Link to="/Contactpagina">Contactpagina</Link></li>
                </ul>
            </nav>
            <Outlet />

        </>
    );
}

export default Navigationbar;