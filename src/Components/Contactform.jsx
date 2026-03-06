import React, { useState } from "react";

const ContactFormSection = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("access_key", "7cbfe8a3-83ed-4e6e-be55-0b99842a7b2f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const data = await res.json();
    if (data.success) {
      setSuccess(true);
      e.target.reset();
    } else {
      setSuccess(false);
      console.error("Error:", data);
    }
  };

  return (
    <section
      id="contact-form"
      className="relative min-h-screen bg-[#faf6ed] flex flex-col md:flex-row justify-center px-6 md:px-16 md:pt-80 pt-32 pb-20"
    >
      {/* LEFT SIDE TEXT */}
      <div className="w-full md:w-1/2 pr-10 flex flex-col justify-start">
        <p
          className="text-sm uppercase tracking-widest mb-6"
          style={{ fontFamily: "nb-thin" }}
        >
          Contact Form
        </p>

        <h1 className="text-5xl md:text-6xl font-normal leading-tight">
          Send us a message
        </h1>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="w-full md:w-1/2 mt-16 md:mt-0">
        <form
          onSubmit={handleSubmit}
          className="w-full grid grid-cols-2 gap-6"
          style={{ fontFamily: "nb-thin" }}
        >
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none uppercase"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            required
            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none uppercase"
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none uppercase"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none uppercase"
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none uppercase"
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Roastery name"
            className="w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none uppercase"
          />

          <textarea
            name="message"
            placeholder="Write your message here"
            rows="4"
            required
            className="col-span-2 w-full border-b border-gray-400 bg-transparent py-2 text-sm outline-none resize-none uppercase"
          ></textarea>

          <div className="col-span-2 flex justify-end mt-2">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full text-sm uppercase"
            >
              Send message →
            </button>
          </div>
        </form>
      </div>

      {success && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-green-600 text-sm" style={{fontFamily:'nb-thin'}}>
        
          Message sent ✅
        </p>
      )}
    </section>
  );
};

export default ContactFormSection;