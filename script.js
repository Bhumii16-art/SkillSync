const resumeInput = document.getElementById("resumeInput");
const previewBox = document.getElementById("previewBox");
const toggleTheme = document.getElementById("toggleTheme");

resumeInput.addEventListener("input", () => {
  previewBox.textContent = resumeInput.value;
});

function download() {
  const content = resumeInput.value;
  const blob = new Blob([content], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "resume.txt";
  a.click();
}

toggleTheme.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }
});
