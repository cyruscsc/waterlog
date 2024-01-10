import AppError from './AppError';

class ForbiddenError extends AppError {
  protected constructor(message: string) {
    super(403, 'ForbiddenError', message);
  }

  public static get default() {
    return new ForbiddenError('Forbidden');
  }

  public static get notAllowedToAccess() {
    return new ForbiddenError('You are not allowed to access this content');
  }

  public static get notAllowedToPerform() {
    return new ForbiddenError('You are not allowed to perform this action');
  }
}

export default ForbiddenError;
