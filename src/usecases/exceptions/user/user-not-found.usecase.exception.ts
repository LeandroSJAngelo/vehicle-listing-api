import { UseCaseException } from "../usercase.exception";

export class UserNotFoundUsecaseException extends UseCaseException {
  constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
    this.name = UserNotFoundUsecaseException.name;
  }
}