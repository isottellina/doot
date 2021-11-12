mod endpoints;

use tide::log;
use crate::endpoints::get_tasks;

#[tokio::main]
async fn main() -> tide::Result<()> {
    log::start();

    let mut app = tide::new();
    app.at("/api/tasks").get(get_tasks);
    app.listen("0.0.0.0:8080").await?;
    Ok(())
}
