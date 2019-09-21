const db = require('./src/pg-connection');
console.log('db', db);
/**
 * Create user table
 */

const UserTable = async () => {
  const queryParameter = `CREATE TABLE IF NOT EXISTS 
    users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(128) NOT NULL,
        username VARCHAR(20) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(100) NOT NULL,
        website VARCHAR(255),
        address json,
        company json
    )`;
  await runQuery(queryParameter);

}

/**
 * Create Post table
 */

const PostTable = async () => {
  const queryParameter = `CREATE TABLE IF NOT EXISTS
    posts(
        id SERIAL PRIMARY KEY,
        title VARCHAR(1000) NOT NULL,
        body VARCHAR(2000),
        "userId" SERIAL REFERENCES users(id)
    )`;
  await runQuery(queryParameter);
}

/**
 * Create comment table
 */

const CommentTable = async () => {
  const queryParameter = `CREATE TABLE IF NOT EXISTS
    comments(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        body VARCHAR(2000),
        "postId" SERIAL REFERENCES posts(id)
    )`;
  await runQuery(queryParameter);
}

/**
 * Create Album table
 */

const AlbumTable = async () => {
  const queryParameter = `CREATE TABLE IF NOT EXISTS
    albums(
        id SERIAL PRIMARY KEY,
        title VARCHAR(1000),
        "userId" SERIAL REFERENCES users(id)
    )`;
  await runQuery(queryParameter);
}

/**
 * Create Photos Table
 */

const PhotosTable = async () => {
  const queryParameter = `CREATE TABLE IF NOT EXISTS
    photos(
        id SERIAL PRIMARY KEY,
        title VARCHAR(1000),
        "albumId" SERIAL REFERENCES albums(id)
    )`;
  await runQuery(queryParameter);
}

/**
 * Create Todos Table
 */

const TodosTable = async () => {
  const queryParameter = `CREATE TABLE IF NOT EXISTS
    todos(
        id SERIAL PRIMARY KEY,
        title VARCHAR(1000),
        completed BOOLEAN,
        "userId" SERIAL REFERENCES users(id)
    )`;
  await runQuery(queryParameter);
}


/**
 * Create pool connection and run query and remove from pool.
 * @param {*} queryText 
 */
async function runQuery(queryText) {
  console.log('query');
  db.any(queryText).then(res => {
    console.log('res', res);
    return;
  }, err => {
    console.log('err', err);
    return;
  });
}


async function run() {
  await UserTable();
  await PostTable();
  await CommentTable();
  await AlbumTable();
  await PhotosTable();
  await TodosTable();
}


run();