import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    const { db } = await connectToDatabase();
    const body = await request.json();
    const { password } = body;

    if (!password) {
        return NextResponse.json({ message: "Password is required" }, { status: 400 });
    }

    const config = await db.collection("vegeta").findOne({});
    if (!config || !config.password_hash) {
        return NextResponse.json({ message: "Configuration not found" }, { status: 404 });
    }

    const isValid = await bcrypt.compare(password, config.password_hash);
    if (!isValid) {
        return NextResponse.json({ message: "Incorrect password" }, { status: 403 });
    }

    return NextResponse.json({ message: "Valid password" });
}
