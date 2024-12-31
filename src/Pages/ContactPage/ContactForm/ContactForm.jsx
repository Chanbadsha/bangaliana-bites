import React from "react";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { FaTelegramPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="pb-12">
      {/* Form */}
      <div className="card lg:max-w-5xl mx-auto md:px-12 bg-[#F3F3F3] w-full shrink-0 shadow-2xl">
        <SectionHeader
          heading="Contact Form"
          subHeading="Send Us a Message"
        ></SectionHeader>
        <form className="card-body -mt-12 md:px-16 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered focus:border-none"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered focus:border-none"
                required
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Phone</span>
            </label>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="input input-bordered focus:border-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Message</span>
            </label>
            <textarea
              placeholder="Enter your message"
              className="textarea textarea-bordered focus:outline-none"
              name="message"
              id="message"
              cols={30}
              rows={6}
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn max-w-xs  mx-auto btn-primary">
              Send Message{" "}
              <span>
                <FaTelegramPlane />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
