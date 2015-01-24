var proto = Object.create(HTMLElement.prototype);

proto.createdCallback = function() {
	var self = this,
		opened = false,
    	template = document.querySelector('#contact-template'),
        shadow = this.createShadowRoot(),
        clone = document.importNode(template.content, true);
        self.addEventListener("click", function(){
        	var d = shadow.querySelector(".detailed-info");
        	if(!opened){
        		d.className = "detailed-info";
        	} else {
        		d.className = d.className + " hidden";
        	}
        	opened = !opened;
        });
        shadow.appendChild(clone);
};

document.registerElement('contact-tile', {prototype: proto});