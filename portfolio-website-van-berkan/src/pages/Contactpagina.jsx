import ContactText from "../components/ContactText";
import Form from "../components/Form";
import StandardBerkanBox from "../components/standardberkanbox";

const Contactpagina = () => {
    return (
        <>

            <h1 className="h1contactpagina">Neem contact op!</h1>

            <StandardBerkanBox>

                <ContactText />

                <Form />

            </StandardBerkanBox>

        </>
    );
}

export default Contactpagina;