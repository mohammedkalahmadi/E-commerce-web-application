import svgPaths from "./svg-rnp91v7osg";
import imgPictureOfProduct from "figma:asset/2f7466c5c41c923cfc0ec378507404e4595b037e.png";
import imgPictureOfProduct1 from "figma:asset/6c54e5ead8aef22a9b817391015afa6cb15b8652.png";

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

export default function ShoppingCart() {
  return (
    <div className="bg-white relative size-full" data-name="Shopping cart 5">
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
              <path d={svgPaths.p2c2d2bc0} fill="var(--fill-0, #9100FF)" id="Vector" />
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
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[44px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[24px] text-black text-center top-[49px] w-[203px] whitespace-pre-wrap">Shopping cart</p>
      <div className="absolute h-[199px] left-[5px] top-[117px] w-[392px]" data-name="Product card">
        <div className="absolute inset-[8.04%_69.07%_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[9.05%_10.36%_79.4%_34.09%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Midnight Oxford Classic</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[20.6%_40.42%_68.84%_34.09%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">499SR</p>
        <div className="absolute left-[339px] size-[27px] top-[120px]" data-name="Right-Arrow">
          <div className="absolute flex inset-[-16%_0_0_-16%] items-center justify-center">
            <div className="flex-none rotate-180 size-[33.64px]">
              <div className="relative size-full" data-name="Left-Arrow">
                <div className="absolute inset-[16%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2976 21.2976">
                    <path d={svgPaths.p18573400} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[30.6%_46.6%_30.6%_31.2%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95304 12.1522">
                    <path d={svgPaths.p18123ac0} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[48%_32%_48%_34%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6488 1.2528">
                    <path d="M0 0H10.6488V1.2528H0V0Z" fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[278px] size-[29px] top-[118px]" data-name="Left-Arrow">
          <div className="absolute inset-[16%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.72 19.72">
              <path d={svgPaths.p4c13f00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[30.6%_46.6%_30.6%_31.2%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.438 11.252">
              <path d={svgPaths.p153f4200} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[48%_32%_48%_34%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86 1.16">
              <path d="M0 0H9.86V1.16H0V0Z" fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[335px] size-[31px] top-[14px]" data-name="Garbage">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 23.25">
              <path d={svgPaths.p2f9fbb00} fill="var(--fill-0, #E70E0E)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[306px] size-[29px] top-[118px]" data-name="Number 1.">
          <div className="absolute bottom-[20.83%] left-[39.58%] right-1/2 top-[18.75%]" data-name="Vector">
            <div className="absolute inset-[-6.9%_-40%_-6.9%_-56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.92083 19.9375">
                <path d={svgPaths.pea98100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[199px] left-[5px] top-[316px] w-[392px]" data-name="Product card">
        <div className="absolute inset-[8.04%_69.07%_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct1} />
        </div>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[9.05%_10.36%_79.4%_34.09%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">Heritage Brown Brogue</p>
        <p className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[20.6%_40.42%_68.84%_34.09%] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">349SR</p>
        <div className="absolute left-[339px] size-[27px] top-[120px]" data-name="Right-Arrow">
          <div className="absolute flex inset-[-16%_0_0_-16%] items-center justify-center">
            <div className="flex-none rotate-180 size-[33.64px]">
              <div className="relative size-full" data-name="Left-Arrow">
                <div className="absolute inset-[16%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2976 21.2976">
                    <path d={svgPaths.p18573400} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[30.6%_46.6%_30.6%_31.2%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.95304 12.1522">
                    <path d={svgPaths.p18123ac0} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[48%_32%_48%_34%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6488 1.2528">
                    <path d="M0 0H10.6488V1.2528H0V0Z" fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[278px] size-[29px] top-[118px]" data-name="Left-Arrow">
          <div className="absolute inset-[16%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.72 19.72">
              <path d={svgPaths.p4c13f00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[30.6%_46.6%_30.6%_31.2%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.438 11.252">
              <path d={svgPaths.p153f4200} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[48%_32%_48%_34%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.86 1.16">
              <path d="M0 0H9.86V1.16H0V0Z" fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[335px] size-[31px] top-[14px]" data-name="Garbage">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 23.25">
              <path d={svgPaths.p2f9fbb00} fill="var(--fill-0, #E70E0E)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[306px] size-[29px] top-[118px]" data-name="Number 1.">
          <div className="absolute bottom-[20.83%] left-[39.58%] right-1/2 top-[18.75%]" data-name="Vector">
            <div className="absolute inset-[-6.9%_-40%_-6.9%_-56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.92083 19.9375">
                <path d={svgPaths.pea98100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold h-[27px] leading-[normal] left-[8px] not-italic text-[24px] text-black top-[714px] w-[125px] whitespace-pre-wrap">{`Total Price `}</p>
      <p className="absolute font-['Cairo:Bold',sans-serif] font-bold h-[37px] leading-[normal] left-[calc(66.67%+47px)] not-italic text-[24px] text-black top-[714px] w-[115px] whitespace-pre-wrap">848SR</p>
      <div className="absolute h-[55px] left-[51px] top-[774px] w-[306px]" data-name="Button">
        <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
        <div className="absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold inset-[24.44%_18.27%_22.22%_18.27%] justify-center leading-[0] not-italic text-[24px] text-center text-white">
          <p className="leading-[normal] whitespace-pre-wrap">Payment</p>
        </div>
      </div>
      <div className="absolute h-0 left-0 top-[720px] w-[402px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 2">
            <line id="Line 3" stroke="var(--stroke-0, black)" strokeWidth="2" x2="402" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}