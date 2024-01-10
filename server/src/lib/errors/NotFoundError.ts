import AppError from './AppError';

class NotFoundError extends AppError {
  protected constructor(message: string) {
    super(404, 'NotFoundError', message);
  }

  public static get default() {
    return new NotFoundError('Not found');
  }

  public static get pageNotFound() {
    return new NotFoundError('Page not found');
  }

  public static get userNotFound() {
    return new NotFoundError('User not found');
  }

  public static get recordNotFound() {
    return new NotFoundError('Record not found');
  }
}

export default NotFoundError;
