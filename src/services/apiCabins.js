import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("clientErr:", error);
    throw new Error("Cabins could not be found");
  }
  return data;
}

// create cabins
export async function createCabins(newCabin) {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.log("cabin crerate errr", error);
    throw new Error("unable to create cabin");
  }
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
