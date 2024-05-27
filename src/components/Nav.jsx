function Nav() {
  return (
    <>
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
    </>
  )
}

export default Nav
