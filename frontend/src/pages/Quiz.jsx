import { useState } from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What color theme is the easiest to focus?",
      options: ["Black-White", "Blue-White", "Red-Yellow", "Red-Green"],
    },
    {
      question: "Which learning style suits you best?",
      options: ["Visual", "Auditory", "Reading/Writing", "Kinesthetic"],
    },
    {
      question: "How do you prefer studying?",
      options: ["With music", "In silence", "With visuals", "With discussions"],
    },
  ];

  const handleOptionClick = (index) => {
    setSelectedAnswer(index);

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = questions[currentQuestion].options[index];
    setAnswers(updatedAnswers);
  };

  const handleNext = async () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      try {
        await fetch("http://localhost:9000/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ answers }),
        });
        console.log("Answers submitted:", answers);
      } catch (err) {
        console.error("Error submitting quiz:", err);
      }

      navigate("/FileUpload");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#1a1528",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "80px",
      }}
    >
      <Box
        sx={{
          bgcolor: "#221b35",
          borderRadius: "20px",
          p: 4,
          width: { xs: "90%", md: "600px" },
          textAlign: "center",
          boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#C3A2FF">
          Take the <span style={{ color: "#9b88ff" }}>QUIZ</span>!
        </Typography>
        <Typography color="#ddd" mt={1} mb={3}>
          Let's DO this!
        </Typography>

        <Box
          sx={{
            border: "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "10px",
            p: 2,
            color: "white",
            textAlign: "center",
            mb: 3,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          {questions[currentQuestion].question}
        </Box>

        <Stack spacing={2}>
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => handleOptionClick(index)}
              sx={{
                color: selectedAnswer === index ? "white" : "#ddd",
                borderColor:
                  selectedAnswer === index
                    ? "#9b88ff"
                    : "rgba(255, 255, 255, 0.3)",
                borderRadius: "30px",
                fontWeight: selectedAnswer === index ? "bold" : "normal",
                "&:hover": {
                  bgcolor: "#7748ff",
                  borderColor: "#7748ff",
                  color: "white",
                },
              }}
            >
              {option}
            </Button>
          ))}
        </Stack>

        <Stack direction="row" justifyContent="center" spacing={1} mt={3}>
          {questions.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                bgcolor: index === currentQuestion ? "#9b88ff" : "#444",
                borderRadius: "50%",
                transition: "background 0.3s",
              }}
            />
          ))}
        </Stack>

        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            bgcolor: "#9b88ff",
            borderRadius: "30px",
            mt: 3,
            px: 4,
            "&:hover": { bgcolor: "#7748ff" },
          }}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === questions.length - 1 ? "FINISH" : "NEXT"}
        </Button>
      </Box>
    </Box>
  );
};

export default QuizPage;
