export const countryStyles = {
    container: provided => ({
      ...provided,
      width: '100%'
    }),
    option: (provided, state) => ({
      ...provided,
        backgroundColor: state.isSelected ? '#47ACFF' : '',
        padding: 10,
        fontSize: 14,
        cursor: 'pointer',
        textAlign: 'left',

        '&:hover': {
            backgroundColor: state.isSelected ? '#47ACFF' : '#ededed'
        }
    }),
    control: styles => ({ 
        ...styles, 
        width: '100%',
        borderRadius: 16,
        fontSize: 14,
        height: '40px',
        boxShadow: 'none',
        border: '1px solid #cccccc',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #adadad',
        }
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}

export const customStyles = {
    option: (provided, state) => ({
      ...provided,
        backgroundColor: state.isSelected ? '#47ACFF' : '',
        padding: 10,
        fontSize: 14,
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: state.isSelected ? '#47ACFF' : '#ededed'
        }
    }),
    control: styles => ({ 
        ...styles, 
        width: 95,
        fontSize: 14,
        boxShadow: 'none',
        border: '1px solid #cccccc',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #adadad',
        }
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}

export const ageStyles = {
  container: provided => ({
    ...provided,
  }),
  option: (provided, state) => ({
    ...provided,
      backgroundColor: state.isSelected ? '#47ACFF' : '',
      padding: 10,
      fontSize: 14,
      cursor: 'pointer',

      '&:hover': {
          backgroundColor: state.isSelected ? '#47ACFF' : '#ededed'
      }
  }),
  control: styles => ({ 
      ...styles, 
      width: 70,
      fontSize: 14,
      textAlign: 'center',
      boxShadow: 'none',
      border: '1px solid #cccccc',
      cursor: 'pointer',
      '&:hover': {
          border: '1px solid #adadad',
      }
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

export const multiStyles = {
    container: provided => ({
      ...provided,
      width: '100%'
    }),
    option: (provided, state) => ({
      ...provided,
        backgroundColor: state.isSelected ? '#47ACFF' : '',
        padding: 10,
        fontSize: 14,
        cursor: 'pointer',
        textAlign: 'left',

        '&:hover': {
            backgroundColor: state.isSelected ? '#47ACFF' : '#ededed'
        }
    }),
    control: styles => ({ 
        ...styles, 
        fontSize: 14,
        boxShadow: 'none',
        border: '1px solid #cccccc',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #adadad',
        }
    }),
    multiValue: (styles, { data }) => {
        return {
            ...styles,
            backgroundColor: '#ededed',
            borderRadius: '3px',
            padding: '3px',
            border: '1px solid rgba(0,0,0,.1)',
        };
      },
    multiValueLabel: (styles) => ({
        ...styles,
        fontSize: '.8rem'
      }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: 'rgba(0,0,0,.5)',
        ':hover': {
          backgroundColor: 'rgba(0,0,0,.1)',
        },
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}

export const languageStyles = {
    option: (provided, state) => ({
      ...provided,
        backgroundColor: state.isSelected ? '#47ACFF' : '',
        padding: 10,
        fontSize: 14,
        cursor: 'pointer',

        '&:hover': {
            backgroundColor: state.isSelected ? '#47ACFF' : '#ededed'
        }
    }),
    control: styles => ({ 
        ...styles, 
        width: '10rem',
        fontSize: 14,
        boxShadow: 'none',
        border: '1px solid #cccccc',
        cursor: 'pointer',
        '&:hover': {
            border: '1px solid #adadad',
        }
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}