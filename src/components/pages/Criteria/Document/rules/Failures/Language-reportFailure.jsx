import React, { useEffect } from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Document: Language Report - Failure";

// JavaScript function to set lang attribute
function setLangAttribute(lang) {
  document.documentElement.lang = lang;
}

export default () => {
  useEffect(() => {
    // Set failure cases on render
    const failureCases = ["", " ", "123", "en-us-es", "undefined", null];
    failureCases.forEach((lang, index) => {
      setTimeout(() => {
        setLangAttribute(lang);
        console.log(`Set lang="${lang}" for failure case ${index + 1}`);
      }, (index + 1) * 1000); // Delayed setting to distinguish cases
    });
  }, []);

  return (
    <IssueFailure
      itemContent={
        <>
          <div className="list-item" id="language-report-failure-1">
            <p>Failure 1: lang=""</p>
          </div>
          <div className="list-item" id="language-report-failure-2">
            <p>Failure 2: lang=" "</p>
          </div>
          <div className="list-item" id="language-report-failure-3">
            <p>Failure 3: lang="123"</p>
          </div>
          <div className="list-item" id="language-report-failure-4">
            <p>Failure 4: lang="en-us-es"</p>
          </div>
          <div className="list-item" id="language-report-failure-5">
            <p>Failure 5: lang="undefined"</p>
          </div>
          <div className="list-item" id="language-report-failure-6">
            <p>Failure 6: lang=null</p>
          </div>
        </>
      }
      itemDescription={itemDescription}
    />
  );
};
