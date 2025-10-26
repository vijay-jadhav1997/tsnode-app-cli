
export const authInterfaceBoilerplate = (): string => {
  
  const lines: string[] = [
    'import { Request } from "express"',
    'import { Types } from "mongoose"',
    '',
    'export interface SessionInterface {',
    '\tid: Types.ObjectId',
    '\tfullname: String',
    '\temail: String',
    '\tmobile: String',
    '\timage?: String | null',
    '}',
    '',
    'export interface SessionRequestInterface extends Request{',
    '\tsession?: SessionInterface',
    '}'
  ]
  
  return lines.join('\n')
}
