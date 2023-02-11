import { Component, VueComponent } from "vue3-oop";
import RouterStart from "@/router";
import { RouterView } from "vue-router";

@Component({
  providers: [RouterStart]
})
export class App extends VueComponent {
  render() {
    return <RouterView />
  }
}
