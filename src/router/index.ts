import { Injectable } from 'injection-js'
import type { RouterService } from './router.service'
import { routes } from "@/router/routes"

@Injectable()
export default class RouterStart {
  constructor(private routerService: RouterService) {
    routerService.initRoutes(routes)
  }
}

