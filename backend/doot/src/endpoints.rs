use tide::Request;
use http_types::{Body, convert::json};

pub async fn get_tasks(_req: Request<()>) -> tide::Result {
    Ok(
        Body::from_json(
            &json!([
                {
                    "id": 0i32,
                    "name": "Tâche back",
                    "desc": "Première tache",
                },
                {
                    "id": 1i32,
                    "name": "Tâche front",
                    "desc": "Deuxième tâche"
                }
            ])
        )?.into()
    )
}
