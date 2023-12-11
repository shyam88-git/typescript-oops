//contracts
var ProductTemplate = /** @class */ (function () {
    function ProductTemplate() {
    }
    ProductTemplate.prototype.total = function () {
        return this.Price * this.Qty;
    };
    ProductTemplate.prototype.print = function () {
        console.log("Name=".concat(this.Name, "\n Price=").concat(this.Price, "\n Qty=").concat(this.Qty, "\n total=").concat(this.total(), " "));
    };
    return ProductTemplate;
}());
var p = new ProductTemplate();
p.print();
