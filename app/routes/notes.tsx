import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { getNoteListItems } from "~/models/note.server";
import { useOptionalUser } from "~/utils";

export const loader = async () => {
  const noteListItems = await getNoteListItems();
  return json({ noteListItems });
};

export default function NotesPage() {
  const data = useLoaderData<typeof loader>();
  const user = useOptionalUser();

  if (!data || !data.noteListItems) {
    return <div>Loading notes...</div>;
  }

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-green-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Blog</Link>
        </h1>

        <div className="flex items-center space-x-4">
          <Link to="/" className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800 active:bg-green-600">
            Home
          </Link>
          {user ? (
            <Form action="/logout" method="post">
              <button type="submit" className="rounded bg-green-600 px-4 py-2 text-white hover:bg-green-800 active:bg-red-500">
                Logout
              </button>
            </Form>
          ) : (
            <Link to="/login" className="rounded bg-green-700 px-4 py-2 text-white hover:bg-green-800 active:bg-green-600">
              Log In
            </Link>
          )}
        </div>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
        {user && (
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + New Post
          </Link>
        )}

          <hr />

          {data.noteListItems.length === 0 ? (
            <p className="p-4">No posts yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
