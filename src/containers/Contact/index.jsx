import React, { useState, useRef } from "react";
import { Button } from 'antd';
import qrCode from '../../utils/img/Whatsapp-QR.jpeg';
import { useForm } from 'react-hook-form';
import { Turnstile } from "@marsidev/react-turnstile";


const EnquiryPage = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [isFormDisplayed, setIsFormDisplayed] = useState(true);
  const [submitError, setSubmitError] = useState("");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [token, setToken] = useState(null);
  const turnstileRef = useRef(null);

  const copyEmail = () => {
    navigator.clipboard.writeText('nhat.eric.nguyen@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 5000);
  };

  const resetTurnstile = () => {
    setToken(null);
    turnstileRef.current?.reset();
  };

  const onSubmit = async (data) => {
    setSubmitError("");

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, turnstileToken: token }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong. Please try again.");
      }
      reset();
      setIsFormDisplayed(false);
    } catch (error) {
      setSubmitError(error.message || "Unable to send your message. Please try again.");
      resetTurnstile();
    }
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
                <input type="text" placeholder="Your Name" className="enquiry__contact-input w-full mb-2 p-2 rounded bg-gray-800 text-white border border-gray-600" {...register("name", { required: "Your name is required.", maxLength: { value: 100, message: "Your name must be 100 characters or fewer." } })} />
                {errors.name && <p className="text-red-400 text-xs mb-3">{errors.name.message}</p>}
                <input type="email" placeholder="Your Email" className="enquiry__contact-input w-full mb-2 p-2 rounded bg-gray-800 text-white border border-gray-600" {...register("email", { required: "Your email is required.", maxLength: { value: 254, message: "Your email must be 254 characters or fewer." }, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." } })} />
                {errors.email && <p className="text-red-400 text-xs mb-3">{errors.email.message}</p>}
                <textarea placeholder="Your Message" className="enquiry__contact-textarea w-full mb-2 p-2 rounded bg-gray-800 text-white border border-gray-600" rows="5" {...register("message", { required: "Your message is required.", maxLength: { value: 5000, message: "Your message must be 5000 characters or fewer." } })}></textarea>
                {errors.message && <p className="text-red-400 text-xs mb-3">{errors.message.message}</p>}
                <Turnstile
                  ref={turnstileRef}
                  siteKey={process.env.REACT_APP_TURNSTILE_SITE_KEY}
                  onSuccess={(newToken) => {
                    setToken(newToken);
                    setSubmitError("");
                  }}
                  onExpire={() => {
                    setToken(null);
                    setSubmitError("Verification expired. Please try again.");
                  }}
                  onError={() => {
                    setToken(null);
                    setSubmitError("Verification failed. Please try again.");
                  }}
                  options={{
                    action: "contact-form",
                    theme: "dark",
                    size: "flexible",
                    responseField: false,
                    refreshExpired: "auto",
                  }}
                />
                {submitError && <p className="text-red-400 text-xs mb-3">{submitError}</p>}
                <input className="enquiry__contact-submit bg-transparent border-white border hover:bg-white 
          text-white hover:text-black transition duration-500 font-bold my-2 py-2 px-4 rounded h-10 disabled:bg-zinc-400" type="submit" disabled={isSubmitting || !token} value={isSubmitting ? "Sending..." : "Submit"} />
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
