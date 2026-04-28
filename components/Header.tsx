import { NavCenter } from "./NavCenter";

const Header = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50 
        px-4 sm:px-6 
        py-4 sm:py-8 
        bg-[#00171F] 
        text-[#FFFFFF]
      "
    >
      <div className="flex justify-center">
        <NavCenter />
      </div>
    </header>
  );
};

export default Header;