import { useNavigate } from 'react-router';
import { useState } from 'react';
import { CreditCard, Plus, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import svgPaths from "../../imports/svg-9dwwcyqlgn";

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

interface PaymentCard {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  type: 'visa' | 'mastercard' | 'mada';
}

export default function PaymentMethods() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [defaultCardId, setDefaultCardId] = useState('1');

  // Mock saved cards
  const savedCards: PaymentCard[] = [
    {
      id: '1',
      cardNumber: '**** **** **** 4532',
      cardHolder: 'Khalid Ahmed',
      expiryDate: '12/25',
      type: 'mada'
    },
    {
      id: '2',
      cardNumber: '**** **** **** 8765',
      cardHolder: 'Khalid Ahmed',
      expiryDate: '09/26',
      type: 'visa'
    }
  ];

  const getCardColor = (type: string) => {
    switch (type) {
      case 'mada':
        return 'bg-gradient-to-br from-purple-600 to-purple-800';
      case 'visa':
        return 'bg-gradient-to-br from-blue-600 to-blue-800';
      case 'mastercard':
        return 'bg-gradient-to-br from-red-600 to-red-800';
      default:
        return 'bg-gradient-to-br from-gray-600 to-gray-800';
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-gray-50 to-white'} relative size-full overflow-y-auto`} data-name="Payment Methods">
      {/* Status Bar */}
      <div className={`-translate-x-1/2 fixed content-stretch flex items-start left-1/2 top-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm z-20 shadow-sm`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time isDarkMode={isDarkMode} />
          <Levels isDarkMode={isDarkMode} />
        </div>
      </div>
      
      {/* Header */}
      <div className={`fixed top-[63px] left-0 right-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-sm z-10 shadow-sm`}>
        <div className="max-w-[402px] mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
              onClick={() => navigate(-1)}
            >
              <svg className="w-6 h-6" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
                <path d={svgPaths.p3fd11b00} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} />
              </svg>
            </button>
            <h1 className={`font-['Cairo:Bold',sans-serif] text-[26px] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Payment Methods
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[402px] mx-auto px-4 pt-[140px] pb-[40px]">
        {/* Add New Card Button */}
        <button
          onClick={() => navigate('/addcard')}
          className="w-full mb-6 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl p-4 flex items-center justify-center gap-3 font-['Cairo:Bold',sans-serif] text-[16px] transition-colors shadow-lg"
        >
          <Plus size={24} />
          Add New Card
        </button>

        {/* Cards List */}
        <div className="space-y-4">
          <h2 className={`font-['Cairo:Bold',sans-serif] text-[18px] ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            Saved Cards
          </h2>
          
          {savedCards.map((card) => (
            <div
              key={card.id}
              className={`${getCardColor(card.type)} rounded-2xl p-6 shadow-xl text-white relative overflow-hidden transition-transform hover:scale-105 cursor-pointer`}
              onClick={() => setDefaultCardId(card.id)}
            >
              {/* Card background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12" />
              </div>

              {/* Card content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <CreditCard size={40} className="opacity-80" />
                  {defaultCardId === card.id && (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                      <Check size={16} />
                      <span className="text-sm font-['Cairo:Bold',sans-serif]">Default</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <p className="font-['Cairo:Bold',sans-serif] text-[22px] tracking-wider">
                    {card.cardNumber}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs opacity-70 mb-1">Card Holder</p>
                    <p className="font-['Cairo:Bold',sans-serif] text-[14px]">
                      {card.cardHolder}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70 mb-1">Expires</p>
                    <p className="font-['Cairo:Bold',sans-serif] text-[14px]">
                      {card.expiryDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-['Cairo:Bold',sans-serif] text-[16px] uppercase">
                      {card.type}
                    </p>
                  </div>
                </div>
              </div>

              {/* Set as default button (only show if not default) */}
              {defaultCardId !== card.id && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setDefaultCardId(card.id);
                  }}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1 text-sm transition-colors"
                >
                  Set as default
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Other Payment Methods */}
        <div className="mt-8">
          <h2 className={`font-['Cairo:Bold',sans-serif] text-[18px] ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
            Other Methods
          </h2>
          
          <div className="space-y-3">
            <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-xl p-4 shadow-md flex items-center gap-4`}>
              <div className={`w-12 h-12 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-900'} rounded-full flex items-center justify-center`}>
                <span className="text-white font-bold text-xl"></span>
              </div>
              <div className="flex-1">
                <p className={`font-['Cairo:Bold',sans-serif] text-[16px] ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Apple Pay
                </p>
                <p className={`font-['Cairo:Regular',sans-serif] text-[12px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Fast and secure payment
                </p>
              </div>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'} rounded-xl p-4 shadow-md flex items-center gap-4`}>
              <div className={`w-12 h-12 ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'} rounded-full flex items-center justify-center`}>
                <span className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} font-bold text-xl`}>💵</span>
              </div>
              <div className="flex-1">
                <p className={`font-['Cairo:Bold',sans-serif] text-[16px] ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Cash on Delivery
                </p>
                <p className={`font-['Cairo:Regular',sans-serif] text-[12px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Pay when you receive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}