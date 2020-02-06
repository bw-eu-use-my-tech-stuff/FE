import React, { useState, useEffect } from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import '../styles/DashboardAddItem.css';

function DashboardAddItem() {
  return (
    <Form>
      <h2>Rent your products. Earn money.</h2>
      Name:
      <Field type="text" placeholder="Name" name="name" /><br></br>
      
      Category:
      <Field name="category" as="select" placeholder="Category">
        <option value="camera">Cameras</option>
        <option value="houseHoldAppliance">Household Applicances</option>
        <option value="laptops">Laptops</option>
        <option value="lighting">Lighting</option>
        <option value="lens">Lenses</option>
        <option value="soundRecordingEquipment">Sound Recording Equipment</option>
        <option value="videoRecordingEquipment">Video Recording Equipment</option>
        <option value="other">Other</option>
      </Field><br></br>

      Cost(Per day):
      <Field type="number" placeholder="Price" name="cost"/><br></br>
      Description:
      <Field type="text" placeholder="Description" name="description"/><br></br>
      <button>Add Item</button>
    </Form>
  );
}

const AddItem = withFormik({
  mapPropsToValues({ id, name, category, cost, available, description, owner_username }) {
    return {
      id: "",
      name: name || "",
      category: category || "",
      cost: cost || "",
      available: 1,
      description: description || "",
      owner_username: "null",
    };
  },

  handleSubmit(values) {
    console.log(values);
    axios.post("https://use-my-tech-stuff-eu.herokuapp.com/api/equipments", values)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
})(DashboardAddItem);

export default AddItem;
