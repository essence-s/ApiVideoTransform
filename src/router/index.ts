import { Router } from 'restify-router'
import transformRoute from './transform.router'
const PrincipalRouter = new Router()

PrincipalRouter.add('/api/v1', transformRoute)

export default PrincipalRouter