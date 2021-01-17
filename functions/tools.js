/*///////////////////////////////////////////////////////////////////////////

	JS TOOLS
	v1.2020.11.27-01

/////////////////////////////////////////////////////////////////////////////

*****************************************************************************
	INDEX
*****************************************************************************

	GLOBAL VARIABLE
	GLOBAL CACHE
	GENERAL
		l_
	^	DOCUMENT SPECIFIC
			$doc
			$_
			$all_
			$id_
			requestAnimationFrame
			cancelAnimationFrame
			rAF_
			cAF_
			IntersectionObserver
			MutationObserver
			ResizeObserver
			TouchEvent
		worker_
		viewportSize_
		getCssValue_
		transitionListener_
		loadImage_
		getBlob_
		getBlobAS_
		getImage_
		getImageAS_
		tryJsonEncode_
		makeHtmlRequestQuery_
		stringsToWords_
		changeWordCases_
		camelize_
		pascalize_
		promiseTimeout_
		maybeArrayStringify_
		forceArray_
		notNegative_
		round_
		absVal_
		async_
		forAS_
		removeWhitespace_

	EXTEND PROTOTYPES
		Object.keys_
		Object.isObject_
		Object.isEmpty_
		Object.asOneString_
		Object.deepCopy_
		Array.last_
		Array.equals_
		Array.intersects_
		Array.forEachAS_
		Array.closestValue_
		String.splitAsInt_
		Map.getByIndex_

	EXTEND BROWSER ENVIRONMENT PROTOTYPES
		ofDOM_
		addClass_
		removeClass_
		replaceClass_
		hasClass_
		$_
		$all_
		rememberListener_
		forgetListener_
		prepareEventListener_
		saneEventListener_
		onClick_
		onHit_
		onRelease_
		onEnter_
		onLeave_
		onMove_
		onDrag_
		onHover_
		defineClick_
		onWheel_
		onKey_
		onResize_
		transition_

	OBJECTS
	^	Event_
			fire
			newEvent
	^	Scroll_
			setDirection
			setPosition
			maxScroll
			disable
			enable
			onScroll
			init

****************************************************************************/


/*	SET GLOBAL VARIABLE FOR DIFFERENT ENVIRONMENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let g_
try
{	g_ = window
}
catch(e)
{	try
	{	g_ = global
	}
	catch(e)
	{	g_ = this
	}
}


/*	SET GLOBAL CACHE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

;(	function()
	{	g_.CACHE_ = {}
		g_.CACHE_.listener = new Map()
	}
)()




/****************************************************************************

	GENERAL FUNCTIONS

****************************************************************************/

g_.l_ = console.log

if (g_.document)
{	g_.$doc		= document.documentElement
	g_.$_		= document.querySelector.bind(document)
	g_.$all_	= document.querySelectorAll.bind(document)
	g_.$id_		= document.getElementById.bind(document)

	/* REQUEST ANIMATION FRAME
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
	window.requestAnimationFrame	= window.requestAnimationFrame
									|| window.webkitRequestAnimationFrame
									|| window.mozRequestAnimationFrame
									|| window.msRequestAnimationFrame
									|| window.oRequestAnimationFrame
									|| null
	window.cancelAnimationFrame		= window.cancelAnimationFrame
									|| window.webkitCancelAnimationFrame
									|| window.mozCancelAnimationFrame
									|| window.msCancelAnimationFrame
									|| window.oCancelAnimationFrame
									|| null
	g_.rAF_							= window.requestAnimationFrame
	g_.cAF_							= window.cancelAnimationFrame

	/* INTERSECTION-OBSERVER
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
	window.IntersectionObserver		= window.IntersectionObserver
									|| window.webkitIntersectionObserver
									|| window.mozIntersectionObserver
									|| window.msIntersectionObserver
									|| window.oIntersectionObserver
									|| null

	/* MUTATION_OBSERVER
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
	window.MutationObserver			= window.MutationObserver
									|| window.webkitMutationObserver
									|| window.mozMutationObserver
									|| window.msMutationObserver
									|| window.oMutationObserver
									|| null

	/* RESIZE-OBSERVER
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
	window.ResizeObserver			= window.ResizeObserver
									|| window.webkitResizeObserver
									|| window.mozResizeObserver
									|| window.msResizeObserver
									|| window.oResizeObserver
									|| null

	/* TOUCHEVENT
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
	// Safari fix:
	try
	{	TouchEvent = TouchEvent
	}
	catch(error)
	{	TouchEvent = function() {return null}
	}
}

g_.worker_
= async function(fn, args)
{	return new Promise(
		(resolve, reject) =>
		{	const W = new Worker('js/app-wworker.js')

			W.postMessage({fn, args})
			W.onmessage	= (e) =>
			{	W.terminate()
				resolve(e.data)
			}
			W.onerror = (e) =>
			{	W.terminate()
				reject(e)
			}
		}
	)
}

g_.viewportSize_
= function()
{	const h	= Math.max(
				$doc.clientHeight
			,	window.innerHeight || 0
			)
	const w	= Math.max(
				$doc.clientWidth
			,	window.innerWidth || 0
			)
	const _h = h / 100
	const _w = w / 100
	return {h, w, _h, _w}
}

g_.getCssValue_
= function(
	selector
,	property
,	toInteger = false
){
	const varValue = getComputedStyle($_(selector))
						.getPropertyValue(property)

	// Check wether the return should be as is or force integer:
	if (toInteger)
	{	// Extract the Unit:
		const justLetters	= varValue.match(/[a-z,%]/gi)
		const varUnit		= justLetters.reduce(
								(accumulator, currentValue) =>
								{	return accumulator + currentValue
								}
							)

		// If Unit is Pixel cut the decimal places:
		if (varUnit === 'px')
			return parseInt(varValue)
		else
			return parseFloat(varValue)
	}
	else return varValue
}

g_.transitionListener_
= function(
	{	$target	= null
	,	cbStart	= null
	,	cbWhile	= null
	,	cbEnd	= null
	}
){
	let requestID	= null
	,	i			= 0
	const limiter = 250
	const start = () =>
		{	// At 'transitionstart':
			if (cbStart) cbStart()
			// Run loop, if a while-callback was passed:
			if (cbWhile)
				requestID = window.requestAnimationFrame(loop)
		}
		// While transition is running:
	const loop = () =>
		{	if (i++ >= limiter) stop()
			else
			{	cbWhile()
				requestID = window.requestAnimationFrame(loop)
			}
		}
		// on 'transitionend':
	,	stop = () =>
		{	if (cbEnd) cbEnd()
			if (requestID) window.cancelAnimationFrame(requestID)
			$target.removeEventListener('transitionstart', start)
			$target.removeEventListener('transitionend', stop)
		}

	$target.addEventListener('transitionend', stop)
	$target.addEventListener('transitionstart', start)
}

g_.loadImage_
= function($img, src)
{	return new Promise(
		(resolve, reject) =>
		{	$img.src		= src
			$img.onload		= () => resolve()
			$img.onerror	= (err) => reject(err)
		} 
	)
}

g_.getBlob_
= async function(src)
{	try
	{	const response	= await fetch(src)
		const blob		= await response.blob()
		return blob
	}
	catch(error)
	{	console.log(error)
	}
}

g_.getBlobAS_
= function(src)
{	return g_.worker_('getBlob_', src)
}

g_.getImage_
= async function(src)
{	try
	{	const blob		= await getBlob_(src)
		const bitmap	= await createImageBitmap(blob)
		return bitmap
	}
	catch(error)
	{	console.log(error)
	}
}

g_.getImageAS_
= function(src)
{	return g_.worker_('getImage_', src)
}

g_.tryJsonEncode_
= function(input)
{	let output
	try
	{	output = JSON.parse(input)
	}
	catch(error)
	{	output = input
	}
	return output
}

g_.makeHtmlRequestQuery_
= function()
{	let requestParameters	= arguments[0]
	,	query				= ''
	,	keys				= Object.keys(requestParameters)

	for (let i = 0; i < keys.length; i++)
	{	let value = requestParameters[keys[i]]
		value = maybeArrayStringify_(value)
		if (i > 0) query += '&'
		query += `${keys[i]}=${value}`
	}

	return query
}

g_.stringsToWords_
= function(...strings)
{	const wordList = []
	strings.forEach(
		(_string) =>
		{	_string = _string.split(' ')
			wordList.push(..._string)
		}
	)
	return wordList
}

g_.changeWordCases_
= function(first, ...words)
{	const changed = words.reduce(
		(total, s, i) =>
		{	if (i >= first)
			{	total += s.slice(0, 1).toUpperCase()
						+  s.slice(1)
			}
			else total += s
			return total
		}
	,	''
	)
	return changed
}


g_.camelize_
= function(...strings)
{	const words = stringsToWords_(...strings)
	const camelized = changeWordCases_(1, ...words)
	return camelized
}

g_.pascalize_
= function(...strings)
{	const words = stringsToWords_(...strings)
	const pascalized = changeWordCases_(0, ...words)
	return pascalized
}

g_.promiseTimeout_
= function(timeout)
{	return new Promise(
			(resolve) => setTimeout(resolve, timeout))
}

g_.maybeArrayStringify_
= function(input)
{	if (Array.isArray(input))
		input = JSON.stringify(input)
	return input
}

g_.forceArray_
= function(input)
{	if (Array.isArray(input) === false)
		input = [input]
	return input
}

g_.notNegative_
= function(n)
{	return n < 0 ? 0 : n
}

g_.round_
= function(number, decimals = 0)
{	let factor = Math.max(Math.pow(10, decimals), 1)
	return Math.round(number * factor) / factor
}

g_.absVal_
= function(input, decimals = 0)
{	let absVal = null

	if (typeof(parseFloat(input)) === 'number')
	{	const vp = viewportSize_()
		absVal = (vp._h + vp._w) / 20 * input
		absVal = round_(absVal, decimals)
	}

	return absVal
}

g_.async_
= function(callback)
{	setTimeout(callback(i), 0)
}

g_.forAS_
= function(i, comparison, mx, step, callback)
{
/*
	Asynchronious for-loop
	use like forAS_(10, '>', 0, -1, (i) => console.log(i))
*/
	const cb = (i) => setTimeout(callback(i), 0)

	switch(comparison)
	{	case '>':	for (i; i > mx; i += step)	cb(i);	break
		case '>=':	for (i; i >= mx; i += step)	cb(i);	break
		case '<':	for (i; i < mx; i += step)	cb(i);	break
		case '<=':	for (i; i <= mx; i += step)	cb(i);	break
		default:	throw 'Invalid comparison: ' + comparison
	}
}

g_.removeWhitespace_ = (input) =>
{	let inHtmlTag	= false
	,	bypass		= false
	,	lastChar	= null
	,	cache		= ''
	,	output		= ''

	for (let i = input.length - 1; i >= 0; i--)
	{	const _char	 = input[i]
		let	addChunk = ''

		/*	DETERMINE CURRENT CONTEXT
´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´*/
		// Check if entering/leaving bypass-area:
		if (cache === '###')
		{	bypass	= bypass === true ? false : true
			cache	= ''
		}
		else
		if (cache === '#' && _char !== '#'
		||	cache === '##' && _char !== '#') {
			output = cache + output
			cache	= ''
		}


		// Check if entering/leaving html-tag:
		if (! bypass)
		{	if (_char === '>') {
				inHtmlTag	= true
				cache		= ''
			}
			else
			if (_char === '<')
				inHtmlTag = false
		}

		/*	CHECK CURRENT CHARACTER
´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´*/
		switch(_char)
		{	case '#':
				if (cache === ' ')
					cache = '#'
				else
					cache = '#' + cache
				break
			case ' ':
				if (bypass)
					addChunk = _char
				else
				if (lastChar !== ' ')
					addChunk = ' '
				cache = ''
				break
			case '\n':
			case '\r':
			case '\t':
				if (bypass)
				{	addChunk = _char
					cache	 = ''
				}
				else
				if (cache !== ' '
				&&	lastChar !== '<'
				)	cache = ' '
				break
			default:
				addChunk = _char + cache
				cache	 = ''
		}

		/*	STORE CURRENT CHARACTER
´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´*/
		output	 = addChunk + output
		lastChar = output[0] || null
	}

	return output
}




/****************************************************************************

	EXTEND PROTOTYPES

****************************************************************************/


Object.defineProperty(
	Object.prototype
,	'keys_'
,	{	value: function()
		{	let that = this
			if (arguments[0])
				that = arguments[0]
			return [...Object.keys(that)]
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'isObject_'
,	{	value: function(input)
		{	const evaluation	 = input instanceof Object
								&& typeof(input) === 'object'
								&& Array.isArray(input) === false

			return evaluation
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'isEmpty_'
,	{	value: function()
		{	if (Object.keys(this).length)
				return false
			else
				return true
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'asOneString_'
,	{	value: function()
		{	const args		 = arguments[0] ? arguments[0] : {}
			const separation = args.separation	|| ''
			const reverse	 = args.reverse		|| false

			let that = this

			if (that.name === 'Object')
			{	if (args.object)
					that = args.object
				else
				if (arguments.length === 1
				&&	Object.isObject_(args)
				)	that = args
			}

			if (reverse)
			{	const keys		 = Object.keys(that).reverse()
				let	thatReversed = ''

				for (let i = 0; i < keys.length; i++)
				{	thatReversed += that[keys[i]]
					if (i !== keys.length - 1)
						thatReversed += separation
				}

				return thatReversed
			}
			else
				return Object.values(that).join(separation)
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'deepCopy_'
,	{	value: function(input)
		{	if (typeof(input) === 'object')
			{	// Copy Array
				if (input instanceof Array)
				{	const newArray = []
					for (let i = 0, mx = input.length; i < mx; i++)
						newArray[i] = Object.deepCopy_(input[i])
					return newArray
				}
				// Copy Object
				else
				if (input instanceof Object)
				{	// No copies of DOM-elements:
					if (input instanceof Element)
						return input
					//
					const newObject = {}
					for (let _key in input)
						newObject[_key] = Object.deepCopy_(input[_key])
					return newObject
				}
			}
			// Copy primitives and functions:
			else
				return input
		}
	}
)

// Object.defineProperty(
// 	Object.prototype
// ,	'deepCopy_'
// ,	{	value: function(obj)
// 		{	const cloner = function(_item)
// 			{	if (typeof(_item) === 'object')
// 				{	// Copy Array
// 					if (_item instanceof Array)
// 					{	const newArray = []
// 						for (let i = 0, mx = _item.length; i < mx; i++)
// 							newArray[i] = cloner(_item[i])
// 						return newArray
// 					}
// 					// Copy Object
// 					else
// 					if (_item instanceof Object)
// 					{	// No copies of DOM-elements:
// 						if (_item instanceof Element)
// 							return _item
// 						//
// 						const newObject = {}
// 						for (let _key in _item)
// 							newObject[_key] = cloner(_item[_key])
// 						return newObject
// 					}
// 				}
// 				// Copy primitives / functions:
// 				else return _item
// 			}

// 			let copy = cloner(obj)
// 			return copy
// 		}
// 	}
// )

Object.defineProperty(
	Array.prototype
,	'last_'
,	{	value: function()
		{	if (this.length)
				return this[this.length - 1]
			else
				return null
		}
	}
)

Object.defineProperty(
	Array.prototype
,	'equals_'
,	{	value: function(otherArray)
		{	if (! otherArray
			||	this.length !== otherArray.length
			)	return false

			for (let i = this.length - 1; i >= 0; i--)
			{	if (! otherArray.includes(this[i]))
					return false
			}

			return true
		}
	}
)

Object.defineProperty(
	Array.prototype
,	'intersects_'
,	{	value: function(otherArray)
		{	let	reference
			,	entries
			// Shorter array is reference:
			if (this.length >= otherArray.length)
			{	reference	 = otherArray
				entries		 = this
			}
			else
			{	reference	= this
				entries		= otherArray	
			}
			// Check for intersection.
			// Return 'true' at first find:
			let entriesLength = entries.length
			for (let i = entriesLength - 1; i >= 0; i--)
			{	if (reference.includes(entries[i]))
					return true
				else
				if (i === 0)
					return false
			}
		}
	}
)

Object.defineProperty(
	Array.prototype
,	'forEachAS_'
,	{	value: function(callback)
		{	if (typeof(callback) === 'function')
				this.forEach((_item) => setTimeout(callback(_item), 0))
			else
				throw 'Expects argument to be a function.'
		}

	}
)

Object.defineProperty(
	Array.prototype
,	'closestValue_'
,	{	value: function(input)
		{	const arr	= this.sort((a, b) => a - b)
			let	i		= arr.length - 1

			for (; i >= 0; i--)
			{	const _value = parseFloat(arr[i])
				if (input > _value) break
			}

			if (i === arr.length - 1)
				return arr[i]

			if (Math.abs(arr[i] - input)
			<=	Math.abs(arr[i + 1] - input)
			)	return arr[i]
			else
				return arr[i + 1]
		}
	}
)

Object.defineProperty(
	String.prototype
,	'splitAsInt_'
,	{	value: function()
		{	let that = this
			if (this.name === "String"
			&&	arguments[0]
			)	that = arguments[0]
		
			that = that.split(',')
			const numberized = []
		
			that.forEach(
				(_number) =>
				{	if (parseInt(_number))
						numberized.push(parseInt(_number))
				}
			)

			return numberized
		}
	}
)

Object.defineProperty(
	Map.prototype
,	'getByIndex_'
,	{	value: function(index, reversed = false)
		{	if (this instanceof Map)
			{	const values = [...this.values()]
				if (reversed)
					values.reverse()

				switch(index)
				{	case 'first':
						return values[0]
					case 'last':
						return values[this.size - 1]
					default:
						return values[index]
				}
			}
			else
				return null
		}
	}
)




/****************************************************************************

	EXTEND BROWSER ENVIRONMENT PROTOTYPES

****************************************************************************/

// Check if object is a DOM-element:
Object.defineProperty(
	Object.prototype
,	'ofDOM_'
,	{	value: function(that)
		{	if (that === window)
				return that
			else
			if (that === document
			||	that instanceof Element)
				return that
			else
				return null
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'addClass_'
,	{	value: function()
		{	let that = Object.ofDOM_(this)
			if (that === null) return
			that.classList.add(...arguments)
			return that
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'removeClass_'
,	{	value: function()
		{	let that = Object.ofDOM_(this)
			if (that === null) return
			that.classList.remove(...arguments)
			return that
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'replaceClass_'
,	{	value: function()
		{	let that = Object.ofDOM_(this)
			if (that === null) return
			that.classList.remove(arguments[0])
			that.classList.add(arguments[1])
			return that
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'hasClass_'
,	{	value: function()
		{	let that = Object.ofDOM_(this)
			if (that === null) return
			return that.classList.contains(...arguments)
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'$_'
,	{	value: function()
		{	let that = Object.ofDOM_(this)
			if (that === null) return
			return that.querySelector(...arguments)
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'$all_'
,	{	value: function()
		{	let that = Object.ofDOM_(this)
			if (that === null) return
			return that.querySelectorAll(...arguments)
		}
	}
)

/*	CACHE EVENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*
	When assigning eventListener, the involved event-properties can be
	stored in the event-cache. Later, with these entries, the eventListener
	can easily be removed or overwritten.

	The event cache is a map-object stored in "g_.CACHE_".
	An entry of the map holds the $element as ID and an object as value.
	The value contains all stored eventListener-properties for this
	element.
	
	>	g_.CACHE_.listener = new map()

	Map-entries like:
	>	$element1
		{	ID1: eventProperties1
		,	ID2: eventProperties2
		,	...
		}

	Event-IDs are unique IDs for the entry in the "CACHE_".

	>	cache eventListner like: $element.cacheEvent(eventProperties)

	$element.forgetListener_(listenerLabel) to remove eventListener
	from the $element, and delete the entry from the cache.
*/

Object.defineProperty(
	Object.prototype
,	'rememberListener_'
,	{	value: function(properties)
		{	let $element = Object.ofDOM_(this)
			if (! $element) return null
			let	cached	= g_.CACHE_.listener
			,	ID		= properties.ID
			
			if (cached[ID]) $element.forgetListener_(ID)

			// At least one entry for $element exists, expand list:
			if (cached.has($element))
			{	let _entry = cached.get($element)
				// If ID exists, remove it from the list,
				// and the listener from the $element:
				if (_entry[ID])
					$element.forgetListener_(ID)
				_entry[ID] = properties
			}
			// New CACHE-entry for $element
			else
			{	cached.set(
					$element
				,	{[ID]: properties}
				)
			}
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'forgetListener_'
,	{	value: function(ID)
		{	let $element = Object.ofDOM_(this)
			if (! $element) return null

			let	cached = g_.CACHE_.listener
			
			if (cached.has($element))
			{	let _entry = cached.get($element)

				if (_entry[ID])
				{	let _properties = _entry[ID]

					for (let i = _properties.events.length -1; i >= 0; i--)
					{	$element.removeEventListener(
							_properties.events[i]
						,	_properties.callback
						,	_properties.options
						)
					}

					delete _entry[ID]
					if(Object.keys(_entry).length === 0)
						cached.delete($element)
					else
						cached.set($element, _entry)
				}
			}

			return $element
		}
	}
)

/*	EVENTLISTENER
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*
	Add click-Listener to an element for touch and mouse.
	Default trigger moment on release: "mouseup"/"touchend".

	Can be stored to the eventListener-cache when "arguments"
	holds an an entry "ID: somename".

	Event defaults on spread = false, which limits the event
	strictly to its specific target.
*/

Object.defineProperty(
	Object.prototype
,	'prepareEventListener_'
,	{	value: function(userCallback, args = {})
		{	let properties
			= {	events:		args.events
			,	ID:			args.ID				|| null
			,	spread:		args.spread	
							=== false ? false : true // *
			,	options:
				{	once:		args.once		|| false
				,	capture:	args.capture	|| false
				,	passive:	args.passive
								=== false ? false : true // *
								// * default = true
				}
			,	callback: (e) =>
				{	if (e.eventPhase === 2
					||	properties.spread === true
					||	e instanceof TouchEvent
					&&	e.eventPhase > 0
					// Safari fix:
					||	e.type.includes('touch')
					&&	e.eventPhase > 0
					){	userCallback(e)
						if (properties.spread === false)
							e.stopPropagation()
					}
				}
			}
			// Remember listener, if ID was passed:
			if (properties.ID) this.rememberListener_(properties)
			// Attach listener:
			for (let i = 0, max = properties.events.length; i < max; i++)
			{	this.addEventListener(
					properties.events[i]
				,	properties.callback
				,	properties.options
				)
			}
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'saneEventListener_'
,	{	value: function(event, callback, interval = 60)
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			const listener = () =>
			{	$element.addEventListener(
					event
				,	(e) =>
					{	callback(e)
						setTimeout(listener, interval)
					}
				,	{once: true}
				)
			}
			listener()
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onClick_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['click']
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onHit_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mousedown', 'touchstart']
			// Only left mouse button:
			_callback = (e) =>
			{	if (e.button === 0
				||	e instanceof TouchEvent
				//	Safari fix:
				||	e.type.includes('touch'))
					callback(e)
			}
			$element.prepareEventListener_(_callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onRelease_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mouseup', 'touchend', 'touchcancel']
			// Only left mouse button:
			_callback = (e) =>
			{	if (e.button === 0
				||	e instanceof TouchEvent
				//	Safari fix:
				||	e.type.includes('touch')
				)	callback(e)
			}
			$element.prepareEventListener_(_callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onEnter_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mouseenter']
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onLeave_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mouseleave']
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

// General mousemove/touchmove:
Object.defineProperty(
	Object.prototype
,	'onMove_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mousemove', 'touchmove']
			// Only left-click:	
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

// mouseover, explicitly with pressed left mouse-button
// or touchmove:
Object.defineProperty(
	Object.prototype
,	'onDrag_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mousemove', 'touchmove']
			// Only left-click/touch:	
			_callback = (e) =>
			{	if (e.buttons > 0
				||	e instanceof TouchEvent
				//	Safari fix:
				||	e.type.includes('touch')
				)	callback(e)
			}
			$element.prepareEventListener_(_callback, args)
			return this
		}
	}
)

// mouseover, explicitly without any pressed mouse-button:
Object.defineProperty(
	Object.prototype
,	'onHover_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['mousemove']
			// Only if no mouse-button is clicked:
			_callback = (e) => {if (e.buttons === 0) callback(e)}
			$element.prepareEventListener_(_callback, args)
			return this
		}
	}
)

// Combined click, drag & release:
Object.defineProperty(
	Object.prototype
,	'defineClick_'
,	{	value: function(cb = {}, context = null)
		{	const that = Object.ofDOM_(this)
			if (! that) return

			if (! context) context = this

			const start = (e) =>
			{	// Prevent double-firing mouseevents after touchevents:
				if (e instanceof TouchEvent
				&&	e.cancelable === true
				//	Safari fix:
				||	e.type.includes('touch')
				&&	e.cancelable === true)
					e.preventDefault()
				// Callback on hit:
				if (cb.hit) cb.hit.call(context, e)
				// Add temporary event to catch drag:
				window.onDrag_(
					(e) => cb.drag.call(context, e)
				,	{	ID: 'defineClick_drag'}
				)
				// Add temporary event to catch drag end:
				window.onRelease_(stop, {ID: 'defineClick_stop'})
			}

			const stop = (e) =>
			{	// Callback on release:
				if (cb.release) cb.release.call(context, e)
				// Remove temporary events:
				window.forgetListener_('defineClick_drag')
				window.forgetListener_('defineClick_stop')
			}

			that.onHit_((e) => start(e), {passive: false})

			return that
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onWheel_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['wheel']
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onKey_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['keydown']
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'onResize_'
,	{	value: function(callback, args = {})
		{	const $element = Object.ofDOM_(this)
			if (! $element) return null
			args.events = ['resize_']
			$element.prepareEventListener_(callback, args)
			return this
		}
	}
)

Object.defineProperty(
	Object.prototype
,	'transition_'
,	{	value: function(classList, callback)
		{	const that = Object.ofDOM_(this)

			if (! that
			||	! classList
			||	! callback)
				return null

			that.addEventListener(
				'transitionend'
			,	callback
			)

			that.addClass_(...classList.split(' '))
			return this
		}
	}
)




/****************************************************************************

	OBJECTS

****************************************************************************/

;(	function(global)
	{	const Event_
		= {	fire(element, eventName, detail = null)
			{	const event = this.newEvent(eventName, detail)
				element.dispatchEvent(event)
			}
		
		,	newEvent(eventName, detail)
			{	return new CustomEvent(
					eventName
				,	{detail: detail}
				)
			}
		}

		global.Event_ = Event_
	}
)(g_)




;(	function(global)
	{	 if (! global.document) return
/*
	Filtered scroll events for
	> scroll position on page-start:	'pagestart_'
	> scroll-position on page-end:		'pageend_'
	> scroll:	'scroll_'
		> query 'event.details.direction'
		for scroll direction 'up' / 'down'
*/
		const Scroll_
		= {	setDirection(newPosY)
			{	if (newPosY > this.posY) this.direction = 'down'
				else this.direction = 'up'
				this.posY = newPosY
				Event_.fire(window, `scroll_`, {direction: this.direction})
			}

		,	setPosition(newPosY)
			{	if (newPosY < this.tolerance)
				{	Event_.fire(window, 'pagestart_')}
				else
				if (newPosY > this.maxScroll() - this.tolerance)
				{	Event_.fire(window, 'pageend_')}
			}

		,	maxScroll()
			{	return Math.max(
					this.$document.clientHeight
				,	this.$document.scrollHeight
				,	this.$document.offsetHeight
				) - window.innerHeight
			}

		,	disable()
			{	document.onWheel_(
					(e) => e.preventDefault()
				,	{	ID: 'no-wheel'
					,	passive: false 
					}
				)
			}

		,	enable()
			{	document.forgetListener_('no-wheel')}

		,	onScroll()
			{	this.setDirection(window.scrollY)
				this.setPosition(window.scrollY)
			}

		,	init()
			{	this.args		= arguments
				this.$document	= document.documentElement
				this.posY		= window.scrollY
				this.direction	= null
				this.tolerance	= 100 // px

				document.saneEventListener_(
					'scroll'
				,	(e, args) => this.onScroll()
				)

				// Initial call, determine position at page-load:
				this.setPosition()

				return this
			}
		}

		Scroll_.init.prototype = Scroll_.prototype
		global.Scroll_ = Scroll_.init()
	}
)(g_)