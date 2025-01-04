"use server";

import {
  CreateAuthSession,
  destroySession,
  removeLogedInUserSession,
} from "@/libs/auth";
import { hashUserPassword, verifyPassword } from "@/libs/hash";
import { CreateUser, getExistingUserByEmail } from "@/utils/postingData";
import { redirect } from "next/navigation";

export async function Signup(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const password = formData.get("password");
  const termsChecked = formData.get("termsChecked") === "on";

  let errors = {};

  if (!name || name.trim() === 0) {
    errors.name = "Name is required";
  } else if (name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (name.trim().length > 20) {
    errors.name = "Name must be at most 20 characters";
  }

  // Name Validation
  if (!name || name.trim() === 0) {
    errors.name = "Name is required";
  } else if (name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters long";
  } else if (name.trim().length > 20) {
    errors.name = "Name must be at most 20 characters long";
  } else if (!/^[a-zA-Z\s]+$/.test(name)) {
    errors.name = "Name must contain only letters and spaces";
  }
  // Email Validation
  if (!email || email.trim() === 0) {
    errors.email = "Email is required";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "Invalid email format";
  }

  // Phone Validation
  if (!phone || phone.trim() === 0) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{7,12}$/.test(phone)) {
    errors.phone = "Phone number must be 7 to 12 digits long";
  }

  // Password Validation
  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must contain at least one uppercase letter";
  } else if (!/[a-z]/.test(password)) {
    errors.password = "Password must contain at least one lowercase letter";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must contain at least one number";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.password = "Password must contain at least one special character";
  }

  // Terms and Conditions Validation
  if (!termsChecked) {
    errors.termsChecked = "You must agree to the terms and conditions";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  const isDuplicateUser = await CreateUser({
    name,
    email,
    phone,
    password: hashedPassword,
  });
  if (isDuplicateUser?.error?.message) {
    return {
      errors: {
        error: isDuplicateUser?.error?.message,
      },
    };
  }
  const { userId } = isDuplicateUser;
  await CreateAuthSession(userId);
  return redirect(`/`);
}

export async function Signin(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email || email.trim() === 0) {
    errors.email = "Email is required";
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "Invalid email format";
  }
  if (!password) {
    errors.password = "Password is required";
  }

  const excistingUser = await getExistingUserByEmail(email);
  if (!excistingUser) {
    return {
      errors: {
        email: "User with this email not found",
      },
    };
  }
  const isPasswordCorrect = verifyPassword(excistingUser.password, password);
  if (!isPasswordCorrect) {
    return {
      errors: {
        password: "Password is incorrect",
      },
    };
  }
  await CreateAuthSession(excistingUser._id);
  return redirect(`/`);
}

export async function Signout() {
  await destroySession();
  return redirect(`/`);
}
