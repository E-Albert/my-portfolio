import { useState } from "react"


const Navbar = ({ darkMode, toggleDarkMode }) => {
  
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightolor = {
    navBg: 'bg-linear-to-br from orange-200 to-white',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-800',
    textHover: 'text-orange-500',
    textActive: 'text-orange-600',
    indicator: 'from-orange-500 to-amber-500',
    button: 'from-orange-500 to amber-500',
  };

  const darkColors = {
    navBg: "bg-linear-to-br from gray-700 to-black",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-orange-400",
    textActive: "text-orange-400",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to amber-500",
  };
  return (
    <div>Navbar</div>
  )
}

export default Navbar 