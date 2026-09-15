import React, { useState } from "react";
import { MdDone, MdSend } from "react-icons/md";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const data = [
    {
      title: "Name",
      value: "Praveen. M",
    },
    {
      title: "Email",
      value: "PraveenTech005@gmail.com",
    },
    {
      title: "Phone",
      value: "+91-97900 77037",
    },
  ];

  const [mailStatus, setMailStatus] = useState("Send");
  const [mail, setMail] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isSending = mailStatus === "Sending...";

  const handleMailSubmit = async () => {
    if (!mail.name || !mail.email || !mail.message)
      return toast.warning("Fill all the fields!");

    try {
      setMailStatus("Sending...");
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        mail,
        import.meta.env.VITE_EMAILJS_PUB_KEY,
      );
      setMailStatus("Sent");
      toast.success("Mail Sent Successfully");
      setTimeout(() => {
        setMailStatus("Send");
        setMail({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
      setMailStatus("Send");
    }
  };

  return (
    <section
      className="w-full flex flex-col items-center py-24 px-6 lg:px-20"
      id="contact"
    >
      {/* Header */}

      <h2 className="mont text-3xl lg:text-4xl dark:text-white text-black mb-4 text-center">
        Let's Work Together
      </h2>
      <p className="dark:text-gray-400 text-gray-500 text-center max-w-lg mb-12">
        Have a project in mind or just want to say hi? Drop me a message and
        I'll get back to you.
      </p>

      {/* Contact pills */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 text-sm dark:text-gray-300 text-gray-700"
          >
            <span className="dark:text-gray-500 text-gray-400 text-xs font-bold uppercase tracking-wide">
              {item.title}
            </span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Form */}
      <form
        className="w-full max-w-xl flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isSending) handleMailSubmit();
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-xs uppercase tracking-widest dark:text-gray-500 text-gray-400 font-bold"
            >
              Name
            </label>
            <input
              value={mail.name}
              onChange={(e) => setMail({ ...mail, name: e.target.value })}
              type="text"
              id="name"
              placeholder="Your name"
              disabled={isSending}
              className="rounded-xl border dark:border-white/10 border-black/10 dark:bg-[#0d0d0d] bg-white p-3 text-sm outline-none focus:dark:border-white/30 focus:border-black/30 transition-colors dark:text-white text-black disabled:opacity-50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-xs uppercase tracking-widest dark:text-gray-500 text-gray-400 font-bold"
            >
              Email
            </label>
            <input
              value={mail.email}
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
              type="email"
              id="email"
              placeholder="your@email.com"
              disabled={isSending}
              className="rounded-xl border dark:border-white/10 border-black/10 dark:bg-[#0d0d0d] bg-white p-3 text-sm outline-none focus:dark:border-white/30 focus:border-black/30 transition-colors dark:text-white text-black disabled:opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="message"
            className="text-xs uppercase tracking-widest dark:text-gray-500 text-gray-400 font-bold"
          >
            Message
          </label>
          <textarea
            value={mail.message}
            onChange={(e) => setMail({ ...mail, message: e.target.value })}
            id="message"
            rows={5}
            placeholder="Tell me about your project..."
            disabled={isSending}
            className="rounded-xl border dark:border-white/10 border-black/10 dark:bg-[#0d0d0d] bg-white p-3 text-sm outline-none focus:dark:border-white/30 focus:border-black/30 transition-colors resize-none dark:text-white text-black disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="self-end flex items-center gap-2 px-6 py-2.5 rounded-full dark:bg-white dark:text-black bg-black text-white text-sm font-semibold hover:opacity-80 transition-opacity cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {mailStatus === "Send" ? (
            <>
              <MdSend /> Send Message
            </>
          ) : mailStatus === "Sent" ? (
            <>
              <MdDone /> Sent!
            </>
          ) : (
            "Sending..."
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;
