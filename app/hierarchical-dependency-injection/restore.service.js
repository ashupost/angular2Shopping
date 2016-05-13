"use strict";
var RestoreService = (function () {
    function RestoreService() {
    }
    RestoreService.prototype.setItem = function (item) {
        this.originalItem = item;
        this.currentItem = this.clone(item);
    };
    RestoreService.prototype.getItem = function () {
        return this.currentItem;
    };
    RestoreService.prototype.restoreItem = function () {
        this.currentItem = this.originalItem;
        return this.getItem();
    };
    RestoreService.prototype.clone = function (item) {
        // super poor clone implementation
        return JSON.parse(JSON.stringify(item));
    };
    return RestoreService;
}());
exports.RestoreService = RestoreService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpZXJhcmNoaWNhbC1kZXBlbmRlbmN5LWluamVjdGlvbi9yZXN0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUFzQkEsQ0FBQztJQWxCRyxnQ0FBTyxHQUFQLFVBQVMsSUFBTztRQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTyxJQUFPO1FBQ1Ysa0NBQWtDO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHNCQUFjLGlCQXNCMUIsQ0FBQSIsImZpbGUiOiJoaWVyYXJjaGljYWwtZGVwZW5kZW5jeS1pbmplY3Rpb24vcmVzdG9yZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlc3RvcmVTZXJ2aWNlPFQ+IHtcclxuICAgIG9yaWdpbmFsSXRlbTogVDtcclxuICAgIGN1cnJlbnRJdGVtOiBUO1xyXG5cclxuICAgIHNldEl0ZW0gKGl0ZW06IFQpIHtcclxuICAgICAgICB0aGlzLm9yaWdpbmFsSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SXRlbSA9IHRoaXMuY2xvbmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SXRlbSAoKSA6VCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW07XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdG9yZUl0ZW0gKCkgOlQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEl0ZW0gPSB0aGlzLm9yaWdpbmFsSXRlbTtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJdGVtKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmUgKGl0ZW06IFQpIDpUIHtcclxuICAgICAgICAvLyBzdXBlciBwb29yIGNsb25lIGltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
