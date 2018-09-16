export default function() {
  return {
    drawerPaper: {
      position: 'relative',
      height: '100%',
      width: '200px',
      backgroundColor: '#808080e0'
    },
    item: {
      color: 'black',
      fontSize: '30px',
      '&:hover': {
        fontSize:'31px',
        color: 'black',
        textDecoration: 'none'
      }
    }
  };
}
