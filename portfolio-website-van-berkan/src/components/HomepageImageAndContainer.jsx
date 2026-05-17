import DigitalClock from "./DigitalClock";

const HomepageImageAndContainer = () => {
    return (
        <>

            <div className="bodyhomepage">
                <h1 className="h1homepagina">Portfolio van Berkan</h1>
                <div className="homepagebackgroundcontainer">
                    <img src="/portfolio-website-van-berkan/images/homepagebackground.jpg" alt="" className="homepagebackground" />
                </div>
                <DigitalClock />
            </div >

        </>
    );
}

export default HomepageImageAndContainer;