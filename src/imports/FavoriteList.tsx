import svgPaths from "./svg-ency4p4zwb";
import imgPictureOfProduct from "figma:asset/2f7466c5c41c923cfc0ec378507404e4595b037e.png";
import imgPictureOfProduct1 from "figma:asset/dccecee73a1bdfeba7538390fe5dec7fbf2e0102.png";
import imgPictureOfProduct2 from "figma:asset/f0fbf0ce127eb3879396d3826b6f32860f681229.png";

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

export default function FavoriteList() {
  return (
    <div className="bg-white relative size-full" data-name="Favorite list">
      <div className="-translate-x-1/2 absolute bottom-0 h-[65px] left-1/2 w-[402px]" data-name="navigation bar">
        <div className="absolute bg-[#d9d9d9] inset-0" />
        <div className="absolute aspect-[24/24] left-[8.96%] right-[81.09%] top-[13px]" data-name="home button">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 30">
              <path d={svgPaths.pa04bf00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[24/24] left-[33.33%] right-[56.72%] top-[13px]" data-name="Favorite button">
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 30.5833">
              <path d={svgPaths.p211c4300} fill="var(--fill-0, #9100FF)" id="Vector" />
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
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[55px] leading-[normal] left-[195.5px] not-italic text-[24px] text-black text-center top-[63px] w-[279px] whitespace-pre-wrap">Favorite List</p>
      <div className="absolute h-[183px] left-px top-[145px] w-[402px]" data-name="Product card">
        <div className="absolute inset-[4.92%_66.82%_40.44%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[4.37%_6.97%_84.07%_37.47%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Midnight Oxford Classic</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[13.11%_37.04%_76.33%_37.47%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">499SR</p>
        <div className="absolute h-[28px] left-[26.19%] right-[66.82%] top-[13px]" data-name="Favorite button">
          <div className="absolute h-[22.173px] left-[2px] top-[2px] w-[24.167px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <g id="Vector">
                <path d={svgPaths.p37ba3200} fill="var(--fill-0, black)" />
                <path d={svgPaths.p155ef980} fill="#FF0000" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[34px] left-[166px] top-[65px] w-[172px]" data-name="Button">
          <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.44%_18.27%_22.22%_18.27%] leading-[normal] not-italic text-[12px] text-center text-white whitespace-pre-wrap">Add to cart</p>
        </div>
        <div className="absolute left-[369px] size-[29px] top-[15px]" data-name="Garbage">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 21.75">
              <path d={svgPaths.p268f8800} fill="var(--fill-0, #E70E0E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[183px] left-px top-[328px] w-[402px]" data-name="Product card">
        <div className="absolute inset-[4.92%_66.82%_40.44%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct1} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[4.37%_6.97%_84.07%_37.47%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Heritage Brown Brogue</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[13.11%_37.04%_76.33%_37.47%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">349SR</p>
        <div className="absolute h-[28px] left-[26.19%] right-[66.82%] top-[13px]" data-name="Favorite button">
          <div className="absolute h-[22.173px] left-[2px] top-[2px] w-[24.167px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <g id="Vector">
                <path d={svgPaths.p37ba3200} fill="var(--fill-0, black)" />
                <path d={svgPaths.p155ef980} fill="#FF0000" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[34px] left-[166px] top-[65px] w-[172px]" data-name="Button">
          <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.44%_18.27%_22.22%_18.27%] leading-[normal] not-italic text-[12px] text-center text-white whitespace-pre-wrap">Add to cart</p>
        </div>
        <div className="absolute left-[369px] size-[29px] top-[15px]" data-name="Garbage">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 21.75">
              <path d={svgPaths.p268f8800} fill="var(--fill-0, #E70E0E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[183px] left-px top-[511px] w-[402px]" data-name="Product card">
        <div className="absolute inset-[4.92%_66.82%_40.44%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct2} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[4.37%_6.97%_84.07%_37.47%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Amber Executive Derby</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[13.11%_37.04%_76.33%_37.47%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">699SR</p>
        <div className="absolute h-[28px] left-[26.19%] right-[66.82%] top-[13px]" data-name="Favorite button">
          <div className="absolute h-[22.173px] left-[2px] top-[2px] w-[24.167px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.1729">
              <g id="Vector">
                <path d={svgPaths.p37ba3200} fill="var(--fill-0, black)" />
                <path d={svgPaths.p155ef980} fill="#FF0000" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[34px] left-[166px] top-[65px] w-[172px]" data-name="Button">
          <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.44%_18.27%_22.22%_18.27%] leading-[normal] not-italic text-[12px] text-center text-white whitespace-pre-wrap">Add to cart</p>
        </div>
        <div className="absolute left-[369px] size-[29px] top-[15px]" data-name="Garbage">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 21.75">
              <path d={svgPaths.p268f8800} fill="var(--fill-0, #E70E0E)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}