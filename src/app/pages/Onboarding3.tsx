import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-kkgq6q9za6";
import imgLogoElegant from "figma:asset/d3909c58fd454ca0038053dec81c7ab802cb56b4.png";
import imgRectangle1107 from "figma:asset/ad642feda1b736d0be0775e9815e5aeab65b25ba.png";

function Group() {
  return (
    <div className="absolute contents left-[160px] top-[584px]">
      <div className="absolute bg-[#9000ff] h-[5px] left-[192px] rounded-[16px] top-[584px] w-[35px]" />
      <div className="absolute bg-[#e5eef7] h-[5px] left-[176px] rounded-[16px] top-[584px] w-[8px]" />
      <div className="absolute bg-[#e5eef7] h-[5px] left-[160px] rounded-[16px] top-[584px] w-[8px]" />
    </div>
  );
}

export default function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative size-full" data-name="Onboarding 6">
      <div className="absolute left-[138px] size-[114px] top-[16px]" data-name="Logo Elegant">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoElegant} />
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[44px] leading-[normal] left-[90px] not-italic text-[16px] text-black top-[526px] w-[222px] whitespace-pre-wrap">Start you journey withe Elegant!</p>
      <button 
        className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[30px] leading-[normal] left-[349px] not-italic text-[16px] text-black top-[21px] w-[37px] whitespace-pre-wrap cursor-pointer"
        onClick={() => navigate('/home')}
      >
        Done
      </button>
      <div className="absolute h-[266px] left-px top-[246px] w-[402px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1107} />
      </div>
      <button 
        className="absolute left-[12px] size-[29px] top-[21px] cursor-pointer" 
        data-name="Back"
        onClick={() => navigate('/onboarding2')}
      >
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </button>
      <Group />
    </div>
  );
}
