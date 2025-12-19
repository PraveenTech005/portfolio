import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import NavBar from "./components/NavBar";
import { SiGmail } from "react-icons/si";
import { LuChevronDown, LuChevronUp, LuDownload } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";
import SkillCard from "./components/SkillCard";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdClose, MdDone, MdSend } from "react-icons/md";
import ProjectModal from "./components/ProjectModal";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

const Classic = () => {
  const resumeRef = useRef();

  const about = [
    {
      title: "Name",
      ans: "Praveen. M",
    },
    {
      title: "Role",
      ans: "Full Stack Web Developer",
    },
    {
      title: "Location",
      ans: "Tuticorin, TamilNadu, India",
    },
    {
      title: "Email",
      ans: "PraveenTech005@gmail.com",
    },
    {
      title: "Phone",
      ans: "+91-97900 77037",
    },
  ];

  const skills = [
    {
      title: "FrontEnd",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "Framer",
      ],
      color: 0,
    },
    {
      title: "BackEnd",
      skills: ["Node JS", "Express JS", "MongoDB", "JWT"],
      color: 1,
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Figma", "Illustrator"],
      color: 2,
    },
  ];

  const extra = [
    {
      title: "Programming Languages",
      skills: ["C", "Java", "Python", "Embedded C", "Micro Python", "Dart"],
      color: 3,
    },
    {
      title: "Internet of Things",
      skills: ["Arduino", "NodeMCU (ESP32/ESP8266)", "Raspberry Pi"],
      color: 4,
    },
    {
      title: "App Development",
      skills: ["Flutter", "React Native"],
      color: 5,
    },
  ];

  const project = [
    {
      title: "Pixelog",
      description:
        "Pixelog is a professional portfolio website I developed for a client running a creative agency specializing in advertising and digital services. The site showcases their core offerings, including digital marketing, web development, branding, and design. Built with a focus on clean visuals and smooth navigation, the website helps establish the agency's online presence while reflecting their creative identity. This project allowed me to collaborate closely with the client to understand their vision and translate it into a responsive and visually compelling web experience.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/projects/pixelog.png",
      date: "Dec 2025",
      live: "https://pixelog.in",
      url: "https://github.com/PraveenTech005/Pixelog",
    },
    {
      title: "Pacman Typing",
      description:
        "A fast-paced real-time typing game inspired by Pacman — featuring wave-based challenges, live player stats, and a dynamic leaderboard.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/projects/pacman.png",
      date: "Oct 2025",
      live: "https://pacman-typing.vercel.app/",
      url: "https://github.com/PraveenTech005/pacman",
    },
    {
      title: "Login-Signup",
      description:
        "A simple authentication system built with the MERN stack (MongoDB, Express, React, Node.js).This app demonstrates signup, login, JWT authentication, and protected routes with a minimal and beginner-friendly approach.",
      type: "Client Project / Web Portfolio",
      var: 0,
      image: "/projects/login-signup.png",
      date: "Aug 2025",
      live: "https://login-signup-praveen.vercel.app/",
      url: "https://github.com/PraveenTech005/login-signup",
    },
    {
      title: "OLMS",
      description:
        "OLMS was my first attempt at building a full-stack web application during my internship. The goal was to create an online platform where students could access courses, track progress, and interact with instructors. I worked on both frontend and backend development, gaining hands-on experience with user authentication, course management, and database integration. Although the project was only partially completed, it gave me a solid foundation in full-stack development and team collaboration.",
      type: "Full Stack Web App",
      var: 0,
      image: "/projects/olms.png",
      date: "July 2025",
      url: "https://github.com/PraveenTech005/OLMS",
    },
    {
      title: "Custom bot",
      description:
        "Custombot is an AI chatbot that dynamically adapts to any website's content. By inputting a site URL, the bot scrapes the site's data and uses it as the knowledge base to answer user questions contextually. It leverages the language model via the Groq API to provide fast, accurate, and relevant responses. This project showcases my ability to integrate real-time web scraping, natural language processing, and third-party AI APIs to build intelligent user-facing tools.",
      type: "AI / Web App",
      var: 1,
      image: "/projects/chat.png",
      date: "June 2025",
      url: "https://github.com/PraveenTech005/Custombot",
    },
    {
      title: "BG-Styles",
      description:
        "BG-styles is a simple, lightweight project featuring a collection of reusable background design templates built for HTML and CSS. It provides a visual gallery of styled cards showcasing different background patterns and effects. When a user clicks on any card, a pop-up displays the corresponding HTML, CSS, and container code—ready to copy and paste into their own UI. This project was aimed at speeding up UI development by offering quick access to aesthetic, copyable background snippets.",
      type: "Frontend Utility / UI Tool",
      var: 0,
      image: "/projects/bg-styles.png",
      date: "June 2025",
      live: "https://bg-styles.vercel.app",
      url: "https://github.com/PraveenTech005/bg-styles",
    },
    {
      title: "Taskify",
      description:
        "Taskify is a mobile application I developed during my internship using Flutter. The app allows users to create, organize, and manage their daily tasks efficiently through a clean and user-friendly interface. Key features include task creation, status tracking, and task categorization. This project helped me strengthen my understanding of mobile app development, Flutter widgets, and state management, while also applying practical design principles to enhance the user experience.",
      type: "Mobile App",
      var: 2,
      image: "/projects/taskify.png",
      date: "March 2025",
      url: "https://github.com/PraveenTech005/Taskify",
    },
    {
      title: "KrishnaMines",
      description:
        "KrishnaMines was my first real-world web development project, where I was given the opportunity to build the frontend of a corporate website through a referral from my Head of Department. The site was developed to represent the company's profile, services, and contact information with a clean and structured layout. This project marked my entry into practical frontend development, helping me understand the importance of responsive design, real client requirements, and production-ready code.",
      type: "Frontend Web Project",
      var: 0,
      image: "/projects/krishnamines.png",
      date: "October 2024",
      live: "http://krishnamines.com",
      url: "https://github.com/PraveenTech005/KrishnaMines",
    },
    {
      title: "NM-SWMS",
      description:
        "NM-SWMS is an IoT-based Smart Waste Management System developed as part of the Naan Mudhalvan initiative. Using Wokwi for simulation, I created a virtual environment where sensors monitor the fill level of waste bins. The sensor data is updated in real-time to the ThingSpeak IoT platform, enabling live monitoring and analytics. I also built a React-based web dashboard to visually display the sensor readings, helping users track waste levels and optimize collection schedules. This project combines IoT, real-time data communication, and frontend development to offer a scalable smart city solution.",
      type: "IoT Project / Web Dashboard",
      var: 3,
      image: "/projects/nm-swms.png",
      date: "May 2024",
      url: "https://github.com/PraveenTech005/NM-SWMS",
    },
    {
      title: "An IoT Based Wifi Connected Car-Controlling System",
      description:
        "This project was developed as my final-year diploma (D.EEE) project, combining IoT and health monitoring for intelligent vehicle control and emergency response. The system is a Wi-Fi-controlled smart car prototype equipped with health sensors to monitor the passenger's heart rate via a wristband. When the BPM drops below a threshold (e.g., indicating a possible stroke), the system automatically captures the live location using an A9G development board and sends alerts via SMS to pre-configured contacts such as relatives and nearby hospitals.",
      type: "IoT / Embedded System Project",
      var: 3,
      image: "/projects/WiFi-car.jpg",
      date: "April 2023",
      pdf: "projects/WiFi-car.pdf",
    },
  ];

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

  const handleMailSubmit = async () => {
    if (!mail.name || !mail.email || !mail.message)
      return toast.warning("Fill all the fields!");

    try {
      setMailStatus("Sending...");
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        mail,
        import.meta.env.VITE_EMAILJS_PUB_KEY
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
    }
  };

  const [projectShow, setProjectShow] = useState(4);
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    const disableScroll = () => {
      if (showModal) document.documentElement.style.overflow = "hidden";
      else document.documentElement.style.overflow = "auto";
    };

    disableScroll();
  }, [showModal]);

  return (
    <div className="w-full text-white text-sm bg-black">
      <ToastContainer />
      <NavBar />
      <section
        className="w-full h-svh bg-[url('/bgc.jpg')] bg-center bg-cover bg-no-repeat flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-30 space-y-20 lg:space-y-0"
        id="home"
      >
        <div className="w-10/12 lg:w-5/12 text-center space-y-8 mt-30">
          <div>
            <h3 className="w-4/12 lg:w-7/12">Hello 👋</h3>
            <h1 className="text-xl">
              I'm <span className="mont text-4xl">PRAVEEN</span>
            </h1>
          </div>
          <h3 className="mont text-lg">Full-Stack Web Developer (MERN)</h3>
          <p>
            Passionate about creating beautiful, functional websites and
            applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-row w-5/12 justify-between items-center mx-auto">
            <a href="https://github.com/PraveenTech005" target="_blank">
              <FaGithub size={25} />
            </a>
            <a href="https://linkedin.com/in/Praveentech005" target="_blank">
              <FaLinkedin size={25} />
            </a>
            <a href="mailto:PraveenTech005@gmail.com" target="_blank">
              <SiGmail size={25} />
            </a>
          </div>
          <div className="w-full flex justify-center mx-auto space-x-5">
            <a href="#projects" className="w-5/12 lg:w-3/12 cursor-pointer">
              <button className="p-2 border-2 border-white/30 rounded-lg w-full cursor-pointer">
                View Projects{" "}
              </button>
            </a>
            <a
              href="/Praveen.pdf"
              download
              className="hidden"
              ref={resumeRef}
            ></a>
            <button
              className="w-5/12 lg:w-3/12 p-2 border-2 border-white/30 rounded-lg flex justify-evenly items-center cursor-pointer bg-white text-black mont"
              onClick={() => {
                resumeRef.current.click();
              }}
            >
              <LuDownload />
              Resume
            </button>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col" id="about">
        <div className="p-10 space-y-5">
          <h1 className="mont text-2xl">About Me</h1>
          <p>Bringing ideas to life through clean code and creative design</p>
        </div>
        <div className="flex flex-1 flex-col lg:flex-row justify-evenly items-center p-5 space-y-10 lg:space-y-0">
          <div className="bg-white/10 p-5 w-full lg:w-3/12 space-y-5 rounded-xl border-2 border-white/10">
            <img
              src="/Praveen.jpg"
              alt="Praveen"
              className="w-8/12 mx-auto rounded-2xl border-2 border-black "
            />
            <div className="space-y-2 mx-auto w-10/12 lg:w-full">
              {about.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="w-3/12">{item.title}</p>:
                  <p className="w-8/12">{item.ans}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 p-8 w-full lg:w-5/12 space-y-5 indent-5 rounded-xl border-2 border-white/10">
            <p>
              Hi! I'm Praveen, a passionate{" "}
              <span className="mont">Full Stack Web Developer</span> based in
              India 🇮🇳.
            </p>
            <p>
              With a strong foundation in both frontend and backend development,
              I build fast, responsive, and scalable web applications.
            </p>
            <p>
              I specialize in the{" "}
              <span className="mont">
                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </span>{" "}
              and love working with modern tools like{" "}
              <span className="mont">Tailwind CSS</span> and{" "}
              <span className="mont">Vite</span> for high-performance apps. From
              crafting sleek React interfaces to building robust backend APIs, I
              enjoy turning ideas into real-world solutions through clean and
              efficient code.
            </p>
            <p>
              I'm a self-learner, tech enthusiast, and always exploring new
              tools and best practices to stay up-to-date in the ever-evolving
              dev world.
            </p>
            <div className="w-full lg:w-10/12 mx-auto text-xs grid grid-cols-3 lg:grid-cols-3 gap-2 indent-0">
              {[
                "React",
                "Node JS",
                "Express JS",
                "MondoDB",
                "Vite",
                "TailwindCSS",
              ].map((item, index) => (
                <h3
                  key={index}
                  className="bg-[#303030] p-2 px-3 rounded-full text-center border border-[#303030] hover:border-[#00ffff] hover:shadow-lg hover:bg-[#151515] cursor-pointer trans flex flex-row justify-center items-center"
                >
                  {item}
                </h3>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-screen flex flex-col" id="skills">
        <div className="p-10 space-y-5">
          <h1 className="mont text-2xl">Skills</h1>
          <p>The tools and technologies I use to bring ideas to life</p>
        </div>
        <SkillCard content={skills} />
        <h1 className="p-5 pl-10">I Also Know</h1>
        <SkillCard content={extra} />
      </section>
      <section className="w-full min-h-screen flex flex-col p-10" id="projects">
        <div className="space-y-5">
          <h1 className="mont text-2xl">Projects</h1>
          <p>A showcase of my recent work and creative solutions</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-10">
          {project.slice(0, projectShow).map((item, index) => (
            <div
              key={index}
              className="border border-[#555]  w-full mx-auto rounded-xl p-3 space-y-3 flex flex-col bg-[#121212] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-46 lg:h-36 rounded-md"
              />
              <div className="space-y-1">
                <h1 className="text-lg mont">{item.title}</h1>
                <p className="text-[10px] text-[#aaa] font-bold">{item.date}</p>
              </div>
              <p className="line-clamp-4 px-2 leading-5 text-xs text-justify">
                {item.description}
              </p>
              <div className="flex-1 flex flex-col justify-between space-y-3 ">
                <p
                  className={`${
                    item.var === 0
                      ? "text-blue-600"
                      : item.var === 1
                      ? "text-red-700"
                      : item.var === 2
                      ? "text-green-700"
                      : "text-yellow-700"
                  } text-[10px] font-bold flex flex-row space-x-2 bg-white items-center border rounded-full p-0.5 px-2 mr-auto`}
                >
                  <AiOutlineSwapRight size={15} />
                  <span>{item.type}</span>
                </p>
                {item.live && (
                  <p className="exc">
                    Live at{" "}
                    <a
                      href={item.live}
                      className="text-[#00ffff]"
                      target="_blank"
                    >
                      {item.live}
                    </a>
                  </p>
                )}
                <div className="flex flex-row justify-evenly items-center">
                  <button
                    onClick={() => {
                      setModalProject(item);
                      setShowModal(true);
                    }}
                    className="b2 flex flex-row justify-center items-center space-x-2 p-2 px-5 bg-white/5 hover:bg-white/10 rounded-lg border-2 border-white/10 cursor-pointer"
                  >
                    <span>View</span> <FaArrowRight />
                  </button>
                  {item.url && (
                    <button className="border p-2 rounded-lg">
                      <a
                        href={item.url}
                        target="_blank"
                        className="line-clamp-1 flex flex-row justify-center items-center space-x-2 font-bold"
                      >
                        <FaGithub size={20} />
                        <span>Github Repo</span>
                      </a>
                    </button>
                  )}
                  {item.pdf && (
                    <button className="border p-2 rounded-lg">
                      <a
                        href={item.pdf}
                        download
                        className="line-clamp-1 flex flex-row justify-center items-center space-x-2 font-bold"
                      >
                        <LuDownload size={15} />
                        <span>Download</span>
                      </a>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {projectShow < project.length ? (
          <button
            className="flex justify-evenly items-center space-x-2 mx-auto b2 mt-10 p-2 bg-white/10 rounded-lg border-2 border-white/10 cursor-pointer"
            onClick={() => setProjectShow(project.length)}
          >
            <span>Show More</span> <LuChevronDown />
          </button>
        ) : (
          <button
            className="flex justify-evenly items-center space-x-2 mx-auto b2 mt-10 p-2 bg-white/10 rounded-lg border-2 border-white/10 cursor-pointer"
            onClick={() => setProjectShow(4)}
          >
            <span>Show Less</span> <LuChevronUp />
          </button>
        )}
        {showModal && (
          <div className="top-0 left-0 w-full h-screen fixed z-20 flex flex-row justify-center items-center">
            <div
              className="absolute top-0 left-0 w-full h-screen bg-[#000000ca]"
              onClick={() => setShowModal(false)}
            >
              <p className="absolute top-5 right-5 bg-black rounded-full p-2 border cursor-pointer">
                <MdClose size={25} />
              </p>
            </div>
            <ProjectModal item={modalProject} />
          </div>
        )}
      </section>
      <section className="w-full min-h-screen flex flex-col p-10" id="contact">
        <div className="space-y-5">
          <h1 className="mont text-2xl">Contact</h1>
          <p>
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-evenly items-center lg:flex-row space-y-10 lg:space-y-0 mt-10 lg:mt-0">
          <div className="w-full lg:w-1/3 flex flex-col justify-evenly space-y-5">
            <h1 className="text-lg mont">Let's talk how I can help you!</h1>
            <h3 className="px-5">
              If you like my work and want to avail my services then drop me a
              message using the contact form.
            </h3>
            <h3 className="px-5">
              Or get in touch using my email or my contact number.
            </h3>
            <div className="w-10/12 flex flex-col space-y-2 mx-auto">
              {data.map((item, index) => (
                <div key={index} className="flex flex-row justify-evenly">
                  <h1 className="w-3/12">{item.title}</h1> <h1>:</h1>
                  <p className="w-8/12">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col justify-evenly items-center">
            <form
              className="border-2 border-white/10 w-full lg:w-10/12 space-y-2 p-3 rounded-xl bg-white/10"
              onSubmit={(e) => {
                e.preventDefault();
                handleMailSubmit();
              }}
            >
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">Name</label>
                <input
                  value={mail.name}
                  onChange={(e) => setMail({ ...mail, name: e.target.value })}
                  type="text"
                  id="name"
                  className="border rounded-md p-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">Email</label>
                <input
                  value={mail.email}
                  onChange={(e) => setMail({ ...mail, email: e.target.value })}
                  type="email"
                  id="email"
                  className="border rounded-md p-2"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message">Message</label>
                <textarea
                  value={mail.message}
                  onChange={(e) =>
                    setMail({ ...mail, message: e.target.value })
                  }
                  name="message"
                  id="message"
                  rows={5}
                  className="border rounded-md p-2"
                ></textarea>
              </div>
              <button className="w-6/12 mx-auto flex flex-row justify-center items-center PoppinsB b2 space-x-2 bg-white/10 p-2 rounded-lg border-2 border-white/10 cursor-pointer">
                <p>{mailStatus}</p>{" "}
                {mailStatus === "Send" ? (
                  <MdSend />
                ) : mailStatus === "Sent" ? (
                  <MdDone />
                ) : (
                  ""
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="text-xs text-center p-2 bg-white/10">
        © 2025 Praveen M. All rights reserved. Designed & Developed by{" "}
        <a
          href="https://github.com/praveentech005"
          className="text-cyan-600 mont"
        >
          Praveen
        </a>
        .
      </div>
    </div>
  );
};

export default Classic;
