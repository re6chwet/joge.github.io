!function(e){if(void 0===window.paCheckSafari){window.paCheckSafari=function(){if(/iP(hone|ad|od)/i.test(navigator.userAgent)&&!window.MSStream){var e=/(Chrome|CriOS|OPiOS|FxiOS)/.test(navigator.userAgent);if(!e){var t=""===navigator.vendor;e=e||t}var a=/WebKit/i.test(navigator.userAgent)&&!e}else a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(a)return!0;return!1}()}e(window).on("elementor/frontend/init",function(){elementorFrontend.hooks.addAction("frontend/element_ready/widget",function(z){if(z.hasClass("premium-floating-effects-yes")&&(!z.hasClass("premium-disable-fe-yes")||!window.paCheckSafari)){var u=z,b=u.data("model-cid"),w={},l=z.find(".elementor-widget-container")[0],S=z.closest(".elementor-section").hasClass("elementor-inner-section"),x=S?z.closest(".elementor-inner-section").data("model-cid"):function(){var e=null;elementorFrontend.config.experimentalFeatures.container&&(e=z.closest(".e-con[data-nesting-level=0]").data("model-cid"));e=e||z.closest(".elementor-top-section").data("model-cid");return e}(),k=S?z.closest(".elementor-inner-column").data("model-cid"):function(){var e=null;elementorFrontend.config.experimentalFeatures.container&&(e=z.closest(".e-con--column").data("model-cid"));e=e||z.closest(".elementor-top-column").data("model-cid");return e}(),e=elementorFrontend.isEditMode()&&!u.data("general_settings");if(!(w=(e?function(){var e=null;if(!window.elementor.hasOwnProperty("elements"))return!1;if(e=window.elementor.elements.models,S){var t={col:z.closest(".elementor-top-column"),colId:z.closest(".elementor-top-column").data("model-cid"),sec:z.closest(".elementor-top-section"),secId:z.closest(".elementor-top-section").data("model-cid")},a=X(e,t.secId),r=X(a,t.colId);e=r}if(!e)return!1;var i=X(e,x),o=function(e,t){if(!e)return;var a=e.findIndex(function(e){return e.cid===t});if(!e[a])return;return e[a].attributes.settings.attributes}(X(i,k),b);if(!o)return!1;if("yes"!==o.premium_fe_switcher||0===o.length)return!1;var s=o.premium_fe_easing;"steps"===o.premium_fe_easing&&(s="steps("+o.premium_fe_ease_step+")");var _={target:o.premium_fe_target,direction:o.premium_fe_direction,loop:"default"===o.premium_fe_loop||o.premium_fe_loop_number,easing:s};if(w.general=_,"yes"===o.premium_fe_translate_switcher){var n={x_param_from:o.premium_fe_Xtranslate.sizes.from,x_param_to:o.premium_fe_Xtranslate.sizes.to,y_param_from:o.premium_fe_Ytranslate.sizes.from,y_param_to:o.premium_fe_Ytranslate.sizes.to,duration:o.premium_fe_trans_duration.size,delay:o.premium_fe_trans_delay.size};w.translate=n}if("yes"===o.premium_fe_rotate_switcher){var m={x_param_from:o.premium_fe_Xrotate.sizes.from,x_param_to:o.premium_fe_Xrotate.sizes.to,y_param_from:o.premium_fe_Yrotate.sizes.from,y_param_to:o.premium_fe_Yrotate.sizes.to,z_param_from:o.premium_fe_Zrotate.sizes.from,z_param_to:o.premium_fe_Zrotate.sizes.to,duration:o.premium_fe_rotate_duration.size,delay:o.premium_fe_rotate_delay.size};w.rotate=m}if("yes"===o.premium_fe_scale_switcher){var u={x_param_from:o.premium_fe_Xscale.sizes.from,x_param_to:o.premium_fe_Xscale.sizes.to,y_param_from:o.premium_fe_Yscale.sizes.from,y_param_to:o.premium_fe_Yscale.sizes.to,duration:o.premium_fe_scale_duration.size,delay:o.premium_fe_scale_delay.size};w.scale=u}if("yes"===o.premium_fe_skew_switcher){var l={x_param_from:o.premium_fe_Xskew.sizes.from,x_param_to:o.premium_fe_Xskew.sizes.to,y_param_from:o.premium_fe_Yskew.sizes.from,y_param_to:o.premium_fe_Yskew.sizes.to,duration:o.premium_fe_trans_duration.size,delay:o.premium_fe_trans_delay.size};w.skew=l}if(PremiumFESettings.papro_installed){if("yes"===o.premium_fe_opacity_switcher){var f={from:o.premium_fe_opacity.sizes.from/100,to:o.premium_fe_opacity.sizes.to/100,duration:o.premium_fe_opacity_duration.size,delay:o.premium_fe_opacity_delay.size};w.opacity=f}if("yes"===o.premium_fe_bg_color_switcher){var d={from:o.premium_fe_bg_color_from,to:o.premium_fe_bg_color_to,duration:o.premium_fe_bg_color_duration.size,delay:o.premium_fe_bg_color_delay.size};w.bg_color=d}if("yes"===o.premium_fe_blur_switcher){var c={from:"blur("+o.premium_fe_blur_val.sizes.from+"px)",to:"blur("+o.premium_fe_blur_val.sizes.to+"px)",duration:o.premium_fe_blur_duration.size,delay:o.premium_fe_blur_delay.size};w.blur=c}if("yes"===o.premium_fe_contrast_switcher){var p={from:"contrast("+o.premium_fe_contrast_val.sizes.from+"%)",to:"contrast("+o.premium_fe_contrast_val.sizes.to+"%)",duration:o.premium_fe_contrast_duration.size,delay:o.premium_fe_contrast_delay.size};w.contrast=p}if("yes"===o.premium_fe_gScale_switcher){var y={from:"grayscale("+o.premium_fe_gScale_val.sizes.from+"%)",to:"grayscale("+o.premium_fe_gScale_val.sizes.to+"%)",duration:o.premium_fe_gScale_duration.size,delay:o.premium_fe_gScale_delay.size};w.gScale=y}if("yes"===o.premium_fe_hue_switcher){var g={from:"hue-rotate("+o.premium_fe_hue_val.sizes.from+"deg)",to:"hue-rotate("+o.premium_fe_hue_val.sizes.to+"deg)",duration:o.premium_fe_hue_duration.size,delay:o.premium_fe_hue_delay.size};w.hue=g}if("yes"===o.premium_fe_brightness_switcher){var v={from:"brightness("+o.premium_fe_brightness_val.sizes.from+"%)",to:"brightness("+o.premium_fe_brightness_val.sizes.to+"%)",duration:o.premium_fe_brightness_duration.size,delay:o.premium_fe_brightness_delay.size};w.bright=v}if("yes"===o.premium_fe_saturate_switcher){var h={from:"saturate("+o.premium_fe_saturate_val.sizes.from+"%)",to:"saturate("+o.premium_fe_saturate_val.sizes.to+"%)",duration:o.premium_fe_saturate_duration.size,delay:o.premium_fe_saturate_delay.size};w.saturate=h}}return 0!==Object.keys(w).length&&w}:function(){var e=u.data("general_settings"),t={translateSettings:u.data("translate_effect"),rotateSettings:u.data("rotate_effect"),scaleSettings:u.data("scale_effect"),skewSettings:u.data("skew_effect"),opacitySettings:u.data("opacity_effect"),bgColorSettings:u.data("bg_color_effect"),bRadiusSettings:u.data("b_radius_effect"),hueSettings:u.data("hue_effect"),gScaleSettings:u.data("gray_effect"),contrastSettings:u.data("contrast_effect"),blurSettings:u.data("blur_effect"),brightSettings:u.data("brightness_effect"),saturateSettings:u.data("saturate_effect")};if(-1===Object.values(t).findIndex(function(e){return void 0!==e}))return!1;if(w.general=e,w.translate=t.translateSettings,w.rotate=t.rotateSettings,w.scale=t.scaleSettings,w.skew=t.skewSettings,w.opacity=t.opacitySettings,w.bg_color=t.bgColorSettings,w.blur=t.blurSettings,w.hue=t.hueSettings,w.gScale=t.gScaleSettings,w.contrast=t.contrastSettings,w.bright=t.brightSettings,w.saturate=t.saturateSettings,0!==Object.keys(w).length)return w})()))return!1;elementorFrontend.waypoint(z,function(){!function(){if(w.general.target){var e=w.general.target;l=0<u.find(e).length?".elementor-element-"+u.data("id")+" "+e:e}var t={targets:l,loop:w.general.loop,direction:w.general.direction,easing:w.general.easing};if(w.translate){var a=w.translate;x_translate={value:[a.x_param_from||0,a.x_param_to||0],duration:a.duration,delay:a.delay||0},y_translate={value:[a.y_param_from||0,a.y_param_to||0],duration:a.duration,delay:a.delay||0},t.translateX=x_translate,t.translateY=y_translate}if(w.rotate){a=w.rotate;x_rotate={duration:a.duration,delay:a.delay||0,value:[a.x_param_from||0,a.x_param_to||0]},y_rotate={duration:a.duration,delay:a.delay||0,value:[a.y_param_from||0,a.y_param_to||0]},z_rotate={duration:a.duration,delay:a.delay||0,value:[a.z_param_from||0,a.z_param_to||0]},t.rotateX=x_rotate,t.rotateY=y_rotate,t.rotateZ=z_rotate}if(w.scale){a=w.scale;x_scale={value:[a.x_param_from||0,a.x_param_to||0],duration:a.duration,delay:a.delay||0},y_scale={value:[a.y_param_from||0,a.y_param_to||0],duration:a.duration,delay:a.delay||0},t.scaleX=x_scale,t.scaleY=y_scale}if(w.skew){a=w.skew;x_skew={value:[a.x_param_from||0,a.x_param_to||0],duration:a.duration,delay:a.delay||0},y_skew={value:[a.y_param_from||0,a.y_param_to||0],duration:a.duration,delay:a.delay||0},t.skewX=x_skew,t.skewY=y_skew}if(w.opacity){a=w.opacity;t.opacity={value:[a.from||0,a.to||0],duration:a.duration,delay:a.delay||0}}if(w.bg_color){a=w.bg_color;t.backgroundColor={value:[a.from||0,a.to||0],duration:a.duration,delay:a.delay||0}}var r=[];if(w.blur){var i={value:[(a=w.blur).from||0,a.to||0],duration:a.duration,delay:a.delay||0};r.push(i)}if(w.gScale){var o={value:[(a=w.gScale).from||0,a.to||0],duration:a.duration,delay:a.delay||0};r.push(o)}if(w.hue){var s={value:[(a=w.hue).from||0,a.to||0],duration:a.duration,delay:a.delay||0};r.push(s)}if(w.contrast){var _={value:[(a=w.contrast).from||0,a.to||0],duration:a.duration,delay:a.delay||0};r.push(_)}if(w.bright){var n={value:[(a=w.bright).from||0,a.to||0],duration:a.duration,delay:a.delay||0};r.push(n)}if(w.saturate){var m={value:[(a=w.saturate).from||0,a.to||0],duration:a.duration,delay:a.delay||0};r.push(m)}0!==r.length&&(t.filter=r);anime(t)}()})}function X(e,t){if(e){var a=e.findIndex(function(e){return e.cid==t});if(e[a])return e[a].attributes.elements.models}}})})}(jQuery);