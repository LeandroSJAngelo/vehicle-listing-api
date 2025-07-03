import { Utils } from "src/shared/utils/utils";
import { Entity } from "../shared/entities/entity";
import { UserValidatorFactory } from "../factories/user-validator.factory";
import { Email } from "../value-objects/email.vo";
import { Password } from "../value-objects/password.vo";

type UserCreate = {
  email: string;
  password: string;
}

export type UserWithDto = {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export class User extends Entity {
  private constructor(
    id: string,
    private email: Email,
    private password: Password,
    createdAt: Date,
    updateAt: Date,
    deletedAt: Date | null,
  ) {
    super(id, createdAt, updateAt, deletedAt);
    this.validate();
  }

  public static create({ email, password }: UserCreate): User {
    const id = Utils.generateUUID();
    const now = new Date();
    const emailVO = Email.create(email);
    const passwordVO = Password.create(password);

    return new User(id, emailVO, passwordVO, now, now, null);
  }

  public static with({ id, email, password, createdAt, updatedAt, deletedAt }: UserWithDto): User {
    const emailVO = Email.create(email);
    const passwordVO = Password.create(password);
    return new User(id, emailVO, passwordVO, createdAt, updatedAt, deletedAt);
  }

  protected validate(): void {
    UserValidatorFactory.create().validate(this);
  }

  public getEmail(): string {
    return this.email.getValue();
  }

  public getPassword(): string {
    return this.password.getValue();
  }

  public comparePassword(aPassword: string): boolean {
    return this.password.compare(aPassword);
  }
}