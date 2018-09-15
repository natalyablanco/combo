const myFont = 'url(../../assets/ebrima.ttf)';

export default function(theme) {
  return {
    menu: {
      backgroundColor: '#fff0',
      position: 'absolute',
      right: '2%',
      top: '3%'
    },
    item: {
      color: '#ffffff',
      fontFamily: myFont,
      fontSize: '20px',
      margin: '6px'
    }
  };
}
