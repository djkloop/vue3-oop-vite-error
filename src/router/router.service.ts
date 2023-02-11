import { createRouter, createWebHistory, type Router, type RouteRecordRaw } from "vue-router";
import { getCurrentApp, Hook, VueService } from "vue3-oop";



export class RouterService extends VueService {
  history = createWebHistory(import.meta.env.BASE_URL)
  router!: Router;
  
  get currentRoute() {
    return this.router.currentRoute.value
  }

  app = getCurrentApp()!

  initRoutes(routes: RouteRecordRaw[]) {
    this.router = createRouter({
      history: this.history,
      routes
    })
    this.app.use(this.router)
  }

  @Hook("BeforeUnmount")
  unmount() {
    this.history.destroy();
  }
}
