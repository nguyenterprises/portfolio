import { GoHeartFill } from "react-icons/go";

function Footer() {
  return (
    <div className="flex items-center justify-center w-full py-16">
      <h3 className="flex items-center gap-2 text-sm">
        Made with{" "}
        <span className="text-red-600 text-lg animate-pulse">
          <GoHeartFill />
        </span>{" "}
        by Hanh Nguyen
      </h3>
    </div>
  );
}

export default Footer;
