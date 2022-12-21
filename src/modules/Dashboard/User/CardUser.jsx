import React from 'react'
import { Avatar } from '@mui/material';

function CardUser() {
  
  function stringToColor(string = String) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}
function stringAvatar(name = String) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
}
  return (
    <div className="user-card">
      <div className='user-avatar'>
        <Avatar
          {...stringAvatar('Camilo Polania')}
        />
      </div>
      <div className="user-info">
        <h4 className='name'>Camilo</h4>
        <h4 className='role'>Administrador</h4>
      </div>
    </div>
  )
}

export default CardUser