// logout event handler
const logoutHandler = async () => {
    try {
        const logout = await fetch('/api/users/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if (logout.ok) {
            document.location.replace('/');
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
};

// logout event listener
document
    .querySelector('#logout')
    .addEventListener('click', logoutHandler);