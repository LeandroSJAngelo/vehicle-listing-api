import { Injectable } from "@nestjs/common";
import { UserGateway } from "src/domain/repositories/user.gateway";
import { UserNotFoundUsecaseException } from "src/usecases/exceptions/user/user-not-found.usecase.exception";
import { Usecase } from "src/usecases/usecase";

export type FindUserInput = {
  id: string;
}

export type FindUserOutput = {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
};

@Injectable()
export class FindUserUsecase implements Usecase<FindUserInput, FindUserOutput> {
  constructor(private readonly userGateway: UserGateway) {}

  public async execute({ id }: FindUserInput): Promise<FindUserOutput> {
    const user = await this.userGateway.findById(id);

    if (!user) {
      throw new UserNotFoundUsecaseException(
        `User not found while finding user with id ${id} in ${FindUserUsecase.name}`,
        `Usuário não encontrado`,
        FindUserUsecase.name,
      );
    }

    const output: FindUserOutput = {
      id: user.getId(),
      email: user.getEmail(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };

    return output;
  }
}