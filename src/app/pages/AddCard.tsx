import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-9dwwcyqlgn";

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

export default function AddCard() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSave = () => {
    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
      alert('Please fill in all fields');
      return;
    }
    alert('Card added successfully!');
    navigate('/payment');
  };

  return (
    <div className="bg-white relative size-full overflow-y-auto" data-name="Add Card">
      <div className="-translate-x-1/2 fixed content-stretch flex items-start left-1/2 top-0 bg-white z-10" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[41px] leading-[normal] left-[calc(16.67%+133.5px)] not-italic text-[24px] text-black text-center top-[62px] w-[197px] whitespace-pre-wrap">Add New Card</p>
      
      <button className="absolute left-[22px] size-[29px] top-[68px] cursor-pointer" data-name="Back" onClick={() => navigate(-1)}>
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </button>

      <div className="mt-[140px] px-6">
        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Card Number</p>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength={19}
            className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
          />
        </div>

        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Card Holder Name</p>
          <input
            type="text"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="John Doe"
            className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
          />
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Expiry Date</p>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
            />
          </div>
          <div className="flex-1">
            <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">CVV</p>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              maxLength={3}
              className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
            />
          </div>
        </div>

        <button 
          className="w-full h-[50px] bg-[#070606] rounded-[14px] text-white font-['Cairo:Bold',sans-serif] text-[20px] cursor-pointer mt-8"
          onClick={handleSave}
        >
          Save Card
        </button>
      </div>

      <div className="h-[100px]" />
    </div>
  );
}
