"use server";

export default async function searchAction(_, formData) {
  console.log("searchAction", formData);
  const search = await formData.get();
  console.log("search", search);
}
