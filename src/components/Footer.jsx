import { phone, mail, instagram, logo } from "../assets/index.js";

export default function Footer() {
  return (
    <div>
      <div className='margin padding'>
        <div className="bg-[url('/src/assets/darkKids.png')] h-[430px] w-full flex items-center justify-center">
          <div className='w-[246px] '>
            <h2 className='header text-center text-white'>
              Get involved. You can help.
            </h2>
            <div className='mt-12 mx-auto w-fit'>
              <a href='#' className='donate-btn'>
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className='margin'>
          <p className='text-[20px] font-[400] '>
            Get in touch with Rose Foundation for the Protection of Women and
            Children.
          </p>
          <div className='mt-10 flex justify-between pb-10 border-b-2 border-b-black  '>
            <div className='flex'>
              <div className='flex w-[350px]'>
                <img src={phone} alt='Phone Image' />
                <p className=' ml-4 font-playfair text-[26.39px] font-[800]'>
                  +234(0) 80 3771 7563
                </p>
              </div>

              <div className='flex ml-20'>
                <img src={mail} alt='Email Image' />
                <p className=' ml-4 font-playfair text-[26.39px] font-[800]'>
                  contact@rosefoundationforprotection.org
                </p>
              </div>
            </div>

            <div>
              <a href='#'>
                <img
                  src={instagram}
                  alt='Instagram Image  '
                  className='duration-200 hover:scale-125'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='margin flex justify-between items-center'>
          <img src={logo} />
          <div className='w-[580px] flex justify-around'>
            <a
              href='#'
              className='text-[20px] duration-200 hover:text-myRed font-[400] '
            >
              What We Do
            </a>
            <a
              href='#'
              className='text-[20px] duration-200 hover:text-myRed font-[400] '
            >
              Our Stories
            </a>
            <a
              href='#'
              className='text-[20px] duration-200 hover:text-myRed font-[400] '
            >
              Meet the Humans
            </a>
            <a
              href='#'
              className='text-[20px] duration-200 hover:text-myRed font-[400] '
            >
              Contact
            </a>
          </div>
          <div>
            <a href='#' className='donate-btn'>
              Donate Now
            </a>
          </div>
        </div>

        <div className='mt-16'>
          <p className='text-[16px] font-[400]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
            a risus gravida lorem sed ac pellentesque tincidunt. Tincidunt lacus
            pellentesque pellentesque eu. Vivamus lacus dui non elementum
            cursus. Vitae felis eleifend pharetra, ullamcorper eget quis
            egestas. Elementum elementum at mattis.
          </p>
        </div>

        <p className='text-[16px] mt-16 pb-20 font-[400] text-center'>
          (c) 2022 Rose Foundation for the Protection of Women and Children. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
}
