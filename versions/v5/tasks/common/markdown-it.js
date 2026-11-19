'use strict';
const MarkdownIt = require('markdown-it');
const mdToc = require('markdown-it-toc-and-anchor').default;
const mdEmoji = require('markdown-it-emoji');
const highlightJs = require('highlightjs');
const _ = require('lodash');

const optionsMd = {
    html: true,
    xhtmlOut: true,
    typographer: false,
    linkify: false,
    breaks: false,
    highlight: highlight
};

const optionsToc = {
    toc: true,
    tocFirstLevel: 1,
    tocLastLevel: 2,
    anchorLink: true,
    anchorLinkSpace: false,
    anchorLinkBefore: true,
    tocClassName: 'nav'
};

module.exports = function () {
    const md = new MarkdownIt('default', optionsMd);

    md.renderer.rules['image'] = function(tokens, idx) {
        return '<img class="img-responsive in-article" alt="'+ tokens[idx].content +'" src="'+ tokens[idx].attrs[0][1] + '"/>';
    };

    md.renderer.rules.table_open = function(tokens, idx) {
        return '<table class="table">';
    };

    md.renderer.rules.heading_open = function(tokens, idx) {
        return '<a class="anchor" id="' + tokens[idx].attrs[0][1] + '"></a>'+
            '<'+tokens[idx].tag+' title-id="' + tokens[idx].attrs[0][1] + '">';
    };

    md
        .use(mdEmoji)
        .use(require('markdown-it-container'), 'danger', {
            validate: function(params) {
                return params.trim().match(/^danger(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-danger">' : '</div>\n';
            }
        })
        .use(require('markdown-it-container'), 'warning', {
            validate: function(params) {
                return params.trim().match(/^warning(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-warning">' : '</div>\n';
            }
        })
        .use(require('markdown-it-container'), 'info', {
            validate: function(params) {
                return params.trim().match(/^info(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-info">' : '</div>\n';
            }
        })
        .use(require('markdown-it-container'), 'success', {
            validate: function(params) {
                return params.trim().match(/^success(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-success">' : '</div>\n';
            }
        })
        .use(require('markdown-it-container'), 'tips', {
            validate: function(params) {
                return params.trim().match(/^tips(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-tips">' : '</div>\n';
            }
        })
        .use(require('markdown-it-container'), 'ee', {
            validate: function(params) {
                return params.trim().match(/^ee(.*)$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="alert alert-ee">' : '</div>\n';
            }
        })
        .use(mdToc, optionsToc)
        .use(require('markdown-it-container'), 'toc', {
            validate: function(params) {
                return params.trim().match(/^toc$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div id="navbar" class="col-sm-3 hidden-xs sticky">' +
                    '<nav role="tablist" id="navbar-nav"><ul class="nav nav-stacked"><p class="pre-nav">Summary</p>' :
                    '</ul></nav></div>\n';
            }
        })
        .use(require('markdown-it-container'), 'mainContent', {
            validate: function(params) {
                return params.trim().match(/^mainContent$/);
            },
            render: function (tokens, idx) {
                return (tokens[idx].nesting === 1) ? '<div class="col-xs-12 col-sm-9 docSearch-content">' : '</div>';
            }
        })
        .use(require('markdown-it-container'), 'panel-link', {
            validate: function(params) {
                return params.trim().match(/^panel-link\s+(.*)$/);
            },
            render: function (tokens, idx) {
                var text = tokens[idx].info.trim().match(/^panel-link\s+(.*)\[.*\].*$/);
                var linkTitle = tokens[idx].info.trim().match(/^panel-link\s+.*\[(.*)\].*$/);
                var link = tokens[idx].info.trim().match(/^panel-link\s+.*\((.*)\)$/);
                if (tokens[idx].nesting === 1) {
                    // opening tag
                    return '<div class="row" style="margin-top: 80px;"><div class="col-sm-offset-3 col-sm-6">' +
                        '<div class="panel panel-default panel-btn">'+
                        '<a href="' + md.utils.escapeHtml(link[1]) + '">' +
                        '<div class="panel-body">' +
                        '<div class="panel-btn-big">'+ md.render(text[1]) + '</div>'+
                        '<p class="text-center">'+ md.render(linkTitle[1]) + '</p>';
                } else {
                    // closing tag
                    return '</div></a></div></div></div>\n';
                }
            }
        })
        ;

    return md;
};

/**
 * Highlight code snippet according to the language specified in the markdown.
 *
 * @param str
 * @param lang
 * @returns {string}
 */
function highlight(str, lang) {
    if (lang && highlightJs.getLanguage(lang)) {
        try {
            return '<pre class="hljs"><code>' +
                highlightJs.highlight(lang, str, true).value +
                '</code></pre>';
        } catch (__) {}
    }
    return '<pre class="hljs"><code>' + str + '</code></pre>';
}
