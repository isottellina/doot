#[macro_use]
extern crate diesel;

mod endpoints;
mod models;
mod schema;

use tide::log;
use crate::endpoints::{
    get_tasks,
    create_task,
    delete_task,
    patch_task
};

#[tokio::main]
async fn main() -> tide::Result<()> {
    log::start();

    let mut app = tide::new();
    let mut collection_route = app.at("/api/tasks");

    collection_route.get(get_tasks);
    collection_route.post(create_task);

    let mut object_route = app.at("/api/tasks/:id");

    object_route.delete(delete_task);
    object_route.patch(patch_task);

    app.listen("0.0.0.0:8080").await?;
    Ok(())
}
