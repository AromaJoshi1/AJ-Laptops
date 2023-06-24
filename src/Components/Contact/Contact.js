import React, { useState } from "react";
import { AiTwotonePhone, AiFillMail } from "react-icons/ai";
import "./Contact.css";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    rate: "",
    desc: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for visting our website.We will get back to you soon.");
  };
  return (
    <>
      <div classNameName="my-5"></div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <h1 classNameName="text-center">Contact Us</h1>
            <p id="h1">
              Thanks for your interest! To contact us, please use the form below
              or simply give us a call.<br></br>
              <AiTwotonePhone />
              :9645677823
              <br></br>
              <AiFillMail />
              :aj.laptops@gmail.com
            </p>

            <form className="form-area" onSubmit={formSubmit}>
              <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label heading">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  required
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>

              <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label heading">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="phone"
                  required
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>

              <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label heading">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  required
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div class="form-group  heading">
                <label for="exampleFormControlSelect1">
                  How easy is it to find what you are looking for?
                </label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>5(Very easy)</option>
                  <option>4</option>
                  <option>3</option>
                  <option>2</option>
                  <option>1(Very difficult)</option>
                  name="rate" value={data.rate}
                  onChange={InputEvent}
                </select>
              </div>

              <div class="form-group heading">
                <label for="exampleFormControlTextarea1">
                  Product description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  name="desc"
                  value={data.desc}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="row center">
                <div class="col-12 mt-3 text-center">
                  <button type="submit" className="btn btn-primary ">
                    Submit form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
