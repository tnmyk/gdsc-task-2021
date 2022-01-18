const Footer = () => {
  return (
    <footer
      className="w-7/12  mt-20  mx-auto flex p-6
      justify-between"
      style={{ borderTop: "1px solid #737373" }}
    >
      <div >
        Submitted by <span className="font-semibold">Tanmay Kachroo</span>
      </div>
      <div className="flex gap-x-8">
        <a href="/">Portfolio</a>
        <a href="/">Github</a>
        <a href="/">Task Github</a>
      </div>
    </footer>
  );
};

export default Footer;
