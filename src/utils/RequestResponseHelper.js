export default class RequestResponseHelper {
    static SUCCESS_STATUS_CODES = [200, 201];
    static USER_ERROR_STATUS_CODES = [400, 401, 404];
    static SERVER_ERROR_CODES = [408, 500, 503];

    static isSuccess(response) {
        return response != null && RequestResponseHelper.SUCCESS_STATUS_CODES.includes(response.status);
    }

    static isUserError(response) {
        return response != null && RequestResponseHelper.USER_ERROR_STATUS_CODES.includes(response.status);
    }

    static isServerError(response) {
        return response != null && RequestResponseHelper.SERVER_ERROR_CODES.includes(response.status);
    }   
}