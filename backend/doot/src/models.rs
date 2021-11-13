use http_types::convert::{Serialize, Deserialize};

use crate::schema::tasks;

#[derive(Debug, Clone, Queryable, Serialize, Deserialize)]
pub struct Task {
    pub id: i32,
    pub name: String,
    pub description: Option<String>,
}

#[derive(Insertable, Debug, Deserialize)]
#[table_name="tasks"]
pub struct NewTask {
    pub name: String,
    pub description: String,
}

#[derive(Deserialize)]
pub struct PatchableTask {
    pub name: Option<String>,
    pub description: Option<String>,
}
