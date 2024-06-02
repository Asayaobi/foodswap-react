import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className=" bg-slate-800 h-20 flex justify-center items-center text-slate-400 text-sm gap-2">
        <div>© 2024 FOOD SWAP PROJECT BY </div>
        <Link to="https://portfolio-asaya.onrender.com">
          <div>ASAYAOBI</div>
        </Link>

        <div> ▲ ALL RIGHTS RESERVED</div>
      </div>
    </>
  )
}

export default Footer
