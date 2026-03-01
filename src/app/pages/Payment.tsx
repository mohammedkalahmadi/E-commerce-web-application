import { useNavigate } from 'react-router';
import { useStore } from '../context/StoreContext';
import { useTheme } from '../context/ThemeContext';
import svgPaths from "../../imports/svg-9dwwcyqlgn";
import { useState } from 'react';

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

export default function Payment() {
  const navigate = useNavigate();
  const { cart, getCartTotal } = useStore();
  const { isDarkMode } = useTheme();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('mada');

  const deliveryFee = 20;
  const taxRate = 0.15;
  const subtotal = getCartTotal();
  const tax = subtotal * taxRate;
  const total = subtotal + deliveryFee + tax;

  const handlePay = () => {
    // Mock payment - in real app would process payment
    alert('Payment successful! Your order has been placed.');
    navigate('/home');
  };

  const handleAddNewCard = () => {
    navigate('/addcard');
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative size-full overflow-y-auto`} data-name="Payment page">
      <div className={`-translate-x-1/2 fixed content-stretch flex items-start left-1/2 top-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white'} z-10`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time isDarkMode={isDarkMode} />
          <Levels isDarkMode={isDarkMode} />
        </div>
      </div>
      
      <p className={`-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[41px] leading-[normal] left-[calc(16.67%+133.5px)] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} text-center top-[62px] w-[197px] whitespace-pre-wrap`}>Payment</p>
      
      <button className="absolute left-[22px] size-[29px] top-[68px] cursor-pointer" data-name="Back" onClick={() => navigate(-1)}>
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>
      
      <p className={`absolute font-['Cairo:Bold',sans-serif] font-bold h-[35px] leading-[0] left-[11px] not-italic text-[0px] ${isDarkMode ? 'text-white' : 'text-black'} top-[141px] w-[99px] whitespace-pre-wrap`}>
        <span className="font-['Cairo:Bold',sans-serif] font-bold leading-[normal] text-[24px]">Products</span>
      </p>
      
      <div className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Cairo:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[calc(16.67%+55px)] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} text-center top-[163px] w-[46px]`}>
        <p className="leading-[normal] whitespace-pre-wrap">({cart.length})</p>
      </div>
      
      <div className="absolute flex h-px items-center justify-center left-0 top-[140px] w-[402px]">
        <div className="flex-none rotate-[0.14deg]">
          <div className="h-0 relative w-[402.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.001 1">
                <line id="Line 3" stroke={isDarkMode ? "var(--stroke-0, gray)" : "var(--stroke-0, black)"} x2="402.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <p className={`absolute font-['Cairo:Bold',sans-serif] font-bold h-[30px] leading-[normal] left-[11px] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} top-[189px] w-[170px] whitespace-pre-wrap`}>{`Deliver to `}</p>
      
      <div className="absolute h-0 left-0 top-[189px] w-[405px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 405 1">
            <line id="Line 15" stroke={isDarkMode ? "var(--stroke-0, gray)" : "var(--stroke-0, black)"} x2="405" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[22px] leading-[normal] left-[49px] not-italic text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[239px] w-[338px] whitespace-pre-wrap`}>Jeddah, alnassem, abi bakr aljarai, building 6998</p>
      
      <div className="absolute h-0 left-0 top-[280px] w-[402px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402 1">
            <line id="Line 14" stroke={isDarkMode ? "var(--stroke-0, gray)" : "var(--stroke-0, black)"} x2="402" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      
      <p className={`absolute font-['Cairo:Bold',sans-serif] font-bold h-[44px] leading-[normal] left-[11px] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} top-[291px] w-[189px] whitespace-pre-wrap`}>Payment method</p>
      
      <button 
        className="absolute left-[19px] size-[22px] top-[344px]"
        onClick={() => setSelectedPaymentMethod('mada')}
      >
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p3e0fdf80} fill={selectedPaymentMethod === 'mada' ? "var(--fill-0, #9000ff)" : isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>
      
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[54px] not-italic text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[345px] w-[62px] whitespace-pre-wrap`}>{`Mada `}</p>
      
      <button 
        className="absolute font-['Cairo:Medium',sans-serif] font-medium h-[23px] leading-[0] left-[70px] not-italic text-[#6005fe] text-[16px] top-[380px] w-[163px] whitespace-pre-wrap cursor-pointer"
        onClick={handleAddNewCard}
      >
        +Add new card
      </button>
      
      <button 
        className="absolute left-[19px] size-[22px] top-[419px]"
        onClick={() => setSelectedPaymentMethod('applepay')}
      >
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p3e0fdf80} fill={selectedPaymentMethod === 'applepay' ? "var(--fill-0, #9000ff)" : isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>
      
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[54px] not-italic text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[419px] w-[86px] whitespace-pre-wrap`}>Apple pay</p>
      
      <button 
        className="absolute left-[19px] size-[22px] top-[465px]"
        onClick={() => setSelectedPaymentMethod('cod')}
      >
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p3e0fdf80} fill={selectedPaymentMethod === 'cod' ? "var(--fill-0, #9000ff)" : isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>
      
      <p className={`absolute font-['Cairo:Medium',sans-serif] font-medium h-[24px] leading-[0] left-[54px] not-italic text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'} top-[465px] w-[146px] whitespace-pre-wrap`}>Pay when delivered</p>
      
      <div className="absolute flex h-px items-center justify-center left-0 top-[502px] w-[402px]">
        <div className="flex-none rotate-[-0.14deg]">
          <div className="h-0 relative w-[402.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.001 1">
                <line id="Line 13" stroke={isDarkMode ? "var(--stroke-0, gray)" : "var(--stroke-0, black)"} x2="402.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute h-[68px] left-[calc(16.67%+6px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[514px] w-[264px]" data-name="Text field">
        <div className={`absolute ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-[#040303]'} border border-solid inset-[27.94%_0_0_0] rounded-[50px]`} />
        <input 
          type="text"
          placeholder="Enter promo code"
          className={`absolute inset-[27.94%_10%_0_6.44%] font-['Cairo:Bold',sans-serif] font-bold text-[14px] ${isDarkMode ? 'text-white placeholder-gray-500' : 'text-[#040303]'} bg-transparent outline-none`}
        />
        <p className={`absolute font-['Cairo:Bold',sans-serif] font-bold inset-[0_10.23%_58.82%_6.44%] leading-[normal] not-italic ${isDarkMode ? 'text-white' : 'text-[#040303]'} text-[24px] whitespace-pre-wrap`}>Code</p>
      </div>
      
      <button className="absolute h-[29px] left-[calc(16.67%+55px)] top-[604px] w-[159px] bg-[#4800c5] rounded-[14px] cursor-pointer" data-name="Button">
        <p className="absolute font-['Cairo:Medium',sans-serif] font-medium inset-[24.44%_18.27%_22.22%_18.27%] leading-[0] not-italic text-[16px] text-center text-white whitespace-pre-wrap">Check</p>
      </button>
      
      {/* Price Summary with Fixed Alignment */}
      <div className="absolute left-[20px] right-[20px] top-[655px] space-y-3">
        <div className="flex justify-between items-center">
          <p className={`font-['Cairo:Medium',sans-serif] font-medium text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Price</p>
          <p className={`font-['Cairo:Light',sans-serif] font-light text-[14px] ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>{subtotal.toFixed(2)} SR</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className={`font-['Cairo:Medium',sans-serif] font-medium text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>Delivery fee</p>
          <p className={`font-['Cairo:Light',sans-serif] font-light text-[14px] ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>{deliveryFee} SR</p>
        </div>
        
        <div className="flex justify-between items-center">
          <p className={`font-['Cairo:Medium',sans-serif] font-medium text-[16px] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>15% fee</p>
          <p className={`font-['Cairo:Light',sans-serif] font-light text-[14px] ${isDarkMode ? 'text-gray-400' : 'text-black'}`}>{tax.toFixed(2)} SR</p>
        </div>
      </div>
      
      <div className="absolute flex h-px items-center justify-center left-0 top-[745px] w-[402px]">
        <div className="flex-none rotate-[0.14deg]">
          <div className="h-0 relative w-[402.001px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 402.001 1">
                <line id="Line 3" stroke={isDarkMode ? "var(--stroke-0, gray)" : "var(--stroke-0, black)"} x2="402.001" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-[20px] right-[20px] top-[760px] flex justify-between items-center">
        <p className={`font-['Cairo:Bold',sans-serif] font-bold text-[25px] ${isDarkMode ? 'text-white' : 'text-black'} tracking-[-0.475px]`}>Total</p>
        <p className={`font-['Cairo:Bold',sans-serif] font-bold text-[24px] ${isDarkMode ? 'text-white' : 'text-black'}`}>{total.toFixed(2)} SR</p>
      </div>
      
      <button 
        className={`absolute h-[45px] left-[48px] top-[813px] w-[312px] ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-[#070606] hover:bg-gray-800'} rounded-[14px] cursor-pointer transition-colors`}
        data-name="Button"
        onClick={handlePay}
      >
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[24.44%_18.27%_22.22%_18.27%] leading-[normal] not-italic text-[20px] text-center text-white whitespace-pre-wrap">Pay</p>
      </button>

      <div className="h-[100px]" />
    </div>
  );
}