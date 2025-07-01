import { UseCaseException } from "../usercase.exception";

export class CredentialsNotValidUsecaseException extends UseCaseException {
  constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
    this.name = CredentialsNotValidUsecaseException.name;
  }
}