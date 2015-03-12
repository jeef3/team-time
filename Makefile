JS_BIN := node_modules/.bin

src        ?= app
out        ?= public

NOTIFY   := ./lib/notify
POST_CSS := ./lib/post-css.js

.PHONY: all clean dist test
all: dist

#
# JavaScript

js_src    := $(shell find $(src) -name '*.js*')
js_entry  := $(src)/app.js
js_bundle := $(out)/app.js

browserify_options := \
	--debug \
	--entry $(js_entry) \
	--transform 'reactify' \
	--transform 'babelify' \
	--outfile $(js_bundle)


$(js_bundle): $(js_src)
	@echo "\033[0;90mCompiling \033[0;34m$@\033[0m"
	@mkdir -p $(@D)
	@$(JS_BIN)/browserify $(browserify_options)
	@$(NOTIFY) $(@F) ||:

.PHONY: watch_js
watch_js:
	@echo "\033[0;90mStarting Watchify\033[0m"
	@mkdir -p $(@D)
	@$(JS_BIN)/watchify $(browserify_options) --verbose

#
# CSS

styles_src    := $(shell find $(src)/styles -name '*.css')
styles_entry  := $(src)/styles/main.css
styles_bundle := $(out)/main.css

$(styles_bundle): $(styles_src)
	@echo "\033[0;90mCompiling \033[0;34m$@\033[0m"
	@mkdir -p $(@D)
	@$(POST_CSS) $(styles_entry) $(styles_bundle)
	@$(NOTIFY) $(@F) ||:


dist: \
	$(js_bundle) \
	$(styles_bundle)

test:
	karma start

clean:
	@rm -rf $(out)
	@echo "Cleaned"
