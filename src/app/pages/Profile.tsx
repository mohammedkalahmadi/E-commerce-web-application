import { useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import svgPaths from "../../imports/svg-k2urvqiv04";
import imgEllipse1 from "figma:asset/e9b20ea002e71ff1c56cfca0da4dfa22d6daa308.png";

function Time({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className={`font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] ${isDarkMode ? 'text-white' : 'text-black'} text-center`} style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function Battery({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Cap" opacity="0.4" />
          <rect fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery isDarkMode={isDarkMode} />
    </div>
  );
}

function Group({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-5.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
          <g id="Group">
            <path d={svgPaths.p2b538300} id="Vector" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p35bfcbc0} id="Vector_2" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1({ isDarkMode }: { isDarkMode?: boolean }) {
  return (
    <div className="absolute inset-[16.67%]" data-name="Group">
      <div className="absolute inset-[-5.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 21.3333">
          <g id="Group">
            <path d={svgPaths.p2b538300} id="Vector" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p35bfcbc0} id="Vector_2" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Profile() {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative size-full`} data-name="Profile">
      <div className={`-translate-x-1/2 absolute content-stretch flex items-start left-1/2 top-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm shadow-sm`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time isDarkMode={isDarkMode} />
          <Levels isDarkMode={isDarkMode} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 h-[65px] left-1/2 w-[402px]" data-name="navigation bar">
        <div className={`absolute ${isDarkMode ? 'bg-gray-800' : 'bg-[#d9d9d9]'} inset-0 rounded-t-3xl`} />
        <button className="absolute aspect-[24/24] left-[8.96%] right-[81.09%] top-[13px]" data-name="home button" onClick={() => navigate('/home')}>
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.6667 30">
              <path d={svgPaths.pa04bf00} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="absolute aspect-[24/24] left-[33.33%] right-[56.72%] top-[13px]" data-name="Favorite button" onClick={() => navigate('/favorites')}>
          <div className="absolute inset-[11.04%_8.33%_12.5%_8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 30.5833">
              <path d={svgPaths.p211c4300} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="absolute aspect-[24/24] left-[57.71%] right-[32.34%] top-[13px]" data-name="Cart" onClick={() => navigate('/cart')}>
          <div className="absolute inset-[8.33%_12.5%_8.33%_4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3333 33.3333">
              <path d={svgPaths.p2c2d2bc0} fill="var(--fill-0, black)" id="Vector" />
            </svg>
          </div>
        </button>
        <button className="absolute aspect-[24/24] left-[82.09%] right-[7.96%] top-[13px]" data-name="Profile">
          <Group isDarkMode={isDarkMode} />
        </button>
      </div>
      <p className={`-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[51px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} text-center top-[62px] w-[139px] whitespace-pre-wrap`}>Profile</p>
      
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`absolute right-4 top-[70px] p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors duration-200 z-10`}
      >
        {isDarkMode ? (
          <Sun size={20} className="text-yellow-400" />
        ) : (
          <Moon size={20} className="text-gray-600" />
        )}
      </button>
      
      <div className="absolute h-[144px] left-[calc(16.67%+57px)] top-[121px] w-[154px]">
        <img alt="" className="absolute block max-w-none size-full rounded-full" height="144" src={imgEllipse1} width="154" />
      </div>
      <p className={`-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[43px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} text-center top-[286px] w-[189px] whitespace-pre-wrap`}>Welcome Khalid</p>
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[35px] leading-[normal] left-[7px] not-italic text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[362px] w-[119px] whitespace-pre-wrap`}>Account</p>
      <button className={`absolute left-0 top-[395px] w-full h-[42px] cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} onClick={() => navigate('/personalinfo')}>
        <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[62px] not-italic text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[10px] w-[129px] whitespace-pre-wrap`}>Personal Inforamtion</p>
        <div className="absolute left-[25px] size-[29px] top-[7px]" data-name="Profile">
          <Group1 isDarkMode={isDarkMode} />
        </div>
        <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[13px]" data-name="Arrow Right-In">
          <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
              <path d={svgPaths.p1409e300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <button className={`absolute left-0 top-[437px] w-full h-[39px] cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} onClick={() => navigate('/paymentmethods')}>
        <div className="absolute left-[26px] size-[29px] top-[6px]" data-name="Card-payment">
          <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 18.125">
              <path d={svgPaths.p3dffa680} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
        <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[23px] leading-[normal] left-[61px] not-italic text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[6px] w-[106px] whitespace-pre-wrap`}>Payment Method</p>
        <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[12px]" data-name="Arrow Right-In">
          <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
              <path d={svgPaths.p1409e300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <button className={`absolute left-0 top-[476px] w-full h-[43px] cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`} onClick={() => navigate('/orders')}>
        <div className="absolute left-[26px] size-[29px] top-[5px]" data-name="Box">
          <div className="absolute inset-[5.21%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9792 25.9792">
              <path clipRule="evenodd" d={svgPaths.p25ab75e0} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <div className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[22px] leading-[normal] left-[66px] not-italic text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[5px] w-[44px] whitespace-pre-wrap`}>
          <p className="mb-0">Orders</p>
          <p>&nbsp;</p>
        </div>
        <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[7px]" data-name="Arrow Right-In">
          <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
              <path d={svgPaths.p1409e300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[31px] leading-[normal] left-[8px] not-italic text-[16px] ${isDarkMode ? 'text-white' : 'text-black'} top-[525px] w-[137px] whitespace-pre-wrap`}>Settings</p>
      <button className={`absolute left-0 top-[556px] w-full h-[49px] cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
        <div className="absolute left-[30px] size-[29px] top-[11px]" data-name="Language">
          <div className="absolute inset-[20.83%_16.67%_20.83%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-5.88%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9587 19.3337">
                <path d={svgPaths.p14d618e0} id="Vector" stroke={isDarkMode ? "var(--stroke-0, white)" : "var(--stroke-0, black)"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.41667" />
              </svg>
            </div>
          </div>
        </div>
        <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[66px] not-italic text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[13px] w-[109px] whitespace-pre-wrap`}>Language</p>
        <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[13px]" data-name="Arrow Right-In">
          <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
              <path d={svgPaths.p1409e300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <button className={`absolute left-0 top-[605px] w-full h-[43px] cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
        <div className="absolute left-[30px] size-[29px] top-[6px]" data-name="Global">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.375 25.375">
              <path d={svgPaths.p1862950} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
        <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[27px] leading-[normal] left-[66px] not-italic text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[8px] w-[85px] whitespace-pre-wrap`}>Country</p>
        <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[6px]" data-name="Arrow Right-In">
          <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
              <path d={svgPaths.p1409e300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
      </button>
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
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[23px] leading-[normal] left-[16px] not-italic text-[16px] ${isDarkMode ? 'text-white' : 'text-black'} top-[657px] w-[46px] whitespace-pre-wrap`}>Help</p>
      <button className={`absolute left-0 top-[688px] w-full h-[45px] cursor-pointer ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
        <div className="absolute left-[32px] size-[29px] top-[7px]" data-name="Questions">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1667 24.1667">
              <path clipRule="evenodd" d={svgPaths.p21b5f00} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
        <p className={`absolute font-['Cairo:Regular',sans-serif] font-normal h-[25px] leading-[normal] left-[67px] not-italic text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[9px] w-[192px] whitespace-pre-wrap`}>Frequently Asked Questions</p>
        <div className="absolute left-[calc(83.33%+32px)] size-[29px] top-[7px]" data-name="Arrow Right-In">
          <div className="absolute inset-[13.73%_29.36%_13.73%_32.44%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0783 21.0388">
              <path d={svgPaths.p1409e300} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
            </svg>
          </div>
        </div>
      </button>
      <div className={`-translate-x-1/2 absolute font-['Cairo:Light',sans-serif] font-light h-[38px] leading-[normal] left-[calc(16.67%+134.5px)] not-italic text-[12px] ${isDarkMode ? 'text-gray-400' : 'text-black'} text-center top-[758px] w-[203px] whitespace-pre-wrap`}>
        <p className="mb-0">{`Terms Of Use           Privacy Policy`}</p>
        <p>{`Version v4.8 `}</p>
      </div>
    </div>
  );
}