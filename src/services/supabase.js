import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fvgaaqkrpcdhfcyvtodb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2Z2FhcWtycGNkaGZjeXZ0b2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyODA0OTYsImV4cCI6MjAwNzg1NjQ5Nn0.-8F9KElQYw3rn12wvA8Gr-t7L8ymLyCj1Jgz6s_SLcM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

export { supabaseUrl };
