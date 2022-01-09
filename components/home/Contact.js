import styles from "../../styles/sass/Contact.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MdDoneOutline } from "react-icons/md"; 
import { MdClear } from "react-icons/md";

const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email().required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
});

const Contact = () => {
  const { register, handleSubmit,  formState: { errors }  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2 className={styles.intro_container}>
        CONTACT
        <span className={styles.intro_inner}>CONTACT</span>
      </h2>
      <p className={styles.intro}>Please fill out this form and I will get back to you, thank you</p>
      <form onSubmit={handleSubmit(submitForm)} className={styles.form_container}>
          <input
            type="text"
            name="fullName"
            {...register('fullName')}
            placeholder="Full Name..."
            className={styles.input}
          />
          <p> {errors.fullName?.message} </p>

          <input
            type="text"
            name="email"
            {...register('email')}
            placeholder="Email Address..."
            className={styles.input}
          />
          <p> {errors.email?.message} </p>

          <input
            type="text"
            name="subject"
            {...register('subject')}
            placeholder="Subject..."
            className={styles.input}
          />
          <p> {errors.subject?.message} </p>

          <textarea
            id="message"
            name="message"
            {...register('message')}
            className={styles.message}
            placeholder="Your Message..."
          />
          <p> {errors.message?.message} </p>

          <div className={styles.buttons_container}>
             <button type="submit" className={styles.submit_container}>
              <MdDoneOutline className={styles.done_icon} />
              <span className={styles.submit_text}>Submit</span>
            </button> 

            <button type="reset" className={styles.reset_container}>
              <MdClear className={styles.clear_icon} size="1.2rem" />
              <span className={styles.reset_text} onClick={schema.clear}>Reset</span>
            </button> 
          </div>
      </form>
    </>
  );
};

export default Contact;
