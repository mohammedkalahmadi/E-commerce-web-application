import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-42duq65mmp";
import imgLogoElegant from "figma:asset/d3909c58fd454ca0038053dec81c7ab802cb56b4.png";
import imgRectangle1106 from "figma:asset/d13e52c3d37581af011aef5b0bc059cd2ade00e6.png";

function Group() {
  return (
    <div className="absolute contents left-[168px] top-[587px]">
      <div className="absolute bg-[#9000ff] h-[5px] left-[168px] rounded-[16px] top-[587px] w-[35px]" />
      <div className="absolute bg-[#e5eef7] h-[5px] left-[211px] rounded-[16px] top-[587px] w-[8px]" />
      <div className="absolute bg-[#e5eef7] h-[5px] left-[227px] rounded-[16px] top-[587px] w-[8px]" />
    </div>
  );
}

export default function Onboarding1() {
  const navigate = useNavigate();

  return (
    <div className="bg-white relative size-full" data-name="Onboarding 4">
      <div className="absolute left-[138px] size-[114px] top-[16px]" data-name="Logo Elegant">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoElegant} />
      </div>
      <p className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[44px] leading-[normal] left-[29px] not-italic text-[16px] text-black top-[529px] w-[344px] whitespace-pre-wrap">{`All the brands from all over the world in one place! `}</p>
      <button 
        className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[30px] leading-[normal] left-[349px] not-italic text-[16px] text-black top-[21px] w-[37px] whitespace-pre-wrap cursor-pointer"
        onClick={() => navigate('/home')}
      >
        Skip
      </button>
      <Group />
      <div className="absolute h-[289px] left-0 top-[225px] w-[402px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1106} />
      </div>
      <button 
        className="absolute flex items-center justify-center left-[353px] size-[29px] top-[825px] cursor-pointer"
        onClick={() => navigate('/onboarding2')}
      >
        <div className="flex-none rotate-180">
          <div className="relative size-[29px]" data-name="Back">
            <div className="absolute inset-[9.38%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
                <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
