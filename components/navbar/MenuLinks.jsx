
function Links() {
  return (
    <div className="hidden sm:flex items-center gap-3">
      <a
        href="#projects"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        Projects
      </a>
      <a
        href="#about"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        About
      </a>
      <a
        href="/Resume.pdf"
        alt="resume"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        Resume
      </a>
      <a
        href="#contact"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        Contact
      </a>
    </div>
  );
}

export default Links;
