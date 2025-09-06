import Link from "next/link";

const navItems = [
  {
    href: "/", label: "Home", icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M3 10L10 3l7 7" /><path d="M4 10v7h12v-7" /></svg>
    )
  },
  {
    href: "/experience", label: "Experience", icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    )
  },
  {
    href: "/blogs", label: "Blog", icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="8" /><path d="M6 10h8" /></svg>
    )
  },
  {
    href: "/designs", label: "Designs", icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor"><rect x="4" y="4" width="12" height="12" rx="2" /></svg>
    )
  },
  {
    href: "/works", label: "Works", icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor"><path d="M4 7V5a2 2 0 012-2h8a2 2 0 012 2v2" /><rect x="4" y="7" width="12" height="10" rx="2" /></svg>
    )
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex space-x-6 bg-[#181818] bg-opacity-95 rounded-2xl shadow-lg border border-[#232323] px-6 py-2">
        {navItems.map((item) => (
          <li key={item.label} className="group relative">
            <Link href={item.href} className="text-white hover:text-orange-400 p-2 flex flex-col items-center">
              {item.icon}
              <span className="absolute left-1/2 -translate-x-1/2 mt-8 opacity-0 group-hover:opacity-100 bg-gray-800 text-xs rounded px-2 py-1 transition whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 