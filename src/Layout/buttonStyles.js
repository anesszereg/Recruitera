// buttonStyles.js

export const buttonStyles = {
    primary: {
        backgroundColor:'rgba(36, 99, 235, 1)',
        color:  'white',
        borderRadius: '5px',
        padding: ' 10px 20px ',
        border: '1px solid rgba(36, 99, 235, 1)',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#fff',
            color: 'rgba(36, 99, 235, 1)',
            border: '1px solid rgba(36, 99, 235, 1)'
        }
    },
    greyButton: {
        backgroundColor: '#E7E7E7',
        color: '#515151',
        borderRadius: '5px',
        padding: '8px 30px',
        border: '1px solid #E7E7E7',
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        '&:hover': {
            backgroundColor: '#E7E7E7',
            color: '#515151',
            border: '1px solid #515151'
        }
    },
    greenButton:{
        backgroundColor: 'rgba(143, 255, 0, 0.15)',
    color: '#fff',
    borderRadius: '5px',
    padding: '8px 30px',
    border: '1px solid #00B707',
    textTransform: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#00B707',
        border: '1px solid #00B707'
    },

  
}

};
