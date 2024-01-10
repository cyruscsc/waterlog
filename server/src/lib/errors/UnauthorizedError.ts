import AppError from './AppError';

class UnauthorizedError extends AppError {
  protected constructor(message: string) {
    super(401, 'UnauthorizedError', message);
  }

  public static get default() {
    return new UnauthorizedError('Unauthorized');
  }

  public static get invalidCredentials() {
    return new UnauthorizedError('Invalid credentials');
  }

  public static get invalidToken() {
    return new UnauthorizedError('Invalid token');
  }
}

export default UnauthorizedError;
