import User from '#models/user'
import logger from '@adonisjs/core/services/logger'
import { createAuthValidator } from '#validators/auth'
import { errors } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'
import router from '@adonisjs/core/services/router'
export default class LoginController {

  async index({ inertia,request,session }: HttpContext) {
    const users = await User.all()
   
    session.flashAll()
    return inertia.render('auth/login', {users})
  }
  async login({ request, response, auth, inertia,session }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const payload = await request.validateUsing(createAuthValidator)

    const user = await User.findBy('email', email)
    console.log(user)
    if (user === null) {
      // response.redirect().back({
      //   errors: {
      //     message: 'Crendetials is Wrong',
      //   },
      // })
      session.flash('errors', {
        type: 'error',
        message: 'Thanks for contacting. We will get back to you'
      })
   
      // return 'aasa';
      // return response
      //   .redirect()
      //   .withQs
      //   .toRoute('auth.login').with('')

      // return response.redirect().toRoute('home', {
      //   errors: {
      //     message: 'Crendetials is Wrong',
      //   },
      // })
    }
    // if (!isValidPassword) {
    //   // Controller Anda
    //   return inertia.render('auth/login', {
    //     errors: {
    //       message: 'Crendetials is Wrong',
    //     },
    //   })
    // }

    // await auth.use('web').login(isValidPassword)

    return response.redirect().toRoute('auth.login')
  }
}
