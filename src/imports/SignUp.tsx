import svgPaths from "./svg-m0x5z130pj";

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

function Frame() {
  return <div className="absolute bg-white border border-[#040303] border-solid inset-[27.94%_0_0_0] rounded-[50px]" />;
}

function Frame1() {
  return <div className="absolute bg-white border border-[#040303] border-solid inset-[27.94%_0_0_0] rounded-[50px]" />;
}

function Frame2() {
  return <div className="absolute bg-white border border-[#040303] border-solid inset-[27.94%_0_0_0] rounded-[50px]" />;
}

function Frame3() {
  return <div className="absolute bg-white border border-[#040303] border-solid inset-[27.94%_0_0_0] rounded-[50px]" />;
}

export default function SignUp() {
  return (
    <div className="bg-white relative size-full" data-name="Sign up">
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-0" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[57px] leading-[normal] left-[calc(16.67%+133.5px)] not-italic text-[24px] text-black text-center top-[62px] w-[225px] whitespace-pre-wrap">Create your account</p>
      <div className="absolute left-[16px] size-[29px] top-[70px]" data-name="Back">
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[57px] left-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[191px] w-[304px]" data-name="Text field">
        <Frame />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_10.23%_58.82%_6.44%] leading-[normal] not-italic text-[#040303] text-[14px] whitespace-pre-wrap">Name</p>
      </div>
      <div className="absolute h-[57px] left-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[281px] w-[304px]" data-name="Text field">
        <Frame1 />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_10.23%_58.82%_6.44%] leading-[normal] not-italic text-[#040303] text-[14px] whitespace-pre-wrap">Email</p>
      </div>
      <div className="absolute h-[57px] left-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[371px] w-[304px]" data-name="Text field">
        <Frame2 />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_10.23%_58.82%_6.44%] leading-[normal] not-italic text-[#040303] text-[14px] whitespace-pre-wrap">Password</p>
      </div>
      <div className="absolute h-[57px] left-[42px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[461px] w-[304px]" data-name="Text field">
        <Frame3 />
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[0_10.23%_58.82%_6.44%] leading-[normal] not-italic text-[#040303] text-[14px] whitespace-pre-wrap">Confirm Password</p>
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[42px] leading-[0] left-[62px] not-italic text-[0px] text-[16px] text-black top-[557px] w-[262px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`I understood the `}</span>
        <span className="leading-[normal] text-[#9000ff]">{`terms & policy`}</span>
        <span className="leading-[normal]">.</span>
      </p>
      <div className="absolute left-[32px] size-[20px] top-[563px]" data-name="Empty box">
        <div className="absolute inset-[9.09%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3636 16.3636">
            <path d={svgPaths.p10885500} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[45px] left-[45px] top-[622px] w-[299px]" data-name="Button">
        <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
        <div className="absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold inset-[24.44%_18.27%_22.22%_18.27%] justify-center leading-[0] not-italic text-[24px] text-center text-white">
          <p className="leading-[normal] whitespace-pre-wrap">Sign up</p>
        </div>
      </div>
      <div className="absolute left-[calc(33.33%+39px)] size-[45px] top-[754px]" data-name="Facebook">
        <div className="absolute inset-[6.25%]" data-name="bg">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.375 39.375">
            <circle cx="19.6875" cy="19.6875" fill="url(#paint0_linear_1_1723)" id="bg" r="19.6875" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1723" x1="19.6875" x2="19.6875" y1="0" y2="39.2582">
                <stop stopColor="#18ACFE" />
                <stop offset="1" stopColor="#0163E0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[6.25%] left-[31.25%] right-[31.25%] top-1/4" data-name="f">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.875 30.9375">
            <path d={svgPaths.p210efb00} fill="var(--fill-0, white)" id="f" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[86.27%_64.93%_8.58%_23.88%] overflow-clip" data-name="Google">
        <div className="absolute inset-[41.09%_0_12.07%_51%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.05 21.0815">
            <path d={svgPaths.p3c2376d0} fill="var(--fill-0, #4280EF)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[59.67%_15.22%_0.11%_5.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.7 18.0978">
            <path d={svgPaths.p1ff100} fill="var(--fill-0, #34A353)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[27.61%_77.67%_27.61%_0.03%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0375 20.1522">
            <path d={svgPaths.p1acf8a80} fill="var(--fill-0, #F6B704)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0.11%_14.89%_59.57%_5.44%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.85 18.1476">
            <path d={svgPaths.p1bf8780} fill="var(--fill-0, #E54335)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-[calc(16.67%+132.5px)] not-italic text-[24px] text-black text-center top-[689px] w-[161px]">
        <p className="leading-[normal] whitespace-pre-wrap">Or Sign up with</p>
      </div>
      <div className="absolute h-0 left-[-6px] top-[689px] w-[125px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125 3">
            <line id="Line 11" stroke="var(--stroke-0, black)" strokeWidth="3" x2="125" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[calc(66.67%+17px)] top-[689px] w-[110px]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 3">
            <line id="Line 12" stroke="var(--stroke-0, black)" strokeWidth="3" x2="110" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(50%+52px)] overflow-clip size-[45px] top-[754px]" data-name="apple">
        <div className="absolute inset-[6.25%]" data-name="bg">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.375 39.375">
            <path d={svgPaths.pec4c00} fill="var(--fill-0, #283544)" id="bg" />
          </svg>
        </div>
        <div className="absolute inset-[21.88%_28.13%_28.13%_28.13%]" data-name="apple">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6875 22.5">
            <path d={svgPaths.p27c71e00} fill="var(--fill-0, white)" id="apple" />
          </svg>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[42px] justify-center leading-[0] left-[calc(16.67%+45px)] not-italic text-[0px] text-black top-[843px] w-[200px]">
        <p className="text-[16px] whitespace-pre-wrap">
          <span className="leading-[normal]">Have an account?</span>
          <span className="decoration-solid font-['Cairo:Medium',sans-serif] font-medium leading-[normal] not-italic underline">{` `}</span>
          <span className="decoration-solid font-['Cairo:Bold',sans-serif] font-bold leading-[normal] not-italic underline">Sign in</span>
        </p>
      </div>
    </div>
  );
}