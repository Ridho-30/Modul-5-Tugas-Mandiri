class MemberService {
    static getMembers(params = {}) {
        const query = new URLSearchParams(params).toString();
        return ApiService.request(`/members${query ? '?' + query : ''}`, { method: 'GET' });
    }

    static getMemberDetail(id) {
        return ApiService.request(`/members/${id}`, { method: 'GET' });
    }

    static updateMemberStatus(id, isActive, maxBorrowLimit) {
        return ApiService.request(`/members/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ isActive, maxBorrowLimit })
        });
    }
}
