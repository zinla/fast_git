#[allow(dead_code)]
#[allow(unused)]
#[allow(non_snake_case)]

fn main() {
    use std::fs;
    use std::process::Command;

    fn generate_component(arguments: &Vec<String>) {
        let _ng_generate = Command::new("ng")
            .current_dir("/home/alen/Desktop/blog/blogangular/")
            .arg("g")
            .arg("c")
            .arg(&format!("articles/{}/{}", &arguments[1], &arguments[2]))
            .spawn()
            .expect("can't ng generate component");
    }
    fn write_html(arguments: &Vec<String>) {
        use std::thread;
        use std::time::{Duration, Instant};
        thread::sleep(Duration::from_secs(3));
        println!(
            "{}",
            &format!(
                "/home/alen/Desktop/blog/blogangular/src/app/articles/{}/{}/{}.component.html",
                &arguments[1], &arguments[2], &arguments[2]
            )
        );
        let mut html = format!("<div class={:?}>", format!("main-content"));
        html.push_str(&format!("<div style={:?}>", format!("width: 80vw")));
        html.push_str(&format!(
            "<app-markdown-preview [md_file]={:?}>",
            format!("'/markdown-files/{}/{}.md'", &arguments[1], &arguments[2])
        ));
        html.push_str(&format!("</app-markdown-preview></div></div>"));
        // println!("{}", &html);
        fs::write(
            &format!(
                "/home/alen/Desktop/blog/blogangular/src/app/articles/{}/{}/{}.component.html",
                &arguments[1], &arguments[2], &arguments[2]
            ),
            &html,
        )
        .unwrap();
    }
    fn create_md(arguments: &Vec<String>) {
        fs::write(
            &format!(
                "/home/alen/Desktop/blog/blogangular/src/markdown-files//{}/{}.md",
                &arguments[1], &arguments[2]
            ),
            &format!("## {}", &arguments[2]),
        )
        .unwrap();
    }
    pub fn run() {
        println!("The first arg is article dir second arg is post name");
        let arguments: Vec<String> = std::env::args().collect();
        println!("{:?}", arguments);
        generate_component(&arguments);
        write_html(&arguments);
        create_md(&arguments);
    }
    run();
}
