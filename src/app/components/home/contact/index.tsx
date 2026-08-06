"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { contactLinks } from "@/data/page-data";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    childInfo: "",
    message: "",
  });

  const reset = () => {
    setFormData({ name: "", number: "", email: "", childInfo: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://formsubmit.co/ajax/ginny.dembek@gmail.com", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        number: formData.number,
        email: formData.email,
        childInfo: formData.childInfo,
        message: formData.message,
        _subject: "Consultation inquiry: Ginny Dembek Ph.D.",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-ink mb-4">Contact</h2>
            <p className="mb-8">
              The first consultation is free. Share a brief description of your child, school, or organization and whether you are seeking tutoring or consulting. Tutoring is in person in Brooklyn; consulting is available across NYC and surrounding areas, including virtual appointments.
            </p>
            <div className="flex flex-col gap-3">
              {contactLinks.contactInfo.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  className="text-ink hover:text-primary text-base md:text-lg"
                >
                  {item.label}
                </Link>
              ))}
              {contactLinks.socialLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-secondary hover:text-primary text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="label">
                  Your name *
                </label>
                <input
                  required
                  className="input"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="number" className="label">
                  Phone
                </label>
                <input
                  className="input"
                  id="number"
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email *
              </label>
              <input
                required
                className="input"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="childInfo" className="label">
                Child&apos;s age / grade, or organization (optional)
              </label>
              <input
                className="input"
                id="childInfo"
                name="childInfo"
                value={formData.childInfo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message" className="label">
                What support are you looking for? *
              </label>
              <textarea
                required
                className="input"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
              />
            </div>
            {submitted && (
              <div className="flex items-center gap-2">
                <Image
                  src="/images/icon/success-icon.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-primary m-0 text-base">
                  Thank you. Your message has been sent.
                </p>
              </div>
            )}
            <button type="submit" className="btn-primary w-fit cursor-pointer border-0">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
