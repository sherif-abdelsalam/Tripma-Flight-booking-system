import { Lucia } from "lucia";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import Session from "@/models/sessions";

// import Users from "@/models/ users";
// import Sessions from "@/models/sessions";

const adapter = new MongodbAdapter(
  mongoose.connection.collection("sessions"),
  mongoose.connection.collection("users")
);

const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    secure: process.env.NODE_ENV === "production",
  },
  getUserAttributes: (attributes) => {
    return {
      name: attributes.name,
    };
  },
});

export async function CreateAuthSession(userId) {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  // console.log("********************************");
  const cookieStore = await cookies();
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
}

export async function VerifyAuth() {
  const cookie = await cookies();
  const sessionCookie = cookie.get(lucia.sessionCookieName);
  // console.log(sessionCookie);
  if (!sessionCookie)
    return {
      user: null,
      session: null,
    };

  const sessionId = sessionCookie.value;
  if (!sessionId)
    return {
      user: null,
      session: null,
    };
  // console.log(sessionId);
  // console.log("==========================================");
  const result = await validateSession(sessionId);
  // console.log(result);
  // console.log("==========================================");

  try {
    if (result.session && result.session.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      const cookie = await cookies();
      cookie.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      const cookie = await cookies();
      cookie.set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }
  } catch (error) {}

  return result;
}

async function validateSession(sessionId) {
  try {
    // Find the session by ID
    let isSessionExisted = await Session.findOne({ _id: sessionId });
    isSessionExisted = isSessionExisted?.toObject();
    if (!isSessionExisted) {
      return { session: null, error: "Session not found" };
    }
    // Check if the session is fresh (you can define your own criteria for freshness)
    const isFresh = new Date() - isSessionExisted.expires_at < 0;
    // Return the session details
    return {
      session: {
        id: isSessionExisted._id,
        userId: isSessionExisted.user_id,
        expiresAt: isSessionExisted.expires_at,
        fresh: isFresh,
      },
      error: null,
    };
  } catch (error) {
    console.error("Error validating session:", error);
    return { session: null, error: "Error validating session" };
  }
}

export async function destroySession() {
  const verfied = await VerifyAuth();
  if (!verfied.session) {
    return {
      error: "Unauthorized",
    };
  }
  await lucia.invalidateSession(verfied.session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  const cookie = await cookies();
  cookie.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}
