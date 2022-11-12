import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat,
            nulla?
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              key={link.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium font-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((item, idx) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite transition ease-in-out duration-300 hover:text-secondary cursor-pointer ${
                      idx !== link.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-norman text-center font-[18px] leading-[27px] text-white">
          2022 HooBank. All rights reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, idx) => (
            <img
              key={social.id}
              src={social.icon}
              className={`w-[21px] h-[21px] object-contain cursor-pointer transition ease-in-out duration-300 hover:ease-in hover:scale-[2] ${
                idx !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
