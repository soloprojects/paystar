import React from "react";
import Modal from "./Modal";
import StarRatings from "react-star-ratings";
import Button from "./Button";

function ModalAgentReview(props) {
  return (
    <Modal isPay={true} name="Submit a review">
      <div className="flex flex-col items-center pb-10">
        <img
          src="https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80"
          className="rounded-full w-20 h-20 border-2 border-primary mt-5"
        />
        <p className="Agent_name pt-3">Odogwu Ebuka</p>

        <p className="Agent_review-text  scan_sub-text m-3">
          Help us improve by rating our agents. Submissions are strictly
          confidential.
        </p>

        <StarRatings
          rating={2}
          starRatedColor="#FDC46B"
          numberOfStars={5}
          starDimension="20px"
          starSpacing="5px"
          name="rating"
        />

        <textarea
          className="bg-graythree w-5/6 mt-3 h-32 rounded p-5 mb-5"
          placeholder="Additional Comments..."
        ></textarea>

        <Button
          width="182px"
          height="48px"
          bgColor="#FF6B35"
          name="Submit Review "
        />
      </div>
    </Modal>
  );
}

export default ModalAgentReview;
