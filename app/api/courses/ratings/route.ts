// pages/api/ratings/route.ts

import { db } from "@/lib/db"; // Adjust this import based on your setup
import { NextResponse } from "next/server";

// Create Rating
export async function POST(request: Request) {
  const { value, courseId, userId } = await request.json();

  if (!value || !courseId || !userId) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  try {
    const rating = await db.rating.create({
      data: {
        value,
        courseId,
        userId,
      },
    });
    return NextResponse.json(rating, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create rating" },
      { status: 500 }
    );
  }
}

// Get all Ratings
export async function GET() {
  try {
    const ratings = await db.rating.findMany();
    return NextResponse.json(ratings);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get ratings" },
      { status: 500 }
    );
  }
}

// Update Rating
export async function PUT(request: Request) {
  const { id, value } = await request.json();

  if (!id || !value) {
    return NextResponse.json({ message: "Missing data" }, { status: 400 });
  }

  try {
    const updatedRating = await db.rating.update({
      where: { id },
      data: { value },
    });
    return NextResponse.json(updatedRating);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update rating" },
      { status: 500 }
    );
  }
}

// Delete Rating
export async function DELETE(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json({ message: "Missing ID" }, { status: 400 });
  }

  try {
    await db.rating.delete({ where: { id } });
    return NextResponse.json({ message: "Rating deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete rating" },
      { status: 500 }
    );
  }
}
