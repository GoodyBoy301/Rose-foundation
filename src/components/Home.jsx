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
} from "../assets/index";
import { Element } from "react-scroll";

export default function Home() {
  return (
    <div>
      <Element name='whatWeDo'>
        <section className='hero'>
          <div className=' lg:px-0 px-6 lg:pl-32 lg:mt-32'>
            <div className='w-auto md:w-[490px] relative'>
              <h2 className=' mt-10 lg:mt-0 text-[29.07px] lg:text-[59.87px] font-playfair font-[800] '>
                Rose Foundation for the Protection of Women and Children.
                <img
                  src={circleLine}
                  className=' hidden lg:scale-100 scale-50 right-10 -top-2 absolute lg:-right-4 lg:top-28'
                  alt='Line'
                />
              </h2>
            </div>
            <p className=' w-auto lg:px-6 lg:w-[440px] mt-4 lg:mt-10 text-[16px]  lg:text-[20px] font-[400]'>
              We are a Non-Governmental Organization for Women and Children
              founded to immortalize Eld. Rose AjaNwachuku, who lived and loved,
              extending her kindness to whomever she could.
            </p>

            <div className='mt-16 flex'>
              <a href='#' className='donate-btn '>
                Donate Now
              </a>
              <button className=' text-[16px] lg:text-[20px]  ml-20'>
                Explore
                <img src={arrow} alt='arrow' className=' inline-block ml-4 ' />
              </button>
            </div>
          </div>

          <div className='lg:w-[758px] lg:mt-[60px] bg-myDarkRed lg:bg-red-400 '>
            <img src={heroImg} className='lg:w-auto w-[294.61px]' alt='hero' />
          </div>
        </section>
      </Element>

      <section className='padding margin grid grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className=' w-auto lg:w-[263px]'>
          <img
            src={shieldImg}
            alt='shield Image'
            className='lg:scale-100 scale-75'
          />

          <p className=' text-[16px] lg:text-[16px]  mt-8 font-[400] '>
            We protect human rights, in particular, the rights of children,
            women and young people.
          </p>
        </div>
        <div className=' w-auto lg:w-[217px]'>
          <img
            src={handImg}
            alt='hand Image'
            className='lg:scale-100 scale-75'
          />

          <p className=' text-[16px] lg:text-[16px]  mt-8 font-[400] '>
            We provide succour and relief to the less priviledged through
            poverty alleviation programs and training.
          </p>
        </div>
        <div className=' w-auto lg:w-[263px]'>
          <img src={capImg} alt='cap Image' className='lg:scale-100 scale-75' />

          <p className=' text-[16px] lg:text-[16px]  mt-8 font-[400] '>
            We promote educational pursuit among children, women and the less
            privileged in the society.
          </p>
        </div>
        <div className=' w-auto lg:w-[265px]'>
          <img
            src={cancelImg}
            alt='cancel Image'
            className='lg:scale-100 scale-75'
          />

          <p className=' text-[16px] lg:text-[16px]  mt-8 font-[400] '>
            We support the eradication of rape, abuse and molestation of women
            and children through seminars, workshops, training and advocacy.
          </p>
        </div>
      </section>

      <section className='padding margin'>
        <div className='w-full px-8 lg:px-0 bg-myRed h-[217px] flex items-center justify-center'>
          <p className=' w-auto lg:w-[812px] font-[400] text-[16px] lg:text-[24px] text-white text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nibh vel vitae scelerisque orci consequat. Mi sapien nisl tempus
            arcu mollis volutpat nulla tristique quis. Eget in varius nunc justo
            erat commodo.
          </p>
        </div>
      </section>

      <section className='margin padding flex lg:flex-row flex-col-reverse item-center justify-between'>
        <div>
          <div className='mt-20 relative'>
            <h2 className='header w-auto lg:w-[387px]'>
              How we are making a difference
              <img
                src={zigzagLine}
                className='   lg:scale-100 scale-50 lg:left-auto left-16 absolute -bottom-2'
                alt='Line Image'
              />
            </h2>
          </div>

          <div className=' font=[400] mt-10 text-[16px] lg:text-[20px] w-auto lg:w-[461px]'>
            <p>
              The general objective of Rose Foundation is the protection of the
              human rights of women, children, young people, and the
              underprivileged.
            </p>

            <p className='mt-4 font=[400] text-[16px] lg:text-[20px] w-auto lg:w-[461px]'>
              The Foundation works for the development and welfare of
              individuals and communities in Nigeria.
            </p>
          </div>

          <div className='mt-12'>
            <a href='#' className='donate-btn'>
              Donate Now
            </a>
          </div>
        </div>
        <div>
          <img src={kids} alt='kids' />
        </div>
      </section>

      <Element name='ourStories'>
        <section className='margin padding'>
          <div className='relative w-fit'>
            <h2 className='header w-auto lg:w-[519px]'>
              Discover the stories of those we’ve helped
              <img
                src={curvyLine}
                className='absolute top-[24px] left-32  lg:scale-100 scale-50  lg:top-12 lg:right-40'
                alt='Line'
              />
            </h2>
          </div>

          <div className='  grid grid-cols-1 lg:grid-cols-3 lg:gap-12 mt-10'>
            <div>
              <div className='bg-myRed w-auto lg:w-[390px] h-[383px] flex items-center justify-center'>
                <img src={profile} alt='picture' />
              </div>

              <div className='mt-4'>
                <h3 className='font-playfair text-[24px] font-[800]'>
                  Mrs. Philomena
                </h3>

                <p className='font-[16px] font-[400] w-[340px] mt-4'>
                  Mrs. Onwurah is a widow, whose husband was buried in January,
                  2022. After the burial, her late husband’s siblings demanded
                  that she hands over...
                </p>

                <button className='mt-8 text-[16px] duration-200 hover:-translate-y-1 font-[400]'>
                  <Link to='info' className='underline'>
                    Read More
                  </Link>{" "}
                  <img
                    src={arrowLeft}
                    className='inline-block ml-2 '
                    alt='Read More'
                  />
                </button>
              </div>
            </div>
            <div>
              <div className='bg-myRed w-auto lg:w-[390px] lg:mt-0 mt-10  h-[383px] flex items-center justify-center'>
                <img src={profile} alt='picture' />
              </div>

              <div className='mt-4'>
                <h3
                  className='font-playfair text-[24px] font-[800]
                  '
                >
                  Ms. Eze
                </h3>

                <p className='font-[16px] font-[400] w-[340px] mt-4'>
                  and Ms. Eze, who lives with her parents, was impregnated by a
                  neighbor. After she got pregnant, she dropped out of school
                  and moved in with...
                </p>

                <button className='mt-8 text-[16px] duration-200 hover:-translate-y-1 font-[400]'>
                  <Link to='info' className='underline'>
                    Read More
                  </Link>{" "}
                  <img
                    src={arrowLeft}
                    className='inline-block ml-2 '
                    alt='Read More'
                  />
                </button>
              </div>
            </div>
            <div>
              <div className='bg-myRed w-auto lg:w-[390px]  lg:mt-0 mt-10  h-[383px] flex items-center justify-center'>
                <img src={profile} alt='picture' />
              </div>

              <div className='mt-4'>
                <h3 className='font-playfair text-[24px] font-[800]'>
                  Mrs. Aneze
                </h3>

                <p className='font-[16px] font-[400] w-[340px] mt-4'>
                  Mrs. Aneze’s husband beat her regularly and threatened to stab
                  her to death. Scared for her life, she reported to Rose
                  Foundation where she was seen to...
                </p>

                <button className='mt-8 text-[16px] duration-200 hover:-translate-y-1 font-[400]'>
                  <Link to='info' className='underline'>
                    Read More
                  </Link>{" "}
                  <img
                    src={arrowLeft}
                    className='inline-block ml-2 '
                    alt='Read More'
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name='meetTheHumans'>
        <section className='padding margin'>
          <div className='relative'>
            <h2 className='header w-auto lg:w-[519px]'>
              Meet the humans behind the foundation
              <img
                className='absolute lg:scale-100 scale-[.6] left-20  lg:left-[150px] -top-2 lg:top-0'
                src={roundLine}
                alt='Line'
              />
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-12 mx-auto mt-10'>
            <div>
              <div className='bg-black  lg:mt-0 mt-10 w-auto lg:w-[390px] h-[383px]'></div>

              <div className='mt-4'>
                <h3 className='font-playfair text-[24px] font-[800]'>
                  Ijeoma Mike-AjaNwachuku
                </h3>
                <p className='text-[18px] font-[400] mt-2'>Founder; CEO </p>
                <p className='font-[16px] font-[400] w-[340px] mt-4'>
                  Ijeoma is a legal officer of the rank of Assistant Chief State
                  Counsel in the Ministry of Justice of Ebonyi State (State
                  Attorney), but is a specialist in prosecuting crimes where
                  women and children are victims and also in her private
                  capacity as a Barrister and Solicitor of the Supreme Court of
                  Nigeria (Attorney), deals with legal matters that concern
                  women and children.
                </p>
              </div>
            </div>
            <div>
              <div className='bg-black lg:mt-0 mt-10 w-auto lg:w-[390px] h-[383px]'></div>

              <div className='mt-4'>
                <h3 className='font-playfair text-[24px] font-[800]'>
                  Prof. Michael AjaNwachuku
                </h3>
                <p className='text-[18px] font-[400] mt-2'>
                  Vice-President; Secretary
                </p>
                <p className='font-[16px] font-[400] w-[340px] mt-4'>
                  Michael is a Professor of Law on the Rights of Children. He
                  was the Dean of Faculty of Law, Ebonyi State University,
                  Abakaliki Nigeria, and currently the Dean of Student Affairs
                  of the University. He has a private law firm (M. A.
                  AjaNwachuku & Associates at No 1 Nwodo Street, Abakaliki
                  Nigeria, established in 1989) that deals inter alia with legal
                  matters that concern women and children.
                </p>
              </div>
            </div>
            <div>
              <div className='bg-black lg:mt-0 mt-10 w-auto lg:w-[390px] h-[383px]'></div>

              <div className='mt-4'>
                <h3 className='font-playfair text-[24px] font-[800]'>
                  Nnenna Mike-AjaNwachuku
                </h3>
                <p className='text-[18px] font-[400] mt-2'>Member</p>
                <p className='font-[16px] font-[400] w-[340px] mt-4'>
                  Nnenna is a Mechanical Engineering undergraduate student of
                  the University of Nigeria, Nigeria with a passion for the
                  protection of women and children.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </div>
  );
}
