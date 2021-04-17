const craftChair = document.getElementById('craftChair');
const craftTable = document.getElementById('craftTable');
function addMaterial() {
    var material_selected = document.getElementById('material').value;
    var amount_to_add = document.getElementById('amount_to_add').value;
    if (amount_to_add != '' && amount_to_add > 0) {
        if (material_selected == 'Wood') {
            document.getElementById('wood_amount').value = parseInt(document.getElementById('wood_amount').value) + parseInt(document.getElementById('amount_to_add').value);
        } else if (material_selected == 'Plastic') {
            document.getElementById('plastic_amount').value = parseInt(document.getElementById('plastic_amount').value) + parseInt(document.getElementById('amount_to_add').value);
        } else if (material_selected == 'Glass') {
            document.getElementById('glass_amount').value = parseInt(document.getElementById('glass_amount').value) + parseInt(document.getElementById('amount_to_add').value);
        } else if (material_selected == 'Paint') {
            document.getElementById('paint_amount').value = parseInt(document.getElementById('paint_amount').value) + parseInt(document.getElementById('amount_to_add').value);
        } else {
            document.getElementById('nails_amount').value = parseInt(document.getElementById('nails_amount').value) + parseInt(document.getElementById('amount_to_add').value);
        }
        update();
    }
}

function update() {
    var craftChair = document.getElementById('craftChair');
    var craftTable = document.getElementById('craftTable');
    document.getElementById('chair_wood').innerText = document.getElementById('wood_amount').value;
    document.getElementById('chair_nails').innerText = document.getElementById('nails_amount').value;
    document.getElementById('chair_paint').innerText = document.getElementById('paint_amount').value;
    document.getElementById('table_wood').innerText = document.getElementById('wood_amount').value;
    document.getElementById('table_nails').innerText = document.getElementById('nails_amount').value;
    document.getElementById('table_paint').innerText = document.getElementById('paint_amount').value;
    document.getElementById('table_glass').innerText = document.getElementById('glass_amount').value;
}