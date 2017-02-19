var MarkDownBuilder = function () {

	var instance;

	function MarkDownBuilder () {
		this.converter = new showdown.Converter();
	}
	
	MarkDownBuilder.prototype.build = function (targetId, markDownTemplate ) {
		var targetElement = document.getElementById(targetId);
		targetElement.innerHTML = this.converter.makeHtml(markDownTemplate);
	}

	return {
		getInstance : function (targetId, markDownTemplate) {
			if(!instance) {
				instance = new MarkDownBuilder(targetId, markDownTemplate);
			}
			return instance;
		}
	}
}()

