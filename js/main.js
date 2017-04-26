$(".def-and-usage, .tips-and-notes, .standard-atts").click(function() {
	if (this.children[0].text == "show") {
		this.children[0].text = "hide";
	} else {
		this.children[0].text = "show";
	}
	var infoText = this.children[1];
	$(infoText).toggle();
});
