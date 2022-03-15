import React, {useState} from 'react';
import './contactFormStyles.scss';
import InputField from "../ui/InputField/InputField";




const ContactForm = props => {

    const [email, setEmail] = useState('');

    return (

        <div className="mc__form-container">

                <form
                    className="mc__form"
                    name="ghs-contact-form"
                    method="post"
                >
                    <div className="mc__field-container">
                        <input type="hidden" name="form-name" value="ghs-contact-form"/>

                        <InputField
                            label="Email"
                            onChangeHandler={setEmail}
                            type="email"
                            value={email}
                            placeholder="your@email.com"
                            isRequired
                            name="email"
                        />

                    </div>

                    {/*Always put the email in first in this array for validation reasons*/}
                    <InputField
                        label="Subscribe"
                        type="submit"
                        formValues={[email]}
                    />
                </form>
        </div>
    )
}

export default ContactForm;
