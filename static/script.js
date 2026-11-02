const themeToggle = document.querySelector("#theme-toggle");
const themeStorageKey = "selected-theme";

function applyTheme(theme) {
    const darkThemeEnabled = theme === "dark";

    document.body.classList.toggle("dark-theme", darkThemeEnabled);

    themeToggle.textContent = darkThemeEnabled
        ? "切换到浅色主题"
        : "切换到深色主题";
}

const savedTheme = localStorage.getItem(themeStorageKey);
applyTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme")
        ? "light"
        : "dark";

    localStorage.setItem(themeStorageKey, nextTheme);
    applyTheme(nextTheme);
});
