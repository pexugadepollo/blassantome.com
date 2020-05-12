import React, { FC, useEffect, useState } from "react";
import { useTab } from "../../../../hooks/useTab";
import * as SC from "./style";
import TextInput from "../../../../components/TextInput";
import TextAreaInput from "../../../../components/TextAreaInput";
import SquareRoundedButton from "../../../../components/SquareRoundedButton";
import axios from "axios";

const Contact: FC = () => {
  const { setTab } = useTab();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });
  const sendMail = async () => {
    try {
      const response = await axios.post(
        //"http://localhost:2233/mail/send",
        "https://api.blassantome.com/mail/send",
        formData
      );
      setResponse(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response);
    }
  };

  useEffect(() => {
    setTab(3);
  }, [setTab]);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleOnClick = () => {
    sendMail();
  };
  return (
    <SC.InputGroup>
      <TextInput
        label="Nombre *"
        value={formData["name"]}
        name="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <TextInput
        label="Email *"
        value={formData["email"]}
        name="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <TextInput
        label="Asunto *"
        value={formData["subject"]}
        name="subject"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
      <TextAreaInput
        label="Mensaje *"
        value={formData["body"]}
        name="body"
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(e)
        }
      />
      <SquareRoundedButton onClick={handleOnClick}>Enviar</SquareRoundedButton>
    </SC.InputGroup>
  );
};

export default Contact;
