export const authRouterBoilerplate = (): string => {
  
  const lines: string[] = [
    'import { Router } from "express"',
    'import { login, refreshToken, signup } from "../controller/auth.controller"',
    'import RefreshTokenMiddleware from "../middleware/refreshToken.middleware"',
    '',
    'const AuthRouter = Router()',
    '',
    "AuthRouter.post('/signup', signup)",
    "AuthRouter.post('/login', login)",
    "AuthRouter.post('/refresh-token', RefreshTokenMiddleware, refreshToken)",
    '',
    'export default AuthRouter',
  ]
  
  return lines.join('\n')
}
