import { NextResponse } from "next/server";

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || "http://localhost:8000";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const res = await fetch(`${JSON_SERVER_URL}/blog/${id}`);
    if (!res.ok) {
      if (res.status === 404) {
        return NextResponse.json(
          { error: "Blog not found" },
          { status: 404 },
        );
      }
      throw new Error(`JSON Server responded with status ${res.status}`);
    }
    const blog = await res.json();
    return NextResponse.json({ Blog: blog, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog by id:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const res = await fetch(`${JSON_SERVER_URL}/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`JSON Server responded with status ${res.status}`);
    }
    const updated = await res.json();
    return NextResponse.json(
      { message: "Blog updated successfully", blog: updated },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const res = await fetch(`${JSON_SERVER_URL}/blog/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`JSON Server responded with status ${res.status}`);
    }
    return NextResponse.json(
      { message: "Blog deleted successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
