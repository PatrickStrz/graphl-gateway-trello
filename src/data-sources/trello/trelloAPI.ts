import { RESTDataSource, RequestOptions } from "apollo-datasource-rest"
import { ResourceFilterEnum } from "../../typeDefts.types"

export class TrelloAPI extends RESTDataSource {
  public baseURL = "https://api.trello.com/1/"

  public willSendRequest(request: RequestOptions) {
    request.params.set("key", process.env.TRELLO_API_KEY)
    request.params.set("token", process.env.TRELLO_API_TOKEN)
  }
  public async boards(): Promise<any> {
    //  https://developers.trello.com/reference#boardsboardid-1
    return this.get("/members/me/boards/")
  }

  public async boardsWithLists(boardFilters?: ResourceFilterEnum): Promise<any> {
    return this.get(`/members/me/boards/?lists=${GQLToApiResourceFilterMap[boardFilters]}`)
  }

  public async lists(boardId: string): Promise<any> {
    return this.get(`/boards/${boardId}/lists/`)
  }

  public async cards(listId: string): Promise<any> {
    return this.get(`/lists/${listId}/cards/`)
  }
}

// https://github.com/Microsoft/TypeScript/issues/24220#issuecomment-390608383  [index in ...]
export const GQLToApiResourceFilterMap: { [index in ResourceFilterEnum]: string } = {
  [ResourceFilterEnum.OPEN]: "open",
  [ResourceFilterEnum.CLOSED]: "closed",
}
