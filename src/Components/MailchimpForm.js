import React, { useState, useEffect } from "react";
import "./mcFormStyles.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import PrimaryCTAButton from "../ui/PrimaryCTAButton/primaryCTAButton";
import { useGHStContext } from "../utils/ContextProvider";
import InputField from "../ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const { modalOpen, setModalOpen } = useGHStContext();

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
    if (modalOpen && status === "success") clearFields();
  }, [status, modalOpen]);

  const clearFields = () => {
    setEmail("");
  };

  return (
    <form className="mc__form" onSubmit={(e) => handleSubmit(e)} method="post">
      <h5 className="mc__title">
        {status === "success"
          ? "Success!"
          : "Sign up to our newsletter for exclusive announcements and MMYC news."}
      </h5>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
          {/*Close button appears if form was successfully sent*/}
          {status === "success" ? (
            <PrimaryCTAButton
              handleClick={() => setModalOpen(false)}
              label="close"
              size="big"
              customClass="g__justify-self-center"
            />
          ) : (
            <InputField label="Subscribe" type="submit" formValues={[email]} />
          )}
        </div>
      ) : null}
    </form>
  );
};

const MailchimpForm = (props) => {
  const url = `${process.env.REACT_APP_MAILCHIMP_POST_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpForm;
