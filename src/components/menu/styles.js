
export default function(theme) {
  return {
    '@font-face': {
      fontFamily: 'MyWebFont',
      src: 'url(../../assets/ebrima.ttf)'
    },

    menu: {
      backgroundColor: '#fff0',
      position: 'absolute',
      right: '2%',
      top: '3%'
    },
    item: {
      color: '#ffffff',
      fontSize: '18px',
      margin: '18px',
      '&:hover': {
        color: 'grey',
        textDecoration: 'none',
      },
      '&:active': {
        color: 'grey',
        fontSize:'17px',
        textDecoration: 'none',
      }
    },
    selected: {
      color: '#ffffff',
      fontSize: '19px',
      margin: '18px',
      textDecoration: 'underline',
      '&:hover': {
        color: 'grey',
      },
    }
  };
}
