import styles from "../../styles/sass/Contact.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdDoneOutline } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { useState } from "react";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [successMsg, setSuccessMsg]=useState();

  const submitForm = async (data) => {
    try{
      const response=await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      reset();
      const { status } = await response.json();
      if(status==="Ok"){
        setSuccessMsg(true);
      }else if (status!=="Ok"){
        setSuccessMsg(false);
      }
    }catch(e){
      console.log(e);
    }
  };   

  const resetButton=()=>{
    schema.clear;
    setSuccessMsg("");
  }

  return (
    <>
      <h2 id="contact" className={styles.intro_container}>
        CONTACT
        <span className={styles.intro_inner}>CONTACT</span>
      </h2>
      <p className={styles.intro}>Please fill out this form, and I will get back to you. Thank you</p>
          
      <form onSubmit={handleSubmit(submitForm)} className={styles.form_container}>
        <input
          type="text"
          name="fullName"
          {...register('fullName')}
          placeholder="Full Name..."
          className={styles.input}
        />
        <p className={styles.error}> {errors.fullName?.message} </p>

        <input
          type="text"
          name="email"
          {...register('email')}
          placeholder="Email Address..."
          className={styles.input}
        />
        <p className={styles.error}> {errors.email?.message} </p>

        <input
          type="text"
          name="subject"
          {...register('subject')}
          placeholder="Subject..."
          className={styles.input}
        />
        <p className={styles.error}> {errors.subject?.message} </p>

        <textarea
          id="message"
          name="message"
          {...register('message')}
          className={styles.message}
          placeholder="Your Message..."
        />
        <p className={styles.error}> {errors.message?.message} </p>

        <p 
          className={
            successMsg===true ? styles.success : 
            successMsg===false ? styles.error : 
            null}>
          {successMsg===true ? "Thank you! your message was submitted successfully" : 
          successMsg===false ? "There has been an error; please try again" : 
          successMsg==="" ? "" : null}
        </p>

        <div className={styles.buttons_container}>
          <button type="submit" className={styles.submit_container}>
            <MdDoneOutline className={styles.done_icon} />
            <span className={styles.submit_text}>Submit</span>
          </button>

          <button type="reset" className={styles.reset_container}>
            <MdClear className={styles.clear_icon} size="1.2rem" />
            <span className={styles.reset_text} onClick={resetButton}>Reset</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Contact;
