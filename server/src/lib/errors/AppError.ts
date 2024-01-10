class AppError extends Error {
  protected statusCode: number;

  protected constructor(statusCode: number, name: string, message: string) {
    super();
    this.statusCode = statusCode;
    this.name = name;
    this.message = message;
  }

  public get status() {
    return this.statusCode;
  }
}

export default AppError;
