import React, { useState } from "react";

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setMessage("Invalid email address");
      return;
    }

    try {
      const response = await fetch("http://34.225.132.160:8002/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setMessage("Incorrect Email");
      } else if (response.status === 200) {
        setMessage("Form Submitted");
      } else {
        setMessage("An error occurred");
      }
    } catch (error) {
      setMessage("An error occurred");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="shadow appearance-none border rounded w-full sm:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 sm:mb-0 sm:mr-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Contact Me
        </button>
      </div>
      {message && <p className="text-red-500 text-xs italic">{message}</p>}
    </form>
  );
};

export default FormComponent;
