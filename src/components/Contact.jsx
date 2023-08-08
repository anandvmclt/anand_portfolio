import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact_container">
        <h2 className={`text-[#141824] flex justify-center font-poppins font-semibold text-4xl py-10`}>
        CONTACT ME
      </h2>
        <div className="_contact_row flex justify-between flex-wrap">
        <div className="_contact_right">
            <form action="">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
            </form>

            <button type="submit">Submit</button>
          </div>
          <div className="_contact_left mt-4">
            <div className="flex flex-col justify-between text-[#141824]">
              <p>
                {" "}
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-[26px] bg-[#141824] py-[7px] px-[9px] rounded-[6px] text-[#F0F0F0]"
                />{" "}
                rishin@gmail.com
              </p>
              <p className="mt-8">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[26px] bg-[#141824] py-[7px] px-[9px] rounded-[6px] text-[#F0F0F0]"
                />{" "}
                456684651635
              </p>
              <p className="mt-8">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[26px] bg-[#141824] py-[7px] px-[12px] rounded-[6px] text-[#F0F0F0]"
                />{" "}
                18/505H, VASS ARCADE, P.O. Mayanad, Calicut-8 Kerala, IN
              </p>
            </div>
            <div className="social_icons mt-12 ">
              <a href="#" className="mr-2">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="" className="mr-2 social_icons">
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className="mr-3">
                {" "}
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="" className="mr-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="" className="mr-2">
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
