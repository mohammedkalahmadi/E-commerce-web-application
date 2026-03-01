import { useNavigate } from 'react-router';
import { useTheme } from '../context/ThemeContext';
import svgPaths from "../../imports/svg-9dwwcyqlgn";

const mockOrders = [
  {
    id: '1',
    date: '2026-02-20',
    status: 'Delivered',
    total: 450.75,
    items: [
      { name: 'Nike Air Max 90', quantity: 1, price: 450.75 }
    ]
  },
  {
    id: '2',
    date: '2026-02-15',
    status: 'In Transit',
    total: 380.50,
    items: [
      { name: 'Adidas Ultraboost', quantity: 1, price: 380.50 }
    ]
  },
  {
    id: '3',
    date: '2026-02-10',
    status: 'Delivered',
    total: 920.00,
    items: [
      { name: 'Nike Jordan 1', quantity: 2, price: 460.00 }
    ]
  },
  {
    id: '4',
    date: '2026-01-28',
    status: 'Delivered',
    total: 340.25,
    items: [
      { name: 'Puma RS-X', quantity: 1, price: 340.25 }
    ]
  },
];

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

export default function Orders() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative size-full overflow-y-auto`} data-name="Orders">
      <div className={`-translate-x-1/2 fixed content-stretch flex items-start left-1/2 top-0 ${isDarkMode ? 'bg-gray-800/95' : 'bg-white'} z-10`} data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time isDarkMode={isDarkMode} />
          <Levels isDarkMode={isDarkMode} />
        </div>
      </div>
      
      <p className={`-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[41px] leading-[normal] left-[calc(16.67%+133.5px)] not-italic text-[24px] ${isDarkMode ? 'text-white' : 'text-black'} text-center top-[62px] w-[197px] whitespace-pre-wrap`}>My Orders</p>
      
      <button className="absolute left-[22px] size-[29px] top-[68px] cursor-pointer" data-name="Back" onClick={() => navigate(-1)}>
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill={isDarkMode ? "var(--fill-0, white)" : "var(--fill-0, black)"} id="Vector" />
          </svg>
        </div>
      </button>

      <div className="mt-[140px] px-4">
        {mockOrders.map((order) => (
          <div key={order.id} className={`mb-4 p-4 border-2 ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-black bg-white'} rounded-[20px]`}>
            <div className="flex justify-between mb-2">
              <p className={`font-['Cairo:Bold',sans-serif] text-[18px] ${isDarkMode ? 'text-white' : 'text-black'}`}>Order #{order.id}</p>
              <span 
                className={`font-['Cairo:Medium',sans-serif] text-[14px] px-3 py-1 rounded-full ${
                  order.status === 'Delivered' 
                    ? isDarkMode ? 'bg-green-900/50 text-green-300' : 'bg-green-100 text-green-800'
                    : isDarkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-800'
                }`}
              >
                {order.status}
              </span>
            </div>
            <p className={`font-['Cairo:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              {new Date(order.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            {order.items.map((item, idx) => (
              <p key={idx} className={`font-['Cairo:Medium',sans-serif] text-[14px] ${isDarkMode ? 'text-gray-300' : 'text-black'} mb-1`}>
                {item.name} × {item.quantity}
              </p>
            ))}
            <div className={`mt-2 pt-2 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} flex justify-between`}>
              <p className={`font-['Cairo:Bold',sans-serif] text-[16px] ${isDarkMode ? 'text-white' : 'text-black'}`}>Total</p>
              <p className={`font-['Cairo:Bold',sans-serif] text-[16px] ${isDarkMode ? 'text-white' : 'text-black'}`}>{order.total.toFixed(2)} SR</p>
            </div>
          </div>
        ))}
      </div>

      <div className="h-[100px]" />
    </div>
  );
}