// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jhudaoniearjucnuwdue.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodWRhb25pZWFyanVjbnV3ZHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDA1NTIsImV4cCI6MjA2OTE3NjU1Mn0.lO2sDCI65enUERP3B6qjlte6l_5ZQNgD9Rhgbr6TmpU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});