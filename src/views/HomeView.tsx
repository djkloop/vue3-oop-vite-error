import { VueComponent } from "vue3-oop"
import AboutView from "@/views/AboutView.vue"
import About from "@/views/About"


export default class HomeView extends VueComponent{
  render() {
    return (
      <div>
        <AboutView />
        <About />
      </div>
    )
  }
}
