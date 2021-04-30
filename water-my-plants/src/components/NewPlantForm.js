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

  .watering {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }

  .errors {
    color: red;
  }
`;

const initialFormValues = {
  nickname: "",
  species: "",
  frequency: "",
  lengthOfTime: "", 
  image_url: "",
};
const initialErrors = {
  nickname: "",
  species: "",
  frequency: "",
  lengthOfTime: "", 
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
      h2oFrequency: `${formValues.frequency} times a ${formValues.lengthOfTime}`,
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
            <label className='watering'>
             <span>H<sub>2</sub>O</span>
              <select
                type="number"
                name="frequency"
                value={formValues.frequency}
                onChange={change}
              >
                <option disabled value=''>select</option>
                <option value='1'>one</option>
                <option value='2'>two</option>
                <option value='3'>three</option>
                <option value='4'>four</option>
                <option value='5'>five</option>
                <option value='6'>six</option>
                <option value='7'>seven</option>
                <option value='8'>eight</option>
                <option value='9'>nine</option>
                <option value='10'>ten</option>
              </select>
              <div>{'time(s) a'}</div>
              <select
                type="text"
                name="lengthOfTime"
                value={formValues.lengthOfTime}
                onChange={change}
              >
                  <option value='day'>day</option>
                  <option value='week'>week</option>
                  <option value='month'>month</option>
              </select>
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
