const Form = () => {
    return (
        <>

            <div className="form-container">
                <form className="contact-form">
                    <label>Naam:</label>
                    <input type="text" placeholder="Naam..." />

                    <label>Email:</label>
                    <input type="text" placeholder="Email..." />

                    <label className="bericht">Bericht:</label>
                    <textarea placeholder="Typ hier een bericht..." />

                    <button type="submit">Verzend</button>
                </form>
            </div>

        </>
    );
};

export default Form;