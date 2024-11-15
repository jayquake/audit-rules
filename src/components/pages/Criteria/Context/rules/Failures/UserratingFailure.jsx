import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Criteria: Context - User Rating - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="userRating-failure-1">
          <div>
            ★★★★★
          </div>
        </div>
        <div className="list-item" id="userRating-failure-2">
          <div>
            ★★★☆☆
          </div>
        </div>
        <div className="list-item" id="userRating-failure-3">
          <div>
            ★★☆☆☆
          </div>
        </div>
        <div className="list-item" id="userRating-failure-4">
          <div>
            ★★★★☆
          </div>
        </div>
        <div className="list-item" id="userRating-failure-5">
          <div>
            ★☆☆☆☆
          </div>
        </div>
        <div className="list-item" id="userRating-failure-6">
          <div>
            ★★★★★
          </div>
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);
