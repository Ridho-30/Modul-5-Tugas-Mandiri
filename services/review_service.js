class ReviewService {
    static getReviews(bookId) {
        return ApiService.request(`/reviews?bookId=${bookId}&limit=50`, { method: 'GET' });
    }

    static addReview(bookId, rating, comment) {
        return ApiService.request('/reviews', {
            method: 'POST',
            body: JSON.stringify({ bookId, rating: parseInt(rating), comment })
        });
    }

    static deleteReview(id) {
        return ApiService.request(`/reviews/${id}`, { method: 'DELETE' });
    }
}
