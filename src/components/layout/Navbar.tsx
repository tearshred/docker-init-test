const Navbar = () => {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#173b61] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Home Link - Left */}
          <a
            href="/"
            className="text-4xl  hover:text-indigo-300 transition-colors flex-shrink-0"
          >
            <p className="font-[Bebas_Neue]">Voljim</p>
          </a>

          {/* Desktop Links - Right */}
          <div className="md:flex space-x-4 font-body">
            {navLinks.map((link) => (
              <a
                href="#"
                key={link.path}
                // to={link.path}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button (optional - add later) */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
