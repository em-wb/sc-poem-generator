function getResponse(response) {
  new Typewriter("#output-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 60,
    cursor: "",
  });
}

function getApiInfo() {
  return url;
}

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  const protagonist = document.getElementById("protagonist").value;
  const topic = document.getElementById("topic").value;
  const apiKey = "f9a74e38f278fb4dtffa389bo754ad40";
  const context =
    "You are an AI assistant who loves creating five-line poems in the style of an Irish limerick that are lighthearted and fun. Please ensure each line of the poem is wrapped in a <p></p> element.";
  const prompt = `Please write a poem about ${protagonist} on the topic ${topic}`;
  const url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("hey", prompt, url);
  document.getElementById("output-container").classList.remove("hidden");
  new Typewriter("#loading", {
    strings: "...",
    loop: true,
    delay: 60,
    autoStart: true,
    cursor: "",
  });
  axios.get(url).then(getResponse);
});
