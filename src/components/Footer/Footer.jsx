import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export default function Footer() {
  return (
    <div className="bg-black mx-auto text-[#A1A1AA]">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-evenly gap-5 items-start py-9 border-b-2 border-b-[#A1A1AA]">
        <div className="logo_area w-full lg:w-[25%]">
          <h1 className="text-3xl font-bold text-white">CS — Ticket System</h1>
          <p className="text-xl justify-around ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="">
          <h1 className="font-bold text-2xl text-white">Company</h1>
          <ul className="text-xl mt-5 flex flex-col justify-center items-start gap-3">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-bold text-2xl text-white">Services</h1>
          <ul className="text-xl mt-5 flex flex-col justify-center items-start gap-3">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-white font-bold text-3xl">Information</h1>
          <ul className="text-xl mt-5 flex flex-col justify-center items-start gap-3">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
        
        <div className="social_icon w-full lg:w-[20%]">
            <h1 className="font-bold text-2xl text-white">Social Links</h1>
            <ul className="text-xl mt-5 flex flex-col justify-center items-start gap-3">
            <li><FontAwesomeIcon icon={faTwitter} size="md"  className="pr-3"/>@CS — Ticket System</li>
            <li><FontAwesomeIcon icon={faLinkedin} size="md" className="pr-3" />@CS — Ticket System</li>
            <li><FontAwesomeIcon icon={faSquareFacebook} size="md" className="pr-3" />@CS — Ticket System</li>
            <li><FontAwesomeIcon icon={faEnvelope} size="md" className="pr-3" />support@cst.com</li>
          </ul>
        </div>
      </div>
      <div className="copy_write_area flex justify-center items-center py-5">
        <p>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </div>
  );
}
