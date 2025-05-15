document.getElementById("quiz-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    document.getElementById("result").innerHTML = `<p style="color:red;">Te rugăm să completezi numele și emailul.</p>`;
    return;
  }

  const raspunsuriCorecte = {
    q1: "c",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "b",
    q6: "b",
    q7: "a",
    q8: "d",
    q9: "c",
    q10: "c"
  };

  let scor = 0;
  let toateCompletate = true;

  for (let intrebare in raspunsuriCorecte) {
    const selected = document.querySelector(`input[name="${intrebare}"]:checked`);
    if (!selected) {
      toateCompletate = false;
      break;
    }
    if (selected.value === raspunsuriCorecte[intrebare]) {
      scor++;
    }
  }

  if (!toateCompletate) {
    document.getElementById("result").innerHTML = `<p style="color:red;">Te rugăm să răspunzi la toate întrebările.</p>`;
    return;
  }

const feedback = document.getElementById("feedback").value.trim();

if (!feedback) {
  document.getElementById("result").innerHTML = `<p style="color:red;">Te rugăm să completezi și feedbackul.</p>`;
  return;
}

let mesaj = `<p>Mulțumim, <strong>${name}</strong>! Ai răspuns corect la <strong>${scor}</strong> din 10 întrebări.</p>`;
mesaj += `<p>Feedbackul tău: <em>${feedback}</em></p>`;

  document.getElementById("result").innerHTML = mesaj;
});

// Dark mode toggle
document.getElementById("toggle-theme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("toggle-theme");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
