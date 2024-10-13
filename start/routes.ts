/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const LoginController = () => import('#controllers/login_controller')
router.on('/').renderInertia('home').as('home')

router.get('/auth/login',[LoginController, 'index']) .as('auth.login').use(middleware.guest())
router.post('/auth/authenticated',[LoginController, 'login']) .as('auth.authenticated')
 
 

