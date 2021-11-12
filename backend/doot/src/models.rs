use http_types::convert::{Serialize, Deserialize};

use crate::schema::tasks;

#[derive(Debug, Clone, Queryable, Serialize, Deserialize)]
pub struct Task {
    pub id: i32,
    pub name: String,
    pub description: Option<String>,
}

#[derive(Insertable, Debug)]
#[table_name="tasks"]
pub struct NewTask<'a> {
    pub name: &'a str,
    pub description: &'a str,
}
