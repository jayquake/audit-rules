import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "document : Viewport Scalability - Failure";

const FailureExamples = () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="viewport-scalability-failure-1">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
        </div>
        <div className="list-item" id="viewport-scalability-failure-2">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </div>
        <div className="list-item" id="viewport-scalability-failure-3">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=1.5"
          />
        </div>
        <div className="list-item" id="viewport-scalability-failure-4">
          <meta
            name="viewport"
            content="width=device-width, user-scalable=no, maximum-scale=2.0"
          />
        </div>
        <div className="list-item" id="viewport-scalability-failure-5">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
        </div>
        <div className="list-item" id="viewport-scalability-failure-6">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </div>
      </>
    }
    itemDescription={itemDescription}
  />
);

export default FailureExamples;
