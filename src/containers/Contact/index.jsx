import React, { useState } from "react";
import { Button } from 'antd';
import qrCode from '../../utils/img/Whatsapp-QR.jpeg';


const EnquiryPage = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('nhat.eric.nguyen@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 5000);
  };

  return (
    <div className="enquiry-page bg-black p-10 pb-16 pt-24 font-mono" id="enquiry">
      <h1 className="enquiry__title text-white font-mono italic text-3xl pl-24">Start your project</h1>
      <p className="enquiry__description text-white text-lg mt-4 pl-24">
        Have a project in mind? Let's discuss how I can help bring your ideas to life.
      </p>
      <div className="enquiry__contact-info mt-6 text-white grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="enquiry__contact-form m-3 border-2 border-gray-600 md:p-6 rounded-lg bg-purple-800 bg-opacity-20">
          <p className="enquiry__contact-form-placeholder text-white text-2xl font-bold">Share Your Vision</p>
          <input type="text" placeholder="Your Name" className="enquiry__contact-input w-full mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600" />
          <input type="email" placeholder="Your Email" className="enquiry__contact-input w-full mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600" />
          <textarea placeholder="Your Message" className="enquiry__contact-textarea w-full mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600" rows="5"></textarea>
          <Button className="enquiry__contact-submit bg-transparent border-white border hover:bg-white 
          text-white hover:text-black transition duration-500 font-bold py-2 px-4 rounded h-10 disabled:bg-zinc-400" disabled>
            Send Message
          </Button>
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