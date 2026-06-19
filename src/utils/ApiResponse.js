class ApiResponse {
    constructor(data, statusCode, message="Success"){
        this.data = data;
        this.statusCode = statusCode<400;
        this.success = success;
        this.message = message;
    }
}

export {ApiResponse};