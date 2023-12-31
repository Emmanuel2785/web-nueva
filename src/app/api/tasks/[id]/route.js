import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mogoose";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  try {
    connectDB();
    const taskFound = await Task.findById(params.id);
    if (!taskFound)
      return NextResponse.json(
        {
          message: "Task not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(taskFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json(); //request body la info que sele manda a postaman
    const taskUpDated = await Task.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    return NextResponse.json(taskUpDated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const taskUpDeleted = await Task.findByIdAndDelete(params.id);

    if (!taskUpDeleted)
      return NextResponse.json(
        {
          message: "Task not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(taskUpDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
