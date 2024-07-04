import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
axios.defaults.withCredentials = true

function Reviews() {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const postReview = async (e) => {
    try {
      e.preventDefault()
      let form = new FormData(e.target)
      let formObject = Object.fromEntries(form.entries())
      formObject.food_id = id
      console.log(formObject)
      await axios.post('http://localhost:4000/reviews/', formObject)
      window.location.reload()
    } catch (err) {
      console.error(err.message)
    }
  }
  //handle star rating
  const [selectedRating, setSelectedRating] = useState(0)
  const getReviews = async () => {
    let { data } = await axios.get(
      `http://localhost:4000/reviews?food_id=${id}`
    )
    setReviews(data)
  }
  useEffect(() => {
    getReviews()
  }, [])

  const handleRatingChange = (rating) => {
    setSelectedRating(rating)
  }

  //calculate average rating
  const averageRating = Math.ceil(
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  )

  //passing reviews list to review()
  const reviewList = reviews.map((review) => (
    <Review key={review.review_id} review={review} />
  ))
  return (
    <div className="mx-44">
      <div className="grid px-20 py-10 gap-4">
        {/* total reviews */}
        <div className="underline underline-offset-[70px] text-2xl font-serif font-bold">
          REVIEWS ({reviews.length})
        </div>
        {/* average rating */}
        <div className="flex">
          <div className="text-xl font-serif font-bold mr-3">RATING</div>
          <div>
            {reviews.length > 0 ? (
              [...Array(averageRating)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-slate-500"
                />
              ))
            ) : (
              <span className="text-slate-500">No reviews yet</span>
            )}
          </div>
        </div>
        <hr />
        {/* form */}
        <form onSubmit={postReview}>
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
              className=" w-full text-sm  bg-slate-100 p-2"
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
            {[1, 2, 3, 4, 5].map((star) =>
              star <= review.rating ? (
                <FontAwesomeIcon
                  key={star}
                  icon={faStar}
                  className="text-slate-500"
                />
              ) : null
            )}
            <div className=" pb-8">{review.review_text}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
