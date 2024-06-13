import sharkNinjaImage from "../assets/shark-ninja.png";

function ProductSidebar() {
  return (
    <div className="bg-white w-full sm:w-[512px] pt-6 shadow-lg h-100">
      <img src={sharkNinjaImage} alt="Shark Ninja" className="mx-auto" />
      <h1 className="text-[1.39rem] text-center font-normal mt-3">Shark Ninja</h1>
      <p className="text-md text-center mt-1 mb-5 text-[#A7B7C9] pl-6 pr-6">
        Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System
      </p>
      <div className="border-t border-b mb-6 pt-4 pb-4 pl-5 pr-5">
        <div className="chip">Pantry</div>
        <div className="chip">Obsolete</div>
        <div className="chip">Blender</div>
        <div className="chip">Lightning Deal</div>
      </div>
    </div>
  );
}

export default ProductSidebar;
