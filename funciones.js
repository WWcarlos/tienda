function init(){
    var productos = document.getElementById("productos")
    productos = productos.innerHTML = `
    <div>
    <label>producto A</label>
    <input min="1" type="number">
    </div>
    <button type="button" class="btn btn-primary">Agregar</button>`;
}