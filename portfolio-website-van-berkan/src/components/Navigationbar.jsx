import { Link, Outlet } from 'react-router-dom';

const Navigationbar = () => {
    return (
        <>

            <nav className="Navigationbar">
                <div className="logo-container">
                    <a href="Homepagina"><img className="Logo" src="/portfolio-website-van-berkan/images/logo.png" alt="" /></a>
                </div>
                <ul className="Navigationlist">
                    <li className="Navigationitem"> <Link to="/Homepagina">Home</Link></li>
                    <li className="Navigationitem"> <Link to="/Projectpagina">Projecten</Link></li>
                    <li className="Navigationitem"> <Link to="/Overmijpagina">Over Mij</Link></li>
                    <li className="Navigationitem"> <Link to="/Contactpagina">Contact</Link></li>
                </ul>
            </nav>
            <Outlet />

        </>
    );
}

export default Navigationbar;