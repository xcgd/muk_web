/**********************************************************************************
*
*    Copyright (c) 2017-2019 MuK IT GmbH.
*
*    This file is part of MuK Backend Theme 
*    (see https://mukit.at).
*
*    This program is free software: you can redistribute it and/or modify
*    it under the terms of the GNU Lesser General Public License as published by
*    the Free Software Foundation, either version 3 of the License, or
*    (at your option) any later version.
*
*    This program is distributed in the hope that it will be useful,
*    but WITHOUT ANY WARRANTY; without even the implied warranty of
*    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*    GNU Lesser General Public License for more details.
*
*    You should have received a copy of the GNU Lesser General Public License
*    along with this program. If not, see <http://www.gnu.org/licenses/>.
*
**********************************************************************************/

odoo.define('muk_web_theme.AppsMenu', function (require) {
"use strict";

var core = require('web.core');
var config = require("web.config");
var session = require("web.session");

var AppsMenu = require("web.AppsMenu");

var _t = core._t;
var QWeb = core.qweb;

AppsMenu.include({
    start: function () {
        this._setBackgroundImage();
        return this._super.apply(this, arguments);
    },
    _setBackgroundImage: function () {
    	var url = session.url('/web/image', {
            model: 'res.company',
            id: session.company_id,
            field: 'background_image',
        });
        this.$('.dropdown-menu').css({
            "background-size": "cover",
            "background-image": "url(" + url + ")"
        });
        if (session.muk_web_theme_background_blend_mode) {
        	this.$('.o-app-name').css({
        		"mix-blend-mode": session.muk_web_theme_background_blend_mode,
        	});
        }
    },
});

});