import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/user.models";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();

export async function GET(request) {
  try {
    const userId = await getDataFromToken(request);
    const user = await User.findById(userId).select("-password");
    return NextResponse.json({
      message: "User fetched successfully!",
      success: true,
      data: user,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
