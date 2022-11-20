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

export default function Forms() {
  return (
    <FormContainer>
      <Form>
        <h1
          style={{
            color: "#fff",
            marginBottom: "2rem",
            fontFamily: "Poppins",
            fontSize: "36px",
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
        <FormFullName>
          <TextInput
            placeholder="First name*"
            type="text"
            name="user_first_name"
            required
          />
          <TextInput
            placeholder="Last name*"
            type="text"
            name="user_last_name"
            required
          />
        </FormFullName>
        <EmailInput
          placeholder="Email address*"
          type="email"
          name="user_email"
          required
        />
        <TextInput
          placeholder="Phone number*"
          type="text"
          name="user_phone_number"
          required
        />
        <TextInput placeholder="Subject" type="text" name="user_subject" />
        <TextArea
          placeholder="Your message*"
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
