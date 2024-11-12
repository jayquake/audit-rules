import React from "react";
import { Routes, Route } from "react-router-dom";
import ActivetabSuccess from "./Success/ActivetabSuccess";
import ActivetabFailures from "./Failures/ActivetabFailures";
import ArticleSetupSuccess from "./Success/ArticleSetupSuccess";
import ArticleSetupFailures from "./Failures/ArticleSetupFailures";
import FooterLandmarkSuccess from "./Success/FooterLandmarkSuccess";
import FooterLandmarkFailures from "./Failures/FooterLandmarkFailures";
import IframelabelingSuccess from "./Success/IframelabelingSuccess";
import IframelabelingFailures from "./Failures/IframelabelingFailures";
import IncorrectMainLandmarkSuccess from "./Success/Incorrect-main-landmarkSuccess";
import IncorrectMainLandmarkFailures from "./Failures/IncorrectmainlandmarkFailures";
import CopyOfScrollFocusSuccess from "./Success/Copy-of-scroll-focusSuccess";
import CopyOfScrollFocusFailures from "./Failures/Copy-of-scroll-focusFailures";
import MainLandmarkSuccess from "./Success/Main-landmarkSuccess";
import MainLandmarkFailure from "./Failures/Main-landmarkFailure";
import MultipleMainLandmarksFailure from "./Failures/Multiple-main-landmarksFailure";
import MultipleMainLandmarksSuccess from "./Success/Multiple-main-landmarksSuccess";

const ContextRoutes = () => (
  <>
    <Route path="active-tab_success" element={<ActivetabSuccess />} />
    <Route path="active-tab_failure" element={<ActivetabFailures />} />
    <Route path="article-setup_success" element={<ArticleSetupSuccess />} />
    <Route path="article-setup_failure" element={<ArticleSetupFailures />} />
    <Route path="footer-landmark_success" element={<FooterLandmarkSuccess />} />
    <Route path="footer-landmark_failure" element={<FooterLandmarkFailures />} />
    <Route path="iframe-labeling_success" element={<IframelabelingSuccess />} />
    <Route path="iframe-labeling_failure" element={<IframelabelingFailures />} />
    <Route path="incorrect-main-landmark_success" element={<IncorrectMainLandmarkSuccess />} />
    <Route path="incorrect-main-landmark_failure" element={<IncorrectMainLandmarkFailures />} />
    <Route path="copy-of-scroll-focus_success" element={<CopyOfScrollFocusSuccess />} />
    <Route path="copy-of-scroll-focus_failure" element={<CopyOfScrollFocusFailures />} />
    <Route path="main-landmark_success" element={<MainLandmarkSuccess />} />
    <Route path="main-landmark_failure" element={<MainLandmarkFailure />} />
    <Route path="multiple-main-landmarks_success" element={<MultipleMainLandmarksSuccess />} />
    <Route path="multiple-main-landmarks_failure" element={<MultipleMainLandmarksFailure />} />
  </>
);

export default ContextRoutes;
