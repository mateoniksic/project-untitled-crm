import supabase from './supabase';

export async function getPipelineStages() {
  const { data, error } = await supabase.from('pipeline_stage').select('*');

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching pipeline stages data.');
  }

  return data;
}
