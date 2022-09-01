import { useEffect } from "react";

export default function MoreInfo() {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);;
  ;
  return (
    <div>
      <div className='relative top-40 mb-[230px]  padding'>
        <h2 className='font-playfair text-[31.98px] font-[800]'>
          Mrs. Philomena
        </h2>

        <p className=' text-[16px] lg:text-[25px] font-[400] mt-4'>
          Mrs. Onwurah is a widow, whose husband was buried in January, 2022.
          After the burial, her late husband’s siblings demanded that she hands
          over all the documents of her late husband’s properties to them.
        </p>

        <p className=' text-[16px] lg:text-[25px] font-[400] mt-4'>
          She reported to Rose Foundation. The Foundation stepped in and
          resolved the matter through Alternative Dispute Resolution (ADR). Mrs.
          Onwurah was granted total ownership of her late husband’s properties.
        </p>
      </div>
    </div>
  );
}
