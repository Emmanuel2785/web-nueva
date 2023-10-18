import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mogoose";
import Nav_db from "@/models/Nav_db";

export async function GET(request, { params }) {
  try {
    connectDB();
    const navFound = await Nav_db.findById(params.id);
    if (!navFound)
      return NextResponse.json(
        {
          message: "Nav_db not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(navFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json(); //request body la info que sele manda a postaman
    const navUpDated = await Nav_db.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(navUpDated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const navUpDeleted = await Nav_db.findByIdAndDelete(params.id);

    if (!navUpDeleted)
      return NextResponse.json(
        {
          message: "Nav_db not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(navUpDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
