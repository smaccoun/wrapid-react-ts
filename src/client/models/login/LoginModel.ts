

export interface ServerCredentials {

}

export interface ILoginModel {
  serverCredentials: ServerCredentials | null
}

export function initModel(): ILoginModel{
  return {
    serverCredentials: null
  }
}
