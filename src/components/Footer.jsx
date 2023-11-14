import { phone, mail, instagram, logo } from "../assets/index.js";
import { Element } from "react-scroll";
import DonateDialog from "./Dialog";

export default function Footer() {
  return (
    <div>
      <Element name="contact">
        <div className="margin padding">
          <div className="bg-[url('/src/assets/darkKids.png')]  h-[430px] w-full flex items-center justify-center">
            <div className="w-[246px] ">
              <h2 className="header text-center text-white">
                Get involved. You can help.
              </h2>
              <div className="mt-12 mx-auto w-fit">
                <DonateDialog />
              </div>
            </div>
          </div>

          <div className="margin">
            <p className="lg:text-[20px] text-[16px]  font-[400] ">
              Get in touch with Rose Foundation for the Protection of Children.
            </p>
            <div className="mt-10 md:flex justify-between pb-10 border-b-2 border-b-black  ">
              <div className="lg:flex">
                <div className="flex items-center w-auto lg:w-[350px]">
                  <img src={phone} alt="Phone Image" />
                  <p className=" ml-4 font-playfair  text-[16px] lg:text-[26.39px] font-[800]">
                    Whatsapp Line - +1(520)839-3831
                  </p>
                </div>

                <div className="flex items-center lg:mt-0 mt-2  lg:ml-20">
                  <img src={mail} alt="Email Image" />
                  <p className=" ml-4 font-playfair text-[14px] lg:text-[26.39px] font-[800]">
                    contact@rosefoundationforprotection.org
                  </p>
                </div>
              </div>

              <div className="lg:mt-0 mt-2">
                <a className=" flex items-center " href="#">
                  <img
                    src={instagram}
                    alt="Instagram Image  "
                    className="duration-200 hover:scale-125"
                  />
                  <p className="lg:hidden  ml-4 font-playfair text-[14px] lg:text-[26.39px] font-[800]">
                    rose.foundation_
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="margin hidden  lg:flex justify-between items-center">
            <img src={logo} />
            <div className="w-[580px] flex justify-around">
              <a
                href="#"
                className="text-[20px] duration-200 hover:text-myRed font-[400] "
              >
                What We Do
              </a>
              <a
                href="#"
                className="text-[20px] duration-200 hover:text-myRed font-[400] "
              >
                Our Stories
              </a>
              <a
                href="#"
                className="text-[20px] duration-200 hover:text-myRed font-[400] "
              >
                Meet the Humans
              </a>
              <a
                href="#"
                className="text-[20px] duration-200 hover:text-myRed font-[400] "
              >
                Contact
              </a>
            </div>
            <div>
              <DonateDialog />
            </div>
          </div>

          <div className="mt-16 hidden lg:block">
            {/* <p className='text-[16px]  font-[400]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper a risus gravida lorem sed ac pellentesque tincidunt.
              Tincidunt lacus pellentesque pellentesque eu. Vivamus lacus dui
              non elementum cursus. Vitae felis eleifend pharetra, ullamcorper
              eget quis egestas. Elementum elementum at mattis.
            </p> */}
          </div>

          <p className="text-[16px] mt-16 pb-20 font-[400] text-center">
            (c) 2023 Rose Foundation for the Protection of Children. All Rights
            Reserved.
          </p>
        </div>
      </Element>
    </div>
  );
}
