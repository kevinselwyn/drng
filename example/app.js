(function () {
	'use strict';

	var app = {
		vars: {
			els: []
		},
		setup: function () {
			var el = null,
				els = [],
				box = null,
				i = 0,
				l = 0;

			box = document.getElementById('box');

			for (i = 0, l = 256; i < l; i += 1) {
				el = document.createElement('div');
				els.push(el);

				box.appendChild(el);
			}

			this.vars.els = els;

			return this;
		},
		events: function () {
			document.body.onclick = this.update;
			document.body.onkeyup = this.update;

			return this;
		},
		update: function () {
			var $this = app,
				els = $this.vars.els,
				rand = 0,
				i = 0,
				l = 0;

			rand = Math.drng();

			for (i = 0, l = els.length; i < l; i += 1) {
				if (i < rand) {
					els[i].className = 'active';
				} else {
					els[i].removeAttribute('class');
				}
			}
		},
		init: function () {
			this.setup().events();
		}
	};

	window.onload = function () {
		app.init();
	};
}());