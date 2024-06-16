import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET all congratulations
export async function GET() {
  try {
    const congratulations = await prisma.congratulations.findMany();
    return NextResponse.json(
      {
        success: true,
        message: 'List of Congratulations',
        data: congratulations,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// CREATE a new congratulation
export async function POST(request) {
  try {
    const { name, comment, attendance } = await request.json();

    const newCongratulation = await prisma.congratulations.create({
      data: {
        name,
        comment,
        attendance,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Congratulation Created Successfully!',
        data: newCongratulation,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}
