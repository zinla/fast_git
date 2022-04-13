fn main() {
    run();
}

#[allow(warnings)]
fn run() {
    use sycamore::builder::prelude::*;
    use sycamore::prelude::*;
    use sycamore_router::{Route, Router, RouterProps};
    #[derive(Route)]
    enum AppRoutes {
        #[to("/")]
        Index,
        #[to("/about")]
        About,
        #[not_found]
        NotFound,
    }

    sycamore::render(|cx| {
        view! { cx,
            div(class="container md:container md:mx-auto p-5 min-w-screen min-h-screen"){
                Video()
            }
        }
    });

    #[component]
    fn Video<'a, G: Html>(cx: ScopeRef<'a>) -> View<G> {
        view! {cx,
                video(
                    class="",
                    autoplay=true,
                    width=1000,
                    height=900,
                    src="https://v9-default.ixigua.com/4d5684b8fd6fc6ded467b425511e954e/62517c7e/video/tos/cn/tos-cn-v-6f4170/035e475061044c0fa60481ab15c5a48e/?tg=TG@yhzyw&filename=1.mp4",
            )
        }
    }
}
