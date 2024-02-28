import Link from "next/link";

function Links() {
  return (
    <div className="hidden sm:flex items-center gap-3">
      <Link
        href="#projects"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        Projects
      </Link>
      <Link
        href="#about"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        About
      </Link>
      <a
        href="/Resume.pdf"
        alt="resume"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        Resume
      </a>
      <Link
        href="#contact"
        className="text-xs text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
      >
        Contact
      </Link>
    </div>
  );
}

export default Links;
