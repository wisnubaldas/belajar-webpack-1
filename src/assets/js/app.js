import Cookies from 'js-cookie';

var app = {
    id: "#app",
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 992,
    bootstrap: {
        tooltip: {
            attr: 'data-bs-toggle="tooltip"'
        },
        popover: {
            attr: 'data-bs-toggle="popover"'
        },
        modal: {
            attr: 'data-bs-toggle="modal"',
            dismissAttr: 'data-bs-dismiss="modal"',
            event: {
                hidden: "hidden.bs.modal"
            }
        },
        nav: {
            class: "nav",
            tabs: {
                class: "nav-tabs",
                activeClass: "active",
                itemClass: "nav-item",
                itemLinkClass: "nav-link"
            }
        }
    },
    ajax: {
        attr: 'data-toggle="ajax"',
        clearOption: "",
        clearElement: ".jvectormap-label, .jvector-label, .AutoFill_border ,#gritter-notice-wrapper, .ui-autocomplete, .colorpicker, .FixedHeader_Header, .FixedHeader_Cloned .lightboxOverlay, .lightbox, .introjs-hints, .nvtooltip, .sp-container, .dz-hidden-input, .lightboxOverlay",
        emptyElement: '[data-id="app-extra-elm"]',
        loader: {
            id: "#app-content-loader",
            html: '<div id="app-content-loader"><span class="spinner"></span></div>',
            class: "app-content-loading"
        },
        error: {
            html: '<div class="px-3 text-center fs-20px"><i class="fa fa-warning fa-lg text-muted me-1"></i> <span class="fw-600 text-inverse">Error 404! Page not found.</span></div>'
        }
    },
    header: {
        id: "#header",
        class: "app-header",
        hasScrollClass: "has-scroll",
        brand: {
            class: "navbar-brand"
        },
        floatingForm: {
            toggleAttr: 'data-toggle="app-header-floating-form"',
            dismissAttr: 'data-dismiss="app-header-floating-form"',
            toggledClass: "app-header-floating-form-toggled"
        },
        inverse: {
            class: "app-header-inverse"
        }
    },
    sidebar: {
        id: "#sidebar",
        class: "app-sidebar",
        scrollBar: {
            localStorage: "appSidebarScrollPosition",
            dom: ""
        },
        bg: {
            class: "app-sidebar-bg"
        },
        menu: {
            class: "menu",
            disableAnimationAttr: "data-disable-slide-animation",
            disableAutoCollapseAttr: "data-disable-auto-collapse",
            animationTime: 250,
            headerClass: "menu-header",
            itemClass: "menu-item",
            itemLinkClass: "menu-link",
            hasSubClass: "has-sub",
            activeClass: "active",
            expandingClass: "expanding",
            expandClass: "expand",
            closingClass: "closing",
            closedClass: "closed",
            submenu: {
                class: "menu-submenu"
            }
        },
        profile: {
            class: "menu-profile",
            toggleAttr: 'data-toggle="app-sidebar-profile"',
            targetAttr: "data-target"
        },
        mobile: {
            toggleAttr: 'data-toggle="app-sidebar-mobile"',
            dismissAttr: 'data-dismiss="app-sidebar-mobile"',
            toggledClass: "app-sidebar-mobile-toggled",
            closedClass: "app-sidebar-mobile-closed",
            backdrop: {
                class: "app-sidebar-mobile-backdrop"
            }
        },
        minify: {
            toggleAttr: 'data-toggle="app-sidebar-minify"',
            toggledClass: "app-sidebar-minified",
            cookieName: "app-sidebar-minified"
        },
        floatSubmenu: {
            id: "#app-sidebar-float-submenu",
            dom: "",
            timeout: "",
            class: "app-sidebar-float-submenu",
            container: {
                class: "app-sidebar-float-submenu-container"
            },
            arrow: {
                id: "#app-sidebar-float-submenu-arrow",
                class: "app-sidebar-float-submenu-arrow"
            },
            line: {
                id: "#app-sidebar-float-submenu-line",
                class: "app-sidebar-float-submenu-line"
            },
            overflow: {
                class: "overflow-scroll mh-100vh"
            }
        },
        search: {
            class: "menu-search",
            toggleAttr: 'data-sidebar-search="true"',
            hideClass: "d-none",
            foundClass: "has-text"
        },
        transparent: {
            class: "app-sidebar-transparent"
        }
    },
    sidebarEnd: {
        class: "app-sidebar-end",
        toggleAttr: 'data-toggle="app-sidebar-end"',
        toggledClass: "app-sidebar-end-toggled",
        collapsedClass: "app-sidebar-end-collapsed",
        mobile: {
            toggleAttr: 'data-toggle="app-sidebar-end-mobile"',
            dismissAttr: 'data-dismiss="app-sidebar-end-mobile"',
            toggledClass: "app-sidebar-end-mobile-toggled",
            collapsedClass: "app-sidebar-end-mobile-collapsed",
            closedClass: "app-sidebar-end-mobile-closed"
        }
    },
    topMenu: {
        id: "#top-menu",
        class: "app-top-menu",
        mobile: {
            toggleAttr: 'data-toggle="app-top-menu-mobile"'
        },
        menu: {
            class: "menu",
            itemClass: "menu-item",
            linkClass: "menu-link",
            activeClass: "active",
            hasSubClass: "has-sub",
            expandClass: "expand",
            submenu: {
                class: "menu-submenu"
            }
        },
        control: {
            class: "menu-control",
            startClass: "menu-control-start",
            endClass: "menu-control-end",
            showClass: "show",
            buttonPrev: {
                class: "menu-control-start",
                toggleAttr: 'data-toggle="app-top-menu-prev"'
            },
            buttonNext: {
                class: "menu-control-end",
                toggleAttr: 'data-toggle="app-top-menu-next"'
            }
        }
    },
    scrollBar: {
        attr: 'data-scrollbar="true"',
        skipMobileAttr: "data-skip-mobile",
        initAttr: "data-init",
        heightAttr: "data-height",
        wheelPropagationAttr: "data-wheel-propagation"
    },
    content: {
        id: "#content",
        class: "app-content",
        fullHeight: {
            class: "app-content-full-height"
        },
        fullWidth: {
            class: "app-content-full-width"
        }
    },
    layout: {
        sidebarLight: {
            class: "app-with-light-sidebar"
        },
        sidebarEnd: {
            class: "app-with-end-sidebar"
        },
        sidebarWide: {
            class: "app-with-wide-sidebar"
        },
        sidebarMinified: {
            class: "app-sidebar-minified"
        },
        sidebarTwo: {
            class: "app-with-two-sidebar"
        },
        withoutHeader: {
            class: "app-without-header"
        },
        withoutSidebar: {
            class: "app-without-sidebar"
        },
        topMenu: {
            class: "app-with-top-menu"
        },
        boxedLayout: {
            class: "boxed-layout"
        }
    },
    loader: {
        class: "app-loader",
        fadingClass: "fading",
        fadingTime: 200,
        loadedClass: "loaded"
    },
    panel: {
        class: "panel",
        headClass: "panel-heading",
        titleClass: "panel-title",
        bodyClass: "panel-body",
        expandClass: "panel-expand",
        loadingClass: "panel-loading",
        loader: {
            class: "panel-loader",
            html: '<span class="spinner spinner-sm"></span>'
        },
        toggle: {
            remove: {
                attr: 'data-toggle="panel-remove"',
                tooltipText: "Remove"
            },
            collapse: {
                attr: 'data-toggle="panel-collapse"',
                tooltipText: "Collapse / Expand"
            },
            reload: {
                attr: 'data-toggle="panel-reload"',
                tooltipText: "Reload"
            },
            expand: {
                attr: 'data-toggle="panel-expand"',
                tooltipText: "Expand / Compress"
            }
        },
        draggable: {
            disableAttr: 'data-sortable="false"',
            connectedTarget: ".row > [class*=col]",
            spinnerHtml: '<i class="fa fa-spinner fa-spin ms-2" data-id="title-spinner"></i>'
        },
        sortable: {
            class: "ui-sortable",
            attr: "data-sortable-id",
            spinnerAttr: 'data-id="title-spinner"',
            disableAttr: 'data-sortable="false"',
            parentAttr: 'class*="col-"'
        },
        localStorage: {
            notSupportMessage: "Your browser is not supported with the local storage",
            loadedEvent: "localstorage-position-loaded",
            reset: {
                attr: 'data-toggle="reset-local-storage"',
                modal: {
                    id: "#modalResetLocalStorage",
                    title: "Reset Local Storage Confirmation",
                    message: "Would you like to RESET all your saved widgets and clear Local Storage?",
                    alert: "info",
                    confirmResetAttr: 'data-toggle="confirm-reset-local-storage"'
                }
            }
        }
    },
    scrollToTopBtn: {
        showClass: "show",
        heightShow: 200,
        toggleAttr: 'data-toggle="scroll-to-top"',
        scrollSpeed: 500
    },
    unlimitedTabs: {
        class: "tab-overflow",
        overflowLeft: {
            class: "overflow-left"
        },
        overflowRight: {
            class: "overflow-right"
        },
        buttonNext: {
            class: "next-button",
            toggleAttr: 'data-click="next-tab"'
        },
        buttonPrev: {
            class: "prev-button",
            toggleAttr: 'data-click="prev-tab"'
        }
    },
    themePanel: {
        class: "theme-panel",
        toggleAttr: 'data-toggle="theme-panel-expand"',
        cookieName: "theme-panel-expand",
        activeClass: "active",
        themeListCLass: "theme-list",
        themeListItemCLass: "theme-list-item",
        theme: {
            toggleAttr: 'data-toggle="theme-selector"',
            cookieName: "app-theme",
            id: "#themeCss",
            activeClass: "active"
        },
        themeHeader: {
            class: "app-header-inverse",
            toggleAttr: 'name="app-header-inverse"',
            cookieName: "app-theme-header"
        },
        themeHeaderFixed: {
            class: "app-header-fixed",
            toggleAttr: 'name="app-header-fixed"',
            cookieName: "app-header-fixed",
            disabledClass: "app-header-fixed-disabled",
            errorMessage: "Default Header with Fixed Sidebar option is not supported. Proceed with Default Header with Default Sidebar."
        },
        themeSidebarGrid: {
            class: "app-sidebar-grid",
            toggleAttr: 'name="app-sidebar-grid"',
            cookieName: "app-sidebar-grid"
        },
        themeGradientEnabled: {
            class: "app-gradient-enabled",
            toggleAttr: 'name="app-gradient-enabled"',
            cookieName: "app-gradient-enabled"
        },
        themeSidebarFixed: {
            class: "app-sidebar-fixed",
            toggleAttr: 'name="app-sidebar-fixed"',
            cookieName: "app-sidebar-fixed",
            disabledClass: "app-sidebar-fixed-disabled",
            errorMessage: "Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.",
            mobileErrorMessage: "Mobile view sidebar will always fixed"
        }
    },
    animation: {
        attr: "data-animation",
        valueAttr: "data-value",
        speed: 1e3,
        effect: "swing"
    },
    dismissClass: {
        toggleAttr: "data-dismiss-class",
        targetAttr: "data-target"
    },
    toggleClass: {
        toggleAttr: "data-toggle-class",
        targetAttr: "data-target"
    },
    helper: {
        display: {
            none: "d-none"
        },
        margin: {
            left: {
                0: "ms-0"
            },
            right: {
                0: "me-0"
            }
        }
    }
}

let handleScrollbar = function () {
    "use strict";
    for (var a = document.querySelectorAll("[" + app.scrollBar.attr + "]"), e = 0; e < a.length; e++) generateScrollbar(a[e])
},
    generateScrollbar = function (a) {
        "use strict";
        if (!($(a).attr(app.scrollBar.initAttr) || app.isMobile && $(a).attr(app.scrollBar.skipMobileAttr))) {
            var e = $(a).attr(app.scrollBar.heightAttr) ? $(a).attr(app.scrollBar.heightAttr) : $(a).height();
            if ($(a).css("height", e), app.isMobile) $(a).css("overflow-x", "scroll");
            else {
                var s = !!$(a).attr(app.scrollBar.wheelPropagationAttr) && $(a).attr(app.scrollBar.wheelPropagationAttr);
                0 !== $(a).closest("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ")").length ? app.sidebar.scrollBar.dom = new PerfectScrollbar(a, {
                    wheelPropagation: s
                }) : new PerfectScrollbar(a, {
                    wheelPropagation: s
                })
            }
            $(a).attr(app.scrollBar.initAttr, !0)
        }
    },
    handleSidebarMenu = function () {
        "use strict";
        var a = $(app.sidebar.id).attr(app.sidebar.menu.disableAnimationAttr) ? 0 : app.sidebar.menu.animationTime,
            e = $(app.sidebar.id).attr(app.sidebar.menu.disableAutoCollapseAttr) ? 1 : 0;
        $(document).on("click", "." + app.sidebar.class + " ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass + " > ." + app.sidebar.menu.itemLinkClass, (function () {
            var s = $(this).next("." + app.sidebar.menu.submenu.class),
                t = $("." + app.sidebar.class + " ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass + " > ." + app.sidebar.menu.submenu.class).not(s);
            0 === $("." + app.sidebar.minify.toggledClass).length && (e || ($(t).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closingClass), $(t).slideUp(a, (function () {
                $(t).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closedClass).removeClass(app.sidebar.menu.expandClass + " " + app.sidebar.menu.closingClass)
            }))), $(s).is(":visible") ? $(s).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closingClass).removeClass(app.sidebar.menu.expandClass) : $(s).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.expandingClass).removeClass(app.sidebar.menu.closedClass), $(s).slideToggle(a, (function () {
                var a = $(this).closest("." + app.sidebar.menu.itemClass);
                $(s).is(":visible") ? ($(a).addClass(app.sidebar.menu.expandClass), $(a).removeClass(app.sidebar.menu.closedClass)) : ($(a).addClass(app.sidebar.menu.closedClass), $(a).removeClass(app.sidebar.menu.expandClass)), $(a).removeClass(app.sidebar.menu.expandingClass + " " + app.sidebar.menu.closingClass)
            })))
        })), $(document).on("click", "." + app.sidebar.class + " ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass + " ." + app.sidebar.menu.submenu.class + " ." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass + " > ." + app.sidebar.menu.itemLinkClass, (function () {
            if (0 === $("." + app.sidebar.minify.toggledClass).length) {
                var e = $(this).next("." + app.sidebar.menu.submenu.class);
                $(e).is(":visible") ? $(e).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.closingClass).removeClass(app.sidebar.menu.expandClass) : $(e).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.expandingClass).removeClass(app.sidebar.menu.closedClass), $(e).slideToggle(a, (function () {
                    var a = $(this).closest("." + app.sidebar.menu.itemClass);
                    $(e).is(":visible") ? ($(a).addClass(app.sidebar.menu.expandClass), $(a).removeClass(app.sidebar.menu.closedClass)) : ($(a).addClass(app.sidebar.menu.closedClass), $(a).removeClass(app.sidebar.menu.expandClass)), $(a).removeClass(app.sidebar.menu.expandingClass + " " + app.sidebar.menu.closingClass)
                }))
            }
        }))
    },
    handleSidebarToggle = function () {
        "use strict";
        $(document).on("click", "[" + app.sidebar.mobile.toggleAttr + "]", (function (a) {
            a.preventDefault(), $(app.id).addClass(app.sidebar.mobile.toggledClass).removeClass(app.sidebar.mobile.closedClass)
        })), $(document).on("click", "[" + app.sidebar.mobile.dismissAttr + "]", (function (a) {
            a.preventDefault(), $(app.id).removeClass(app.sidebar.mobile.toggledClass).addClass(app.sidebar.mobile.closedClass), setTimeout((function () {
                $(app.id).removeClass(app.sidebar.mobile.closedClass)
            }), 250)
        }))
    },
    handleSidebarEndToggle = function () {
        "use strict";
        $(document).on("click", "[" + app.sidebarEnd.toggleAttr + "]", (function (a) {
            a.preventDefault(), $(app.id).hasClass(app.sidebarEnd.toggledClass) || $(app.id).hasClass(app.sidebarEnd.collapsedClass) ? $(app.id).hasClass(app.sidebarEnd.toggledClass) ? $(app.id).removeClass(app.sidebarEnd.toggledClass).addClass(app.sidebarEnd.collapsedClass) : $(app.id).removeClass(app.sidebarEnd.collapsedClass).addClass(app.sidebarEnd.toggledClass) : $(app.id).addClass(app.sidebarEnd.collapsedClass)
        })), $(document).on("click", "[" + app.sidebarEnd.mobile.toggleAttr + "]", (function (a) {
            a.preventDefault(), $(app.id).addClass(app.sidebarEnd.mobile.toggledClass).removeClass(app.sidebarEnd.mobile.closedClass)
        })), $(document).on("click", "[" + app.sidebarEnd.mobile.dismissAttr + "]", (function (a) {
            a.preventDefault(), $(app.id).removeClass(app.sidebarEnd.mobile.toggledClass).addClass(app.sidebarEnd.mobile.closedClass), setTimeout((function () {
                $(app.id).removeClass(app.sidebarEnd.mobile.closedClass)
            }), 250)
        }))
    },
    handleSidebarMinify = function () {
        "use strict";
        ($(document).on("click", "[" + app.sidebar.minify.toggleAttr + "]", (function (a) {
            a.preventDefault();
            var e = !1;
            if ($(app.id).hasClass(app.sidebar.minify.toggledClass)) $(app.id).removeClass(app.sidebar.minify.toggledClass), $(app.sidebar.floatSubmenu.id).remove();
            else {
                if ($(app.id).addClass(app.sidebar.minify.toggledClass), app.isMobile) {
                    var s = "." + app.sidebar.class + " " + app.scrollBar.attr;
                    $(s).css("margin-top", "0"), $(s).css("overflow-x", "scroll")
                }
                e = !0
            }
            Cookies && Cookies.set(app.sidebar.minify.cookieName, e)
        })), Cookies) && ("true" == Cookies.get(app.sidebar.minify.cookieName) && $(app.id).addClass(app.sidebar.minify.toggledClass))
    },
    handlePageLoader = function () {
        "use strict";
        $(window).on("load", (function () {
            var a = "." + app.loader.class;
            $(a).addClass(app.loader.fadingClass), setTimeout((function () {
                $(a).removeClass(app.loader.fadingClass).addClass(app.loader.loadedClass)
            }), app.loader.fadingTime)
        }))
    },
    handlePanelAction = function () {
        "use strict";
        var a;
        $(document).on("mouseover", "[" + app.panel.toggle.remove.attr + "]", (function (a) {
            $(this).attr("data-tooltip-init") || (new bootstrap.Tooltip(this, {
                title: app.panel.toggle.remove.tooltipText,
                placement: "bottom"
            }).show(), $(this).attr("data-tooltip-init", !0))
        })), $(document).on("click", "[" + app.panel.toggle.remove.attr + "]", (function (e) {
            e.preventDefault(), a && a.hide(), $(this).closest("." + app.panel.class).remove()
        })), $(document).on("mouseover", "[" + app.panel.toggle.collapse.attr + "]", (function (e) {
            $(this).attr("data-tooltip-init") || ((a = new bootstrap.Tooltip(this, {
                title: app.panel.toggle.collapse.tooltipText,
                placement: "bottom"
            })).show(), $(this).attr("data-tooltip-init", !0))
        })), $(document).on("click", "[" + app.panel.toggle.collapse.attr + "]", (function (e) {
            e.preventDefault(), a && a.hide(), $(this).closest("." + app.panel.class).find("." + app.panel.bodyClass).slideToggle()
        })), $(document).on("mouseover", "[" + app.panel.toggle.reload.attr + "]", (function (e) {
            $(this).attr("data-tooltip-init") || ((a = new bootstrap.Tooltip(this, {
                title: app.panel.toggle.reload.tooltipText,
                placement: "bottom"
            })).show(), $(this).attr("data-tooltip-init", !0))
        })), $(document).on("click", "[" + app.panel.toggle.reload.attr + "]", (function (e) {
            e.preventDefault(), a && a.hide();
            var s = $(this).closest("." + app.panel.class);
            if (!$(s).hasClass(app.panel.loadingClass)) {
                var t = $(s).find("." + app.panel.bodyClass),
                    p = '<div class="' + app.panel.loader.class + '">' + app.panel.loader.html + "</div>";
                $(s).addClass(app.panel.loadingClass), $(t).prepend(p), setTimeout((function () {
                    $(s).removeClass(app.panel.loadingClass), $(s).find("." + app.panel.loader.class).remove()
                }), 2e3)
            }
        })), $(document).on("mouseover", "[" + app.panel.toggle.expand.attr + "]", (function (e) {
            $(this).attr("data-tooltip-init") || ((a = new bootstrap.Tooltip(this, {
                title: app.panel.toggle.expand.tooltipText,
                placement: "bottom"
            })).show(), $(this).attr("data-tooltip-init", !0))
        })), $(document).on("click", "[" + app.panel.toggle.expand.attr + "]", (function (e) {
            e.preventDefault(), a && a.hide();
            var s = $(this).closest("." + app.panel.class),
                t = $(s).find("." + app.panel.bodyClass);
            if (0 !== $(t).length) {
                var p = $(s).offset().top;
                $(t).offset().top - p
            }
            $("body").hasClass(app.panel.expandClass) && $(s).hasClass(app.panel.expandClass) ? ($("body, ." + app.panel.class).removeClass(app.panel.expandClass), $("." + app.panel.class).removeAttr("style"), $(t).removeAttr("style")) : ($("body").addClass(app.panel.expandClass), $(this).closest("." + app.panel.class).addClass(app.panel.expandClass))
        }))
    },
    handlePanelDraggable = function () {
        "use strict";
        var a = $("." + app.panel.class + ":not([" + app.panel.draggable.disableAttr + "])").parent("[class*=col]"),
            e = "." + app.panel.headClass,
            s = app.panel.draggable.connectedTarget;
        $(a).sortable({
            handle: e,
            connectWith: s,
            stop: function (a, e) {
                e.item.find("." + app.panel.titleClass).append(app.panel.draggable.spinnerHtml), handleSavePanelPosition(e.item)
            }
        })
    },
    handelTooltipPopoverActivation = function () {
        "use strict";
        if (0 !== $("[" + app.bootstrap.tooltip.attr + "]").length) [].slice.call(document.querySelectorAll("[" + app.bootstrap.tooltip.attr + "]")).map((function (a) {
            return new bootstrap.Tooltip(a)
        }));
        if (0 !== $("[" + app.bootstrap.popover.attr + "]").length) [].slice.call(document.querySelectorAll("[" + app.bootstrap.popover.attr + "]")).map((function (a) {
            return new bootstrap.Popover(a)
        }))
    },
    handleScrollToTopButton = function () {
        "use strict";
        $(document).scroll((function () {
            $(document).scrollTop() >= app.scrollToTopBtn.heightShow ? $("[" + app.scrollToTopBtn.toggleAttr + "]").hasClass(app.scrollToTopBtn.showClass) || $("[" + app.scrollToTopBtn.toggleAttr + "]").addClass(app.scrollToTopBtn.showClass) : $("[" + app.scrollToTopBtn.toggleAttr + "]").removeClass(app.scrollToTopBtn.showClass)
        })), $("[" + app.scrollToTopBtn.toggleAttr + "]").click((function (a) {
            a.preventDefault(), $("html, body").animate({
                scrollTop: $("body").offset().top
            }, app.scrollToTopBtn.scrollSpeed)
        }))
    },
    handleThemePanel = function () {
        "use strict";
        ($(document).on("click", "[" + app.themePanel.toggleAttr + "]", (function () {
            var a = "." + app.themePanel.class,
                e = !1;
            $(a).hasClass(app.themePanel.activeClass) ? $(a).removeClass(app.themePanel.activeClass) : ($(a).addClass(app.themePanel.activeClass), e = !0), Cookies && Cookies.set(app.themePanel.cookieName, e)
        })), Cookies) && ("true" == Cookies.get(app.themePanel.cookieName) && $("[" + app.themePanel.toggleAttr + "]").trigger("click"));
        $(document).on("click", "." + app.themePanel.class + " [" + app.themePanel.theme.toggleAttr + "]", (function () {
            var a = $(this).attr("data-theme-file"),
                e = $(this).attr("data-theme");
            0 === $(app.themePanel.theme.id).length ? $("head").append('<link href="' + a + '" rel="stylesheet" id="' + app.themePanel.theme.id.replace("#", "") + '" />') : $(app.themePanel.theme.id).attr("href", a), $("." + app.themePanel.class + " [" + app.themePanel.theme.toggleAttr + "]").not(this).closest("." + app.themePanel.themeListItemCLass).removeClass(app.themePanel.theme.activeClass), $(this).closest("." + app.themePanel.themeListItemCLass).addClass(app.themePanel.theme.activeClass), Cookies && Cookies.set(app.themePanel.theme.cookieName, e)
        })), $(document).on("change", "." + app.themePanel.class + " [" + app.themePanel.themeHeader.toggleAttr + "]", (function () {
            var a = "";
            $(this).is(":checked") ? ($("." + app.header.class).addClass(app.themePanel.themeHeader.class), a = app.themePanel.themeHeader.class) : $("." + app.header.class).removeClass(app.themePanel.themeHeader.class), Cookies && Cookies.set(app.themePanel.themeHeader.cookieName, a)
        })), $(document).on("change", "." + app.themePanel.class + " [" + app.themePanel.themeHeaderFixed.toggleAttr + "]", (function () {
            var a = "";
            $(this).is(":checked") ? ($(app.id).addClass(app.themePanel.themeHeaderFixed.class), a = app.themePanel.themeHeaderFixed.class) : ($(app.themePanel.themeSidebarFixed.toggleAttr).is(":checked") && !app.isMobile && (alert(app.themePanel.themeHeaderFixed.errorMessage), $(app.themePanel.themeSidebarFixed.toggleAttr).prop("checked", !1), $(app.themePanel.themeSidebarFixed.toggleAttr).trigger("change")), $(app.id).removeClass(app.themePanel.themeHeaderFixed.class), a = app.themePanel.themeHeaderFixed.disabledClass), Cookies && Cookies.set(app.themePanel.themeHeaderFixed.cookieName, a)
        })), $(document).on("change", "." + app.themePanel.class + " [" + app.themePanel.themeSidebarGrid.toggleAttr + "]", (function () {
            var a = "";
            $(this).is(":checked") ? ($(app.sidebar.id).addClass(app.themePanel.themeSidebarGrid.class), a = app.themePanel.themeSidebarGrid.class) : $(app.sidebar.id).removeClass(app.themePanel.themeSidebarGrid.class), Cookies && Cookies.set(app.themePanel.themeSidebarGrid.cookieName, a)
        })), $(document).on("change", "." + app.themePanel.class + " [" + app.themePanel.themeSidebarFixed.toggleAttr + "]", (function () {
            var a = "",
                e = "." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") [" + app.scrollBar.attr + "]";
            app.isMobile ? ($(this).prop("checked", !0), alert(app.themePanel.themeSidebarFixed.mobileErrorMessage)) : ($(this).is(":checked") ? ($("." + app.themePanel.class + " [" + app.themePanel.themeHeaderFixed.toggleAttr + "]").is(":checked") || (alert(app.themePanel.themeSidebarFixed.errorMessage), $(app.themePanel.themeHeaderFixed.toggleAttr).prop("checked", !0), $(app.themePanel.themeHeaderFixed.toggleAttr).trigger("change"), $(app.id).addClass(app.themePanel.themeHeaderFixed.class)), $(app.id).addClass(app.themePanel.themeSidebarFixed.class), generateScrollbar(document.querySelector(e)), a = app.themePanel.themeSidebarFixed.class) : ($(app.id).removeClass(app.themePanel.themeSidebarFixed.class), app.sidebar.scrollBar.dom.destroy(), app.sidebar.scrollBar.dom = "", a = app.themePanel.themeSidebarFixed.disabledClass, $(e).removeAttr(app.scrollBar.initAttr)), Cookies && Cookies.set(app.themePanel.themeSidebarFixed.cookieName, a))
        })), $(document).on("change", "." + app.themePanel.class + " [" + app.themePanel.themeGradientEnabled.toggleAttr + "]", (function () {
            var a = "";
            $(this).is(":checked") ? ($(app.id).addClass(app.themePanel.themeGradientEnabled.class), a = app.themePanel.themeGradientEnabled.class) : $(app.id).removeClass(app.themePanel.themeGradientEnabled.class), Cookies && Cookies.set(app.themePanel.themeGradientEnabled.cookieName, a)
        })), Cookies && (Cookies.get(app.themePanel.theme.cookieName) && $("." + app.themePanel.class + " [" + app.themePanel.theme.toggleAttr + '][data-theme="' + Cookies.get(app.themePanel.theme.cookieName) + '"]').trigger("click"), Cookies.get(app.themePanel.themeHeader.cookieName) && $("." + app.themePanel.class + " [" + app.themePanel.themeHeader.toggleAttr + "]").prop("checked", !0).trigger("change"), Cookies.get(app.themePanel.themeSidebarGrid.cookieName) && $("." + app.themePanel.class + " [" + app.themePanel.themeSidebarGrid.toggleAttr + "]").prop("checked", !0).trigger("change"), Cookies.get(app.themePanel.themeGradientEnabled.cookieName) && $("." + app.themePanel.class + " [" + app.themePanel.themeGradientEnabled.toggleAttr + "]").prop("checked", !0).trigger("change"), Cookies.get(app.themePanel.themeSidebarFixed.cookieName) && Cookies.get(app.themePanel.themeSidebarFixed.cookieName) == app.themePanel.themeSidebarFixed.disabledClass && $("." + app.themePanel.class + " [" + app.themePanel.themeSidebarFixed.toggleAttr + "]").prop("checked", !1).trigger("change"), Cookies.get(app.themePanel.themeHeaderFixed.cookieName) && Cookies.get(app.themePanel.themeHeaderFixed.cookieName) == app.themePanel.themeHeaderFixed.disabledClass && $("." + app.themePanel.class + " [" + app.themePanel.themeHeaderFixed.toggleAttr + "]").prop("checked", !1).trigger("change"))
    },
    handleSavePanelPosition = function (a) {
        "use strict";
        if (0 !== $("." + app.panel.sortable.class).length) {
            var e = [];
            $.when($("." + app.panel.sortable.class).each((function () {
                var a = $(this).find("[" + app.panel.sortable.attr + "]");
                if (0 !== a.length) {
                    var s = [];
                    $(a).each((function () {
                        var a = $(this).attr(app.panel.sortable.attr);
                        s.push({
                            id: a
                        })
                    })), e.push(s)
                } else e.push([]);
                0
            }))).done((function () {
                console.log(e);
                var s = window.location.href;
                s = (s = s.split("?"))[0], localStorage.setItem(s, JSON.stringify(e)), $(a).find("[" + app.panel.sortable.spinnerAttr + "]").delay(500).fadeOut(500, (function () {
                    $(this).remove()
                }))
            }))
        }
    },
    handleLocalStorage = function () {
        "use strict";
        try {
            if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
                var a = window.location.href;
                a = (a = a.split("?"))[0];
                var e = localStorage.getItem(a);
                if (e) {
                    e = JSON.parse(e);
                    var s = 0;
                    $.when($("." + app.panel.class + ":not([" + app.panel.sortable.disableAttr + "])").parent("[" + app.panel.sortable.parentAttr + "]").each((function () {
                        var a = e[s],
                            t = $(this);
                        a && $.each(a, (function (a, e) {
                            var s = $("[" + app.panel.sortable.attr + '="' + e.id + '"]').not('[data-init="true"]');
                            if (0 !== $(s).length) {
                                var p = $(s).clone();
                                $(s).remove(), $(t).append(p), $("[" + app.panel.sortable.attr + '="' + e.id + '"]').attr("data-init", "true")
                            }
                        })), s++
                    }))).done((function () {
                        window.dispatchEvent(new CustomEvent(app.panel.localStorage.loadedEvent))
                    }))
                }
            } else alert(app.panel.localStorage.notSupportMessage)
        } catch (a) {
            console.log(a)
        }
    },
    handleResetLocalStorage = function () {
        "use strict";
        $(document).on("click", "[" + app.panel.localStorage.reset.attr + "]", (function (a) {
            a.preventDefault();
            var e = '<div class="modal fade" data-modal-id="' + app.panel.localStorage.reset.modal.id + '">    <div class="modal-dialog">        <div class="modal-content">            <div class="modal-header">                <h4 class="modal-title"><i class="fa fa-redo me-1"></i> ' + app.panel.localStorage.reset.modal.title + '</h4>                <button type="button" class="btn-close" ' + app.bootstrap.modal.dismissAttr + '></button>            </div>            <div class="modal-body">                <div class="alert alert-' + app.panel.localStorage.reset.modal.alert + ' mb-0">' + app.panel.localStorage.reset.modal.message + '</div>            </div>            <div class="modal-footer">                <a href="javascript:;" class="btn btn-sm btn-default" ' + app.bootstrap.modal.dismissAttr + '><i class="fa fa-times me-1"></i> No</a>                <a href="javascript:;" class="btn btn-sm btn-inverse" ' + app.panel.localStorage.reset.modal.confirmResetAttr + '><i class="fa fa-check me-1"></i> Yes</a>            </div>        </div>    </div></div>';
            $("body").append(e), $('[data-modal-id="' + app.panel.localStorage.reset.modal.id + '"]').modal("show")
        })), $(document).on(app.bootstrap.modal.event.hidden, '[data-modal-id="' + app.panel.localStorage.reset.modal.id + '"]', (function (a) {
            $('[data-modal-id="' + app.panel.localStorage.reset.modal.id + '"]').remove()
        })), $(document).on("click", "[" + app.panel.localStorage.reset.modal.confirmResetAttr + "]", (function (a) {
            a.preventDefault();
            var e = window.location.href;
            e = (e = e.split("?"))[0], localStorage.removeItem(e), location.reload()
        }))
    },
    handleUnlimitedTabsRender = function () {
        function a(a, e) {
            var s = $(a).closest("." + app.unlimitedTabs.class),
                t = "rtl" == $("body").css("direction") ? "margin-right" : "margin-left",
                p = parseInt($(s).find("." + app.bootstrap.nav.tabs.class).css(t)),
                l = $(s).width(),
                i = 0,
                o = 0;
            switch ($(s).find("li").each((function () {
                $(this).hasClass(app.unlimitedTabs.buttonNext.class) || $(this).hasClass(app.unlimitedTabs.buttonPrev.class) || (i += $(this).width())
            })), e) {
                case "next":
                    (n = i + p - l) <= l ? (o = n - p, setTimeout((function () {
                        $(s).removeClass(app.unlimitedTabs.overflowRight.class)
                    }), 150)) : o = l - p - 80, 0 !== o && ("rtl" != $("body").css("direction") ? $(s).find("." + app.bootstrap.nav.tabs.class).animate({
                        marginLeft: "-" + o + "px"
                    }, 150, (function () {
                        $(s).addClass(app.unlimitedTabs.overflowLeft.class)
                    })) : $(s).find("." + app.bootstrap.nav.tabs.class).animate({
                        marginRight: "-" + o + "px"
                    }, 150, (function () {
                        $(s).addClass(app.unlimitedTabs.overflowLeft.class)
                    })));
                    break;
                case "prev":
                    var n;
                    (n = -p) <= l ? ($(s).removeClass(app.unlimitedTabs.overflowLeft.class), o = 0) : o = n - l + 80, "rtl" != $("body").css("direction") ? $(s).find("." + app.bootstrap.nav.tabs.class).animate({
                        marginLeft: "-" + o + "px"
                    }, 150, (function () {
                        $(s).addClass(app.unlimitedTabs.overflowRight.class)
                    })) : $(s).find("." + app.bootstrap.nav.tabs.class).animate({
                        marginRight: "-" + o + "px"
                    }, 150, (function () {
                        $(s).addClass(app.unlimitedTabs.overflowRight.class)
                    }))
            }
        }

        function e() {
            $("." + app.unlimitedTabs.class).each((function () {
                ! function (a, e) {
                    var s = "." + app.bootstrap.nav.tabs.itemClass + " ." + app.bootstrap.nav.tabs.activeClass;
                    $(a).find(" > ." + app.bootstrap.nav.tabs.itemClass).first() && (s = $(a).find("." + app.bootstrap.nav.tabs.itemClass + " ." + app.bootstrap.nav.tabs.activeClass).closest("." + app.bootstrap.nav.tabs.itemClass));
                    var t = "rtl" == $("body").css("direction") ? "margin-right" : "margin-left",
                        p = (parseInt($(a).css(t)), $(a).width()),
                        l = $(a).find(s).width(),
                        i = e > -1 ? e : 150,
                        o = 0;
                    if ($(a).find(s).prevAll().each((function () {
                        l += $(this).width()
                    })), $(a).find("." + app.bootstrap.nav.tabs.itemClass).each((function () {
                        o += $(this).width()
                    })), l >= p) {
                        var n = l - p;
                        o != l && (n += 40), "rtl" == $("body").css("direction") ? $(a).find("." + app.bootstrap.nav.tabs.class).animate({
                            marginRight: "-" + n + "px"
                        }, i) : $(a).find("." + app.bootstrap.nav.tabs.class).animate({
                            marginLeft: "-" + n + "px"
                        }, i)
                    }
                    l != o && o >= p ? $(a).addClass(app.unlimitedTabs.overflowRight.class) : $(a).removeClass(app.unlimitedTabs.overflowRight.class), l >= p && o >= p ? $(a).addClass(app.unlimitedTabs.overflowLeft.class) : $(a).removeClass(app.unlimitedTabs.overflowLeft.class)
                }(this, 0)
            }))
        }
        $("[" + app.unlimitedTabs.buttonNext.toggleAttr + "]").click((function (e) {
            e.preventDefault(), a(this, "next")
        })), $("[" + app.unlimitedTabs.buttonPrev.toggleAttr + "]").click((function (e) {
            e.preventDefault(), a(this, "prev")
        })), $(window).resize((function () {
            $("." + app.unlimitedTabs.class + " ." + app.bootstrap.nav.tabs.class).removeAttr("style"), e()
        })), e()
    },
    handleUnlimitedTopMenuRender = function () {
        "use strict";

        function a(a, e) {
            var s = $(a).closest("." + app.topMenu.menu.class),
                t = "rtl" == $("body").css("direction") ? "margin-right" : "margin-left",
                p = parseInt($(s).css(t)),
                l = $("." + app.topMenu.class).width() - 88,
                i = 0,
                o = 0;
            switch ($(s).find("." + app.topMenu.menu.itemClass).each((function () {
                $(this).hasClass(app.topMenu.control.class) || (i += $(this).width())
            })), e) {
                case "next":
                    (n = i + p - l) <= l ? (o = n - p + 128, setTimeout((function () {
                        $(s).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonNext.class).removeClass("show")
                    }), 150)) : o = l - p - 128, 0 !== o && ("rtl" != $("body").css("direction") ? $(s).animate({
                        marginLeft: "-" + o + "px"
                    }, 150, (function () {
                        $(s).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonPrev.class).addClass("show")
                    })) : $(s).animate({
                        marginRight: "-" + o + "px"
                    }, 150, (function () {
                        $(s).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonPrev.class).addClass("show")
                    })));
                    break;
                case "prev":
                    var n;
                    (n = -p) <= l ? ($(s).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonPrev.class).removeClass("show"), o = 0) : o = n - l + 88, "rtl" != $("body").css("direction") ? $(s).animate({
                        marginLeft: "-" + o + "px"
                    }, 150, (function () {
                        $(s).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonNext.class).addClass("show")
                    })) : $(s).animate({
                        marginRight: "-" + o + "px"
                    }, 150, (function () {
                        $(s).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonNext.class).addClass("show")
                    }))
            }
        }

        function e() {
            var a = $("." + app.topMenu.class + " ." + app.topMenu.menu.class),
                e = $("." + app.topMenu.class + " ." + app.topMenu.menu.class + " > ." + app.topMenu.menu.itemClass),
                s = $("." + app.topMenu.class + " ." + app.topMenu.menu.class + " > ." + app.topMenu.menu.itemClass + ".active"),
                t = $("." + app.topMenu.class),
                p = "rtl" == $("body").css("direction") ? "margin-right" : "margin-left",
                l = (parseInt($(a).css(p)), $(t).width() - 128),
                i = $("." + app.topMenu.class + " ." + app.topMenu.menu.class + " > ." + app.topMenu.menu.itemClass + ".active").width(),
                o = 0;
            if ($(s).prevAll().each((function () {
                i += $(this).width()
            })), $(e).each((function () {
                $(this).hasClass(app.topMenu.control.class) || (o += $(this).width())
            })), i >= l) {
                var n = i - l + 128;
                "rtl" != $("body").css("direction") ? $(a).animate({
                    marginLeft: "-" + n + "px"
                }, 0) : $(a).animate({
                    marginRight: "-" + n + "px"
                }, 0)
            }
            i != o && o >= l ? $(a).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonNext.class).addClass(app.topMenu.control.showClass) : $(a).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonNext.class).removeClass(app.topMenu.control.showClass), i >= l && o >= l ? $(a).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonPrev.class).addClass(app.topMenu.control.showClass) : $(a).find("." + app.topMenu.control.class + "." + app.topMenu.control.buttonPrev.class).removeClass(app.topMenu.control.showClass)
        }
        $("[" + app.topMenu.control.buttonNext.toggleAttr + "]").click((function (e) {
            e.preventDefault(), a(this, "next")
        })), $("[" + app.topMenu.control.buttonPrev.toggleAttr + "]").click((function (e) {
            e.preventDefault(), a(this, "prev")
        })), $(window).resize((function () {
            $(window).width() > 767 ? ($("." + app.topMenu.class + " ." + app.topMenu.menu.class).removeAttr("style"), e()) : $("." + app.topMenu.class + " ." + app.topMenu.menu.class).removeAttr("style")
        })), e()
    },
    handleTopMenuSubMenu = function () {
        "use strict";
        $(document).on("click", "." + app.topMenu.class + " ." + app.topMenu.menu.submenu.class + " ." + app.topMenu.menu.hasSubClass + " > ." + app.topMenu.menu.linkClass, (function () {
            var a = $(this).closest("." + app.topMenu.menu.itemClass).find("." + app.topMenu.menu.submenu.class).first(),
                e = $(this).closest("." + app.topMenu.menu.itemClass).find("." + app.topMenu.menu.submenu.class).not(a);
            $(e).not(a).slideUp(250, (function () {
                $(this).closest("." + app.topMenu.menu.itemClass).removeClass(app.topMenu.menu.expandClass)
            })), $(a).slideToggle(250, (function () {
                var a = $(this).closest("." + app.topMenu.menu.itemClass);
                $(a).hasClass(app.topMenu.menu.expandClass) ? $(a).removeClass(app.topMenu.menu.expandClass) : $(a).addClass(app.topMenu.menu.expandClass)
            }))
        }))
    },
    handleMobileTopMenuSubMenu = function () {
        "use strict";
        $(document).on("click", "." + app.topMenu.class + " ." + app.topMenu.menu.class + " > ." + app.topMenu.menu.itemClass + "." + app.topMenu.menu.hasSubClass + " > ." + app.topMenu.menu.linkClass, (function () {
            if ($(window).width() <= 767) {
                var a = $(this).closest("." + app.topMenu.menu.itemClass).find("." + app.topMenu.menu.submenu.class).first(),
                    e = $(this).closest("." + app.topMenu.menu.class).find("." + app.topMenu.menu.hasSubClass + " ." + app.topMenu.menu.submenu.class).not(a);
                $(e).not(a).slideUp(250, (function () {
                    $(this).closest("." + app.topMenu.menu.itemClass).removeClass("expand")
                })), $(a).slideToggle(250, (function () {
                    var a = $(this).closest("." + app.topMenu.menu.itemClass);
                    $(a).hasClass(app.topMenu.menu.expandClass) ? $(a).removeClass(app.topMenu.menu.expandClass) : $(a).addClass(app.topMenu.menu.expandClass)
                }))
            }
        }))
    },
    handleTopMenuMobileToggle = function () {
        "use strict";
        $(document).on("click", "[" + app.topMenu.mobile.toggleAttr + "]", (function () {
            $("." + app.topMenu.class).slideToggle(250)
        }))
    },
    handlePageScrollClass = function () {
        var a = function () {
            $(window).scrollTop() > 0 ? $(app.id).addClass(app.header.hasScrollClass) : $(app.id).removeClass(app.header.hasScrollClass)
        };
        $(window).on("scroll", (function () {
            a()
        })), a()
    },
    handleToggleNavProfile = function () {
        var a = $("." + app.sidebar.class).attr(app.sidebar.menu.disableAnimationAttr) ? 0 : app.sidebar.menu.animationTime;
        $(document).on("click", "[" + app.sidebar.profile.toggleAttr + "]", (function (e) {
            e.preventDefault();
            var s = $(this).closest("." + app.sidebar.profile.class),
                t = $(this).attr(app.sidebar.profile.targetAttr);
            $(t).is(":visible") ? ($(s).removeClass(app.sidebar.menu.activeClass), $(t).removeClass(app.sidebar.menu.closingClass)) : ($(s).addClass(app.sidebar.menu.activeClass), $(t).addClass(app.sidebar.menu.expandingClass)), $(t).slideToggle(a, (function () {
                $(t).is(":visible") ? ($(t).addClass(app.sidebar.menu.expandClass), $(t).removeClass(app.sidebar.menu.closedClass)) : ($(t).addClass(app.sidebar.menu.closedClass), $(t).removeClass(app.sidebar.menu.expandClass)), $(t).removeClass(app.sidebar.menu.expandingClass + " " + app.sidebar.menu.closingClass)
            }))
        }))
    },
    handleSidebarScrollMemory = function () {
        if (!app.isMobile) try {
            if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
                $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") [" + app.scrollBar.attr + "]").on("scroll", (function () {
                    localStorage.setItem(app.sidebar.scrollBar.localStorage, $(this).scrollTop())
                }));
                var a = localStorage.getItem(app.sidebar.scrollBar.localStorage);
                a && $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") [" + app.scrollBar.attr + "]").animate({
                    scrollTop: a + "px"
                }, 0)
            }
        } catch (a) {
            console.log(a)
        }
    },
    handleMouseoverFloatSubMenu = function (a) {
        clearTimeout(app.sidebar.floatSubmenu.timeout)
    },
    handleMouseoutFloatSubMenu = function (a) {
        app.sidebar.floatSubmenu.timeout = setTimeout((function () {
            $(app.sidebar.floatSubmenu.id).remove()
        }), 150)
    },
    handleGetHiddenMenuHeight = function (a) {
        $(a).attr("style");
        $(a).attr("style", "position: absolute; visibility: hidden; display: block !important");
        var e = $(a).height();
        return $(a).attr("style", ""), e
    },
    handleSidebarMinifyFloatMenu = function () {
        $(document).on("click", app.sidebar.floatSubmenu.id + " ." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass + " > ." + app.sidebar.menu.itemLinkClass, (function (a) {
            var e = $(this).next("." + app.sidebar.menu.submenu.class),
                s = $(e).closest("." + app.sidebar.menu.itemClass),
                t = !1,
                p = !1;
            $(e).is(":visible") ? ($(s).addClass("closing"), t = !0) : ($(s).addClass("expanding"), p = !0), $(e).slideToggle({
                duration: app.sidebar.menu.animationTime,
                progress: function () {
                    var a = $(app.sidebar.floatSubmenu.id),
                        e = $(a).height(),
                        s = $(a).offset(),
                        l = $(a).attr("data-offset-top"),
                        i = $(a).attr("data-menu-offset-top"),
                        o = s.top - $(window).scrollTop(),
                        n = $(window).height();
                    if (t && o > l && (o = o > l ? l : o, $(app.sidebar.floatSubmenu.id).css({
                        top: o + "px",
                        bottom: "auto"
                    }), $(app.sidebar.floatSubmenu.arrow.id).css({
                        top: "20px",
                        bottom: "auto"
                    }), $(app.sidebar.floatSubmenu.line.id).css({
                        top: "20px",
                        bottom: "auto"
                    })), p && n - o < e) {
                        var d = n - i - 22;
                        $(app.sidebar.floatSubmenu.id).css({
                            top: "auto",
                            bottom: 0
                        }), $(app.sidebar.floatSubmenu.arrow.id).css({
                            top: "auto",
                            bottom: d + "px"
                        }), $(app.sidebar.floatSubmenu.line.id).css({
                            top: "20px",
                            bottom: d + "px"
                        })
                    }
                },
                complete: function () {
                    $(e).is(":visible") ? ($(s).addClass("expand"), $(s).removeClass("closed")) : ($(s).addClass("closed"), $(s).removeClass("expand")), $(s).removeClass("closing expanding")
                }
            })
        })), $(document).on({
            mouseenter: function () {
                if ($(app.id).hasClass(app.sidebar.minify.toggledClass)) {
                    clearTimeout(app.sidebar.floatSubmenu.timeout);
                    var a = $(this).closest("." + app.sidebar.menu.itemClass).find("." + app.sidebar.menu.submenu.class).first();
                    if (app.sidebar.floatSubmenu.dom == this && 0 !== $(app.sidebar.floatSubmenu.id).length) return;
                    app.sidebar.floatSubmenu.dom = this;
                    var e = $(a).html();
                    if (e) {
                        var s = $(app.sidebar.id).offset(),
                            t = parseInt($(app.sidebar.id).width()),
                            p = $(app.id).hasClass(app.sidebarEnd.class) || "rtl" == $("body").css("direction") ? $(window).width() - s.left : s.left + t,
                            l = handleGetHiddenMenuHeight(a),
                            i = $(this).offset().top - $(window).scrollTop(),
                            o = $(app.id).hasClass(app.sidebarEnd.class) || "rtl" == $("body").css("direction") ? "auto" : p,
                            n = $(app.id).hasClass(app.sidebarEnd.class) || "rtl" == $("body").css("direction") ? p : "auto",
                            d = $(window).height();
                        if (0 === $(app.sidebar.floatSubmenu.id).length) {
                            var r = "";
                            l > d && (r = app.sidebar.floatSubmenu.overflow.class), e = '<div class="' + app.sidebar.floatSubmenu.container.class + '" id="' + app.sidebar.floatSubmenu.id.replace("#", "") + '" data-offset-top="' + i + '" data-menu-offset-top="' + i + '" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">\t<div class="' + app.sidebar.floatSubmenu.arrow.class + '" id="' + app.sidebar.floatSubmenu.arrow.id.replace("#", "") + '"></div>\t<div class="' + app.sidebar.floatSubmenu.line.class + '" id="' + app.sidebar.floatSubmenu.line.id.replace("#", "") + '"></div>\t<div class="' + app.sidebar.floatSubmenu.class + " " + r + '">' + e + "</div></div>", $(app.id).append(e)
                        } else l > d ? $(app.sidebar.floatSubmenu.id + " ." + app.sidebar.floatSubmenu.class).addClass(app.sidebar.floatSubmenu.overflow.class) : $(app.sidebar.floatSubmenu.id + app.sidebar.floatSubmenu.class).removeClass(app.sidebar.floatSubmenu.overflow.class), $(app.sidebar.floatSubmenu.id).attr("data-offset-top", i), $(app.sidebar.floatSubmenu.id).attr("data-menu-offset-top", i), $(app.sidebar.floatSubmenu.id + " ." + app.sidebar.floatSubmenu.class).html(e);
                        if (d - i > (l = $(app.sidebar.floatSubmenu.id).height())) $(app.sidebar.floatSubmenu.id).css({
                            top: i,
                            left: o,
                            bottom: "auto",
                            right: n
                        }), $(app.sidebar.floatSubmenu.arrow.id).css({
                            top: "20px",
                            bottom: "auto"
                        }), $(app.sidebar.floatSubmenu.line.id).css({
                            top: "20px",
                            bottom: "auto"
                        });
                        else {
                            $(app.sidebar.floatSubmenu.id).css({
                                bottom: 0,
                                top: "auto",
                                left: o,
                                right: n
                            });
                            var c = d - i - 21;
                            $(app.sidebar.floatSubmenu.arrow.id).css({
                                top: "auto",
                                bottom: c + "px"
                            }), $(app.sidebar.floatSubmenu.line.id).css({
                                top: "20px",
                                bottom: c + "px"
                            })
                        }
                    } else $(app.sidebar.floatSubmenu.line.id).remove(), app.sidebar.floatSubmenu.dom = ""
                }
            },
            mouseleave: function () {
                $(app.id).hasClass(app.sidebar.minify.toggledClass) && (app.sidebar.floatSubmenu.timeout = setTimeout((function () {
                    $(app.sidebar.floatSubmenu.line.id).remove(), app.sidebar.floatSubmenu.dom = ""
                }), 250))
            }
        }, "." + app.sidebar.class + " ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass + " > ." + app.sidebar.menu.itemLinkClass)
    },
    handleAjaxMode = function (a) {
        var e = a.emptyHtml ? a.emptyHtml : app.ajax.error.html,
            s = a.ajaxDefaultUrl ? a.ajaxDefaultUrl : "";

        function t(a) {
            a ? ($(app.ajax.loader.id).remove(), $("body").removeClass(app.ajax.loader.class)) : 0 === $(app.ajax.loader.id).length && ($("body").addClass(app.ajax.loader.class), $(content.id).append())
        }

        function p(s, p, l) {
            Pace.restart(), t(!1), $(app.ajax.clearElement).remove(), $(app.sidebar.floatSubmenu.id).remove(), $.fn.DataTable && $(".dataTable").DataTable().destroy(), $(app.id).hasClass(app.sidebar.mobile.toggledClass) && $(app.id).removeClass(app.sidebar.mobile.toggledClass), $(app.ajax.emptyElement).empty(),
                function (a) {
                    var e = app.sidebar.id + " [" + app.ajax.attr + '][href="' + a + '"]';
                    0 !== $(e).length && ($(app.sidebar.id + " ." + app.sidebar.menu.itemClass).removeClass(app.sidebar.menu.activeClass), $(e).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.activeClass), $(e).parents("." + app.sidebar.menu.itemClass).addClass(app.sidebar.menu.activeClass))
                }(s), app.ajax.clearOption && (App.clearPageOption(app.ajax.clearOption), app.ajax.clearOption = ""), l || function (a) {
                    var e = a.replace("#", ""),
                        s = window.navigator.userAgent.indexOf("MSIE ");
                    s && s > 0 && s < 9 ? window.location.href = e : history.pushState("", "", "#" + e)
                }(s);
            var i = app.content.id,
                o = s.replace("#", ""),
                n = a.ajaxType ? a.ajaxType : "GET",
                d = a.ajaxDataType ? a.ajaxDataType : "html";
            p && (d = $(p).attr("data-type") ? $(p).attr("data-type") : d, targetDataDataType = $(p).attr("data-data-type") ? $(p).attr("data-data-type") : d), $.ajax({
                url: o,
                type: n,
                dataType: d,
                success: function (a) {
                    $(i).html(a)
                },
                error: function (a, s, t) {
                    $(i).html(e)
                }
            }).done((function () {
                t(!0), $("html, body").animate({
                    scrollTop: 0
                }, 0), App.initComponent()
            }))
        }
        "" === (s = window.location.hash ? window.location.hash : s) ? $(app.content.id).html(e) : p(s, "", !0), $(window).on("hashchange", (function () {
            window.location.hash && p(window.location.hash, "", !0)
        })), $(document).on("click", "[" + app.ajax.attr + "]", (function (a) {
            a.preventDefault(), p($(this).attr("href"), this)
        }))
    },
    handleSetPageOption = function (a) {
        a.appContentFullHeight && $(app.id).addClass(app.content.fullHeight.class), a.appSidebarLight && $(app.id).addClass(app.layout.sidebarLight.class), a.appSidebarEnd && $(app.id).addClass(app.layout.sidebarEnd.class), a.appSidebarWide && $(app.id).addClass(app.layout.sidebarWide.class), a.appSidebarMinified && $(app.id).addClass(app.layout.sidebarMinified.class), a.appSidebarTwo && ($(app.header.id + " [" + app.sidebarEnd.mobile.toggleAttr + "]").removeClass(app.helper.display.none), $(app.header.id + " ." + app.header.brand.class).removeClass(app.helper.margin.left[0]), $(app.id).addClass(app.layout.sidebarTwo.class), $(app.id).addClass(app.sidebarEnd.toggledClass)), a.appSidebarTransparent && $(app.sidebar.id).addClass(app.sidebar.transparent.class), a.appSidebarSearch && $(app.sidebar.id + " ." + app.sidebar.search.class).removeClass(app.sidebar.search.hideClass), a.appTopMenu && ($(app.header.id + " [" + app.topMenu.mobile.toggleAttr + "]").removeClass(app.helper.display.none), $(app.id).addClass(app.layout.topMenu.class)), a.appWithoutHeader && ($(app.id).addClass(app.layout.withoutHeader.class), $(app.header.id).css("display", "none")), a.appWithoutSidebar && ($(app.id).addClass(app.layout.withoutSidebar.class), $(app.header.id + " [" + app.sidebar.mobile.toggleAttr + "]").addClass(app.helper.display.none), $(app.sidebar.id + ", ." + app.sidebar.bg.class + ", ." + app.sidebar.mobile.backdrop.class).css("display", "none")), a.appHeaderInverse && $(app.header.id).addClass(app.header.inverse.class), a.pageContentFullWidth && $(app.content.id).addClass(app.content.fullWidth.class), a.appClass && $(app.id).addClass(a.appClass), a.appContentClass && $(app.content.id).addClass(a.appContentClass), a.bodyClass && $("body").addClass(a.bodyClass), a.appBoxedLayout && $("body").addClass(app.layout.boxedLayout.class), a.clearOptionOnLeave && (app.ajax.clearOption = a)
    },
    handleClearPageOption = function (a) {
        a.appContentFullHeight && $(app.id).removeClass(app.content.fullHeight.class), a.appSidebarLight && $(app.id).removeClass(app.layout.sidebarLight.class), a.appSidebarEnd && $(app.id).removeClass(app.layout.sidebarEnd.class), a.appSidebarWide && $(app.id).removeClass(app.layout.sidebarWide.class), a.appSidebarMinified && $(app.id).removeClass(app.layout.sidebarMinified.class), a.appSidebarTwo && ($(app.header.id + " [" + app.sidebarEnd.mobile.toggleAttr + "]").addClass(app.helper.display.none), $(app.header.id + " ." + app.header.brand.class).addClass(app.helper.margin.left[0]), $(app.id).removeClass(app.layout.sidebarTwo.class), $(app.id).removeClass(app.sidebarEnd.toggledClass)), a.appSidebarTransparent && $(app.sidebar.id).removeClass(app.sidebar.transparent.class), a.appSidebarSearch && $(app.sidebar.id + " ." + app.sidebar.search.class).addClass(app.sidebar.search.hideClass), a.appTopMenu && ($(app.header.id + " [" + app.topMenu.mobile.toggleAttr + "]").addClass(app.helper.display.none), $(app.id).removeClass(app.layout.topMenu.class)), a.appHeaderInverse && $(app.header.id).removeClass(app.header.inverse.class), a.appWithoutSidebar && ($(app.id).removeClass(app.layout.withoutSidebar.class), $(app.header.id + " [" + app.sidebar.mobile.toggleAttr + "]").removeClass(app.helper.display.none), $(app.sidebar.id + ", ." + app.sidebar.bg.class + ", ." + app.sidebar.mobile.backdrop.class).removeAttr("style")), a.appWithoutHeader && ($(app.id).removeClass(app.layout.withoutHeader.class), $(app.header.id).removeAttr("style")), a.appContentFullWidth && $(app.content.id).removeClass(app.content.fullWidth.class), a.appContentClass && $(app.content.id).removeClass(a.appContentClass), a.appClass && $(app.id).removeClass(a.appClass), a.bodyClass && $("body").removeClass(a.bodyClass), a.appBoxedLayout && $("body").removeClass(app.layout.boxedLayout.class)
    },
    handleToggleNavbarSearch = function () {
        $("[" + app.header.floatingForm.toggleAttr + "]").click((function (a) {
            a.preventDefault(), $("." + app.header.class).addClass(app.header.floatingForm.toggledClass)
        })), $("[" + app.header.floatingForm.dismissAttr + "]").click((function (a) {
            a.preventDefault(), $("." + app.header.class).removeClass(app.header.floatingForm.toggledClass)
        }))
    },
    convertNumberWithCommas = function (a) {
        return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    checkIsFloat = function (a) {
        return Number(a) === a && a % 1 != 0
    },
    checkIsInt = function (a) {
        return Number(a) === a && a % 1 == 0
    },
    countDecimals = function (a) {
        var e = a.toString().split(".");
        return e[1] ? e[1].length : 0
    },
    handleAnimation = function () {
        $("[" + app.animation.attr + "]").each((function () {
            var a = $(this).attr(app.animation.attr),
                e = $(this).attr(app.animation.valueAttr);
            switch (a) {
                case "width":
                    $(this).css("width", e);
                    break;
                case "height":
                    $(this).css("height", e);
                    break;
                case "number":
                    for (var s = this, t = countDecimals(e), p = 1, l = t; l > 0;) p *= 10, l--;
                    $({
                        animateNumber: 0
                    }).animate({
                        animateNumber: e
                    }, {
                        duration: app.animation.speed,
                        easing: app.animation.effect,
                        step: function () {
                            var a = (Math.ceil(this.animateNumber * p) / p).toFixed(t);
                            a = convertNumberWithCommas(a);
                            $(s).text(a)
                        },
                        done: function () {
                            $(s).text(convertNumberWithCommas(e))
                        }
                    });
                    break;
                case "class":
                    $(this).addClass(e)
            }
        }))
    },
    handleSidebarSearch = function () {
        $(document).on("keyup", "[" + app.sidebar.search.toggleAttr + "]", (function () {
            var a = $(this).val();
            (a = a.toLowerCase()) ? ($("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + ":not(." + app.sidebar.profile.class + "):not(." + app.sidebar.menu.headerClass + "):not(." + app.sidebar.search.class + "), ." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.submenu.class + " > ." + app.sidebar.menu.itemClass).addClass(app.sidebar.search.hideClass), $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.search.foundClass).removeClass(app.sidebar.search.foundClass), $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.expandClass).removeClass(app.sidebar.menu.expandClass), $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + ":not(." + app.sidebar.profile.class + "):not(." + app.sidebar.menu.headerClass + "):not(." + app.sidebar.search.class + ") > ." + app.sidebar.menu.itemLinkClass + ", ." + app.sidebar.class + " ." + app.sidebar.menu.submenu.class + " > ." + app.sidebar.menu.itemClass + " > ." + app.sidebar.menu.itemLinkClass).each((function () {
                var e = $(this).text();
                (e = e.toLowerCase()).search(a) > -1 && ($(this).closest("." + app.sidebar.menu.itemClass).removeClass(app.sidebar.search.hideClass), $(this).closest("." + app.sidebar.menu.itemClass).addClass(app.sidebar.search.foundClass), 0 != $(this).closest("." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass).length && $(this).closest("." + app.sidebar.menu.itemClass + "." + app.sidebar.menu.hasSubClass).find("." + app.sidebar.menu.submenu.class + " ." + app.sidebar.menu.itemClass + "." + app.sidebar.search.hideClass).removeClass(app.sidebar.search.hideClass), 0 != $(this).closest("." + app.sidebar.menu.submenu.class).length && ($(this).closest("." + app.sidebar.menu.submenu.class).css("display", "block"), $(this).closest("." + app.sidebar.menu.hasSubClass).removeClass(app.sidebar.search.hideClass).addClass(app.sidebar.menu.expandClass), $(this).closest("." + app.sidebar.menu.submenu.class).find("." + app.sidebar.menu.itemClass + ":not(." + app.sidebar.search.foundClass + ")").addClass(app.sidebar.search.hideClass)))
            }))) : ($("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + ":not(." + app.sidebar.profile.class + "):not(." + app.sidebar.menu.headerClass + "):not(." + app.sidebar.search.class + ")." + app.sidebar.menu.hasSubClass + " ." + app.sidebar.menu.submenu.class).removeAttr("style"), $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.class + " > ." + app.sidebar.menu.itemClass + ":not(." + app.sidebar.profile.class + "):not(." + app.sidebar.menu.headerClass + "):not(." + app.sidebar.search.class + "), ." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.submenu.class + " > ." + app.sidebar.menu.itemClass).removeClass(app.sidebar.search.hideClass), $("." + app.sidebar.class + ":not(." + app.sidebarEnd.class + ") ." + app.sidebar.menu.expandClass).removeClass(app.sidebar.menu.expandClass))
        }))
    },
    handleToggleClass = function () {
        $(document).on("click", "[" + app.toggleClass.toggleAttr + "]", (function (a) {
            a.preventDefault();
            var e = $(this).attr(app.toggleClass.targetAttr) ? $(this).attr(app.toggleClass.targetAttr) : "",
                s = $(this).attr(app.toggleClass.toggleAttr);
            e && $(e).toggleClass(s)
        }))
    },
    handleDismissClass = function () {
        $(document).on("click", "[" + app.dismissClass.toggleAttr + "]", (function (a) {
            a.preventDefault();
            var e = $(this).attr(app.dismissClass.targetAttr) ? $(this).attr(app.dismissClass.targetAttr) : "",
                s = $(this).attr(app.dismissClass.toggleAttr);
            e && $(e).removeClass(s)
        }))
    },
    App = function () {
        "use strict";
        var a;
        return {
            init: function (e) {
                e && (a = e), this.initLocalStorage(), this.initTopMenu(), this.initComponent(), this.initThemePanel(), this.initPageLoad(), this.initSidebar(), $(window).trigger("load"), a && a.ajaxMode && this.initAjax()
            },
            settings: function (e) {
                e && (a = e)
            },
            initSidebar: function () {
                handleSidebarMenu(), handleSidebarToggle(), handleSidebarEndToggle(), handleSidebarMinify(), handleSidebarMinifyFloatMenu(), handleToggleNavProfile(), handleToggleNavbarSearch(), handleSidebarSearch(), (!a || a && !a.disableSidebarScrollMemory) && handleSidebarScrollMemory()
            },
            initTopMenu: function () {
                handleUnlimitedTopMenuRender(), handleTopMenuSubMenu(), handleMobileTopMenuSubMenu(), handleTopMenuMobileToggle()
            },
            initPageLoad: function () {
                handlePageLoader()
            },
            initComponent: function () {
                (!a || a && !a.disableDraggablePanel) && handlePanelDraggable(), handleScrollbar(), handleUnlimitedTabsRender(), handlePanelAction(), handleScrollToTopButton(), handlePageScrollClass(), handleAnimation(), handleToggleClass(), handleDismissClass(), $(window).width() > 767 && handelTooltipPopoverActivation()
            },
            initLocalStorage: function () {
                (!a || a && !a.disableLocalStorage) && handleLocalStorage()
            },
            initThemePanel: function () {
                handleThemePanel(), handleResetLocalStorage()
            },
            initAjax: function () {
                handleAjaxMode(a), $.ajaxSetup({
                    cache: !0
                })
            },
            setPageTitle: function (a) {
                document.title = a
            },
            setPageOption: function (a) {
                handleSetPageOption(a)
            },
            clearPageOption: function (a) {
                handleClearPageOption(a)
            },
            restartGlobalFunction: function () {
                $(".jvectormap-tip, .daterangepicker").remove(), this.initLocalStorage(), this.initComponent()
            },
            scrollTop: function () {
                $("html, body").animate({
                    scrollTop: $("body").offset().top
                }, 0)
            }
        }
    }();

jQuery((function () {
    App.init()
}));