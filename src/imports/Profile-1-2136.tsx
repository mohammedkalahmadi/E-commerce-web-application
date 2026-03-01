import svgPaths from "./svg-k2urvqiv04";
import imgEllipse1 from "figma:asset/e9b20ea002e71ff1c56cfca0da4dfa22d6daa308.png";

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

function Group1() {
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

export default function Profile() {
  return (
    <div className="bg-white relative size-full" data-name="Profile">
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-0" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
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
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[51px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[24px] text-black text-center top-[62px] w-[139px] whitespace-pre-wrap">Profile</p>
      <div className="absolute h-[144px] left-[calc(16.67%+57px)] top-[121px] w-[154px]">
        <img alt="" className="absolute block max-w-none size-full" height="144" src={imgEllipse1} width="154" />
      </div>
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[43px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[24px] text-black text-center top-[286px] w-[189px] whitespace-pre-wrap">Welcome Khalid</p>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[35px] leading-[normal] left-[7px] not-italic text-[16px] text-black top-[362px] w-[119px] whitespace-pre-wrap">Account</p>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[62px] not-italic text-[14px] text-black top-[405px] w-[129px] whitespace-pre-wrap">Personal Inforamtion</p>
      <div className="absolute left-[26px] size-[29px] top-[441px]" data-name="Card-payment">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 18.125">
            <path d={svgPaths.p3dffa680} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[26px] size-[29px] top-[481px]" data-name="Box">
        <div className="absolute inset-[5.21%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9792 25.9792">
            <path clipRule="evenodd" d={svgPaths.p25ab75e0} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[31px] leading-[normal] left-[8px] not-italic text-[16px] text-black top-[525px] w-[137px] whitespace-pre-wrap">Settings</p>
      <div className="absolute left-[30px] size-[29px] top-[567px]" data-name="Language">
        <div className="absolute inset-[20.83%_16.67%_20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9587 19.3337">
              <path d={svgPaths.p14d618e0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[30px] size-[29px] top-[611px]" data-name="Global">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 25.375">
            <path d={svgPaths.p1862950} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[61px] not-italic text-[14px] text-black top-[441px] w-[106px] whitespace-pre-wrap">Payment Method</p>
      <div className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[22px] leading-[normal] left-[66px] not-italic text-[14px] text-black top-[481px] w-[44px] whitespace-pre-wrap">
        <p className="mb-0">Orders</p>
        <p>&nbsp;</p>
      </div>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[66px] not-italic text-[14px] text-black top-[569px] w-[109px] whitespace-pre-wrap">Language</p>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[27px] leading-[normal] left-[66px] not-italic text-[14px] text-black top-[613px] w-[85px] whitespace-pre-wrap">Country</p>
      <div className="absolute h-0 left-0 top-[437px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[476px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[519px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[519px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[605px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[648px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[733px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" strokeOpacity="0.2" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[23px] leading-[normal] left-[16px] not-italic text-[16px] text-black top-[657px] w-[46px] whitespace-pre-wrap">Help</p>
      <div className="absolute left-[32px] size-[29px] top-[695px]" data-name="Questions">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 24.1667">
            <path clipRule="evenodd" d={svgPaths.p21b5f00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[67px] not-italic text-[14px] text-black top-[697px] w-[192px] whitespace-pre-wrap">Frequently Asked Questions</p>
      <div className="absolute left-[25px] size-[29px] top-[402px]" data-name="Profile">
        <Group1 />
      </div>
      <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[408px]" data-name="Arrow Right-In">
        <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
            <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[447px]" data-name="Arrow Right-In">
        <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
            <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[483px]" data-name="Arrow Right-In">
        <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
            <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[569px]" data-name="Arrow Right-In">
        <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
            <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[611px]" data-name="Arrow Right-In">
        <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
            <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[695px]" data-name="Arrow Right-In">
        <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
            <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute font-['Cairo:Light',sans-serif] font-light h-[38px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[12px] text-black text-center top-[758px] w-[203px] whitespace-pre-wrap">
        <p className="mb-0">{`Terms Of Use           Privacy Policy`}</p>
        <p>{`Version v4.8 `}</p>
      </div>
    </div>
  );
}