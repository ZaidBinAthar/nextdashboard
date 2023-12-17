import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Initialize a variable to hold the SQLite database connection
let db = null;

// Handler for GET requests to retrieve all todos
export async function GET(req, res) {
    // Open a new connection if there is none
    if (!db) {
        db = await open({
            filename: "./todo.db",
            driver: sqlite3.Database,
        });
    }

    // Query to get all todos from the "todo" table
    const todos = await db.all("SELECT * FROM todo");

    // Return the todos as a JSON response with a 200 status code
    return new Response(JSON.stringify(todos), {
        headers: { "content-type": "application/json" },
        status: 200,
    });
}
export async function POST(req, res) {
    // Open a new connection if there is none
    if (!db) {
        db = await open({
            filename: "./todo.db",
            driver: sqlite3.Database,
        });
    }

    // Extract the task from the request body
    const { task } = await req.json();

    // Insert the new task into the "todo" table
    await db.run("INSERT INTO todo (task) VALUES (?)", task);

    // Return a success message as a JSON response with a 200 status code
    return new Response(
        JSON.stringify(
            { message: "success" },
            {
                headers: { "content-type": "application/json" },
                status: 200,
            }
        )
    );
}