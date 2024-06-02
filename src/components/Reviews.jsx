function Reviews() {
  const reviews = [
    {
      review_id: 1,
      reviewer_id: 2,
      food_id: 1,
      review_text: 'Taste just like Japan',
      rating: 4,
      review_date: 'Jun 16, 2024',
      author: {
        firstname: 'Justin',
        lastname: 'Brown',
        profile_image: 'https://randomuser.me/api/portraits/men/19.jpg'
      }
    },
    {
      review_id: 2,
      reviewer_id: 2,
      food_id: 1,
      review_text: 'Authentic!',
      rating: 3,
      review_date: 'Jun 17, 2024',
      author: {
        firstname: 'Sammy',
        lastname: 'Powel',
        profile_image: 'https://randomuser.me/api/portraits/men/9.jpg'
      }
    }
  ]
  //passing reviews list to review()
  const reviewList = reviews.map((review) => (
    <Review key={review.review_id} review={review} />
  ))
  return (
    <div className="mx-44">
      <div className="grid px-20 py-10 gap-4">
        {/* count the total reviews */}
        <div className="underline underline-offset-[70px] text-2xl font-serif font-bold">
          REVIEWS ({reviews.length})
        </div>
        {/* calculate the average rating */}
        <div className="text-2xl font-serif font-bold">
          RATING{' '}
          {Math.ceil(
            reviews.reduce((sum, review) => sum + review.rating, 0) /
              reviews.length
          )}
        </div>
        <hr />
        {/* form */}
        <div className=" my-10 space-y-4">
          <div className="text-2xl font-serif font-bold">Leave a comment</div>
          <div>Taste Rating</div>
          <div>Comment</div>
          <textarea
            name="review_text"
            className=" w-full text-sm pb-16 pr-16 bg-slate-100"
          ></textarea>
          <button className=" bg-slate-800 text-white py-1 px-4 tracking-widest">
            POST COMMENT
          </button>
        </div>
        {/* review list */}
        {reviewList}
      </div>
    </div>
  )
}

function Review({ review }) {
  return (
    <div>
      <div className="flex gap-5">
        <div>
          <img
            src={review.author.profile_image}
            alt="reviewer pic"
            className="rounded-full w-2/3"
          />
        </div>
        <div className=" space-y-4">
          <div className="flex pt-3 gap-2 text-xl font-bold">
            <div>{review.author.firstname}</div>
            <div>{review.author.lastname}</div>
          </div>
          <div className=" text-slate-300 text-sm">{review.review_date}</div>
          <div className=" space-y-4">
            <div>{review.rating}</div>
            <div className=" pb-8">{review.review_text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
