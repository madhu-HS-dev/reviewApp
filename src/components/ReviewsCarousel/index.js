// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  getDetails = reviewsList => {
    const {index} = this.state
    const reviewDetails = reviewsList[index]
    return reviewDetails
  }

  render() {
    const {reviewsList} = this.props
    const reviewDetails = this.getDetails(reviewsList)
    const {imgUrl, username, companyName, description} = reviewDetails
    return (
      <div className="review-bg-container">
        <h1 className="review-heading">Reviews</h1>
        <div className="review-container">
          <img src={imgUrl} alt={username} />
          <div className="arrows-container">
            <button
              type="button"
              onClick={this.onLeftArrow}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>

            <p className="user-name">{username}</p>
            <button
              type="button"
              onClick={this.onRightArrow}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
