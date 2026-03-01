import svgPaths from "./svg-j2bawf9n9p";
import imgPictureOfProduct from "figma:asset/79a05628e1389a8e8412b849dcac6a09a6c2cd20.png";
import imgPictureOfProduct1 from "figma:asset/f0fbf0ce127eb3879396d3826b6f32860f681229.png";
import imgPictureOfProduct2 from "figma:asset/9085cab35538f5473cb29d21206caf1b4c21491e.png";
import imgPictureOfProduct3 from "figma:asset/efb88368793699f2df6f8cfddc241adc45f582ad.png";
import imgPictureOfProduct4 from "figma:asset/e977b70596a7cf44f43ec91d0a1ae6d08b3ab4ef.png";
import imgPictureOfProduct5 from "figma:asset/d169f38bb0466a5229b1313ede73693846cf8041.png";
import imgPictureOfProduct6 from "figma:asset/2f7466c5c41c923cfc0ec378507404e4595b037e.png";
import imgPictureOfProduct7 from "figma:asset/23977bc40818ff40b798ce1c4a890df0013e2d37.png";
import imgPictureOfProduct8 from "figma:asset/dccecee73a1bdfeba7538390fe5dec7fbf2e0102.png";
import imgPictureOfProduct9 from "figma:asset/e4755eb04eb25e2554ed4dd13115277313617f97.png";

function Group() {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-5.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
          <g id="Group">
            <path d={svgPaths.p2b538300} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p35bfcbc0} id="Vector_2" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

export default function MainPage() {
  return (
    <div className="bg-white relative size-full" data-name="Main page">
      <div className="-translate-x-1/2 absolute bg-[#ccc] bottom-0 h-[65px] left-1/2 w-[402px]" data-name="navigation bar">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <div className="absolute aspect-[24/24] left-[8.96%] right-[81.09%] top-[13px]" data-name="home button">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 30">
              <path d={svgPaths.pa04bf00} fill="var(--fill-0, #9100FF)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[24/24] left-[33.33%] right-[56.72%] top-[13px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 30.5833">
              <path d={svgPaths.p211c4300} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[24/24] left-[57.71%] right-[32.34%] top-[13px]" data-name="Cart">
          <div className="absolute inset-[8.33%_12.5%_8.33%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
              <path d={svgPaths.p2c2d2bc0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[24/24] left-[82.09%] right-[7.96%] top-[13px]" data-name="Profile">
          <Group />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-0" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[42px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[24px] text-black text-center top-[62px] w-[223px] whitespace-pre-wrap">Main page</p>
      <div className="absolute h-[199px] left-[16px] top-[165px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Classic Wing</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">495SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[calc(50%+32px)] top-[165px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct1} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Amber Executive B..</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">699SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[calc(50%+32px)] top-[381px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct2} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Desert Tan</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">329SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[16px] top-[381px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct3} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Elegant Digel</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">430SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[16px] top-[597px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct4} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Soft Walk</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">289SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[calc(50%+32px)] top-[597px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct5} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Royal Step</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">599SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[calc(50%+32px)] top-[813px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct6} />
        </div>
        <div className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">
          <p className="mb-0">{` Midnight Oxford`}</p>
          <p>&nbsp;</p>
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">499SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[16px] top-[813px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct7} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Brown Crest</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">369SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[16px] top-[1029px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct8} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Heritage Brown B....</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">349SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[calc(50%+30px)] top-[1029px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct9} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Smooth Loafer</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[89.45%_37.25%_0_1.31%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">299SR</p>
        <div className="absolute aspect-[24/24] left-[81.05%] right-0 top-[155px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <path d={svgPaths.p3b465af0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[16px] size-[29px] top-[75px]" data-name="Search">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.75 21.75">
            <path d={svgPaths.p3819b080} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+20px)] size-[29px] top-[75px]" data-name="filter">
        <div className="absolute inset-[12.5%_16.66%_12.49%_16.66%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.336 21.753">
            <path d={svgPaths.p13aa9b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}