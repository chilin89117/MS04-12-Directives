# MS04-08 Custom Directives (No Laravel)
**Note: edit `main.js` to switch between `App.vue` and `Exercise10.vue`**
## `App.vue`
### Create a globally-registered custom directive `v-highlight`
* with argument `bg` to change background color
* with modifier `delay` for delayed effect

### Create a locally-registered custom directive `v-local-highlight`:

* with argument `bg` to change background color

* with modifiers
	* `delayed` for delayed effect
	* `blink` for alternating colors

* with value object
	* `mainColor`
	* `altColor` for alternate color
	* `delay`
	* `blinkRate`

#### End of Section 12, lecture 168.

## `Exercise10.vue`
* Custom directive `v-custom` with
	* Javascript events as arguments:
		* click
		* mouseenter
		* mouseleave
	* custom methods as values:
		* clicked()
		* mouseEnter()
		* mouseLeave()