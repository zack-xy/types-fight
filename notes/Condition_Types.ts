interface IdLabel {
  id: number
}

interface NameLabel {
  name: string
}

type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel


function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented'
}

let a = createLabel('typesctipt')
let b = createLabel(2.8)
let c = createLabel(Math.random()? 'hello': 42)


type MessageOf<T extends {message: unknown}> = T['message']
interface Email {
  message: string
}

type EailMessageContents = MessageOf<Email>
