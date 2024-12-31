document.querySelector('.cta-button').addEventListener('click', () => {
    // Simulating user ID check
    const uid = null; // Replace with actual user authentication logic

    // Selecting screen elements
    const splashScreen = document.querySelector('.splash-screen');
    const welcomeScreen = document.querySelector('.welcome-screen');
    const homeScreen = document.querySelector('.home-screen');

    // Hide splash screen
    splashScreen.style.display = 'none';

    // Navigate to the appropriate screen based on UID
    if (uid === null) {
        welcomeScreen.style.display = 'flex';
    } else {
        homeScreen.style.display = 'flex';
    }
});
