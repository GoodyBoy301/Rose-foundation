import { Link } from "react-router-dom";
import {
  circleLine,
  arrow,
  heroImg,
  shieldImg,
  handImg,
  capImg,
  cancelImg,
  kids,
  zigzagLine,
  curvyLine,
  profile,
  arrowLeft,
  roundLine,
  pic1,
  pic2,
  pic3,
} from "../assets/index";
import { Element } from "react-scroll";
import DonateDialog from "./Dialog";

export default function Home() {
  return (
    <div>
      <Element name="whatWeDo">
        <section className="hero">
          <div className=" lg:px-0 px-6 lg:pl-32 lg:mt-32">
            <div className="w-auto md:w-[490px] relative">
              <h2 className=" mt-10 lg:mt-0 text-[29.07px] lg:text-[59.87px] font-playfair font-[800] ">
                Rose Foundation for the Protection of Children.
                <img
                  src={circleLine}
                  className=" hidden lg:scale-100 scale-50 right-10 -top-2 absolute lg:-right-4 lg:top-28"
                  alt="Line"
                />
              </h2>
            </div>
            <p className=" w-auto lg:px-6 lg:w-[440px] mt-4 lg:mt-10 text-[16px]  lg:text-[20px] font-[400]">
              We are a Non-Governmental Organization for Children founded by
              Ja’Marr who loves extending kindness to whomever he can.
            </p>

            <div className="mt-16 flex">
              <DonateDialog />
              <button className=" text-[16px] lg:text-[20px]  ml-20">
                Explore
                <img src={arrow} alt="arrow" className=" inline-block ml-4 " />
              </button>
            </div>
          </div>

          <div className="lg:w-[758px] lg:mt-[60px] bg-myDarkRed lg:bg-red-400 ">
            <img src={heroImg} className="lg:w-auto w-[294.61px]" alt="hero" />
          </div>
        </section>
      </Element>

      <section className="padding margin grid grid-cols-2 lg:grid-cols-3 gap-8">
        <div className=" w-auto lg:w-[263px]">
          <img
            src={shieldImg}
            alt="shield Image"
            className="lg:scale-100 scale-75"
          />

          <p className=" text-[16px] lg:text-[16px]  mt-8 font-[400] ">
            We protect human rights, in particular, the rights of children.
          </p>
        </div>
        <div className=" w-auto lg:w-[217px]">
          <img
            src={handImg}
            alt="hand Image"
            className="lg:scale-100 scale-75"
          />

          <p className=" text-[16px] lg:text-[16px]  mt-8 font-[400] ">
            We provide succour and relief to the less priviledged through
            poverty alleviation programs and training.
          </p>
        </div>
        <div className=" w-auto lg:w-[263px]">
          <img src={capImg} alt="cap Image" className="lg:scale-100 scale-75" />

          <p className=" text-[16px] lg:text-[16px]  mt-8 font-[400] ">
            We promote educational pursuit among children in the society.
          </p>
        </div>
        <div className=" w-auto lg:w-[265px]">
          <img
            src={cancelImg}
            alt="cancel Image"
            className="lg:scale-100 scale-75"
          />

          <p className=" text-[16px] lg:text-[16px]  mt-8 font-[400] ">
            We support the eradication of rape, abuse and molestation children
            through seminars, workshops, training and advocacy.
          </p>
        </div>
      </section>

      {/* <section className="padding margin">
        <div className="w-full px-8 lg:px-0 bg-myRed h-[217px] flex items-center justify-center">
          <p className=" w-auto lg:w-[812px] font-[400] text-[16px] lg:text-[24px] text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nibh vel vitae scelerisque orci consequat. Mi sapien nisl tempus
            arcu mollis volutpat nulla tristique quis. Eget in varius nunc justo
            erat commodo.
          </p>
        </div>
      </section> */}

      <section className="margin padding flex lg:flex-row flex-col-reverse item-center justify-between">
        <div>
          <div className="mt-20 relative">
            <h2 className="header w-auto lg:w-[387px]">
              How we are making a difference
              <img
                src={zigzagLine}
                className="   lg:scale-100 scale-50 lg:left-auto left-16 absolute -bottom-2"
                alt="Line Image"
              />
            </h2>
          </div>

          <div className=" font=[400] mt-10 text-[16px] lg:text-[20px] w-auto lg:w-[461px]">
            <p>
              The general objective of Rose Foundation is the protection of the
              human rights of children, young people, and the underprivileged.
            </p>

            <p className="mt-4 font=[400] text-[16px] lg:text-[20px] w-auto lg:w-[461px]">
              The Foundation works for the development and welfare of
              individuals and communities in Africa.
            </p>
          </div>

          <div className="mt-12">
            <DonateDialog />
          </div>
        </div>
        <div>
          <img src={kids} alt="kids" />
        </div>
      </section>

      <Element name="ourStories">
        <section className="margin padding">
          <div className="relative w-fit">
            <h2 className="header w-auto lg:w-[519px]">
              Discover the stories of those we’ve helped
              <img
                src={curvyLine}
                className="absolute top-[24px] left-32  lg:scale-100 scale-50  lg:top-12 lg:right-40"
                alt="Line"
              />
            </h2>
          </div>

          <div className="  grid grid-cols-1 lg:grid-cols-3 lg:gap-12 mt-10">
            <div>
              <div className="bg-myRed w-auto lg:w-[390px] h-[383px] flex items-center justify-center">
                <img src={profile} alt="picture" />
              </div>

              <div className="mt-4">
                <h3 className="font-playfair text-[24px] font-[800]">Lily</h3>

                <p className="font-[16px] font-[400] w-[340px] mt-4">
                  Meet Lily, a determined and curious girl whose family
                  struggled to afford basic school supplies. The Rose
                  Foundation, with its commitment to education, provided Lily
                  with a scholarship and a backpack filled with notebooks, pens,
                  and textbooks. With the gift of knowledge, Lily flourished
                  academically, her eyes sparkling with dreams of a brighter
                  future. The Rose Foundation's support not only elevated Lily's
                  educational journey but also planted the seeds of ambition in
                  the fertile soil of her aspirations.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-myRed w-auto lg:w-[390px] lg:mt-0 mt-10  h-[383px] flex items-center justify-center">
                <img src={profile} alt="picture" />
              </div>

              <div className="mt-4">
                <h3
                  className="font-playfair text-[24px] font-[800]
                  "
                >
                  Oliver
                </h3>

                <p className="font-[16px] font-[400] w-[340px] mt-4">
                  Oliver, a young boy with a passion for storytelling. Living in
                  a community where resources for creative expression were
                  scarce, Oliver's dreams of becoming a writer seemed distant.
                  The Rose Foundation recognized his potential and gifted him
                  with a writing mentor and a small library of books. With every
                  turned page, Oliver's imagination soared, and his narratives
                  began to bloom like the roses in the foundation's name.
                  Through literature, he found a voice to inspire others in his
                  community.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-myRed w-auto lg:w-[390px]  lg:mt-0 mt-10  h-[383px] flex items-center justify-center">
                <img src={profile} alt="picture" />
              </div>

              <div className="mt-4">
                <h3 className="font-playfair text-[24px] font-[800]">Rosa</h3>

                <p className="font-[16px] font-[400] w-[340px] mt-4">
                  Rosa, a spirited girl with a heart full of kindness and
                  empathy. Born with a hearing impairment, Rosa faced challenges
                  in connecting with her peers. The Rose Foundation, with its
                  commitment to inclusivity, provided Rosa with hearing aids and
                  organized sign language classes for her and her classmates. As
                  Rosa learned to communicate more effectively, a garden of
                  friendships blossomed around her, creating an environment
                  where differences were celebrated.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="meetTheHumans">
        <section className="padding margin">
          <div className="relative">
            <h2 className="header w-auto lg:w-[519px]">
              Meet the humans behind the foundation
              <img
                className="absolute lg:scale-100 scale-[.6] left-20  lg:left-[150px] -top-2 lg:top-0"
                src={roundLine}
                alt="Line"
              />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 mx-auto mt-10">
            <div>
              <div className="  lg:mt-0 mt-10 w-auto lg:w-[390px]">
                <img className="h-[320px] w-full" src={pic3} />
              </div>

              <div className="mt-4">
                <h3 className="font-playfair text-[24px] font-[800]">
                  Ja'Marr Chase
                </h3>
                <p className="text-[18px] font-[400] mt-2">Founder; CEO </p>
                <p className="font-[16px] font-[400] w-[340px] mt-4">
                  Ja'Marr Anthony Chase is an American football wide receiver
                  for the Cincinnati Bengals of the National Football League. He
                  played college football at LSU, where he won the Fred
                  Biletnikoff Award and the 2020 College Football Playoff
                  National Championship as a sophomore. Has a passion for making
                  sure children are well taken care of.
                </p>
              </div>
            </div>
            <div>
              <div className=" lg:mt-0 mt-10 w-auto lg:w-[390px]"></div>
              <img src={pic1} />
              <div className="mt-4">
                <h3 className="font-playfair text-[24px] font-[800]">
                  Andrei Iosiva
                </h3>
                <p className="text-[18px] font-[400] mt-2">Co-Founder</p>
                <p className="font-[16px] font-[400] w-[340px] mt-4">
                  Andrei Iosivas is an American football wide receiver for the
                  Cincinnati Bengals of the National Football League. He played
                  college football at Princeton and was selected by the Bengals
                  in the sixth round of the 2023 NFL Draft. Interested in the
                  wellbeing of children
                </p>
              </div>
            </div>
            <div>
              <div className=" lg:mt-0 mt-10 w-auto lg:w-[390px] "></div>
              <img src={pic2} />

              <div className="mt-4">
                <h3 className="font-playfair text-[24px] font-[800]">
                  Joseph Burrow
                </h3>
                <p className="text-[18px] font-[400] mt-2"> Co-Founder</p>
                <p className="font-[16px] font-[400] w-[340px] mt-4">
                  Joseph Lee Burrow is an American football quarterback for the
                  Cincinnati Bengals of the National Football League. Following
                  a stint at Ohio State, Burrow played college football at LSU,
                  winning the Heisman Trophy and the 2020 College Football
                  Playoff National Championship as a senior. Loves Children
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
