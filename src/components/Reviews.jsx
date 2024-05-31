function Reviews() {
  //passing reviews list to review()
  return (
    <div className="grid lg:grid-cols-3 bg-pink-200 border-t-2 py-5">
      <div className="grid col-span-2">
        <div>number reviews</div>
        <div>number stars</div>
        <hr />
        {/* form */}
        <div>
          <div>form for rating</div>
          <div>form for comment</div>
          <button className=" bg-gray-800 text-white">Submit</button>
        </div>
      </div>
    </div>
  )
}

function Review() {
  return (
    <div>
      <div className="flex bg-blue-600 gap-5">
        <div>pic</div>
        <div>firstname</div>
        <div>lastname</div>
      </div>
      <div>rating</div>
      <div>description</div>
    </div>
  )
}

export default Reviews
