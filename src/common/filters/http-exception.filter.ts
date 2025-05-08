import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiError } from '../exceptions/api-error';
import { ValidationError } from 'class-validator';

@Catch(ApiError, HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: ApiError | HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof ApiError
        ? exception.statusCode
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof ApiError
        ? exception.message
        : 'Internal server error';
    const details = exception instanceof ApiError ? exception.details : [];

    if (
      exception instanceof HttpException &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      status === HttpStatus.BAD_REQUEST
    ) {
      const responseError = exception.getResponse();
      const validationErrors = this.formatValidationErrors(responseError);

      return response.status(status).json({
        statusCode: status,
        message: 'Validation failed',
        details: validationErrors,
      });
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      details: details,
    });
  }

  formatValidationErrors(errors: any): string[] {
    const validationErrors: string[] = [];
    if (Array.isArray(errors)) {
      validationErrors.push(...errors);
    } else {
      const validationErrorList = (errors as ValidationError[]).map((error) => {
        const constraints = error.constraints
          ? Object.values(error.constraints)
          : [];
        return constraints.join(', ');
      });
      validationErrors.push(...validationErrorList);
    }
    return validationErrors;
  }
}
