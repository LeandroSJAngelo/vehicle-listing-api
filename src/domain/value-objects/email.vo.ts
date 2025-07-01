import { ValidatorDomainException } from "../shared/exceptions/validator-domain.exception";

// src/domain/value-objects/email.vo.ts
export class Email {
  constructor(private readonly value: string) {}

  public static create(email: string): Email {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      throw new ValidatorDomainException(
        `Error while validating User Email: ${email}`,
        `O Email informado não é válido para criação do usuário`,
        Email.name
      );
    }
    return new Email(email.toLowerCase());
  }

  public getValue(): string {
    return this.value;
  }
}
