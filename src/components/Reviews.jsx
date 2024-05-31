function Reviews() {
  const reviews = [
    {
      review_id: 1,
      reviewer_id: 2,
      food_id: 1,
      review_text: 'Taste just like Italy',
      rating: 5,
      review_date: 'Jun 16, 2024',
      author: {
        firstname: 'Justin',
        lastname: 'Bieber',
        profile_image: 'https://randomuser.me/api/portraits/men/59.jpg'
      }
    }
  ]
  //passing reviews list to review()
  const reviewList = reviews.map((review, index) => (
    <Review key={index} review={review} />
  ))
  return (
    <div className="grid lg:grid-cols-3 bg-purple-200 border-t-2 py-5">
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
        {/* review list */}
        {reviewList}
      </div>
    </div>
  )
}

function Review(props) {
  const review = props.review
  console.log('props', props)
  return (
    <div>
      <div className="flex bg-blue-600 gap-5">
        <div>
          <img src={review.author.profile_image} alt="reviewer pic" />
        </div>
        <div>{review.firstname}</div>
        <div>{review.lastname}</div>
      </div>
      <div>{review.rating}</div>
      <div>{review.review_text}</div>
    </div>
  )
}

export default Reviews
