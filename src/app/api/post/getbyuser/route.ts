import PostService from "@/classes/Posts";
import { NextResponse } from "next/server";
import TokenService from "@/classes/Token";

// Endpoint para obtener todos los posts de un usuario específico
export async function POST(req: Request) {
  try {
    // Verificar la autenticación JWT
    const authorizationHeader = req.headers.get("Authorization");

    if (!authorizationHeader) {
      return NextResponse.json(
        { message: "Token de autorización no proporcionado" },
        { status: 401 }
      );
    }

    const token = authorizationHeader.split(" ")[1];

    const decodedToken = TokenService.verifyToken(
      token,
      process.env.JWT_SECRET as string
    ); // Reemplaza "tu-clave-secreta" con tu clave secreta

    if (!decodedToken) {
      return NextResponse.json({ message: "Token no válido" }, { status: 401 });
    }
    const { userId } = await req.json();
    const posts = await PostService.getAllByUserId(userId);
    return NextResponse.json(posts);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(error.message);
    }
  }
}
