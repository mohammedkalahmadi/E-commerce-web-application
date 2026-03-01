import svgPaths from "./svg-xf30tpy1tb";
import imgRectangle9 from "figma:asset/efb88368793699f2df6f8cfddc241adc45f582ad.png";
import imgPictureOfProduct from "figma:asset/f0fbf0ce127eb3879396d3826b6f32860f681229.png";
import imgPictureOfProduct1 from "figma:asset/dccecee73a1bdfeba7538390fe5dec7fbf2e0102.png";
import imgPictureOfProduct2 from "figma:asset/2f7466c5c41c923cfc0ec378507404e4595b037e.png";

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

export default function ProductPage() {
  return (
    <div className="bg-[#fffefe] relative size-full" data-name="Product page">
      <div className="-translate-x-1/2 absolute content-stretch flex h-[66px] items-start left-1/2 top-0" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      <div className="absolute bg-[#7c7c7c] h-[71px] left-0 top-[1023px] w-[402px]" />
      <div className="absolute left-[22px] size-[29px] top-[53px]" data-name="Back">
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(83.33%+3px)] size-[29px] top-[51px]" data-name="Share">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.3333 24.1664">
            <path d={svgPaths.pfc282f0} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[317px] left-0 top-[90px] w-[402px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle9} />
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[26px] leading-[normal] left-[calc(66.67%+51px)] not-italic text-[16px] text-black top-[417px] w-[58px] whitespace-pre-wrap">430SR</p>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[40px] leading-[normal] left-[16px] not-italic text-[16px] text-black top-[418px] w-[232px] whitespace-pre-wrap">{`Elegant digel shoe in leather `}</p>
      <p className="absolute font-['Cairo:Light',sans-serif] font-light h-[87px] leading-[normal] left-[18px] not-italic text-[12px] text-black top-[450px] w-[328px] whitespace-pre-wrap">Discover the latest shoe from DIGEL that perfectly combines elegance and sophistication. The shoe with decorative perforated decoration on the heel will add a touch of individuality and class to your look.</p>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[18px] not-italic text-[14px] text-black top-[561px] w-[48px] whitespace-pre-wrap">Size</p>
      <div className="absolute h-[36px] left-[17px] top-[587px] w-[354px]" data-name="Sizes">
        <div className="absolute aspect-[29/29] left-0 right-[90.32%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[12.9%] right-[77.42%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[25.81%] right-[64.52%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[38.71%] right-[51.61%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[51.61%] right-[38.71%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[64.52%] right-[25.81%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[77.42%] right-[12.9%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[90.32%] right-0 top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.0645 25.6936">
              <path d={svgPaths.p10189900} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[0.54%] right-[91.67%] top-[3px]" data-name="tabler:number-38-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.p2fd09b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[13.17%] right-[79.03%] top-[3px]" data-name="tabler:number-39-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.p1986400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[26.61%] right-[65.59%] top-[3px]" data-name="tabler:number-40-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.p31a9af00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[39.52%] right-[52.69%] top-[3px]" data-name="tabler:number-41-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-[33.33%] top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-10.51%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9153 11.6156">
                <path d={svgPaths.p2cf7fb00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[51.88%] right-[40.32%] top-[3px]" data-name="tabler:number-42-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.p27c74480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[65.32%] right-[26.88%] top-[3px]" data-name="tabler:number-43-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.p30ba6080} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[78.23%] right-[13.98%] top-[3px]" data-name="tabler:number-44-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.pb644c40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[90.32%] right-[1.88%] top-[3px]" data-name="tabler:number-45-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-13.14%_-8.76%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2151 11.6156">
                <path d={svgPaths.p29b09c30} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[22px] leading-[normal] left-[16px] not-italic text-[14px] text-black top-[634px] w-[55px] whitespace-pre-wrap">Ratings</p>
      <p className="absolute font-['Cairo:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[16px] not-italic text-[14px] text-black top-[706px] w-[94px] whitespace-pre-wrap">Similar</p>
      <div className="absolute h-[29px] left-[16px] top-[668px] w-[185px]" data-name="Stars">
        <div className="absolute aspect-[29/29] left-0 right-[84.32%] top-0" data-name="Star">
          <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.9583">
              <g id="Vector">
                <path d={svgPaths.p23c4fe00} fill="var(--fill-0, #FFE600)" />
                <path clipRule="evenodd" d={svgPaths.p34c9ee80} fill="var(--fill-0, #FFE600)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[21.08%] right-[63.24%] top-0" data-name="Star">
          <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.9583">
              <g id="Vector">
                <path d={svgPaths.p23c4fe00} fill="var(--fill-0, #FFE600)" />
                <path clipRule="evenodd" d={svgPaths.p34c9ee80} fill="var(--fill-0, #FFE600)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[42.16%] right-[42.16%] top-0" data-name="Star">
          <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.9583">
              <g id="Vector">
                <path d={svgPaths.p23c4fe00} fill="var(--fill-0, #FFE600)" />
                <path clipRule="evenodd" d={svgPaths.p34c9ee80} fill="var(--fill-0, #FFE600)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[63.24%] right-[21.08%] top-0" data-name="Star">
          <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.9583">
              <g id="Vector">
                <path d={svgPaths.p23c4fe00} fill="var(--fill-0, #D9D9D9)" />
                <path clipRule="evenodd" d={svgPaths.p34c9ee80} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[84.32%] right-0 top-0" data-name="Star">
          <div className="absolute inset-[8.33%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 22.9583">
              <g id="Vector">
                <path d={svgPaths.p23c4fe00} fill="var(--fill-0, #D9D9D9)" />
                <path clipRule="evenodd" d={svgPaths.p34c9ee80} fill="var(--fill-0, #D9D9D9)" fillRule="evenodd" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[36px] left-[calc(100%+2308px)] top-[739px] w-[372px]" data-name="Sizes">
        <div className="absolute aspect-[29/29] left-0 right-[90.32%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[12.9%] right-[77.42%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[25.81%] right-[64.52%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[38.71%] right-[51.61%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[51.61%] right-[38.71%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[64.52%] right-[25.81%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[77.42%] right-[12.9%] top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[90.32%] right-0 top-0" data-name="Circle">
          <div className="absolute inset-[12.5%_1.39%_12.5%_-12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 27">
              <path d={svgPaths.ped32180} fill="var(--fill-0, #929292)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[0.54%] right-[91.67%] top-[3px]" data-name="tabler:number-38-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.p29d40e00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[13.17%] right-[79.03%] top-[3px]" data-name="tabler:number-39-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.p25bab000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[26.61%] right-[65.59%] top-[3px]" data-name="tabler:number-40-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.paaeb800} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[39.52%] right-[52.69%] top-[3px]" data-name="tabler:number-41-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-[33.33%] top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 12.0833">
                <path d={svgPaths.p388ee200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[51.88%] right-[40.32%] top-[3px]" data-name="tabler:number-42-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.p198a6fc0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[65.32%] right-[26.88%] top-[3px]" data-name="tabler:number-43-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.p23102300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[78.23%] right-[13.98%] top-[3px]" data-name="tabler:number-44-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.p46c0400} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[29/29] left-[90.32%] right-[1.88%] top-[3px]" data-name="tabler:number-45-small">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[33.33%]" data-name="Vector">
            <div className="absolute inset-[-12.5%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9167 12.0833">
                <path d={svgPaths.p1a1e300} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[45px] left-[14px] top-[1032px] w-[312px]" data-name="Button">
        <div className="absolute bg-[#070606] inset-0 rounded-[14px]" />
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.44%_18.27%_22.22%_18.27%] leading-[normal] not-italic text-[20px] text-center text-white whitespace-pre-wrap">Add to cart</p>
      </div>
      <div className="absolute left-[calc(83.33%+11px)] size-[45px] top-[1032px]" data-name="Favorite button">
        <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.5 34.4062">
            <path d={svgPaths.p19e89c80} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[196px] left-[15px] top-[749px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct} />
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
      <div className="absolute h-[199px] left-[calc(33.33%+52px)] top-[749px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct1} />
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
      <div className="absolute h-[199px] left-[calc(83.33%+30px)] top-[748px] w-[153px]" data-name="Product card">
        <div className="absolute inset-[0_0_26.13%_0]" data-name="Picture of product">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPictureOfProduct2} />
        </div>
        <div className="absolute font-['Cairo:Regular',sans-serif] font-normal inset-[77.89%_17.65%_10.55%_0] leading-[normal] not-italic text-[14px] text-black whitespace-pre-wrap">
          <p className="mb-0">{` Midnight oxford`}</p>
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
    </div>
  );
}