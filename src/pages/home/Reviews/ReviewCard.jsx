import React from 'react';

const ReviewCard = ({reviewCard}) => {
  const {review, user_photoURL, ratings, date, userName} = reviewCard;
  return (
    <div className="max-w-sm rounded-xl bg-white shadow p-6 border border-gray-100">
      {/* Quote Icon */}
      <div className="text-teal-500 text-4xl leading-none mb-2">❝</div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">
        {review}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-5"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={user_photoURL}
          alt="user"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-teal-700">{userName}</h3>
          <p className="text-gray-500 text-sm">
            Rated: {ratings} ⭐
          </p>
          <p className="text-gray-400 text-xs">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;