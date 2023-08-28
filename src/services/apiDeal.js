import supabase from './supabase';

export async function getDeals({ workspaceId }) {
  const { data, error } = await supabase
    .from('deal')
    .select(
      `*, 
    contact(contact_id, contact_first_name, contact_last_name, contact_email),
    deal_status(deal_status_name),
    pipeline(pipeline_name),
    pipeline_stage(pipeline_stage_name), workspace(workspace_currency)`,
    )
    .eq('workspace_id', workspaceId)
    .order('deal_created_at', { ascending: false });

  if (error) {
    console.log(error);
    throw new Error('There was a problem while fetching deals data.');
  }

  return data;
}

export async function createDeal({ deal }) {
  const { data, error } = await supabase
    .from('deal')
    .insert([deal])
    .select()
    .single();

  if (error) throw new Error('There was a problem while creating a deal.');

  return data;
}

export async function updateDeal({ deal }) {
  const { data, error } = await supabase
    .from('deal')
    .update(deal)
    .eq('deal_id', deal.deal_id)
    .select()
    .single();

  if (error) throw new Error('There was a problem while updating a deal.');

  return data;
}

export async function deleteDeal(id) {
  const { error } = await supabase.from('deal').delete().eq('deal_id', id);

  if (error) throw new Error('There was a problem while deleting a deal.');
}
