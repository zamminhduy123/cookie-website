import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-strawberry text-center text-crimson py-10">
      {/* Social Icons */}
      <div className="flex justify-center gap-4 text-2xl text-crimson mb-6">
        <FaFacebookF />
        <FaInstagram />
        <FaTiktok />
        <FaXTwitter />
        <FaYoutube />
        <FaLinkedinIn />
        <FaPinterestP />
      </div>

      {/* Brand Name */}
      <div className="text-[48px] apple-peach uppercase font-extrabold font-sans lowercase mb-4 tracking-tight">
        lowkie
      </div>

      {/* Legal Info */}
      <p className="text-sm text-crimson">
        © 2025 all rights reserved. <br />
        <a href="#" className="underline">
          Privacy policy
        </a>
        <br />
        <a href="#" className="underline">
          Terms and Conditions
        </a>
        <br />
        <a href="#" className="underline">
          Non-edible Cookie Preferences
        </a>
      </p>

      {/* CTA Button */}
      <div className="mt-6 px-4">
        <button className="bg-crimson text-white font-semibold py-3 px-6 rounded-full w-full max-w-sm mx-auto hover:scale-105 transition">
          Order Now
        </button>
      </div>
    </footer>
  );
}