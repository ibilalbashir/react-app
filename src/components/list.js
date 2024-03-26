import React from 'react';

export function List({data}) {
  return (
    <ul>
      { data && (
        data
          .map(obj =>
            <a key={obj.id} href={obj.url}><li key={obj.id}>{obj.title}</li></a> 
          )
      )}
    </ul>
  );
}

export default List;
