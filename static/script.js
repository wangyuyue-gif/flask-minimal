const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    const darkThemeEnabled = document.body.classList.toggle("dark-theme");

    themeToggle.textContent = darkThemeEnabled
        ? "切换到浅色主题"
        : "切换到深色主题";
});
