define('pickerui', ['jquery', 'underscore', 'id', 'domo', 'api', 'picker'],
  function($, _, ID, domo, Api, Picker) {
    const NS = Api.NS;
    const host = DIV({
      'class': NS+'ui',
      style: 'position: initial', // some sites set position to `relative` to *
    });
    const shadow = host.attachShadow({ mode: 'closed' });

    // Common root for all UI elements.
    const root = domo.DIV({'class': NS+'ui'},
      domo.DIV({'class': 'xbrwsr_preload'},
        domo.I({'class': 'xbrwsr_action_expand'}),
        domo.I({'class': 'xbrwsr_action_collapse'}),
        domo.I({'class': 'xbrwsr_action_widen'}),
        domo.I({'class': 'xbrwsr_action_narrow'}),
        domo.I({'class': 'xbrwsr_action_delete'})
      )
    );

    shadow.appendChild(
      domo.LINK({
        rel: 'stylesheet',
        href: URL_BASE + 'content/css/picker.css',
        type: 'text/css',
        media: 'screen',
      })
    );
    shadow.appendChild(root);
    document.documentElement.appendChild(host);

    let markers = {};

    const selectMarker = new SelectionMarker({});

    // XXX Should we add listener to Api?
    Picker.addListener({
      'select:close': function(event) {
        // console.log('select:close', event)
        const id = event.id;
        const marker = markers[id];

        if (marker) {
          marker.close();
          delete markers[id];
        }
      },
      'select:display': function(event) {
        // console.log('select:display', event)
        const marker = markers[event.id];
        marker.update(event);
      },
      'select:frame_bounds': function(event) {
        // console.log('select:frame_bounds', event)
        // Redraw all markers
        _.each(markers, (marker) => marker.update());
        selectMarker.update();
      },
      'select:load': function(event) {
        // initialize
        // console.log('select:load', event)
      },
      'select:mark': function(event) {
        // console.log('select:mark', event)
        selectMarker.update(event);
        selectMarker.show(true);
      },
      'select:mark_none': function(event) {
        // console.log('select:mark_none', event)
        selectMarker.show(false);
      },
      'select:mode': function({mode}) {
        // console.log('select:mode', mode)

        const show = (mode == Picker.MODE_SELECT);
        _.each(markers, (selection) => selection.show(show));
      },
      'select:new': function(event) {
        // console.log('select:new', event)
        markers[event.id] = new SelectedMarker(event);
      },
      'select:reset': function() {
        _.each(markers, function(marker) {
          marker.close();
          delete markers[id];
        });
        markers = {};
      },
    });

    function RectMarker(options) {
      const els = _.reduce(['left', 'top', 'right', 'bottom'], (memo, dir) => {
        memo[dir] = domo.DIV({
          'class': NS + dir + ' ' + NS + 'marker',
        });
        return memo;
      }, {});

      _.each(els, el => root.appendChild(el));

      update();

      this.close = close;
      this.show = show;
      this.update = update;

      function close() {
        _.each(els, function(el) {
          $(el).remove();
        });
      }

      function show(show) {
        _.each(els, function(el) {
          $(el)[show ? 'show' : 'hide']();
          update();
        });
      }

      function update(newOptions) {
        _.extend(options, newOptions);

        const
          frame_bounds = Picker.frame_bounds;


        const rect = _.clone(options.rect) || {
          top: frame_bounds.top, left: frame_bounds.left, width: 0, height: 0,
        };


        const op = options.op;

        // Shift to frame's coordinates.
        rect.left = rect.left - frame_bounds.left;
        rect.top = rect.top - frame_bounds.top;

        _.each(els, function(el) {
          el.className = NS + 'marker_' + op;
        });

        $(els.top).css({
          left: rect.left - 1,
          top: rect.top - 1,
          width: rect.width,
        });

        $(els.right).css({
          left: rect.left + rect.width - 1,
          top: rect.top - 1,
          height: rect.height,
        });

        $(els.bottom).css({
          left: rect.left - 1,
          top: rect.top + rect.height - 1,
          width: rect.width,
        });

        $(els.left).css({
          left: rect.left - 1,
          top: rect.top - 1,
          height: rect.height,
        });
      }
    }

    function SelectionMarker(options) {
      let rectMarkers = [];

      const els = {
        info: domo.DIV({'class': NS + 'select_info'}),
      };

      _.each(els, function(el) {
        root.appendChild(el);
      });

      this.close = close;
      this.show = show;
      this.update = update;

      function close() {
        closeRectMarkers();

        _.each(els, function(el) {
          $(el).remove();
        });
      }

      function closeRectMarkers() {
        _.each(rectMarkers, function(m) {
          m.close();
        });
      }

      function show(show) {
        _.each(rectMarkers, function(m) {
          m.show(show);
        });

        _.each(els, function(el) {
          $(el)[show ? 'show' : 'hide']();
          show && update();
        });
      }

      function update(newOptions) {
        _.extend(options, newOptions);

        closeRectMarkers();

        const frame_bounds = Picker.frame_bounds;
        const rects = options.rects;
        const rect = (rects && _.clone(rects[0])) || {
          top: frame_bounds.top,
          left: frame_bounds.left,
          width: 0,
          height: 0,
        };

        const {info, op} = options;

        rectMarkers = _.map(options.rects, function(rect) {
          return new RectMarker({op: op, rect: rect});
        });

        // Shift to frame's coordinates.
        rect.left = rect.left - frame_bounds.left;
        rect.top = rect.top - frame_bounds.top;

        _.each(els, function(el) {
          el.className = NS + 'marker_' + op;
        });

        els.info.className += ' ' + NS + 'info';
        els.info.textContent = info;

        $(els.info).css({
          left: rect.left - 1,
          top: rect.top + rect.height,
        });
      }
    }

    function SelectedMarker(options) {
      const clsHide = NS + 'hide';
      const marker = new SelectionMarker({op: options.op});

      let elExpand; let elActions;

      const els = {
        tbar: domo.DIV({
          'class': NS + 'vbar',
        },
        // Expand
        elExpand = domo.DIV({
          'class': NS + 'action_expand ',
          'title': 'Show actions',
        }),
        // Expanded vbar
        elActions = domo.DIV({
          'class': clsHide,
        },
        // Collapse
        domo.DIV({
          'class': NS + 'action_collapse',
          'title': 'Hide actions',
        }),
        // Widen
        domo.DIV({
          'class': NS + 'action_widen',
          'title': 'Expand selection',
        }),
        // Shorten
        domo.DIV({
          'class': NS + 'action_narrow',
          'title': 'Narrow expanded selection',
        }),
        // Delete
        domo.DIV({
          'class': NS + 'action_delete',
          'title': 'Discard selection',
        })
        )
        ),
      };

      _.each(els, function(el) {
        root.appendChild(el);
      });

      $(els.tbar).on('click', '[class^=\'xbrwsr_action\']', function() {
        const action = this.className.trim().split('_').pop();

        switch (action) {
          case 'expand':
            $(elExpand).addClass(clsHide);
            $(elActions).removeClass(clsHide);
            break;

          case 'collapse':
            $(elExpand).removeClass(clsHide);
            $(elActions).addClass(clsHide);
            break;

          case 'widen':
            Api.call({
              path: 'picker_select_call',
              data: {
                id: options.id,
                method: 'widen',
              },
            }, function(err, res) {
              err && console.error('widen:', err, res);
            });
            break;

          case 'narrow':
            Api.call({
              path: 'picker_select_call',
              data: {
                id: options.id,
                method: 'narrow',
              },
            }, function(err, res) {
              err && console.error('narrow:', err, res);
            });
            break;

          case 'delete':
            Api.call({
              path: 'picker_select_call',
              data: {
                id: options.id,
                method: 'close',
              },
            }, function(err, res) {
              err && console.error('delete:', err, res);
            });
            break;

          default:
            break;
        }
      });

      this.close = close;
      this.show = show;
      this.update = update;

      function close() {
        marker.close();

        _.each(els, function(el) {
          $(el).remove();
        });
      }

      function show(show) {
        marker.show(show);

        _.each(els, function(el) {
          $(el)[show ? 'show' : 'hide']();
        });
      }

      function update(newOptions) {
        _.extend(options, newOptions);

        marker.update(options);

        const
          frame_bounds = Picker.frame_bounds;


        const rects = options.rects;


        const rect = (rects && _.clone(rects[0])) || {
          top: frame_bounds.top, left: frame_bounds.left, width: 0, height: 0,
        };

        // Shift to frame's coordinates.
        rect.left = rect.left - frame_bounds.left;
        rect.top = rect.top - frame_bounds.top;

        $(els.tbar).css({
          left: rect.left - 1,
          top: Math.max(rect.top - 1 - 18, 0),
        });
      }
    }

  });

// console.log('pickerui:load');
