import { useOptionalUser } from "~/utils";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteNote, getNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.noteId, "noteId not found");

  const note = await getNote({ id: params.noteId });
  if (!note) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ note });
};


export const action = async ({ params, request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);
  invariant(params.noteId, "noteId not found");

  await deleteNote({ id: params.noteId, userId });

  return redirect("/notes");
};

export default function NoteDetailsPage() {
  const data = useLoaderData<typeof loader>();
  const user = useOptionalUser(); // Get the current user

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6">
        <h3 className="text-3xl font-bold text-gray-800">{data.note.title}</h3>
        <p className="mt-1 text-sm text-gray-500">
          By: {data.note.user.firstName} {data.note.user.lastName}
        </p>
        <p className="mt-4 text-lg text-gray-600">{data.note.body}</p>
        <hr className="my-6 border-gray-300" />
        {user && data.note.user.id === user.id && (
          <Form method="post" className="text-right">
            <button
              type="submit"
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Delete Post
            </button>
          </Form>
        )}
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Note not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
