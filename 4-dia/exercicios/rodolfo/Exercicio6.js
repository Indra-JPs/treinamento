$(document).on("input", "#TxtObservacoes", function () {
    var limite = 255;
    var caracteresDigitados = $(this).val().length;
    var caracteresRestantes = limite - caracteresDigitados;

    $(".caracteres").text(caracteresRestantes);
});