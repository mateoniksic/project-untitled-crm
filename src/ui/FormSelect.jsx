import { useEffect, useState } from 'react';
import ReactSelect from 'react-select';

function FormSelect({ field, menuPortalTarget, options, placeholder }) {
  return (
    <ReactSelect
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'var(--component-interactive)',
          borderRadius: '0.6rem',
          border: '1px solid var(--border-interactive)',
          fontSize: '1.4rem',
          fontWeight: 400,
          lineHeight: '2rem',
          width: '100%',
          cursor: 'pointer',
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'var(--bg-normal)',
          border: '1px solid var(--border-interactive)',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          cursor: 'pointer',
          fontSize: '1.4rem',
          fontWeight: 400,
          lineHeight: '2rem',
          ':hover': {
            backgroundColor: state.isSelected
              ? 'var(--component-selected)'
              : 'var(--component-hovered)',
          },
          color: 'var(--text-hc)',
        }),
      }}
      menuPortalTarget={menuPortalTarget}
      maxMenuHeight={116}
      isClearable
      {...field}
      options={options}
      placeholder={placeholder}
    />
  );
}

export default FormSelect;
