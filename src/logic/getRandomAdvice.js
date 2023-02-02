import axios from "axios";

async function getRandomAdvice() {
  const response = await axios.get("https://api.adviceslip.com/advice");

  return {
    id: response.data.slip.id,
    text: response.data.slip.advice,
  };
}

export default getRandomAdvice;
