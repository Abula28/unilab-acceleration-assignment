import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Form.module.scss";

export const Form = () => {
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const imageRef = useRef(null);
  const navigate = useNavigate();

  const handleImageChoose = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    localStorage.setItem("imageValue", URL.createObjectURL(e.target.files[0]));
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || value.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    localStorage.setItem("username", value);
    navigate("/form-page");
  };

  useEffect(() => {
    image && value.trim() !== "" ? setError(false) : null;
  }, [image, value]);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.choose_image}>
        <div onClick={handleImageChoose} className={classes.imageBtn}>
          {image ? (
            <img src={image} alt="profile" className={classes.profileImage} />
          ) : (
            <img src={"/images/registration/camera.png"} alt="camera" />
          )}
          <input
            type="file"
            ref={imageRef}
            onChange={handleImageChange}
            name="file"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className={classes.inpTextField}>
        <p>Fill Your Name</p>
        <input
          type="text"
          placeholder="Your Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {error ? (
          <p className={classes.error}>Choose image and enter your name</p>
        ) : null}
        <button type="submit" onSubmit={handleSubmit}>
          Sign in
        </button>
      </div>
    </form>
  );
};
