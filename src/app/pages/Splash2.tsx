import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import imgLogoElegant from "figma:asset/d3909c58fd454ca0038053dec81c7ab802cb56b4.png";

export default function Splash2() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding1');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-white relative size-full" data-name="Splash 4">
      <div className="absolute left-[87px] size-[228px] top-[323px]" data-name="Logo Elegant">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoElegant} />
      </div>
    </div>
  );
}
