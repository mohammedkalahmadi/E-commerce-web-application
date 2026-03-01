import imgLogoElegant from "figma:asset/d3909c58fd454ca0038053dec81c7ab802cb56b4.png";

export default function Splash() {
  return (
    <div className="bg-white relative size-full" data-name="Splash 3">
      <div className="absolute left-[284px] size-[206px] top-[334px]" data-name="Logo Elegant">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoElegant} />
      </div>
    </div>
  );
}