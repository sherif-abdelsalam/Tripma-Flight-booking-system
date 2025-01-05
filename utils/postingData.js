import User from "@/models/users";

export const CreateUser = async ({ name, email, phone, password }) => {
  console.log(name, email, password, phone);

  const response = await fetch("http://localhost:3000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, phone, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    return {
      error: {
        message: data.message,
        code: data.e,
      },
    };
  }

  return data;
};

export const Reserve = (reservation) => {
  fetch("http://localhost:3000/api/reservations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservation),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

export async function getExistingUserByEmail(email) {
  const user = User.findOne({ email });

  if (!user) return null;
  return user;
}
