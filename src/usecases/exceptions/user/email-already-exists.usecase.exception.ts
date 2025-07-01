import { UseCaseException } from "../usercase.exception";

export class EmailAlreadyExistsException extends UseCaseException {
  constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
    this.name = EmailAlreadyExistsException.name;
  }
}