import React, { useState, useEffect } from "react";
import * as yup from "yup";
import schema from "../validation/newPlantSchema";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import plantNames from "./plantData";
import Nav from "./Nav";

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  .errors {
    color: red;
  }
`;

const initialFormValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
  image_url: "",
};
const initialErrors = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};

function CreatePlant(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);
  const { push } = useHistory();

  const change = (evt) => {
    const { name, value } = evt.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const submit = (evt) => {
    evt.preventDefault();
    const newPlant = {
      nickname: formValues.nickname.trim(),
      species: formValues.species,
      h2oFrequency: formValues.h2oFrequency.trim(),
      image_url: formValues.image_url.trim(),
      user_id: JSON.parse(localStorage.getItem("UserId")),
    };
    axiosWithAuth()
      .post(`/api/plants/${localStorage.getItem("UserId")}`, newPlant)
      .then((res) => {
        console.log(res);
        setFormValues(initialFormValues);
        push("/userpage");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <>
      <Nav />
      <Container>
        {/* Icon here? */}
        <h2>Create New Plant!</h2>
        <Form onSubmit={submit}>
          <label>
            Nick Name
            <input
              type="text"
              name="nickname"
              value={formValues.nickname}
              onChange={change}
            />
            <div className="errors">{errors.nickname}</div>
          </label>
          <label>
            Species
            <select
              type="text"
              name="species"
              value={formValues.species}
              onChange={change}
            >
              <option disabled value="">
                --SELECT--
              </option>
              {plantNames.map((plant) => (
                <option key={plant.name} value={plant.name}>
                  {plant.name}
                </option>
              ))}
            </select>
            <div className="errors">{errors.species}</div>
          </label>
          <label>
            H<sub>2</sub>O frequency
            <input
              type="text"
              name="h2oFrequency"
              value={formValues.h2oFrequency}
              onChange={change}
            />
            <div className="errors">{errors.h2oFrequency}</div>
          </label>
          <label>
            {"Image url (optional)"}
            <input
              type="text"
              name="image"
              value={formValues.image}
              onChange={change}
            />
          </label>
          <button disabled={disabled}>Create</button>
        </Form>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, {})(CreatePlant);
