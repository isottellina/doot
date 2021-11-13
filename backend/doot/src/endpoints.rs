use tide::{Request, Response, Error};
use http_types::Body;

use diesel::prelude::*;
use diesel::pg::PgConnection;

use crate::models::{Task, NewTask};

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

pub async fn create_task(mut req: Request<()>) -> tide::Result {
    use crate::schema::tasks::dsl::*;

    let data = req.body_json::<NewTask>().await?;
    let conn = PgConnection::establish("postgres://debug:debug@postgres/doot").unwrap();

    let new_task = diesel::insert_into(tasks)
        .values(&data)
        .get_result::<Task>(&conn)?;

    Ok(Body::from_json(&new_task)?.into())
}

pub async fn delete_task(req: Request<()>) -> tide::Result {
    use crate::schema::tasks::dsl::*;

    let id_tod = req.param("id")?.parse::<i32>()?;
    let conn = PgConnection::establish("postgres://debug:debug@postgres/doot").unwrap();

    diesel::delete(tasks.filter(id.eq(id_tod)))
        .execute(&conn)?;

    Ok(Response::new(200))
}
