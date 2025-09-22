import React, { useState } from "react";
import {
  FeedbackContainer,
  Form,
  InputGroup,
  Label,
  Select,
  TextArea,
  RatingContainer,
  Star,
  ErrorMessage,
  SubmitButton,
} from "../styles/FeedbackFormStyles";
import { API_URLS } from "../config/constants";
import PomPom from "../components/PomPom";

const FeedbackForm = () => {
  const [isUseful, setIsUseful] = useState("");
  const [experience, setExperience] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isUseful || !experience || !feedback || rating === 0) {
      setError("Please fill out all fields before submitting.");
      return;
    }

    setError("");

    const feedbackData = { isUseful, experience, feedback, rating };

    try {
      const response = await fetch(API_URLS.FEEDBACK.SUBMIT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      const data = await response.json();
      alert(`Feedback submitted successfully!`);

      setIsUseful("");
      setExperience("");
      setFeedback("");
      setRating(0);
    } catch (err) {
      console.error(err);
      alert("Error submitting feedback. Please try again.");
    }
  };

  return (
    <FeedbackContainer>
      <PomPom />
      <h2>Submit Feedback</h2>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="isUseful">Was e-ad useful in your studies?</Label>
          <Select
            id="isUseful"
            value={isUseful}
            onChange={(e) => setIsUseful(e.target.value)}
          >
            <option value="" disabled>
              Select option
            </option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="experience">How was your experience?</Label>
          <Select
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="" disabled>
              Select option
            </option>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="feedback">Suggestions</Label>
          <TextArea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here"
          />
        </InputGroup>

        <InputGroup>
          <Label>Rating</Label>
          <RatingContainer>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                filled={rating >= star}
                onClick={() => setRating(star)}
              >
                ★
              </Star>
            ))}
          </RatingContainer>
        </InputGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FeedbackContainer>
  );
};

export default FeedbackForm;
