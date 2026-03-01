import svgPaths from "./svg-9dwwcyqlgn";

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

function Group2() {
  return (
    <div className="absolute inset-[27.42%_66.25%_33.8%_13.55%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.88657 10.8575">
        <g id="Group">
          <path d={svgPaths.p3de51500} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p21353100} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[30.15%_13.72%_24.39%_37.78%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3412 12.73">
        <g id="Group">
          <path d={svgPaths.p37bcf700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p6d32400} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pcd5c800} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[27.42%_13.72%_24.39%_13.55%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 28">
        <path d={svgPaths.p21a55800} fill="var(--fill-0, black)" id="XMLID 4" />
      </svg>
      <div className="absolute inset-[3.33%_2.13%]" data-name="XMLID 3">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.1222 26.1334">
          <path d={svgPaths.p2cde7340} fill="var(--fill-0, white)" id="XMLID 3" />
        </svg>
      </div>
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[10.42%_10.42%_2.08%_2.08%]" data-name="Group">
      <div className="absolute inset-[-2.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5835 26.5834">
          <g id="Group">
            <path d={svgPaths.p1b067700} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.20833" />
            <path d={svgPaths.p13f6ab10} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.20833" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%_12.5%_0.78%_12.5%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.75 26.3586">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p34646d00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <div className="bg-white relative size-full" data-name="Payment page">
      <div className="-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-0" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[41px] leading-[normal] left-[calc(16.67%+133.5px)] not-italic text-[24px] text-black text-center top-[62px] w-[197px] whitespace-pre-wrap">Payment</p>
      <div className="absolute left-[22px] size-[29px] top-[68px]" data-name="Back">
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[24px] justify-end leading-[0] left-[37.5px] not-italic text-[16px] text-black text-center top-[679px] w-[107px]">
        <p className="leading-[normal] whitespace-pre-wrap">Price</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[20px] justify-end leading-[0] left-[62px] not-italic text-[16px] text-black text-center top-[709px] w-[112px]">
        <p className="leading-[normal] whitespace-pre-wrap">Delivery fee</p>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[24px] justify-end leading-[0] left-[18px] not-italic text-[16px] text-black top-[741px] w-[70px]">
        <p className="leading-[normal] whitespace-pre-wrap">15% fee</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold h-[35px] justify-end leading-[0] left-[45px] not-italic text-[25px] text-black text-center top-[797px] tracking-[-0.475px] w-[116px]">
        <p className="leading-[1.5] whitespace-pre-wrap">Total</p>
      </div>
      <div className="absolute flex h-px items-center justify-center left-0 top-[745px] w-[402px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.14deg]">
          <div className="h-0 relative w-[402.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.001 1">
                <line id="Line 3" stroke="var(--stroke-0, black)" x2="402.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[45px] left-[48px] top-[813px] w-[312px]" data-name="Button">
        <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.44%_18.27%_22.22%_18.27%] leading-[normal] not-italic text-[20px] text-center text-white whitespace-pre-wrap">Pay</p>
      </div>
      <div className="absolute h-[68px] left-[calc(16.67%+6px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[514px] w-[264px]" data-name="Text field">
        <Frame />
        <div className="absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold inset-[0_10.23%_58.82%_6.44%] justify-end leading-[0] not-italic text-[#040303] text-[24px]">
          <p className="leading-[normal] whitespace-pre-wrap">Code</p>
        </div>
      </div>
      <div className="absolute h-[29px] left-[calc(16.67%+55px)] top-[604px] w-[159px]" data-name="Button">
        <div className="absolute bg-[#4800c5] inset-0 rounded-[14px]" />
        <div className="absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium inset-[24.44%_18.27%_22.22%_18.27%] justify-center leading-[0] not-italic text-[16px] text-center text-white">
          <p className="leading-[normal] whitespace-pre-wrap">Check</p>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[35px] leading-[normal] left-[calc(66.67%+67px)] not-italic text-[24px] text-black text-center top-[756px] w-[104px] whitespace-pre-wrap">1547SR</p>
      <p className="-translate-x-1/2 absolute font-['Cairo:Light',sans-serif] font-light h-[15px] leading-[normal] left-[calc(83.33%+26.5px)] not-italic text-[12px] text-black text-center top-[691px] w-[75px] whitespace-pre-wrap">20SR</p>
      <p className="-translate-x-1/2 absolute font-['Cairo:Light',sans-serif] font-light h-[20px] leading-[normal] left-[calc(83.33%+21.5px)] not-italic text-[12px] text-black text-center top-[721px] w-[65px] whitespace-pre-wrap">229.05SR</p>
      <p className="-translate-x-1/2 absolute font-['Cairo:Light',sans-serif] font-light h-[19px] leading-[normal] left-[calc(66.67%+90.5px)] not-italic text-[12px] text-black text-center top-[660px] w-[73px] whitespace-pre-wrap">1297.95SR</p>
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold h-[44px] leading-[normal] left-[11px] not-italic text-[24px] text-black top-[291px] w-[189px] whitespace-pre-wrap">Payment method</p>
      <div className="-translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[24px] justify-end leading-[0] left-[54px] not-italic text-[16px] text-black top-[369px] w-[62px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Mada `}</p>
      </div>
      <div className="absolute flex h-px items-center justify-center left-0 top-[502px] w-[402px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.14deg]">
          <div className="h-0 relative w-[402.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.001 1">
                <line id="Line 13" stroke="var(--stroke-0, black)" x2="402.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[24px] justify-end leading-[0] left-[54px] not-italic text-[16px] text-black top-[443px] w-[86px]">
        <p className="leading-[normal] whitespace-pre-wrap">Apple pay</p>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[24px] justify-end leading-[0] left-[54px] not-italic text-[16px] text-black top-[489px] w-[146px]">
        <p className="leading-[normal] whitespace-pre-wrap">Pay when delivered</p>
      </div>
      <div className="-translate-y-full absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[23px] justify-end leading-[0] left-[70px] not-italic text-[#6005fe] text-[16px] top-[404px] w-[163px]">
        <p className="leading-[normal] whitespace-pre-wrap">+Add new card</p>
      </div>
      <div className="absolute left-[19px] size-[22px] top-[344px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p3e0fdf80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[19px] size-[22px] top-[419px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p3e0fdf80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[19px] size-[22px] top-[465px]" data-name="Circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p3e0fdf80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+21px)] size-[29px] top-[342px]" data-name="Card-payment">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 18.125">
            <path d={svgPaths.p3dffa680} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[28px] left-[calc(83.33%+10px)] overflow-clip top-[417px] w-[44px]" data-name="Apple Pay Mark">
        <Group />
      </div>
      <div className="absolute left-[calc(83.33%+21px)] size-[29px] top-[467px]" data-name="Cash by hand">
        <Group4 />
      </div>
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold h-[30px] leading-[normal] left-[11px] not-italic text-[24px] text-black top-[189px] w-[170px] whitespace-pre-wrap">{`Deliver to `}</p>
      <div className="absolute h-0 left-0 top-[189px] w-[405px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 405 1">
            <line id="Line 15" stroke="var(--stroke-0, black)" x2="405" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[280px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 14" stroke="var(--stroke-0, black)" x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[16px] size-[29px] top-[240px]" data-name="Location sign">
        <Group5 />
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[22px] leading-[normal] left-[49px] not-italic text-[16px] text-black top-[239px] w-[338px] whitespace-pre-wrap">Jeddah, alnassem, abi bakr aljarai, building 6998</p>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[35px] leading-[0] left-[11px] not-italic text-[0px] text-black top-[141px] w-[99px] whitespace-pre-wrap">
        <span className="font-['Cairo:Bold',sans-serif] font-bold leading-[normal] text-[24px]">Products</span>
        <span className="leading-[normal] text-[16px]">{` `}</span>
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(16.67%+55px)] not-italic text-[24px] text-black text-center top-[163px] w-[46px]">
        <p className="leading-[normal] whitespace-pre-wrap">(3)</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo:Medium',sans-serif] font-medium h-[23px] justify-center leading-[0] left-[calc(66.67%+76.5px)] not-italic text-[16px] text-black text-center top-[165.5px] w-[69px]">
        <p className="leading-[normal] whitespace-pre-wrap">Show</p>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(83.33%+29px)] size-[29px] top-[153px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="relative size-[29px]" data-name="Arrow Right-In">
            <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
                <path d={svgPaths.p1409e300} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-px items-center justify-center left-0 top-[140px] w-[402px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.14deg]">
          <div className="h-0 relative w-[402.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.001 1">
                <line id="Line 3" stroke="var(--stroke-0, black)" x2="402.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}