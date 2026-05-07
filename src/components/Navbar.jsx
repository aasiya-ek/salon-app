import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-slate-500 text-white w-full h-20 ">
      <div className="">Logo</div>
      <div className="flex justify-end gap-20">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/booking">Booking</Link>
      </div>
    </div>
  );
};

export default Navbar;
