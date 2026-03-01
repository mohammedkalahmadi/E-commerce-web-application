import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import svgPaths from "../../imports/svg-j2bawf9n9p";

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

export default function Filter() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
  const colors = ['Black', 'Brown', 'Tan', 'White', 'Blue'];

  const toggleSize = (size: number) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleApply = () => {
    // In a real app, this would apply filters to the product list
    navigate('/home');
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative size-full overflow-y-auto`} data-name="Filter page">
      <div className={`-translate-x-1/2 fixed ${isDarkMode ? 'bg-gray-800/95' : 'bg-white'} content-stretch flex items-start left-1/2 top-0 z-10`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time isDarkMode={isDarkMode} />
          <Levels isDarkMode={isDarkMode} />
        </div>
      </div>

      <button className="absolute left-[16px] size-[29px] top-[75px] z-20 cursor-pointer" data-name="Back" onClick={() => navigate(-1)}>
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>

      <p className={`absolute font-['Cairo:Bold',sans-serif] font-bold left-[60px] top-[75px] text-[24px] ${isDarkMode ? 'text-white' : 'text-black'}`}>Filters</p>

      <div className="mt-[140px] px-4">
        {/* Price Range */}
        <div className="mb-8">
          <p className={`font-['Cairo:Bold',sans-serif] text-[20px] mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Price Range</p>
          <div className="flex justify-between mb-2">
            <span className={`font-['Cairo:Medium',sans-serif] text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{priceRange[0]}SR</span>
            <span className={`font-['Cairo:Medium',sans-serif] text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{priceRange[1]}SR</span>
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
        </div>

        {/* Sizes */}
        <div className="mb-8">
          <p className={`font-['Cairo:Bold',sans-serif] text-[20px] mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Size</p>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => toggleSize(size)}
                className={`w-[45px] h-[45px] rounded-full border-2 flex items-center justify-center font-['Cairo:Medium',sans-serif] text-[16px] ${
                  selectedSizes.includes(size)
                    ? isDarkMode 
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-black text-white border-black'
                    : isDarkMode
                      ? 'border-gray-600 text-gray-300'
                      : 'border-gray-400 text-black'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="mb-8">
          <p className={`font-['Cairo:Bold',sans-serif] text-[20px] mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Color</p>
          <div className="flex flex-col gap-3">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                className="flex items-center gap-3"
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 ${
                    selectedColors.includes(color) 
                      ? isDarkMode ? 'border-purple-600' : 'border-black' 
                      : isDarkMode ? 'border-gray-600' : 'border-gray-400'
                  }`}
                >
                  {selectedColors.includes(color) && (
                    <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-purple-600' : 'bg-black'}`}></div>
                  )}
                </div>
                <span className={`font-['Cairo:Medium',sans-serif] text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{color}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="mb-8">
          <p className={`font-['Cairo:Bold',sans-serif] text-[20px] mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Brand</p>
          <div className="flex flex-col gap-3">
            {['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'].map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-5 h-5" />
                <span className={`font-['Cairo:Medium',sans-serif] text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => {
              setPriceRange([0, 1000]);
              setSelectedSizes([]);
              setSelectedColors([]);
            }}
            className={`flex-1 h-[50px] ${isDarkMode ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-black text-black'} border-2 rounded-[14px] font-['Cairo:Bold',sans-serif] text-[18px] transition-colors`}
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className={`flex-1 h-[50px] ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-black hover:bg-gray-800'} text-white rounded-[14px] font-['Cairo:Bold',sans-serif] text-[18px] transition-colors`}
          >
            Apply
          </button>
        </div>
      </div>

      <div className="h-[100px]" />
    </div>
  );
}