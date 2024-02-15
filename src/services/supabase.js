import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uewxlmvijbjwabbqlmiv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVld3hsbXZpamJqd2FiYnFsbWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc5ODAzMjgsImV4cCI6MjAyMzU1NjMyOH0.b3BOpKrxoikHwGOBHkTvkM9CaBKPt58oB5sDc17QUNY";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
