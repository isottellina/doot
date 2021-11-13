use diesel::prelude::*;
use diesel::pg::PgConnection;

pub fn establish_connection() -> Result<PgConnection, ConnectionError> {
    PgConnection::establish("postgres://debug:debug@postgres/doot")
}
