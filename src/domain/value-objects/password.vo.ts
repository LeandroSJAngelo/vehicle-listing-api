// src/domain/value-objects/password.vo.ts
import { Utils } from "src/shared/utils/utils";
import { ValidatorDomainException } from "../shared/exceptions/validator-domain.exception";

export class Password {
  constructor(private readonly value: string) {}

  public static create(raw: string): Password {
    if (raw.length < 8) {
      throw new ValidatorDomainException(
        `Error while validating User Password`,
        `Password deve ter pelo menos 8 caracteres`,
        Password.name
      );
    }
    return new Password(Utils.encryptPassword(raw));
  }

  public compare(raw: string): boolean {
    return Utils.comparePassword(raw, this.value);
  }

  public getValue(): string {
    return this.value;
  }
}
