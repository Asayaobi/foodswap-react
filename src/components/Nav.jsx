function Nav() {
  return (
    <>
      <div className="flex flex-col bg-blue-200">
        <div className="bg-blue-600 h-80">
          {/* nav bar */}
          <div className="bg-pink-200 grid grid-cols-2 gap-10 justify-between content-start">
            <div className="bg-pink-600">
              <div>logo</div>
            </div>
            <div className="bg-blue-600 gap-10 flex justify-end">
              <div>home</div>
              <div>my kitchen</div>
              <div>profile</div>
              <div>log out</div>
            </div>
          </div>
        </div>
        {/* booking or intro */}
        <div className="bg-blue-400 flex justify-center items-center h-80">
          <div>pic</div>
          <div>intro text</div>
        </div>
      </div>
    </>
  )
}

export default Nav
