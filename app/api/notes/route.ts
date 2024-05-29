import { prisma } from "@/prisma/client";
import crypto from "crypto";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY as string;
const IV_LENGTH = 16;

function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY, "hex"),
    iv
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(text: string): string {
  const textParts = text.split(":");
  const iv = Buffer.from(textParts.shift()!, "hex");
  const encryptedText = Buffer.from(textParts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    Buffer.from(ENCRYPTION_KEY, "hex"),
    iv
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export async function POST(request: Request) {
  const headersList = headers();
  const apiKey = headersList.get("Api-Key");

  if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const formData: {
    content: string;
    oneTime?: boolean;
    expiresAt?: string;
  } = await request.json();

  if (!formData.content) {
    return new Response("Missing message", { status: 400 });
  }

  if (formData.expiresAt && formData.oneTime) {
    return new Response("Cannot set both oneTime and expiresAt", {
      status: 400,
    });
  }

  try {
    const encryptedMessage = encrypt(formData.content);
    const noteId = await prisma.secureNote.create({
      data: {
        content: encryptedMessage,
        oneTime: formData.oneTime || false,
        expiresAt: formData.expiresAt || null,
      },
      select: {
        id: true,
      },
    });

    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/notes?id=${noteId.id}`;
    return Response.json(shareUrl, { status: 201 });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}

export async function GET(request: Request) {
  const headersList = headers();
  const apiKey = headersList.get("Api-Key");

  if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response("Missing id", { status: 400 });
  }

  try {
    const note = await prisma.secureNote.findUnique({
      where: {
        id,
      },
    });

    if (!note) {
      return new Response("Note not found", { status: 404 });
    }

    if (note.expiresAt && new Date(note.expiresAt) < new Date()) {
      await prisma.secureNote.delete({
        where: {
          id,
        },
      });
      return new Response("Note expired", { status: 404 });
    }

    const decryptedMessage = decrypt(note.content);

    if (note.oneTime) {
      await prisma.secureNote.delete({
        where: {
          id,
        },
      });
    }

    return Response.json({
      ...note,
      content: decryptedMessage,
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }
}
