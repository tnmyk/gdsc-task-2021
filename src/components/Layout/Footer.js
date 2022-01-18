const Footer = () => {
  return (
    <footer
      className="w-10/12 sm:w-9/12 md:w-9/12 lg:w-7/12 mt-20  mx-auto flex p-6
      justify-between"
      style={{ borderTop: "1px solid #737373" }}
    >
      <div>
        Submitted by{" "}
        <span className="font-semibold block md:inline">Tanmay Kachroo</span>
      </div>
      <div className="flex flex-col md:flex-row gap-x-8">
        <a href="https://tnmy.vercel.app/" target="_blank" rel="noreferrer">
          Portfolio
        </a>
        <a href="https://github.com/tnmyk" target="_blank" rel="noreferrer">
          Github
        </a>
        <a
          href="https://github.com/tnmyk/gdsc-web-team-task"
          target="_blank"
          rel="noreferrer"
        >
          Task Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
