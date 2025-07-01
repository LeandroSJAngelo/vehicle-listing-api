import { z } from "zod";
import { User } from "../entities/user.entity";
import { Validator } from "../../shared/validators/validator";
import { ZodUtils } from "src/shared/utils/zod-utils";
import { ValidatorDomainException } from "../shared/exceptions/validator-domain.exception";
import { Email } from "../value-objects/email.vo";
import { Password } from "../value-objects/password.vo";

export class UserZodValidator implements Validator<User> {
  private constructor() {}

  public static create(): UserZodValidator {
    return new UserZodValidator();
  }

  public validate(input: User): void {
    try {
      this.getZodSchema().parse(input);
    } catch (error) {
      const message = ZodUtils.formatZodError(error);
      throw new ValidatorDomainException(
        `Error while validating User ${input.getId()}: ${message}`,
        `Os dados informados não são válidos para criação do usuário: ${message}`,
        UserZodValidator.name
      );
    }
  }

  private getZodSchema() {
    const zodSchema = z.object({
      id: z.string().uuid(),
      email: z.instanceof(Email),
      password: z.instanceof(Password),
      createdAt: z.date(),
      updatedAt: z.date(),
    });

    return zodSchema;
  }
}