//
function pare(){
    document.querySelector('#red').classList.remove('opacidade')
    document.querySelector('#orange').classList.add('opacidade')
    document.querySelector('#green').classList.add('opacidade')
}

function atencao(){
    document.querySelector('#red').classList.add('opacidade')
    document.querySelector('#orange').classList.remove('opacidade')
    document.querySelector('#green').classList.add('opacidade')
}

function siga(){
    document.querySelector('#red').classList.add('opacidade')
    document.querySelector('#orange').classList.add('opacidade')
    document.querySelector('#green').classList.remove('opacidade')
}