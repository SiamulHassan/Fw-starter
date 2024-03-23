import supabase from "./supabase";

export async function singUp({ fullName, email, password }) {
  // supabase signup method only takes email and password But we can provide additional data via options. [we need fullName and avatar so that later easily these can be updated]
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);
  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  return data;
}

//////// GETTING CURRENT USER
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session) return null;
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error("Problem with getting user");
  return data?.user;
}

///////////// LOG OUT
export async function logOutUser() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error("Problem with logout");
}
