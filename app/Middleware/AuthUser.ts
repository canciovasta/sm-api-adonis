import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthUser {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    const token = ctx.request.headers().authorization

    if(!token) {
      return ctx.response.forbidden({ mensagem: 'token_invalid'})
    }

    await next()
  }
}
