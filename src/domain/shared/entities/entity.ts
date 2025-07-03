export abstract class Entity {
  protected id: string;
  protected createdAt: Date;
  protected updatedAt: Date;
  protected deletedAt: Date | null = null;

  protected constructor(id: string, createdAt: Date, updatedAt: Date, deletedAt: Date | null) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }

  protected abstract validate(): void;

  public getId(): string {
    return this.id;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public getDeletedAt(): Date | null {
    return this.deletedAt;
  }

  protected hasUpdated() {
    this.updatedAt = new Date();
  }
}