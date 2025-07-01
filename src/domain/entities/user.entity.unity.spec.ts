import { ValidatorDomainException } from "../shared/exceptions/validator-domain.exception";
import { Email } from "../value-objects/email.vo";
import { Password } from "../value-objects/password.vo";
import { User } from "./user.entity";

describe("Domain > Entities > User", () => {

  describe("create", () => {
    it("should create a user when passing valid email and password", () => {
      const anEmail = 'test@test.com';
      const aPassword = 'test1234';

      const anUser = User.create({ email: anEmail, password: aPassword });

      expect(anUser).toBeInstanceOf(User);
      expect(anUser.getEmail()).toBe(anEmail);
      expect(anUser.getPassword()).not.toBe(aPassword); // Password should be hashed
      expect(anUser.comparePassword(aPassword)).toBe(true);
      expect(anUser.getId()).toBeDefined();
      expect(anUser.getId().length).toBe(36); // UUID length
      expect(anUser.getCreatedAt()).toBeInstanceOf(Date);
      expect(anUser.getUpdatedAt()).toBeInstanceOf(Date);
    });

    it("should throw an error when passing invalid email", () => {
      const anInvalidEmail = 'invalid-email';
      const aPassword = 'test1234';

      const anError = () => User.create({ email: anInvalidEmail, password: aPassword });
      expect(anError).toThrow(ValidatorDomainException);
    });

    it("should throw an error when passing invalid password", () => {
      const anEmail = 'test@test.com';
      const aInvalidPassword = '1234';

      const anError = () => User.create({ email: anEmail, password: aInvalidPassword });
      expect(anError).toThrow(ValidatorDomainException);
    });
  });

  describe('comparePassword', () => {
    it('should return true when the informed password matches with user password', () => {
      const anEmail = 'john@doe.com';
      const aPassword = '12345678';

      const anUser = User.create({ email: anEmail, password: aPassword });

      expect(anUser.getPassword()).not.toBe(aPassword);

      const isPasswordCorrect = anUser.comparePassword(aPassword);

      expect(isPasswordCorrect).toBe(true);
    });

    it('should return false when the informed password does not match with user password', () => {
      const anEmail = 'john@doe.com';
      const aPassword = '12345678';

      const anUser = User.create({ email: anEmail, password: aPassword });

      expect(anUser.getPassword()).not.toBe(aPassword);

      const isPasswordCorrect = anUser.comparePassword('wrong-password');

      expect(isPasswordCorrect).toBe(false);
    });
  });
});