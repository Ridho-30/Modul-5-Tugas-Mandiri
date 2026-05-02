class AuthService {
    static login(email, password) {
        return ApiService.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    }

    static register(userData) {
        return ApiService.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    static getProfile() {
        return ApiService.request('/auth/me', { method: 'GET' });
    }

    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    }

    // Redirect to login if not authenticated
    static requireAuth() {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = 'login.html';
            return null;
        }
        return JSON.parse(localStorage.getItem('user'));
    }

    // Redirect to dashboard if already authenticated
    static redirectIfAuth() {
        const token = localStorage.getItem('token');
        if (token) {
            window.location.href = 'index.html';
        }
    }
}
