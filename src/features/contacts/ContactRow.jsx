import styled from 'styled-components';
import { Trash2Icon, PenBoxIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';

import Button from '../../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContact } from '../../services/apiContacts';

const TableRow = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.7fr 0.6fr 0.5fr 0.5fr;
  column-gap: 2.4rem;
  align-items: start;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--border-non-interactive);
  }
`;

const UserAvatarWrapper = styled.div`
  display: inline-block;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 100%;
  overflow: hidden;
`;

const UserAvatar = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const CreatedBy = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

const Actions = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

function ContactRow({ contact }) {
  const {
    contact_id,
    contact_first_name: firstName,
    contact_last_name: lastName,
    contact_email: email,
    contact_phone: phone,
    contact_created_at: createdAt,
    user_profile: {
      user_first_name: userFirstName,
      user_last_name: userLastName,
      user_avatar_url: userAvatarUrl,
    },
  } = contact;

  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: () => deleteContact(contact_id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['contacts'],
      });
      toast.success(
        `Contact ${[firstName, lastName].join(' ')} deleted successfully.`,
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <TableRow role="row">
      <div>
        {firstName} {lastName}
      </div>
      <div>{email}</div>
      <div>{phone}</div>
      <CreatedBy>
        <UserAvatarWrapper>
          <UserAvatar src={userAvatarUrl} alt="Created by avatar" />
        </UserAvatarWrapper>
        {userFirstName.split('').at(0)}. {userLastName}
      </CreatedBy>
      <div>{new Date(createdAt).toLocaleString('hr-HR')}</div>
      <Actions>
        <Button $variation="secondary">
          <PenBoxIcon size="16" />
        </Button>
        <Button $variation="danger" onClick={mutate} disabled={isDeleting}>
          <Trash2Icon size="16" />
        </Button>
      </Actions>
    </TableRow>
  );
}

export default ContactRow;
