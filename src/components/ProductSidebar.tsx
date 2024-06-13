function ProductSidebar() {
  return (
    <div className="sidebar">
      {/* TODO: replace with Shark Ninja image */}
      <img src="https://dummyimage.com/100x100/FFFFFF.png" alt="" />
      <h1>Shark Ninja</h1>
      <p>Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System</p>
      {/* TODO: Add very light top and bottom border around chips */}
      <div className="keywordChips">
        <div className="chip">Pantry</div>
        <div className="chip">Obsolete</div>
        <div className="chip">Blender</div>
        <div className="chip">Lightning Deal</div>
      </div>
    </div>
  );
}

export default ProductSidebar;
