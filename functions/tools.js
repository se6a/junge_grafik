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
  ^ DOCUMENT SPECIFIC
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
  ^ Event_
      fire
      newEvent
  ^ Scroll_
      setDirection
      setPosition
      maxScroll
      disable
      enable
      onScroll
      init

****************************************************************************/

/* SET GLOBAL VARIABLE FOR DIFFERENT ENVIRONMENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let g_;

try {
  g_ = window;
} catch (e) {
  try {
    g_ = global;
  } catch (e) {
    g_ = this;
  }
}

/* SET GLOBAL CACHE
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

;(function() {
  g_.CACHE_ = {};
  g_.CACHE_.listener = new Map();
})();

/****************************************************************************

  GENERAL FUNCTIONS

****************************************************************************/

g_.l_ = console.log;

if (g_.document) {
  g_.$doc = document.documentElement;
  g_.$_ = document.querySelector.bind(document);
  g_.$all_ = document.querySelectorAll.bind(document);
  g_.$id_ = document.getElementById.bind(document);

  /* REQUEST ANIMATION FRAME
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  window.requestAnimationFrame = window.requestAnimationFrame
                                || window.webkitRequestAnimationFrame
                                || window.mozRequestAnimationFrame
                                || window.msRequestAnimationFrame
                                || window.oRequestAnimationFrame
                                || null;
  window.cancelAnimationFrame = window.cancelAnimationFrame
                                || window.webkitCancelAnimationFrame
                                || window.mozCancelAnimationFrame
                                || window.msCancelAnimationFrame
                                || window.oCancelAnimationFrame
                                || null;
  g_.rAF_ = window.requestAnimationFrame;
  g_.cAF_ = window.cancelAnimationFrame;

  /* INTERSECTION-OBSERVER
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  window.IntersectionObserver = window.IntersectionObserver
                                || window.webkitIntersectionObserver
                                || window.mozIntersectionObserver
                                || window.msIntersectionObserver
                                || window.oIntersectionObserver
                                || null;

  /* MUTATION_OBSERVER
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  window.MutationObserver = window.MutationObserver
                                || window.webkitMutationObserver
                                || window.mozMutationObserver
                                || window.msMutationObserver
                                || window.oMutationObserver
                                || null;

  /* RESIZE-OBSERVER
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  window.ResizeObserver = window.ResizeObserver
                                || window.webkitResizeObserver
                                || window.mozResizeObserver
                                || window.msResizeObserver
                                || window.oResizeObserver
                                || null;

  /* TOUCHEVENT
´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´*/
  // Safari fix:
  try {
    TouchEvent = TouchEvent;
  } catch (error) {
    TouchEvent = function() {
      return null;
    };
  }
}

g_.worker_ = async function(fn, args) {
  return new Promise(
    (resolve, reject) => {
      const W = new Worker("js/app-wworker.js");

      W.postMessage({ fn, args });

      W.onmessage = (e) => {
        W.terminate();
        resolve(e.data);
      };

      W.onerror = (e) => {
        W.terminate();
        reject(e);
      };
    }
  );
};

g_.viewportSize_ = function() {
  const h = Math.max(
    $doc.clientHeight,
    window.innerHeight || 0
  );
  const w = Math.max(
    $doc.clientWidth,
    window.innerWidth || 0
  );
  const _h = h / 100;
  const _w = w / 100;

  return { h, w, _h, _w };
};

g_.getCssValue_ = function(selector, property, toInteger = false) {
  let theCssValue = getComputedStyle($_(selector))
    .getPropertyValue(property);

  // Check wether the return should be as is or force integer:
  if (toInteger) {
    // Extract the Unit:
    const justLetters = theCssValue.match(/[a-z,%]/gi);
    const varUnit = justLetters.reduce(
      (accumulator, currentValue) => (accumulator + currentValue));

    // If Unit is Pixel cut the decimal places:
    if (varUnit === "px")
      theCssValue = parseInt(theCssValue);
    else
      theCssValue = parseFloat(theCssValue);
  }

  return theCssValue;
};

g_.transitionListener_ = function(
  {
    $target = null,
    cbStart = null,
    cbWhile = null,
    cbEnd = null
  }
) {
  let requestID = null;
  let i = 0;

  const limiter = 250;

  const start = () => {
    // At 'transitionstart':
    if (cbStart)
      cbStart();
    // Run loop, if a while-callback was passed:
    if (cbWhile)
      requestID = window.requestAnimationFrame(loop);
  };

  // While transition is running:
  const loop = () => {
    if (i++ >= limiter) {
      stop();
    } else {
      cbWhile();
      requestID = window.requestAnimationFrame(loop);
    }
  };

  // on 'transitionend':
  const stop = () => {
    if (cbEnd)
      cbEnd();

    if (requestID)
      window.cancelAnimationFrame(requestID);

    $target.removeEventListener("transitionstart", start);
    $target.removeEventListener("transitionend", stop);
  };

  $target.addEventListener("transitionend", stop);
  $target.addEventListener("transitionstart", start);
};

g_.loadImage_ = function($img, src) {
  return new Promise(
    (resolve, reject) => {
      $img.src = src;
      $img.onload = () => resolve();
      $img.onerror = (err) => reject(err);
    }
  );
};

g_.getBlob_ = async function(src) {
  let theBlob = null;

  try {
    const response = await fetch(src);
    theBlob = await response.blob();
  } catch (error) {
    console.log(error);
  }

  return theBlob;
};

g_.getBlobAS_ = function(src) {
  return g_.worker_("getBlob_", src);
};

g_.getImage_ = async function(src) {
  let theBitmap = null;

  try {
    const blob = await getBlob_(src);
    theBitmap = await createImageBitmap(blob);
  } catch (error) {
    console.log(error);
  }

  return theBitmap;
};

g_.getImageAS_ = function(src) {
  return g_.worker_("getImage_", src);
};

g_.tryJsonEncode_ = function(input) {
  let output;

  try {
    output = JSON.parse(input);
  } catch (error) {
    output = input;
  }

  return output;
};

g_.makeHtmlRequestQuery_ = function() {
  const requestParameters = arguments[0];
  const keys = Object.keys(requestParameters);
  let query = "";

  for (let i = 0; i < keys.length; i++) {
    const value = maybeArrayStringify_(
      requestParameters[keys[i]]);

    if (i > 0)
      query += "&";

    query += `${keys[i]}=${value}`;
  }

  return query;
};

g_.stringsToWords_ = function(...strings) {
  const wordList = [];

  strings.forEach(
    (_string) => {
      _string = _string.split(" ");
      wordList.push(..._string);
    }
  );

  return wordList;
};

g_.changeWordCases_ = function(first, ...words) {
  const changed = words.reduce(
    (total, s, i) => {
      i >= first
        ? total += (s.slice(0, 1).toUpperCase() + s.slice(1))
        : total += s;

      return total;
    },
    ""
  );

  return changed;
};

g_.camelize_ = function(...strings) {
  const words = stringsToWords_(...strings);
  const camelized = changeWordCases_(1, ...words);

  return camelized;
};

g_.pascalize_ = function(...strings) {
  const words = stringsToWords_(...strings);
  const pascalized = changeWordCases_(0, ...words);

  return pascalized;
};

g_.promiseTimeout_ = function(timeout) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

g_.maybeArrayStringify_ = function(input) {
  if (Array.isArray(input))
    input = JSON.stringify(input);

  return input;
};

g_.forceArray_ = function(input) {
  if (Array.isArray(input) === false)
    input = [input];

  return input;
};

g_.notNegative_ = function(n) {
  return n < 0 ? 0 : n;
};

g_.round_ = function(number, decimals = 0) {
  const factor = Math.max(Math.pow(10, decimals), 1);
  return Math.round(number * factor) / factor;
};

g_.absVal_ = function(input, decimals = 0) {
  let theAbsVal = null;

  if (typeof (parseFloat(input)) === "number") {
    const vp = viewportSize_();
    theAbsVal = (vp._h + vp._w) / 20 * input;
    theAbsVal = round_(theAbsVal, decimals);
  }

  return theAbsVal;
};

g_.async_ = function(callback) {
  setTimeout(callback(i), 0);
};

g_.forAS_ = function(i, comparison, mx, step, callback) {
/*
  Asynchronious for-loop
  use like forAS_(10, '>', 0, -1, (i) => console.log(i))
*/
  const cb = (i) => setTimeout(callback(i), 0);

  switch (comparison) {
  case ">": for (i; i > mx; i += step) cb(i); break;
  case ">=": for (i; i >= mx; i += step) cb(i); break;
  case "<": for (i; i < mx; i += step) cb(i); break;
  case "<=": for (i; i <= mx; i += step) cb(i); break;
  default: throw "Invalid comparison: " + comparison;
  }
};

g_.removeWhitespace_ = (input) => {
  let inHtmlTag = false,
    bypass      = false,
    lastChar    = null,
    cache       = "",
    output      = "";

  for (let i = input.length - 1; i >= 0; i--) {
    const _char  = input[i];
    let addChunk = "";

    /* DETERMINE CURRENT CONTEXT
´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´*/
    // Check if entering/leaving bypass-area:
    if (cache === "###") {
      bypass = bypass !== true;
      cache = "";
    }
    else if (cache === "#" && _char !== "#"
    || cache === "##" && _char !== "#"
    ) {
      output = cache + output;
      cache = "";
    }

    // Check if entering/leaving html-tag:
    if (!bypass)
      if (_char === ">") {
        inHtmlTag = true;
        cache = "";
      } else if (_char === "<") {
        inHtmlTag = false;
      }

    /* CHECK CURRENT CHARACTER
´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´*/
    switch (_char) {
    case "#":
      if (cache === " ")
        cache = "#";
      else
        cache = "#" + cache;
      break;

    case " ":
      if (bypass)
        addChunk = _char;
      else if (lastChar !== " ")
        addChunk = " ";
      cache = "";
      break;

    case "\n":
    case "\r":
    case "\t":
      if (bypass) {
        addChunk = _char;
        cache = "";
      }
      else if (cache !== " "
      && lastChar !== "<"
      ) {
        cache = " ";
      }
      break;

    default:
      addChunk = _char + cache;
      cache = "";
    }

    /* STORE CURRENT CHARACTER
´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´ ´*/
    output = addChunk + output;
    lastChar = output[0] || null;
  }

  return output;
};

/****************************************************************************

  EXTEND PROTOTYPES

****************************************************************************/

Object.defineProperty(
  Object.prototype,
  "keys_",
  {
    value: function() {
      let that = this;

      if (arguments[0])
        that = arguments[0];

      return [...Object.keys(that)];
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "isObject_",
  {
    value: function(input) {
      const isObject =  input instanceof Object
                       && typeof(input) === "object"
                       && Array.isArray(input) === false;

      return isObject;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "isEmpty_",
  {
    value: function() {
      let isEmpty = true;

      if (Object.keys(this).length)
        isEmpty = false;

      return isEmpty;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "asOneString_",
  {
    value: function() {
      let theString = "";

      const args       = arguments[0] ? arguments[0] : {};
      const separation = args.separation || "";
      const reverse    = args.reverse || false;

      let that = this;

      if (that.name === "Object")
        if (args.object)
          that = args.object;
        else
        if (arguments.length === 1
          && Object.isObject_(args))
          that = args;

      if (reverse) {
        const keys = Object.keys(that).reverse();

        for (let i = 0; i < keys.length; i++) {
          theString += that[keys[i]];
          if (i !== keys.length - 1)
            theString += separation;
        }
      } else {
        theString = Object.values(that).join(separation);
      }

      return theString;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "deepCopy_",
  {
    value: function(input) {
      let theDeepCopy = input;

      if (typeof (input) === "object")
      // Copy Array
        if (input instanceof Array) {
          theDeepCopy = [];

          for (let i = 0, mx = input.length; i < mx; i++)
            theDeepCopy[i] = Object.deepCopy_(input[i]);
        }
        // Copy Object
        else if (input instanceof Object) {
          theDeepCopy = {};

          for (const _key in input)
            theDeepCopy[_key] = Object.deepCopy_(input[_key])
            ;
        }

      return theDeepCopy;
    }
  }
);

Object.defineProperty(
  Array.prototype,
  "last_",
  {
    value: function() {
      let theLast = null;

      if (this.length)
        theLast = this[this.length - 1];

      return theLast;
    }
  }
);

Object.defineProperty(
  Array.prototype,
  "equals_",
  {
    value: function(otherArray) {
      let isEqual = true;

      // Basic check:
      if (otherArray
      && this.length === otherArray.length
      )
        // Further checking:
        for (let i = this.length - 1; i >= 0; i--) {
          if (!otherArray.includes(this[i])) {
            isEqual = false;
            break;
          }
        }
      else
        isEqual = false;

      return isEqual;
    }
  }
);

Object.defineProperty(
  Array.prototype,
  "intersects_",
  {
    value: function(otherArray) {
      let doesIntersect = false;
      let reference, entries;

      // Shorter array is reference:
      if (this.length >= otherArray.length) {
        reference = otherArray;
        entries = this;
      } else {
        reference = this;
        entries = otherArray;
      }

      // Check for intersection.
      // Return 'true' at first find:
      for (let i = entries.length - 1; i >= 0; i--)
        if (reference.includes(entries[i])) {
          doesIntersect = true;
          break;
        }

      return doesIntersect;
    }
  }
);

Object.defineProperty(
  Array.prototype,
  "forEachAS_",
  {
    value: function(callback) {
      if (typeof (callback) === "function")
        this.forEach((_item) => setTimeout(callback(_item), 0));
      else
        throw "Expects argument to be a function.";
    }
  }
);

Object.defineProperty(
  Array.prototype,
  "closestValue_",
  {
    value: function(input) {
      const arr    = this.sort((a, b) => a - b);
      let theValue = null;
      let i        = arr.length - 1;

      for (; i >= 0; i--) {
        const _value = parseFloat(arr[i]);
        if (input > _value)
          break;
      }

      if (i === arr.length - 1
      || Math.abs(arr[i] - input) <= Math.abs(arr[i + 1] - input)
      ) theValue = arr[i];
      else
        theValue = arr[i + 1];

      return theValue;
    }
  }
);

Object.defineProperty(
  String.prototype,
  "splitAsInt_",
  {
    value: function() {
      let that = this;

      if (this.name === "String"
      && arguments[0]
      ) that = arguments[0];

      that = that.split(",");

      const numberized = [];

      that.forEach((_number) => {
        if (parseInt(_number))
          numberized.push(parseInt(_number));
      });

      return numberized;
    }
  }
);

Object.defineProperty(
  Map.prototype,
  "getByIndex_",
  {
    value: function(index, reversed = false) {
      let theValue = null;

      if (this instanceof Map) {
        const values = [...this.values()];

        if (reversed)
          values.reverse();

        switch (index) {
        case "first":
          theValue = values[0];
        case "last":
          theValue = values[this.size - 1];
        default:
          theValue = values[index];
        }
      }

      return theValue;
    }
  }
);

/****************************************************************************

  EXTEND BROWSER ENVIRONMENT PROTOTYPES

****************************************************************************/

// Check if object is a DOM-element:
Object.defineProperty(
  Object.prototype,
  "ofDOM_",
  {
    value: function(that) {
      if (that !== window
      && that !== document
      && that instanceof Element === false
      ) that = null;

      return null;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "addClass_",
  {
    value: function() {
      const that = Object.ofDOM_(this);

      if (that !== null)
        that.classList.add(...arguments);

      return that;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "removeClass_",
  {
    value: function() {
      const that = Object.ofDOM_(this);

      if (that !== null)
        that.classList.remove(...arguments);

      return that;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "replaceClass_",
  {
    value: function() {
      const that = Object.ofDOM_(this);

      if (that !== null) {
        that.classList.remove(arguments[0]);
        that.classList.add(arguments[1]);
      }

      return that;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "hasClass_",
  {
    value: function() {
      let hasClass = null;
      const that = Object.ofDOM_(this);

      if (that)
        hasClass = that.classList.contains(...arguments);

      return hasClass;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "$_",
  {
    value: function() {
      let $ = null;
      const that = Object.ofDOM_(this);

      if (that)
        $ = that.querySelector(...arguments);

      return $;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "$all_",
  {
    value: function() {
      let $all = null;
      const that = Object.ofDOM_(this);

      if (that)
        $all = that.querySelectorAll(...arguments);

      return $all;
    }
  }
);

/* CACHE EVENTS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*
  When assigning eventListener, the involved event-properties can be
  stored in the event-cache. Later, with these entries, the eventListener
  can easily be removed or overwritten.

  The event cache is a map-object stored in "g_.CACHE_".
  An entry of the map holds the $element as ID and an object as value.
  The value contains all stored eventListener-properties for this
  element.

  > g_.CACHE_.listener = new map()

  Map-entries like:
  > $element1
    { ID1: eventProperties1
    , ID2: eventProperties2
    , ...
    }

  Event-IDs are unique IDs for the entry in the "CACHE_".

  > cache eventListner like: $element.cacheEvent(eventProperties)

  $element.forgetListener_(listenerLabel) to remove eventListener
  from the $element, and delete the entry from the cache.
*/

Object.defineProperty(
  Object.prototype,
  "rememberListener_",
  {
    value: function(properties) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        const cached = g_.CACHE_.listener;
        const ID     = properties.ID;

        if (cached[ID])
          $element.forgetListener_(ID);

        // At least one entry for $element exists, expand list:
        if (cached.has($element)) {
          const _entry = cached.get($element);
          // If ID exists, remove it from the list,
          // and the listener from the $element:
          if (_entry[ID])
            $element.forgetListener_(ID); ;

          _entry[ID] = properties;
        }
        // New CACHE-entry for $element
        else {
          cached.set($element, { [ID]: properties });
        }
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "forgetListener_",
  {
    value: function(ID) {
      const $element = Object.ofDOM_(this);
      const cached = g_.CACHE_.listener;

      if ($element
      && cached.has($element)
      && cached.get($element)[ID]
      ) {
        const _entry      = cached.get($element);
        const _properties = _entry[ID];

        for (let i = _properties.events.length - 1; i >= 0; i--)
          $element.removeEventListener(
            _properties.events[i],
            _properties.callback,
            _properties.options
          );

        delete _entry[ID];

        if (Object.keys(_entry).length === 0)
          cached.delete($element);
        else
          cached.set($element, _entry);
      }

      return $element;
    }
  }
);

/* EVENTLISTENER
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
  Object.prototype,
  "prepareEventListener_",
  {
    value: function(userCallback, args = {}) {
      const properties = {
        events:  args.events,
        ID:      args.ID || null,
        spread:  args.spread !== false, // *
        options: {
          once:    args.once || false,
          capture: args.capture || false,
          passive: args.passive !== false // *
          // * default = true
        },
        callback: (e) => {
          if (e.eventPhase === 2
          || properties.spread === true
          || e instanceof TouchEvent
          && e.eventPhase > 0
          // Safari fix:
          || e.type.includes("touch")
          && e.eventPhase > 0
          ) {
            userCallback(e);
            if (properties.spread === false)
              e.stopPropagation();
          }
        }
      };

      // Remember listener, if ID was passed:
      if (properties.ID)
        this.rememberListener_(properties);

      // Attach listener:
      for (let i = 0, max = properties.events.length; i < max; i++)
        this.addEventListener(
          properties.events[i],
          properties.callback,
          properties.options
        );
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "saneEventListener_",
  {
    value: function(event, callback, interval = 60) {
      const $element = Object.ofDOM_(this);

      if (!$element)
        return null;

      const listener = () => {
        $element.addEventListener(
          event,
          (e) => {
            callback(e);
            setTimeout(listener, interval);
          },
          { once: true }
        );
      };

      listener();
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onClick_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["click"];
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onHit_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mousedown", "touchstart"];

        // Only left mouse button:
        const _callback = (e) => {
          if (e.button === 0
          || e instanceof TouchEvent
          // Safari fix:
          || e.type.includes("touch")
          ) callback(e);
        };

        $element.prepareEventListener_(_callback, args);
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onRelease_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mouseup", "touchend", "touchcancel"];
        // Only left mouse button:
        const _callback = (e) => {
          if (e.button === 0
          || e instanceof TouchEvent
          // Safari fix:
          || e.type.includes("touch")
          ) callback(e);
        };

        $element.prepareEventListener_(_callback, args);
      }

      return this;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onEnter_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mouseenter"];
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onLeave_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mouseleave"];
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

// General mousemove/touchmove:
Object.defineProperty(
  Object.prototype,
  "onMove_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mousemove", "touchmove"];
        // Only left-click:
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

// mouseover, explicitly with pressed left mouse-button
// or touchmove:
Object.defineProperty(
  Object.prototype,
  "onDrag_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mousemove", "touchmove"];

        // Only left-click/touch:
        const _callback = (e) => {
          if (e.buttons > 0
          || e instanceof TouchEvent
          // Safari fix:
          || e.type.includes("touch")
          ) callback(e);
        };

        $element.prepareEventListener_(_callback, args);
      }

      return $element;
    }
  }
);

// mouseover, explicitly without any pressed mouse-button:
Object.defineProperty(
  Object.prototype,
  "onHover_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["mousemove"];

        // Only if no mouse-button is clicked:
        const _callback = (e) => {
          if (e.buttons === 0)
            callback(e);
        };

        $element.prepareEventListener_(_callback, args);
      }

      return $element;
    }
  }
);

// Combined click, drag & release:
Object.defineProperty(
  Object.prototype,
  "defineClick_",
  {
    value: function(cb = {}, context = null) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        if (! context)
          context = this;

        const start = (e) => {
          // Prevent double-firing mouseevents after touchevents:
          if (e instanceof TouchEvent
            && e.cancelable === true
            // Safari fix:
            || e.type.includes("touch")
            && e.cancelable === true
          ) e.preventDefault();

          // Callback on hit:
          if (cb.hit)
            cb.hit.call(context, e);

          // Add temporary event to catch drag:
          window.onDrag_(
            (e) => cb.drag.call(context, e),
            { ID: "defineClick_drag" }
          );

          // Add temporary event to catch drag end:
          window.onRelease_(stop, { ID: "defineClick_stop" });
        };

        const stop = (e) => { // Callback on release:
          if (cb.release)
            cb.release.call(context, e);
            // Remove temporary events:
          window.forgetListener_("defineClick_drag");
          window.forgetListener_("defineClick_stop");
        };

        $element.onHit_((e) => start(e), { passive: false });
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onWheel_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["wheel"];
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onKey_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["keydown"];
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "onResize_",
  {
    value: function(callback, args = {}) {
      const $element = Object.ofDOM_(this);

      if ($element) {
        args.events = ["resize_"];
        $element.prepareEventListener_(callback, args);
      }

      return $element;
    }
  }
);

Object.defineProperty(
  Object.prototype,
  "transition_",
  {
    value: function(classList, callback) {
      const $element = Object.ofDOM_(this);

      if ($element
      && classList
      && callback
      ) {
        $element.addEventListener("transitionend", callback);
        $element.addClass_(...classList.split(" "));
      }

      return $element;
    }
  }
)

/****************************************************************************

  OBJECTS

****************************************************************************/

;(function(global) {
  const Event_ = {
    fire(element, eventName, detail = null) {
      const event = this.newEvent(eventName, detail);
      element.dispatchEvent(event);
    },
    newEvent(eventName, detail) {
      return new CustomEvent(
        eventName,
        { detail: detail }
      );
    }
  };

  global.Event_ = Event_;
}
)(g_)

;(function(global) {
  if (!global.document) return;
  /*
  Filtered scroll events for
  > scroll position on page-start: 'pagestart_'
  > scroll-position on page-end:   'pageend_'
  > scroll: 'scroll_'
    > query 'event.details.direction'
    for scroll direction 'up' / 'down'
*/
  const Scroll_ = {
    setDirection(newPosY) {
      if (newPosY > this.posY)
        this.direction = "down";
      else
        this.direction = "up";

      this.posY = newPosY;

      Event_.fire(window, "scroll_", { direction: this.direction });
    },

    setPosition(newPosY) {
      if (newPosY < this.tolerance)
        Event_.fire(window, "pagestart_");
      else
      if (newPosY > this.maxScroll() - this.tolerance)
        Event_.fire(window, "pageend_");
    },

    maxScroll() {
      return Math.max(
        this.$document.clientHeight,
        this.$document.scrollHeight,
        this.$document.offsetHeight
      ) - window.innerHeight;
    },

    disable() {
      document.onWheel_(
        (e) => e.preventDefault(),
        {
          ID:      "no-wheel",
          passive: false
        }
      );
    },

    enable() {
      document.forgetListener_("no-wheel");
    },

    onScroll() {
      this.setDirection(window.scrollY);
      this.setPosition(window.scrollY);
    },

    init() {
      this.args = arguments;
      this.$document = document.documentElement;
      this.posY = window.scrollY;
      this.direction = null;
      this.tolerance = 100; // px

      document.saneEventListener_(
        "scroll",
        () => this.onScroll()
      );

      // Initial call, determine position at page-load:
      this.setPosition();

      return this;
    }
  };

  Scroll_.init.prototype = Scroll_.prototype;
  global.Scroll_ = Scroll_.init();
}
)(g_);
