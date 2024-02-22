import supabase, { supabaseUrl } from "./supabase";
export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("clientErr:", error);
    throw new Error("Cabins could not be found");
  }
  return data;
}

// create cabins
export async function createCabins(newCabin, id) {
  //console.log("newCabin:", newCabin);
  // id && console.log("cabinObj+ID:", newCabin, id);
  // console.log("cabinObj:", newCabin);
  // we passed id to know that we are in edit mode
  // unique image name
  // avoiding / is present in the image name cause supabase will create folder for slash
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;
  let query = supabase.from("cabins");

  // creating cabins
  if (!id)
    query = await query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();

  if (id) {
    //console.log("newcabin", newCabin);
    query = await query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select()
      .single();
  }

  const { data, error } = query;
  //console.log("ret data:", data);
  if (error) {
    console.log("cabin crerate errr", error);
    throw new Error("unable to create cabin");
  }

  if (hasImage) return;
  // if befor error the cabin is created with the image path(url) then now upload the image
  // see doc uploading a file
  const { error: storageErr } = await supabase.storage
    .from("cabins")
    .upload(imageName, newCabin.image);
  // delete the cabin if there was an error uploading image
  // if (storageErr) {
  //   console.log("storageErr:", storageErr);
  //   await supabase.from("cabins").delete().eq("id", data.id);
  //   throw new Error(
  //     "Cabin image could not be uploaded and the cabin was not created"
  //   );
  // }

  return data;
}

// delete cabins
export async function deleteCabins(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    //console.log("apiCabins:", error.message);
    throw new Error("Unable to delete cabin");
  }
}
