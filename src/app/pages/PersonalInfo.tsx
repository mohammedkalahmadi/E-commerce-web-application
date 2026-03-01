import { useState } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from "../../imports/svg-9dwwcyqlgn";

const countries = [
  'Saudi Arabia',
  'United Arab Emirates',
  'Kuwait',
  'Qatar',
  'Bahrain',
  'Oman',
  'Egypt',
  'Jordan',
  'Lebanon',
  'United States',
  'United Kingdom',
  'France',
  'Germany',
  'Italy',
  'Spain',
  'Canada',
  'Australia',
  'India',
  'China',
  'Japan',
  'South Korea',
  'Brazil',
  'Mexico',
  'Turkey',
  'Pakistan',
  'Indonesia',
  'Malaysia',
  'Singapore',
  'Thailand',
  'Philippines',
];

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

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [name, setName] = useState('Mohammed Abdullah');
  const [email, setEmail] = useState('mohammed@example.com');
  const [phone, setPhone] = useState('+966 50 123 4567');
  const [country, setCountry] = useState('Saudi Arabia');
  const [address, setAddress] = useState('Jeddah, alnassem, abi bakr aljarai, building 6998');

  const handleSave = () => {
    alert('Personal information updated successfully!');
    navigate('/profile');
  };

  return (
    <div className="bg-white relative size-full overflow-y-auto" data-name="Personal Info">
      <div className="-translate-x-1/2 fixed content-stretch flex items-start left-1/2 top-0 bg-white z-10" data-name="Status Bar">
        <div className="content-stretch flex gap-[154px] items-center justify-center pb-[19px] pt-[21px] px-[16px] relative shrink-0 w-[402px]" data-name="Status Bar">
          <Time />
          <Levels />
        </div>
      </div>
      
      <p className="-translate-x-1/2 absolute font-['Cairo:Bold',sans-serif] font-bold h-[41px] leading-[normal] left-[calc(16.67%+133.5px)] not-italic text-[24px] text-black text-center top-[62px] w-[197px] whitespace-pre-wrap">Personal Info</p>
      
      <button className="absolute left-[22px] size-[29px] top-[68px] cursor-pointer" data-name="Back" onClick={() => navigate(-1)}>
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5625 23.5625">
            <path d={svgPaths.p3fd11b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </button>

      <div className="mt-[140px] px-6">
        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
          />
        </div>

        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
          />
        </div>

        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Phone</p>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px]"
          />
        </div>

        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Country</p>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full h-[50px] px-4 border-2 border-black rounded-full outline-none font-['Cairo:Medium',sans-serif] text-[16px] bg-white cursor-pointer"
          >
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <p className="font-['Cairo:Bold',sans-serif] text-[16px] mb-2">Address</p>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full h-[100px] px-4 py-3 border-2 border-black rounded-[20px] outline-none font-['Cairo:Medium',sans-serif] text-[16px] resize-none"
          />
        </div>

        <button 
          className="w-full h-[50px] bg-[#070606] rounded-[14px] text-white font-['Cairo:Bold',sans-serif] text-[20px] cursor-pointer mt-4"
          onClick={handleSave}
        >
          Save Changes
        </button>
      </div>

      <div className="h-[100px]" />
    </div>
  );
}
