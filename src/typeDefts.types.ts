export interface IResourceFilterInput {
  show: ResourceFilterEnum
}

export enum ResourceFilterEnum {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export interface IBoardsQueryArgs {
  filter: IResourceFilterInput
}
