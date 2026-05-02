class BookService {
    static getBooks(params = {}) {
        const query = new URLSearchParams(params).toString();
        return ApiService.request(`/books${query ? '?' + query : ''}`, { method: 'GET' });
    }

    static getBook(id) {
        return ApiService.request(`/books/${id}`, { method: 'GET' });
    }

    static addBook(bookData) {
        return ApiService.request('/books', {
            method: 'POST',
            body: JSON.stringify(bookData)
        });
    }

    static updateBook(id, bookData) {
        return ApiService.request(`/books/${id}`, {
            method: 'PUT',
            body: JSON.stringify(bookData)
        });
    }

    static deleteBook(id) {
        return ApiService.request(`/books/${id}`, { method: 'DELETE' });
    }
}
