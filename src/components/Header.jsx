function Header() {
  return (
    <>
      {/* booking or intro */}
      <div className="relative h-96">
        <div
          className=" absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://preview.codeless.co/picante/default/wp-content/uploads/2018/04/shop_bg-compressed.jpg)`
          }}
        ></div>
        <div className=" absolute inset-0 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/tCCKNF0c/circle.png"
            // or https://i.postimg.cc/tCCKNF0c/circle.png https://i.postimg.cc/bYChMmRP/triangle.png https://i.postimg.cc/6p44gY1P/final-foodswap-001.png https://i.postimg.cc/ZnqCccdV/final-option2-001.png
            alt="logo"
            className=" h-96"
          />
        </div>
      </div>
      <div className="flex bg-slate-100 py-10 justify-center h-192">
        <img
          src="https://i.ibb.co/HCw1dTJ/message-001.jpg"
          alt="message from founder"
          className=" w-1/2"
        />
        <div className="flex items-center">
          <img
            src="https://img.theepochtimes.com/assets/uploads/2022/06/27/sharing-food.jpg"
            alt="sharing food"
            className="h-96"
          />
        </div>
      </div>
    </>
  )
}

export default Header
