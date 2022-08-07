import React from "react";
import StarRatings from "react-star-ratings";

function Review(props) {
  return (
    <div className="flex w-9/12">
      <div className="p-3 ">
        <img
          src="https://images.unsplash.com/photo-1518809595274-1471d16319b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80"
          className="rounded-full w-20 h-20 border-2 border-primary"
        />
      </div>
      <div className="flex-1  p-3">
        <div className="flex justify-between">
          <div className="w-1/2  flex">
            <p className="text-black mt-1 mr-3">Herve rated it</p>
            <div>
              <StarRatings
                rating={2}
                starRatedColor="#FDC46B"
                numberOfStars={5}
                starDimension="15px"
                starSpacing="3px"
                name="rating"
              />
            </div>
          </div>

          <div>
            <p className="text-black mt-1 mr-3 text-sm">Nov 15, 2015</p>
          </div>
        </div>
        <p className="text-sm my-3">
          After reading Clayton Christensen, Geoffrey Moore and Steve Blank, I
          was expecting a lot from The Lean Startup by Eric Ries. I was
          disappointed. It could be that I did not read it well or too fast, but
          I was expecting much more. But instead of saying what I did not like,
          let me begin with the good points. Just like the previous three
          authors, Ries shows that innovation may be totally counterintuitive:
          "My cofounders and I are determined to make new mistakes. We do
          everything wrong. We build a mi…
        </p>
      </div>
    </div>
  );
}

export default Review;
