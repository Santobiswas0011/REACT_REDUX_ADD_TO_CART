
//  add item
export const ADD = (item) => {
   return {
      type: 'ADD_CART',
      payload: item
   }
}

// ramove item
export const DLT = (id) => {
   return {
      type: 'REMOVE_CART',
      payload: id
   }
}


// remove individual iteam

export const REMOVE = (item) => {
   return {
      type: 'RMV_ONE',
      payload: item
   }
}
