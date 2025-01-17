import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="py-2 lg:py-4 container mx-auto">
      {/* Mobile responsive */}
      <div className="flex sm:hidden flex-col justify-between p-2">
        <div className="flex items-center">
          {/* Logo */}
          <Logo />
        </div>

        <SearchBar />
      </div>
      {/* Desktop responsive */}

      <div className="sm:flex hidden justify-between items-center">
        {/* Logo */}
        <Logo />

        <SearchBar />
      </div>
    </header>
  );
}
