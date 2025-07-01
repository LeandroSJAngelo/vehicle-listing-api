import { Exception } from "src/shared/exceptions/exception";

export class UseCaseException extends Exception {
  constructor(
    internalMessage: string,
    externalMessage: string,
    context: string,
  ) {
    super(internalMessage, externalMessage, context);
  }
}