export default function MenuIcon() {
  return (
    <button className="ring-1 hover:ring-sky-500/50 hover:bg-sky-100 dark:hover:bg-sky-700/50 rounded-lg p-2 transition duration-700 ease-out">
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  );
}
