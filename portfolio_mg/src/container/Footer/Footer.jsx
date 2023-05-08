import { useForm } from "react-hook-form";

import { AppWrap, MotionWrap } from "../../wrapper";
import { HoverTextAnimation } from "../../components";
import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <>
      <HoverTextAnimation
        tag={"h2"}
        text={"Contact me"}
        className={"head-text"}
      />
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:matheusghignatti@gmail.com" className="p-text">
            matheusghignatti@gmail.com
          </a>
        </div>
      </div>
      {/* FORM  */}

      <form
        action="https://formsubmit.co/36575c4df222eeb5925dc50d569a37f2"
        method="POST"
        onSubmit={onSubmit}
        target="_blank"
        className="app__footer-form app__flex"
      >
        <div className="app__flex">
          {/* NAME  */}

          <input
            className="p-text"
            type="name"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />

          {errors.name ? (
            <p className=" form__required-text">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLenght" && "Max length is 100 char."}
            </p>
          ) : null}
        </div>

        {/* EMAIL  */}
        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: true,
              //regex to check if its a valid email
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email ? (
            <p className="form__required-text">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email. address."}
            </p>
          ) : null}
        </div>

        {/* MESSAGE  */}
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message ? (
            <p className="form__required-text">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLenght" &&
                "Max length is 2000 char."}
            </p>
          ) : (
            ""
          )}
        </div>

        <button type="submit" className="p-text">
          Send Message
        </button>
      </form>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
