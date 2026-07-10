import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tgheobetdzbijfijlaxz.supabase.co";

const supabaseKey =
  "sb_publishable_TGMI69MKhMCL8mgk1oTgQQ_M3nh8Q58";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);