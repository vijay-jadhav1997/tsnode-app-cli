export const catchErrorBoilerplate = () => {
  const lines = [
    `import { Response } from "express"`,
    ``,
    `interface CatchError extends Error {`,
    `\tstatus? : number`,
    `}`,
    ``,
    `export const TryError = (message: string, status: number)=>{`,
    `\tconst err: CatchError = new Error(message)`,
    `\terr.status = status`,
    `\treturn err`,
    `}`,
    ``,
    `export const CatchError = (res: Response, err: unknown, prodMsg: string = "Internal Server error.")=>{`,
    `\tif(err instanceof Error){`,
    `\t\tconst message = (process.env.NODE_ENV === 'dev' ? err.message : prodMsg)`,
    `\t\tconst status: number = (err as CatchError).status || 500`,
    ``,
    `\t\treturn res.status(status).json({ message })`,
    `\t}`,
    `\treturn res.status(500).json({ message: "Internal server error." })`,
    `}`,
  ]
  return lines.join("\n")
}
