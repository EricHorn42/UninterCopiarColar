// Remove bloqueios de copiar, colar, cortar e menu de contexto
['copy', 'cut', 'paste', 'contextmenu'].forEach(eventType => {
    document.addEventListener(eventType, function(e) {
        e.stopPropagation();
    }, true);
});

// Função para remover atributos bloqueadores
function liberarCopiarColar() {
    document.querySelectorAll('[oncopy],[oncut],[onpaste],[oncontextmenu]').forEach(el => {
        el.removeAttribute('oncopy');
        el.removeAttribute('oncut');
        el.removeAttribute('onpaste');
        el.removeAttribute('oncontextmenu');
    });
}

// Função para remover elementos com a classe "prevent"
function removerPrevent() {
    document.querySelectorAll('.prevent').forEach(el => el.remove());
}

// Tenta remover os bloqueios e elementos a cada segundo
setInterval(() => {
    liberarCopiarColar();
    removerPrevent();
}, 1000);

// Observa o DOM para remover qualquer .prevent assim que aparecer
const observer = new MutationObserver(() => {
    removerPrevent();
});
observer.observe(document.body, { childList: true, subtree: true });