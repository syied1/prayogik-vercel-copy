import { db } from "@/lib/db";

export async function POST(request) {
  const body = await request.json();
  const videoId = body.payload.id;

  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  const vdocipherToken = process.env.VDOCHIPER_HOOK_TOKEN;

  try {
    // Check if the hookId matches
    if (vdocipherToken !== token) {
      throw new Error("Token does not match");
    }

    // Check if the event is "video:ready"
    if (body.event === "video:ready") {
      // console.log("Video is ready");

      // update videoStatus in chapter
      await db.chapter.updateMany({
        where: {
          videoUrl: videoId,
        },
        data: {
          videoStatus: "ready",
        },
      });

      return new Response(
        JSON.stringify({
          success: true,
          message: "Chapter updated successfully",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // If the event type is not supported
    throw new Error("Event type not supported");
  } catch (error) {
    console.error("Error:", error.message);
    return new Response(
      JSON.stringify({
        error: true,
        message: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
