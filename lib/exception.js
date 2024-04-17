class AppwriteException extends Error {
  constructor(message, code, type, response) {
    super(message);
    this.code = code;
    this.type = type;
    this.response = response;
  }
}

module.exports = AppwriteException;