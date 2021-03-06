let cards = document.querySelectorAll(".box-graph-top");

function expandCard(id) {
    let card = document.querySelector(`#${id}`);

    let arealeft = card.querySelector(".area-left");
    let arealefttop = card.querySelector(".top-graph");
    let bottom_graph = card.querySelector(".bottom-graph");
    let area_right = card.querySelector(".area-right");


    cards.forEach(card => {
        let cardId = card.getAttribute("id");

        if (cardId != id) {
            card.classList.toggle('disabledCard');
            arealeft.classList.toggle('area-left-disabled');
            arealefttop.classList.toggle('info-disabled');
        }
        else {
            setTimeout(function () {
                card.classList.toggle('expandedCard');
                bottom_graph.classList.toggle('flex');
                area_right.classList.toggle('flex');
            }, 10);
        }
    });
}