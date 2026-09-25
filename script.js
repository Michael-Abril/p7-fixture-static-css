// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or respect OS setting
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Apply saved theme or OS setting
if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
}

// Toggle theme when button is clicked
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Save theme preference
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});