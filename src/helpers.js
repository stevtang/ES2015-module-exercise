

function choice(items){
    const randomItemIndex = Math.floor(Math.random() * items.length);
    return items[randomItemIndex];
}

function remove(items,item){

    for(let i = 0; i < items.length; i++){
        if(item === items[i]){
            items.splice(i, 1);
            return items;
        }
    }

}

export {choice, remove};