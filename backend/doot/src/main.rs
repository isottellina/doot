#[macro_use]
extern crate diesel;
#[macro_use]
extern crate diesel_migrations;

mod endpoints;
mod models;
mod schema;
mod db;

use tide::log;
use diesel_migrations::embed_migrations;

use crate::endpoints::{
    get_tasks,
    create_task,
    delete_task,
    patch_task
};
use crate::db::establish_connection;

embed_migrations!("migrations");

#[tokio::main]
async fn main() -> tide::Result<()> {
    log::start();

    // Run migrations
    let conn = establish_connection()?;
    embedded_migrations::run(&conn).expect("Couldn't run migrations");

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
