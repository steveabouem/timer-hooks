import Page from "../common/page/Page";
import('./contact.css');

const Contact = () => {
    return (
        <Page header="contact">
            <form className="contact-form">
                <div>
                    <label>Nom</label>
                    <input name="name" placeholder="John Dough" />
                </div>

                <div>
                    <label>Coureil</label>
                    <input name="couriel" placeholder="john@dough.com" />
                </div>

                <div>
                    <label>Message</label>
                    <input name="message" />
                </div>

                <button className="product-link">Envoyer</button>
            </form>
        </Page>
    )
};

export default Contact;