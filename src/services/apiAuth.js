import supabase, { supabaseUrl } from "./supabase";

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

///////////////// UPDATE USER
export async function updateUser({ fullName, avatar, password }) {
  // updateData is an object
  let updateData;
  //1) update fullName or Password
  if (password) updateData = { password };
  // see how the data looks through chat gpt
  if (fullName) updateData = { data: { fullName } };
  // update the name or pass to db
  const { data, err } = await supabase.auth.updateUser(updateData);
  // console.log("daEr:", data, err);
  if (err) throw new Error("Problem with updating name or password");
  // 2) upload avatar
  /*
!avatar e amara null return kortesi, but jokhon only name update korbo tokhon kintu avatar upploade kori nai, so null return hbar karone error pabo, ata fix kora lagbe.
so, null return na kore data ta return koro.
  */
  // if (!avatar) return null;
  if (!avatar) return data;
  // generating file name with user id
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);
  if (error) throw new Error(error.message);
  // update url(avatar) to supabse table
  const { data: updateUserData, error: upDateUseErr } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });
  if (upDateUseErr) throw new Error(upDateUseErr.message);
  return updateUserData;
}
