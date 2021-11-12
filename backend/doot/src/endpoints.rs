use tide::{Request, Error};
use http_types::Body;

use diesel::prelude::*;
use diesel::pg::PgConnection;

use crate::models::Task;

pub async fn get_tasks(_req: Request<()>) -> tide::Result {
    use crate::schema::tasks::dsl::*;

    let conn = PgConnection::establish("postgres://debug:debug@postgres/doot").unwrap();
    if let Ok(results) = tasks.load::<Task>(&conn) {
        Ok(
            Body::from_json(&results)?.into()
        )
    } else {
        Err(Error::from_str(500, "Couldn't read tasks"))
    }
}

pub async fn create_task(req: Request<()>) -> tide::Result {
    Ok(format!("{:?}", req).into())
}
