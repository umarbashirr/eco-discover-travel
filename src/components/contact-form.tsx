"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [values, setValues] = useState<{
    name: string;
    email: string;
    tel: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <form className="mt-4 w-full space-y-4" onSubmit={submitHandler}>
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor="name" className="font-medium text-primary ">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="p-2 border rounded  w-full"
          onChange={(e) => onChangeHandler(e)}
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="email"
            className="font-medium text-primary mb-2  capitalize"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="p-2 border rounded  w-full"
            onChange={(e) => onChangeHandler(e)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label
            htmlFor="tel"
            className="font-medium text-primary mb-2  capitalize"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="tel"
            name="tel"
            onChange={(e) => onChangeHandler(e)}
            className="p-2 border rounded  w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="subject"
          className="font-medium text-primary mb-2  capitalize"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          onChange={(e) => onChangeHandler(e)}
          className="p-2 border rounded  w-full"
          required
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="message"
          className="font-medium text-primary mb-2  capitalize"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          onChange={(e) => onChangeHandler(e)}
          className="resize-none p-2 border rounded  w-full"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-accent text-white rounded-md py-3 px-6 shadow-sm hover:bg-accent/90 transition-all duration-300 ease-in-out text-sm font-medium"
      >
        Send now
      </button>
    </form>
  );
};
