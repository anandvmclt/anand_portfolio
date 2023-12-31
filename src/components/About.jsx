import styles, { layout } from "../style";
import { about_img } from "../assets";
const About = () => (
  <section id="about" className={`${layout.sectionReverse} my-[30px]`}>
    
    <div className={`${layout.sectionImgReverse}`}>
      <img
        src={about_img}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5] rounded-[12px]"
      />
    </div>
    <div className={layout.sectionInfo}>
      {/* <div className="absolute z-[0] w-[60%] h-[60%] right-[50%] rounded-full blue__gradient" /> */}
      <h2
        id=""
        className={`text-[#141824] font-Montserrat font-semibold text-4xl`}
      >
        ABOUT
      </h2>
      <p className={`${styles.paragraph} max-w-[540px] mt-5 text-[#141824]`}>
        As a seasoned IT consultant, I specialize in providing expert guidance
        on startup MVP development, budget planning for app
        development,Python,Data Engineering & ERP consulting and cloud
        solutions. My services also include technology implementation consulting
        and leveraging technology to solve complex organizational problems. My
        goal is to help businesses achieve their objectives by utilizing
        cutting-edge tools and strategies to optimize their technology solutions
      </p>
      <a
        href="https://calendly.com/vasssystems/free-consultation?month=2023-08"
        target="_blank"
        className="main_btn mt-5"
      >
        Get Free Consultation
      </a>

      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" /> */}
    </div>
    
  </section>
);

export default About;
