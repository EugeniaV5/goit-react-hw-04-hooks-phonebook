import PropTypes from 'prop-types';

import React from 'react';
import { DeleteBtn, Item } from './ContactItem.styled';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => {
  return (
    <Item>
      {name}: {number}
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
