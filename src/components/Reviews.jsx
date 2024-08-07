import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
axios.defaults.withCredentials = true

function Reviews() {
  const { id } = useParams()
  const [reviews, setReviews] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef(null) // Reference to the form

  const postReview = async (e) => {
    try {
      e.preventDefault()
      let form = new FormData(e.target)
      let formObject = Object.fromEntries(form.entries())
      formObject.food_id = id
      console.log(formObject)
      let { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/reviews/`,
        formObject
      )
      if (data.error) {
        setErrorMessage(data.error)
      } else {
        getReviews() // Refresh the reviews after a successful post
        formRef.current.reset() // Clear the form
        setSelectedRating(0) // Reset the rating
      }
    } catch (err) {
      console.error(err.message)
    }
  }
  //handle star rating
  const [selectedRating, setSelectedRating] = useState(0)
  const getReviews = async () => {
    let { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/reviews?food_id=${id}`
    )
    setReviews(data)
  }
  useEffect(() => {
    getReviews()
  }, [id]) // include id as a dependency to refetch reviews when id changes

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
    <div>
      <div className="grid px-20 lg:py-10 gap-4">
        {/* total reviews */}
        <div className="lg:underline lg:underline-offset-[70px] text-xl lg:text-2xl font-serif font-bold">
          REVIEWS ({reviews.length})
        </div>
        {/* average rating */}
        <div className="flex">
          <div className="lg:text-xl font-serif font-bold mr-3">RATING</div>
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
        <form onSubmit={postReview} ref={formRef}>
          <div className=" my-10 space-y-4">
            <div className="text-xl lg:text-2xl font-serif font-bold">
              Leave a comment
            </div>
            <div className="gap-3 space-x-2">
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
            <div className="flex gap-5">
              <button className=" bg-slate-800 text-white py-1 px-4 tracking-widest rounded-sm">
                POST COMMENT
              </button>
              {errorMessage && (
                <div className="place-content-center text-center text-red-500 text-sm">
                  {errorMessage}
                </div>
              )}
            </div>
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
    <>
      <div>
        <div className="flex lg:gap-5">
          <div>
            <img
              src={review.author.profile_image}
              alt="reviewer pic"
              className="rounded-full w-2/3"
            />
          </div>
          <div>
            <div className="flex gap-2 text-lg lg:text-xl font-bold">
              <div>{review.author.firstname}</div>
              <div>{review.author.lastname}</div>
            </div>
            <div className=" text-slate-400 text-sm">{review.review_date}</div>
            <div>
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
    </>
  )
}

export default Reviews
