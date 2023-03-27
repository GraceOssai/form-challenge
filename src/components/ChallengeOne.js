import React from "react";
import "./styles/ChallengeOne.css";

const ChallengeOne = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isFriendly: true,
    employment: "",
    newsletter: true
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }


  function handleSubmit(event){
    event.preventDefault()
    let password = formData.password
    let confirmPassword = formData.confirmPassword
    if(password === confirmPassword){
      console.log("successfully signed up") 
    } else{
      console.log("password does not match")
      return 
    }


    if(formData.newsletter){
      console.log("Thanks for signing up for our newsletter")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <center>
        <div className="first-input">
          <input
            type="text"
            placeholder="first Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="question">
          <label htmlFor="anything">Are you friendly? 😚 </label>
          <input
            type="checkbox"
            name="isFriendly"
            id="anything"
            checked={formData.checked}
            onChange={handleChange}
          />
        </div>

        <fieldset>
          <legend>What is your current employment status?</legend>
          <div className="fieldset-input">
            <div className="main-question">
              <input
                type="radio"
                id="employed"
                name="employment"
                value="employed"
                checked={formData.employment === "employed"}
                onChange={handleChange}
              />
              <label htmlFor="employed">Employed</label>
            </div>

            <div className="main-question">
              <input
                type="radio"
                id="freelancer"
                name="employment"
                value="freelancer"
                checked={formData.employment === "freelancer"}
                onChange={handleChange}
              />
              <label htmlFor="freelancer">Freelancer</label>
            </div>

            <div className="main-question">
              <input
                type="radio"
                id="unemployed"
                name="employment"
                value="unemployed"
                checked={formData.employment === "unemployed"}
                onChange={handleChange}
              />
              <label htmlFor="unemployed">Unemployed</label>
            </div>

            <div className="main-question">
              <input
                type="radio"
                id="self-employed"
                name="employment"
                value="self-employed"
                checked={formData.employment === "self-employed"}
                onChange={handleChange}
              />
              <label htmlFor="self-employed">Self employed</label>
            </div>
          </div>
        </fieldset>

        <div className="main-checkbox">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            id="myId"
            onChange={handleChange}
          />
          <label htmlFor="myId">I want to join the newsletter</label>
        </div>

        <button>Sign up</button>
      </center>
    </form>
  );
};

export default ChallengeOne;
