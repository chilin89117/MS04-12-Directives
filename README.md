# MS04-12-Directives
## Custom directives

![App.vue](../assets/a.png?raw=true)
![Exercise10.vue](../assets/b.png?raw=true)

**Note: edit `main.js` to switch between `App.vue` and `Exercise10.vue`**

## `App.vue`
### Create a globally-registered custom directive `v-highlight`
* argument `bg` changes background color to value of binding; otherwise text color is changed
* modifier `delay` adds delayed effect

### Create a locally-registered custom directive `v-local-highlight`:
* with argument `bg` to change background color as above

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
	* view results in browser console