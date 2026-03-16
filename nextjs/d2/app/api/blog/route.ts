import { NextResponse } from "next/server";

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || "http://localhost:8000";

export async function GET() {
  try {
    const res = await fetch(`${JSON_SERVER_URL}/blog`);
    if (!res.ok) {
      throw new Error(`JSON Server responded with status ${res.status}`);
    }
    const blogs = await res.json();
    return NextResponse.json({ Blog: blogs, success: true }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs from JSON Server:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const res = await fetch(`${JSON_SERVER_URL}/blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`JSON Server responded with status ${res.status}`);
    }
    const created = await res.json();
    return NextResponse.json(
      { message: "Blog created successfully", blog: created },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
      { status: 500 },
    );
  }
}
