import ReactSelect from 'react-select';

function FormSelect({ field, ...props }) {
  return (
    <ReactSelect
      {...props}
      {...field}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'var(--component-interactive)',
          borderRadius: '0.6rem',
          border: '1px solid var(--border-interactive)',
          fontSize: '1.4rem',
          fontWeight: 500,
          lineHeight: '2rem',
          width: '100%',
          cursor: 'pointer',
          boxShadow: 'none',
          '&:hover': {
            border: '1px solid var(--border-interactive-focus)',
          },
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: 'var(--bg-normal)',
          border: '1px solid var(--border-interactive)',
          boxShadow: 'none',
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: 'var(--component-interactive)',
          cursor: 'pointer',
          fontSize: '1.4rem',
          fontWeight: 500,
          lineHeight: '2rem',
          ':hover': {
            backgroundColor: state.isSelected
              ? 'var(--component-selected)'
              : 'var(--component-hovered)',
          },
          color: 'var(--text-hc)',
        }),
      }}
      maxMenuHeight={116}
    />
  );
}

export default FormSelect;
