const gradient = 'radial-gradient(rgba(0,0,0,0.2) 20%, black 100%)';
const image = 'url(/assets/P10100660.jpg)';

export default function() {
  return {
    container: {
      width: '100vw',
      height: '85vh',
      backgroundSize: 'cover',
      backgroundImage: image,
      backgroundPosition: 'top',
      '&::before': {
        content: '""',
        width: '100%',
        height: '100%',
        display: 'block',
        backgroundImage: gradient
      }
    },
    headline: {
      position: 'absolute',
      width: '100vw',
      bottom: '30%',
      textAlign: 'center',
      color: '#ffffff80'
    },
    root: {
      paddingTop: '16px',
      paddingBottom: '16px',
      margin: '3px'
    }
  };
}
