export class ApiError extends Error {
    statusCode: number;
    message: string;
    details: string[];
  
    constructor(statusCode: number, message: string, details: string[] = []) {
      super(message);
      this.statusCode = statusCode;
      this.message = message;
      this.details = details;
      this.name = this.constructor.name;
    }
  }