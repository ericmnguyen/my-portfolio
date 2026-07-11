import React, { useState } from "react";
import { Button } from 'antd';
import qrCode from '../../utils/img/Whatsapp-QR.jpeg';
import { useForm } from 'react-hook-form';


const EnquiryPage = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isFormDisplayed, setIsFormDisplayed] = useState(true);
  const [submitError, setSubmitError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const copyEmail = () => {
    navigator.clipboard.writeText('nhat.eric.nguyen@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 5000);
  };

  const onSubmit = async (data) => {
    setSubmitError("");

    console.log("Form submitted:", data);

    // const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
    // const response = await fetch(`${apiUrl}/enquiries`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // if (!response.ok) {
    //   const result = await response.json().catch(() => ({}));
    //   setSubmitError(result.message || "Something went wrong. Please try again.");
    //   return;
    // }

    reset();
    setIsFormDisplayed(false);
  }

  return (
    <div className="enquiry-page bg-black p-10 pb-16 pt-24 font-mono" id="enquiry">
      <h1 className="enquiry__title text-white font-mono italic text-3xl pl-24">Start your project</h1>
      <p className="enquiry__description text-white text-lg mt-4 pl-24">
        Have a project in mind? Let's discuss how I can help bring your ideas to life.
      </p>
      <div className="enquiry__contact-info mt-6 text-white grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="enquiry__contact-form m-3 border-2 border-gray-600 md:p-6 rounded-lg bg-purple-800 bg-opacity-20 p-3">
          {
            isFormDisplayed ? (
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <p className="enquiry__contact-form-placeholder text-white text-2xl font-bold">Share Your Vision</p>
                <input type="text" placeholder="Your Name" className="enquiry__contact-input w-full mb-2 p-2 rounded bg-gray-800 text-white border border-gray-600" {...register("name", { required: "Your name is required." })} />
                {errors.name && <p className="text-red-400 text-xs mb-3">{errors.name.message}</p>}
                <input type="email" placeholder="Your Email" className="enquiry__contact-input w-full mb-2 p-2 rounded bg-gray-800 text-white border border-gray-600" {...register("email", { required: "Your email is required." })} />
                {errors.email && <p className="text-red-400 text-xs mb-3">{errors.email.message}</p>}
                <textarea placeholder="Your Message" className="enquiry__contact-textarea w-full mb-2 p-2 rounded bg-gray-800 text-white border border-gray-600" rows="5" {...register("message", { required: "Your message is required." })}></textarea>
                {errors.message && <p className="text-red-400 text-xs mb-3">{errors.message.message}</p>}

                <label className="mb-2 flex items-center gap-2 text-sm text-white">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-purple-600"
                    {...register("notRobot", { required: "Please confirm you're not a robot." })}
                  />
                  I'm not a robot
                </label>
                {errors.notRobot && <p className="text-red-400 text-xs mb-3">{errors.notRobot.message}</p>}

                {submitError && <p className="text-red-400 text-xs mb-3">{submitError}</p>}
                <input className="enquiry__contact-submit bg-transparent border-white border hover:bg-white 
          text-white hover:text-black transition duration-500 font-bold py-2 px-4 rounded h-10 disabled:bg-zinc-400" type="submit" disabled={isSubmitting} value={isSubmitting ? "Sending..." : "Submit"} />
              </form>
            ) :
              (
                <div className="enquiry__contact-form-success text-white text-center justify-center">
                  <p className="text-2xl font-bold mb-4">Thank you for reaching out!</p>
                  <p className="mb-4">I will get back to you as soon as possible.</p>
                  <Button className="enquiry__contact-submit bg-transparent border-white border hover:bg-white 
          text-white hover:text-black transition duration-500 font-bold py-2 px-4 rounded h-10"
                    onClick={() => setIsFormDisplayed(true)}>
                    Send Another Message
                  </Button>
                </div>
              )
          }
        </div>
        <div className="enquiry__contact-details m-3 border-2 border-gray-600 md:p-6 rounded-lg bg-purple-800 bg-opacity-20">
          <p className="enquiry__contact-form-placeholder text-white text-2xl font-bold">Scan me for quick contact</p>
          <div className="enquiry__contact-qr-container mb-4 flex justify-center">
            <img src={qrCode} alt="QR Code" className="enquiry__contact-qr w-48 h-48" />
          </div>

          <div className="enquiry__contact-info-text text-white mt-6 border border-gray-600 pt-4 rounded-lg p-4">
            <p className="enquiry__contact-email text-xs">📩 Email me directly at:&nbsp;
              <span className="italic">nhat.eric.nguyen@gmail.com</span>
            </p>
            <Button className="enquiry__contact-submit bg-transparent border-white border hover:bg-white 
          text-white hover:text-black transition duration-500 font-bold py-2 px-4 rounded h-10 mr-3"
              onClick={() => window.location.href = 'mailto:nhat.eric.nguyen@gmail.com'}>
              Send Email
            </Button>

            {emailCopied ? <span className="font-mono text-sm">✅ Email copied!</span> :
              <Button className="enquiry__contact-submit bg-transparent border-white border hover:bg-white 
          text-white hover:text-black transition duration-500 font-bold py-2 px-4 rounded h-10 "
                onClick={copyEmail}>
                Copy Email
              </Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
