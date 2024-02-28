function SmallLinks({ setMenuOpen }) {
  return (
    <div className="fixed top-0 right-0">
      <div className="flex flex-col items-center relative py-12 px-24 gap-8 backdrop-blur bg-slate-400/30 dark:bg-slate-600/30 rounded">
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-lg text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          Projects
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-lg text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          About
        </a>
        <a
          href="/Resume.pdf"
          alt="resume"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-lg text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          Contact
        </a>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-2 right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default SmallLinks;
