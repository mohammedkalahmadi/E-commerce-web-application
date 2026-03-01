import svgPaths from "./svg-1zqapmcwvt";
import imgLogoElegant from "figma:asset/d3909c58fd454ca0038053dec81c7ab802cb56b4.png";
import imgRectangle1107 from "figma:asset/3ce9be5d5bfa7d88547e1a12309c54aa53b917b6.png";

function Group() {
  return (
    <div className="absolute contents left-[167px] top-[584px]">
      <div className="absolute bg-[#9000ff] h-[5px] left-[183px] rounded-[16px] top-[584px] w-[35px]" />
      <div className="absolute bg-[#e5eef7] h-[5px] left-[167px] rounded-[16px] top-[584px] w-[8px]" />
      <div className="absolute bg-[#e5eef7] h-[5px] left-[226px] rounded-[16px] top-[584px] w-[8px]" />
    </div>
  );
}

export default function Onboarding() {
  return (
    <div className="bg-white relative size-full" data-name="Onboarding 5">
      <div className="absolute left-[138px] size-[114px] top-[16px]" data-name="Logo Elegant">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoElegant} />
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[44px] leading-[normal] left-[80px] not-italic text-[16px] text-black top-[526px] w-[241px] whitespace-pre-wrap">Comes to you where ever you are!</p>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[30px] leading-[normal] left-[349px] not-italic text-[16px] text-black top-[21px] w-[37px] whitespace-pre-wrap">Skip</p>
      <div className="absolute h-[266px] left-0 top-[246px] w-[402px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1107} />
      </div>
      <div className="absolute left-[12px] size-[29px] top-[21px]" data-name="Back">
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[353px] size-[29px] top-[831px]">
        <div className="flex-none rotate-180">
          <div className="relative size-[29px]" data-name="Back">
            <div className="absolute inset-[9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
                <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Group />
    </div>
  );
}