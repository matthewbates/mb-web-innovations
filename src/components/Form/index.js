import React from "react";
import {
  Form,
  FormContainer,
  FormFullName,
  TextInput,
  EmailInput,
  TextArea,
  FormLabel,
  FormButton,
} from "./FormElements";
import swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_9jnk0v9";
const TEMPLATE_ID = "template_bl3e1rq";
const USER_ID = "pxTQ3Ga0lBOJ4vGzM";

export default function Forms() {
  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (r) => {
        console.log(r.text);
        swal.fire(
          "Message Sent",
          "Matthew will get back to you as soon as he can!"
        );
      },
      (error) => {
        console.log(error.text);
        swal.fire("Ooops, something went wrong", error.text);
      }
    );
    e.target.reset();
  }

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <h1
          style={{
            color: "#fff",
            marginBottom: "2rem",
            fontFamily: "Poppins",
            fontSize: "36px",
            overflowY: "hidden",
          }}
        >
          Let's Talk.
        </h1>
        <p
          style={{
            color: "#fff",
            marginBottom: "2rem",
            fontFamily: "Poppins",
          }}
        >
          If you have a project in mind or are simply interested in finding out
          more, get in touch and let’s get things moving.
        </p>
        <TextInput
          placeholder="Name*"
          type="text"
          name="user_first_name"
          required
        />
        <EmailInput
          placeholder="Email*"
          type="email"
          name="user_email"
          required
        />
        <TextInput
          placeholder="Phone*"
          type="text"
          name="user_phone_number"
          required
        />
        <TextInput placeholder="Subject" type="text" name="user_subject" />
        <TextArea
          placeholder="Message*"
          name="user_message"
          cols="50"
          rows="6"
          required
        ></TextArea>
        <FormButton type="submit" className="submit-button" primary="true">
          Submit
        </FormButton>
      </Form>
      <iframe
        src="https://my.atlistmaps.com/map/d9d7792b-6c4b-483d-9775-6ba2a5587911?share=true"
        allow="geolocation"
        width="100%"
        height="400px"
        frameBorder="1"
        scrolling="no"
        allowFullScreen
      ></iframe>
    </FormContainer>
  );
}
