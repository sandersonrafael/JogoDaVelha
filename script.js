let linhaColuna = [document.getElementById('11'), document.getElementById('12'), document.getElementById('13'), document.getElementById('21'), document.getElementById('22'), document.getElementById('23'), document.getElementById('31'), document.getElementById('32'), document.getElementById('33')]
let vez = 'X'
function clicar11() {
    if (linhaColuna[0].value != 'X' && linhaColuna[0].value != 'O' ) {
        linhaColuna[0].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar12() {
    if (linhaColuna[1].value != 'X' && linhaColuna[1].value != 'O' ) {
        linhaColuna[1].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar13() {
    if (linhaColuna[2].value != 'X' && linhaColuna[2].value != 'O' ) {
        linhaColuna[2].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar21() {
    if (linhaColuna[3].value != 'X' && linhaColuna[3].value != 'O' ) {
        linhaColuna[3].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar22() {
    if (linhaColuna[4].value != 'X' && linhaColuna[4].value != 'O' ) {
        linhaColuna[4].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar23() {
    if (linhaColuna[5].value != 'X' && linhaColuna[5].value != 'O' ) {
        linhaColuna[5].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar31() {
    if (linhaColuna[6].value != 'X' && linhaColuna[6].value != 'O' ) {
        linhaColuna[6].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar32() {
    if (linhaColuna[7].value != 'X' && linhaColuna[7].value != 'O' ) {
        linhaColuna[7].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function clicar33() {
    if (linhaColuna[8].value != 'X' && linhaColuna[8].value != 'O' ) {
        linhaColuna[8].value = vez
        vez == 'X' ? vez = 'O' : vez = 'X'
    } testar ()
}
function testar() {
    setTimeout(function () {
    if ( linhaColuna[0].value + linhaColuna[1].value + linhaColuna[2].value == 'XXX' || linhaColuna[3].value + linhaColuna[4].value + linhaColuna[5].value == 'XXX' || linhaColuna[6].value + linhaColuna[7].value + linhaColuna[8].value == 'XXX' || linhaColuna[0].value + linhaColuna[3].value + linhaColuna[6].value == 'XXX' || linhaColuna[1].value + linhaColuna[4].value + linhaColuna[7].value == 'XXX' || linhaColuna[2].value + linhaColuna[5].value + linhaColuna[8].value == 'XXX' || linhaColuna[0].value + linhaColuna[4].value + linhaColuna[8].value == 'XXX' || linhaColuna[6].value + linhaColuna[4].value + linhaColuna[2].value == 'XXX' ) {
    alert('O jogador X é o vencedor!')
    linhaColuna = ['','','','','','','','','']
    redefinir ()
}   if ( linhaColuna[0].value + linhaColuna[1].value + linhaColuna[2].value == 'OOO' || linhaColuna[3].value + linhaColuna[4].value + linhaColuna[5].value == 'OOO' || linhaColuna[6].value + linhaColuna[7].value + linhaColuna[8].value == 'OOO' || linhaColuna[0].value + linhaColuna[3].value + linhaColuna[6].value == 'OOO' || linhaColuna[1].value + linhaColuna[4].value + linhaColuna[7].value == 'OOO' || linhaColuna[2].value + linhaColuna[5].value + linhaColuna[8].value == 'OOO' || linhaColuna[0].value + linhaColuna[4].value + linhaColuna[8].value == 'OOO' || linhaColuna[6].value + linhaColuna[4].value + linhaColuna[2].value == 'OOO' ) {
    alert('O jogador O é o vencedor!')
    linhaColuna = ['','','','','','','','','']
    redefinir ()
}   semVencedor () 
}, 200)

}
function redefinir() {
    document.getElementById('11').value = ''
    document.getElementById('12').value = ''
    document.getElementById('13').value = ''
    document.getElementById('21').value = ''
    document.getElementById('22').value = ''
    document.getElementById('23').value = ''
    document.getElementById('31').value = ''
    document.getElementById('32').value = ''
    document.getElementById('33').value = ''
    linhaColuna = [document.getElementById('11'), document.getElementById('12'), document.getElementById('13'), document.getElementById('21'), document.getElementById('22'), document.getElementById('23'), document.getElementById('31'), document.getElementById('32'), document.getElementById('33')]
}
function semVencedor() {
    if ( linhaColuna[0].value != "" && linhaColuna[1].value != "" && linhaColuna[2].value != "" && linhaColuna[3].value != "" && linhaColuna[4].value != "" && linhaColuna[5].value != "" && linhaColuna[6].value != "" && linhaColuna[7].value != "" && linhaColuna[8].value != "") {
        alert('Sem vencedor. Reiniciando o jogo!')
        redefinir ()
    }
}