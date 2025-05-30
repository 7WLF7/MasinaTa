document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Răspunsuri corecte
  const answers = {
    q1: "c",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "d",
    q9: "c",
    q10: "c",
  };

  let score = 0;
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Obține nume și email
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validare minimă
  if (!name || !email) {
    alert("Te rog completează toate câmpurile.");
    return;
  }

  // Salvare în localStorage pentru leaderboard
  const userResult = { name, scor: score };
  localStorage.setItem("lastUser", JSON.stringify(userResult));

  // Redirecționează către leaderboard
  window.location.href = "leaderboard.html";
});
