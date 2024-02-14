function hideElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.add('hidden');
}

function visibleElementByID(elementID){
    const element = document.getElementById(elementID);
    element.classList.remove('hidden');
}