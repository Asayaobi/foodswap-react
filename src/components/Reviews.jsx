import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

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

  //handle star rating
  const [selectedRating, setSelectedRating] = useState(0)

  const handleRatingChange = (rating) => {
    setSelectedRating(rating)
  }
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
        <form>
          <div className=" my-10 space-y-4">
            <div className="text-2xl font-serif font-bold">Leave a comment</div>
            <div className=" gap-3 space-x-2">
              <label>Taste Rating</label>
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    className="hidden"
                    onChange={() => handleRatingChange(star)}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    size="sm"
                    className={
                      star <= selectedRating
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }
                  />
                </label>
              ))}
            </div>
            <div className=" gap-3">
              <label>Comment</label>
            </div>
            <textarea
              rows="5"
              name="review_text"
              className=" w-full text-sm  bg-slate-100"
            ></textarea>

            <button className=" bg-slate-800 text-white py-1 px-4 tracking-widest rounded-sm">
              POST COMMENT
            </button>
          </div>
        </form>
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
          <div className=" text-slate-400 text-sm">{review.review_date}</div>
          <div className=" space-y-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={star <= review.rating ? faStar : null}
                className="text-slate-500"
              />
            ))}
            {/* <div>{review.rating}</div> */}
            <div className=" pb-8">{review.review_text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
