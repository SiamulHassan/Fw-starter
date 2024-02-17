import supabase from "./supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log("clientErr:", error);
    throw new Error("Cabins could not be found");
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
