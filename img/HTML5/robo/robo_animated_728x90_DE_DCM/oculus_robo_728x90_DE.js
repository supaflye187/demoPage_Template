(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1028,90);


(lib.game_1_unspoken = function() {
	this.initialize(img.game_1_unspoken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_2_loneecho = function() {
	this.initialize(img.game_2_loneecho);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_3_startrek = function() {
	this.initialize(img.game_3_startrek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_4_superhot = function() {
	this.initialize(img.game_4_superhot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_6_rickmorty = function() {
	this.initialize(img.game_6_rickmorty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_7_wilson = function() {
	this.initialize(img.game_7_wilson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.hardware_rift = function() {
	this.initialize(img.hardware_rift);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,84);


(lib.hardware_touch_LT = function() {
	this.initialize(img.hardware_touch_LT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,47);


(lib.hardware_touch_RT = function() {
	this.initialize(img.hardware_touch_RT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,60);


(lib.RR_poster_final12 = function() {
	this.initialize(img.RR_poster_final12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,350);


(lib.SmokeEffectPNGFile = function() {
	this.initialize(img.SmokeEffectPNGFile);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,229);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RR_poster_final12();
	this.instance.parent = this;
	this.instance.setTransform(-175,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A7VSGIAAz/IClAAIAAgLIAAABQAIAHAKABQAKACAHgGQALgLgGgUQARgGAcgYQATgSAagTQApgeAMgKIARgPQAJgIAIgFIAOgGQAJgEAFgEQALgJACgRQACgPgGgPQgEgNgIgGQgJgJgLACQgEACgPAKQgMALgSABQgKgOACgJQABgGAIgHIAOgLQALgLgFgPIgCgDQgFgMgNgBQgIgBgCgCQgCgCAAgEQgBgWAGgTIAGgLQAEgGAHgEIANgHIANgJQAOgMABgNIAAgGIAAgBQABgCAHgDQAMgFACgQQABgJgEgQQgCgHgDgEQgEgHgPgHIgNgKIgBgCIADgFQAHgSALgOIADgEIADAAQAFACAJAHQAYATAfgDQAKgBAFgDIAIgHQAGgGAEgGIABAEIgBAHQAAALAMAIQAFADAQAFQASAFAQAHQAUAIAXAOQAOAIAGACQAOADAJgFQAIgFACgJQACgJgFgHIgEgFIgDgEQgBgCACgFQAEgZgOgTIAJgHIAMAJQAKAHAcAOIBGAhIAiAPQAOAFALAAQAOAAAIgMQADgHgBgIIABgEQAMgeADgPIAEgJQACgFAGgDIAtgoQANgLAFgGQAHgKALgYQAEgLADgDIAOgJQAOgLAIgDQAFgCAMAAIAMgBIAEABQALADAEAEQAIAHAEAWQACAXAJAIQAEAEAJADIAOAGQANAHAGAQQAGATAEAIQAFAKAMANQAlAoAqAdIAFADIAAADIgRAAIgIABIgEgDQgFgDgIgCQgEgBgGABIAAAAIgCgCQgEgJgEgFQgFgFgNgIQgTgMgPgEIgGgCIgDgFQgCgGABgMQgBgNgMgFQgLgFgKAIQgKAIAAASQAAAKABAIQgFAHACALQABAMAKAHQAFADAJAAIAPAAQAMABAMAIQAHAGAGAHQALAQANAeIALAaQAGAPABAFQABAMgHAVQgHAWAAAMQABAHAEAGIABACQADAIgBAFQAAAGgIAJQgHALgCAFIgCAKIgBAKIgKANIgKAQIgKAPQgGAIgPANIgJAOQgOAAgIAIQgGAHgBAPIgDADIgCACQgHgBgGADQgMAEgCAMQgCANAKAHIAFAFIACAGIgBAdIABAdIACAPIAAAUQABANAGAFQAEAFAJABQAHAAAGgCIAuAAIABgBIAGAAIAAAAIABgBIADgBIADgCIABgBIABgBIABgBIAAgBIABgCIABgCIABgBIABgCIAAgBIABgBIACgIQADgQgDgSQgBgHACgDIADgHIACgIQABgEAHgCQAMgEADABIAJAFQAGAEAMAAQATAAAQgCQALgBAFgEQAIgGABgLIAAgFIAFABQAEAAAIgDIALgDQAEAAAMAEQAUAIAHAKIAEAJQAEAFADADQAGAFAOAAQARAAAIgCQAVgGAKABQALABAHAIQAEACABAEQAAAFgHAGQgNAPAAAKIABAEIAAABIgDACIgBABIgCACIgBACIAAACIgBACIAAACIAAACIAAACIAAABIAAACIAAACIABACIAAACIABACIACACIABACIADABIACACIAEACIAHABIDBAAIADAAIADAAQAKgBAFgKQADgHAAgHQAAgMgGgGIgJgFIgJgEQgEgCgFgHIgIgJIgQgLIgJgIIgIgJIgQgOQgLgIgEgGIgLgTQgGgKgHgEIgCgBIgEgCIgNgLIgIgFQgEgDgCgDIgDgHIgDgJIgCgRIAAgFIAAgBIgCgJIgEgMIgBgNQAAgFACgCIAIgJQAFgGACgJQACgIgBgKQAAgOgGgHIgBgBIgFgKIgLgQQgGgHAAgGIADgPQACgMgFgLIgEgJQgDgGABgEQAAgCAGgJQAHgMgHgMIgHgMIgGgNQgEgMgMgIIgLgGIgKgGQgLgHgIgQIgLgdQgEgMgIgFIgEgCQgEgDgGgBQgJgBgHAFIgKAHQgNAJgagDQgcgDgJAAIgJgIQgJgGgUgLQgKgHgSgTQgUgTgEgGQgEgFgEgJQAEgCACgEIAIgPQADgFAHgGQAJgGACgEQAAAbALAKIALAIIAKAJIAUANQAPAHADABQAMAEAJgEQAGgCAGgGIAFACQAMAEAKgCQAMgCAFgJQACgFAAgIIABgOIADgLQADgIAFgGQAEgFAMgIQAJgHAEgGQAHgIgBgJQAAgHgFgOIACgNQACgJAAgEIAAgBIACgCIAJgIQAKgIAWgHQAXgHAJgFIAIgEQAGgCAFABQAiADARAMQAGAFAFAHIAIALQAFAGAFADQAFACAHgBIAAABQAKADABADQAEAEgDAGIgHAJIgCAHQgBAEABAEIAAABQAAAGAEAFIAFAEIACABIABAAIACABIAKAEIAPAKIALAEIALAFIAMAMIAPAJIAKAHIALAGIAQALIAFAKIAOASIAJAMQARAeAVASQAGAGAGACIACAIIABAHIACAEIgDAGIgCAJIgBAKIgBAEIgKACQgIABgTgHIgLgEIgBgDQgDgHgFgIQglg3g/gTQgTgGgPADQgHABgFAFQgHAHAAALQACAKAJAFIAEACIABACIAIAKQAEAFACAGQAEANACAGQADAHAIAIIANAMQANAOAIAPIAJAPQAEAGAEADIAAASQgBAIgEAHIgMAhIgFAKIgGAPIgGAIIgKAFQgSALgCAMQgCAJAGAIQAHAHAJABQAIABAQgJIAIgFIAIgGIAAABQALANACAFQAFAJgBAVQgBAWAEAJIAGAPQAGAOgFAOQgBAFgFAIIgIAJQgKALgBADQgEAIACAMQABAHADAEIABABQACAHAIALIAAAAQAEARABALQAAAZADAHQADAIAJAIIAQAOIAMAMQAIAHAGABQAMADAIgJQAFgCADgDQAHgHAAgSIAAgmIgBgMIgGgQIgFgTIgEgMIAAgDIAAAAIAFgTIAAgKQAJgMADgIIAGgQIANgPIAIgLQAFgHAEgDIAOgJIADgCIAAAAIABgBQAHgIAAgJQgBgKgHgFIgCgFQgCgEgBgHIAAgGQAAgHgEgFIADgNQAEgMgBgIIgCgDQADgGABgLQABgWgFgVIgEgWQgHgcAHgfIAFgbQABgLgFgHIACgDQADgEABgHQABgJgCgJIgEgGIABgBIAEgIQACgGACgCQADgDAJgFQAKgGgCgMIgCgOIABgJIAFgXQAEgUgJgIQgCgCgGgCIgIgFQgDgCgFgIIgWgnQgEgGgCgGIgDgNQgBgHgFgFQgDgGgHgDIgKgCIgKgCQgIgBgJgFIgWgLQgHgCgBgEIgCgGIgCgFIgBgBIgDgLQgBgFABgLQgBgIgFgHIAEgGQAEgNgIgMIgKgKQgCgEgFgKQgGgRgBgKQgBgLABgVQgBgUgNgHIgIgDQgGgCgDgCIgDgDIAHgIQAKgPABgHIABgEIABAAIAMgDQAHgCAFABIAHADQADAFAFAEIANAHQAGAFAJAJIAFAGIAAAIIAAADIgBAFQgCAIADAGQAEAIABAFIABAGQgDAAgFADQgIAGgBAIQgBAGAEATIAEAPIAAABIAAACQgBAHAEAGIADAEQgBAFAAAFQABAHAFAGQAGAGAHAAQAIAAAHgEQAHgFACgHIAQgCIABAAQALABAHgIQAIgKgCgOIgEgMIAAgEQACgFACgKIADgJIAFgLQAEgFAKgGQAMgGAEgEIADgDIAIAAQAMgBAHACIANAEIADAFIADAFIABAEQADAJAJAYIADAOIABAMQACAIAEAGIABABQgKADgFAJQgDAGABAIQACAIAGAEQAFADAGACIAMAEQAJADAJAKIAQAQIASAOQAIAGAJAJIAZAXQAFAFABAEQABAHgLAIIgNAJIgTAMIgFACIgLgHQgMgGgLADIgCAAQgJACgFAHQgHAJAEANIADALIgBAHIgGAIQgFAIgCAMQgCASAHAJIAGAHQAGAHAIANIAPATIACACIAKALIAHALIAFAFQAEAEABADIABAHIACALIAAAXIADAKIAAACIABAKQAEAmAAAjQAAAPgCAIQgBAJgDAIIgIAYQgNAqgBAWQAAAQgCAFIgIAOQgCAFAAAFQgBAIACAJIACAOQAAADgBAGQgFAHgCAMQgBALAAAXQgBAKgEAOIgHAYQgHAXgCAFQgHANgBAFIAAALIgBALIgBAEQgDAEAAAFQgBAHAEAGIABACQAFAHAJABIABABIAFAAIADACIAHABIAIgBIBmgCIApAAIAHgBIADgCIADgCIACgBIACgCIABgCIABgCIAAgCIABgCIABgCIAAgCIAAgBIAAgCIAAgCIgBgCIgBgCIAAgCIgBgBQAEgIAAgQIgChNQAAgWADgIQABgEAHgMQANgVAJgWQADgLAFgHQADgEAKgFQAJgGACgEQALgNgHgWQgEgLAAgDQABgDAEgEIAAAAIAEgGIABAAIACgFQADgIgCgKQgDgKAAgDIAGgIQAFgGABgQQAAgRgFgHQgEgIgOgFIgJgDIgDgCQgZgVgKgYQgCgGgCgLIgEgSQgDgOgIgVIgMgdIgFgKIABgCQAAgegJgNIgGgIQgCgEABgIQABgQAIgPIAIgMQAGgHABgFQADgHADgPIAFgQIAGgPIAEgRQACgGAKgKQAJgKADgHQADgLgFgJQgFgIgJgCIgBgGIgCgGIAGgDIAMgJIABACQAGAHAKAAQAJABAGgGQAGgHAHgRQAHgKACgEIACgKIAFgEQAGABAGgDQAGgCAHgIQAKgKAEgCQACgCANgEIALABIAKAAQADABAIAFIATAGQAMADAFAGQAEAEADAJIACAHIgBAJIgBATIAAAKIgBAEQgCAHAEAIIACADIgDALIgJAOIgCAIIAAAIQACAKAKAFQAEACAEAAQADAEAEACQAHAFAOAAQASgBARgEIAbgKQAHgDAGAAIALADQAPAEATgEIAjgIIAZgFIABgBIAIABIAVgDQANgCAZABQAUAAAIgFQAFgDAIgJQAWgXgBgQIABgFQAAgDAHgCIAPgFIAHgCIAOABIAuAEQAbABARgHQAJgEALgHIASgNQAVgNASgCQANgBAUAEIAfAHIAaAFQAHADAOAHIAWAIIAOAEIgLAJQgNAKgZAGIgqAKIgbALQgRAGgMgEIgMgGIgNgGQgRgHgdAJQgmANgEAVIgDAMQgEAEgLAAQgiAAgNAHQgPAJgHABQgGABgIgCIgNgEQgMgEgJADIgDABIgcAIQgWACgLAEIgNAHIgOAHQgHADgMABIgTACQgSADgPALIgPAMQgHADgLAAIgSAAQgdACgWAPIgMAJQgIAFgHACIgMACIgOABQgOABgKAIQgMAKACANQABAIAHAGIAFADIADAKQAOAlAgALQALADAEADQABACAGAKQACAGAKAJQAKAIADAGQALAVgWAgIgQAXQgIAPAAAMIgBAOQgBAFgHAIQgDAGAAAHQAAAHAEAGQADAFAAADQgBACgGADQgEAEgEAIIgEAPQgCAIgJAPQgGAOAEALQACAEADADIAEANQACAHgDAGQgBAFgGAIIgBABQgCADgCAGQgDALADAQIACAHQgBAGgBALIgCALIgKAfIgHAQIgDANIgGAQQgEAKgBAGIgCAPIgDAKQgCAIAGAIIACACIACACIABACIAAAAIACACIACACIADACIADACIAIABIAHgBIBVgCIAHgBIADgCIAEgCIACgBIABgCIABgCIABgCIABgCIAAgCIABgCIAAgBIAFgFIAGgLQADgGAEgDQAFgDAMgDQALgCAEgFIADgHIAEgIQAHgLAMgBIALABIAmAHQAEAPAKALQALALAOAFQATAIAegGQAQgDAOgEQAEAEACAMQACANACAEQAEAJARAHQAaAKAPgJIFfAAIAAAFIFtAAIAATcgAHljSQgHAHgDALIgDAIIgFAIIgBAHQgBADgFAGIgLARQgDAGAAAFIAAAGIgCAHQgDAFABAGQgBAGAEAFQAEAFAFADQAGACALgBIAogBQALAAAHgEQAIgFACgJQABgHgCgGIAAgBQAAgHgDgKIgFgRIgDgLQAAgQgCgOIgCgJQgHgMgMgBIgBAAQgKAAgIAIgAB+haQALABAGgCIAHgFQAEgDADgFQACgHgBgLQAAgdgKgbQgDgNgIgGQgGgEgIAAQgIABgFAGQgDADgCAEQgDAEgCAHIgCANQgBAHgDAEQgDAFgHAHQgLAKACAPQABANAJAGQAGAEAIAAIAHgCQAJADALABgAsDheQARABAHgCQAQgFABgMQABgEgBgDQACgGgBgGQAAgIgGgVQgWg/ALhDQADgXAMgHQAOgEAEgFQAEgDACgIIABgNQADgKALgMQAXgBAOgOQAIgIACgKQACgLgFgJIgLgSIgHgPIgFgQQgGgQgIgHQgEgHgHgCQgFgBgFACIAAAAQgJABgFAHQgCADAAAFIgCAEQgDAMAAAZQgBAKgHATQgNAfgPAWQgNASgdAgQgPARgIAGQgOAMgNAGIgUAHQgMAEgHAFQgNAKgGAaQgKAjgDAGIgLAUQgFAOABAYQAAANAEAHQAJALAbAAIA3gBQAsAAAfADgAvRl1QgMACgOAVIgQAYQgHALgCAGIgBAIQgBADgEAEQgFAIAAASQAAAWADALQAHASAQAEQABAIAHAGQAGAGAIABQAIACAIgEQAIgFADgHIADgTIAEgNQADgIABgJIACgMIAIgKQAPgSABgWIgBgSIgBgKQgEgMgLgDIgIgCIgGgFQgGgHgIAAIgFABg");
	mask.setTransform(0,59.2);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.RR_poster_final12, null, new cjs.Matrix2D(1,0,0,1,-175,-174.8)).s().p("A7VbYMAAAg2vMA2rAAAMAAAA2vg");
	this.shape.setTransform(0,-0.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-56.5,350,231.5);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmokeEffectPNGFile();
	this.instance.parent = this;
	this.instance.setTransform(-150.4,-114.5,0.86,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-114.5,301,229);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SmokeEffectPNGFile();
	this.instance.parent = this;
	this.instance.setTransform(-150.4,-114.5,0.86,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.4,-114.5,301,229);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACAVQAFgOAGgcIARAAIgHAVIgJAWgAgdAVIAMgqIAQAAQgCAKgEALIgJAWg");
	this.shape.setTransform(75.3,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_2.setTransform(63.3,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAA0QgEgCgCgEQgCgEgBgIIAAgQIAAgiIgRAAIAAgMIARAAIAAgaIAMAAIAAAaIAYAAIAAAMIgYAAIAAAlQABAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_3.setTransform(56.3,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_4.setTransform(48.4,-4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(41.5,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJArIgJgDQgHgDgGgHQgGgFgCgIQgDgIAAgJQAAgHADgJQACgHAGgGQAGgGAHgDIAJgDIAJgBQAHAAALAEQAIADAGAGQAFAGADAHQADAJAAAHQAAAJgDAIQgDAIgFAFQgGAHgIADQgLADgHAAgAgMgbQgFADgEAEQgDAEgCAGQgCAFAAAFQAAAGACAGQACAFADAEQAEAEAFADQAGACAGAAQAHAAAGgCQAFgDAEgEQADgEACgFQABgGAAgGQAAgFgBgFQgCgGgDgEQgEgEgFgDQgGgCgHAAQgGAAgGACg");
	this.shape_6.setTransform(34.4,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA/IAAh6IAOAAIAAAPIAAAAIAHgHQADgEAEgCIAJgDIAIgBQAJAAAIACQAHAEAFAFQAFAGADAIQADAIAAAKQAAAJgDAJQgDAGgFAGQgFAGgHADQgIACgJAAIgJgBQgEAAgEgDIgHgGIgGgHIgBAAIAAAPIAAAqgAgLguQgFACgEAEQgEAFgCAFQgCAFAAAHQAAAGACAGQACAGAEACQAEAFAGACQAFACAFAAQAHAAAFgCQAFgCAEgEQAEgDABgGQACgFAAgHQAAgHgCgGQgBgGgEgEQgEgDgFgDQgFgCgHAAQgFABgGACg");
	this.shape_7.setTransform(24.2,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_8.setTransform(9.4,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA/IgPgEIAAgMIAPACIAQACQAHAAAGgCQAFgBAFgDQAEgEACgFQACgHABgIIAAgQIAAAAQgJAKgFADQgEADgFAAIgJABQgHAAgIgCQgHgDgGgGQgFgGgDgGQgDgJAAgJQAAgKADgIQADgIAFgGQAGgFAHgEQAIgCAHAAIAJABQAEABAEACIAIAFIAHAIIAAAAIAAgPIAOAAIAABQIgBALIgDAJIgEAIIgFAGQgHAFgIADQgIACgJAAIgRgBgAgLgwQgFADgDADQgEAEgCAGQgCAGAAAHQAAAHACAFQACAGAEADQADAEAFACQAGACAFAAQAGAAAGgCQAFgCAEgFQADgCADgGQACgGAAgGQAAgHgCgFQgCgFgEgFQgEgEgFgCQgFgCgHgBQgFAAgGACg");
	this.shape_9.setTransform(-0.8,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-8,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_11.setTransform(-14.9,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAA0QgDgCgDgEQgCgEgBgIIgBgQIAAgiIgQAAIAAgMIAQAAIAAgaIAOAAIAAAaIAWAAIAAAMIgWAAIAAAlQAAAMACAEQAAACADACIAGABQAGAAAGgCIAAAMQgIACgIAAQgHAAgEgCg");
	this.shape_12.setTransform(-27.3,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAqIgOgFIADgMQAGADAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgCAAgEQAAgEgCgCQgCgCgEgCIgPgFQgNgDgEgBQgEgDgCgEQgCgEAAgFQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAADACADIAFADIAQAEIAJADIAIADQAEADACAEQACADAAAGQAAAHgDAFQgDAGgFACQgFADgHACIgMABIgQgBg");
	this.shape_13.setTransform(-34.3,-4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAHAAQAJAAAHADQAGACAFAFQAFAGADAIQADAIAAAKIAAAGIg/AAQABAGADAFQACAFADADQAFADAFABQAFABAGAAIAOgBQAIgBAHgDIABANQgHACgJACIgOABQgKAAgHgCgAAZgFQAAgGgDgFQgBgEgDgEQgDgDgFgBQgDgCgGAAQgEAAgFACQgEABgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIASBAIAWhAIANAAIAVBAIAThAIAQAAIgcBRg");
	this.shape_15.setTransform(-54,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgGQAFgEAHgDQAIgDAIAAQAIAAAGADQAHACAGAFQAEAGADAIQADAIAAAKIAAAGIg+AAQAAAGACAFQADAFAEADQADADAGABQAFABAGAAIAPgBQAHgBAGgDIACANQgGACgJACIgPABQgJAAgJgCgAAYgFQAAgGgCgFQgBgEgDgEQgDgDgEgBQgFgCgFAAQgEAAgEACQgFABgDADQgEADgCAFQgCAFAAAGIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEAEQgEAEgCAGQgCAFAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgDAEgCIAJgFQADgBAGAAQAHAAAGADQAGACADAEQAEAFABAGQACAFAAAIIAAAyg");
	this.shape_17.setTransform(-74.7,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-18.2,163.2,24.4);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.RR_poster_final12();
	this.instance.parent = this;
	this.instance.setTransform(-175,-175);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.Tween7 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAWIAGgWIAJgVIANABIgHAUIgFAWgAgdAWIAHgWIAJgVIAMABIgGAUIgFAWg");
	this.shape.setTransform(-97.6,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAA1QgEgCgBgFQgDgFgBgGIgBgQIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlQAAAMACAEQABADACABIAGABQAGAAAGgCIAAANQgIACgIAAQgHAAgEgCg");
	this.shape_1.setTransform(94.8,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_2.setTransform(87.2,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_3.setTransform(80.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_4.setTransform(73.5,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_5.setTransform(64.6,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(55.8,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_7.setTransform(45.6,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAA1QgEgCgCgFQgCgFgBgGIAAgQIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlQAAAMACAEQACADACABIAFABQAIAAAFgCIAAANQgIACgIAAQgHAAgEgCg");
	this.shape_8.setTransform(34.1,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXA/IAAgxIgBgJIgDgGQgDgDgDgBQgEgCgFAAQgEAAgFACQgFACgEADQgEAEgCAGQgCAGAAAHIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAIAFgHQADgDAEgCIAJgEIAJgCQAHAAAGADQAGACADAFQAEAEABAGQACAFAAAIIAAAyg");
	this.shape_9.setTransform(26.4,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAFADAFABQAFABAGABIAOgCQAIgCAHgCIABANQgHADgJABIgOABQgKAAgHgCgAAZgFQAAgGgDgEQgBgGgDgCQgDgDgFgCQgDgCgGAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_10.setTransform(17.1,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAFAAACAEQACACABAEQgBAFgCACQgCADgFAAQgDAAgDgDg");
	this.shape_11.setTransform(10.6,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApIgOgDIADgOQAGAEAHABQAHACAHAAQAJAAAFgDQADgCABgCQACgDAAgDQAAgDgCgDQgCgCgEgBIgPgFQgNgDgEgDQgEgCgCgEQgCgDAAgGQAAgGADgFQACgFAEgDQAFgDAFgCQAGgBAFAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACACIAFAEIAQAEIAJADIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAFgFADQgFADgHABIgMABIgQgCg");
	this.shape_12.setTransform(4.7,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_13.setTransform(-5.2,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(-9.1,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_15.setTransform(-15.9,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgIAoQgIgCgGgGQgGgFgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgGAIgCQAIgDAJAAIAOABQAHACAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEADQgEAEgCAGQgCAGAAAGQAAAIACAFQACAGAEAEQAEAEAGACQAEABAHABIAMgCQAIgBAGgEIABAOQgGACgHABIgOACQgJAAgIgDg");
	this.shape_16.setTransform(-24.5,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgFgBgOQAAgHADgMQADgIAGgGQAFgEAHgEQAIgCAHAAQAJAAAHADQAGADAFAEQAFAGADAIQADAIAAAKIAAAFIg/AAQABAHADAFQACAFADADQAEADAGABQAFABAGABIAOgCQAIgCAHgCIAAANQgFADgKABIgOABQgKAAgHgCgAAZgFQAAgGgCgEQgCgGgDgCQgDgDgFgCQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAGIAxAAIAAAAg");
	this.shape_17.setTransform(-33.2,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbA+IgfgtIgaAAIAAAtIgPAAIAAh7IAyAAQAJAAAIADQAGADAFAFQAFAGADAHQADAHgBAJQAAAIgCAGQgBAHgFAEQgDAFgHADQgGADgHABIAiAugAgeADIAiAAQAGAAAEgBQAFgCAEgDQADgDABgFQACgFAAgFQAAgGgCgFQgBgFgDgDIgJgFQgEgCgGAAIgiAAg");
	this.shape_18.setTransform(-42.8,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_19.setTransform(-58.1,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_20.setTransform(-68.1,0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJAqIgJgCQgHgEgGgFQgGgGgCgIQgDgIAAgJQAAgIADgHQACgJAGgFQAGgGAHgEIAJgCIAJgBQAHAAALADQAIAEAGAGQAFAFADAJQADAHAAAIQAAAJgDAIQgDAIgFAGQgGAFgIAEQgLADgHAAgAgMgaQgFABgEAFQgDAEgCAFQgCAGAAAFQAAAHACAFQACAGADAEQAEADAFADQAGACAGABQAHgBAGgCQAFgDAEgDQADgEACgGQABgFAAgHQAAgFgBgGQgCgFgDgEQgEgFgFgBQgGgDgHAAQgGAAgGADg");
	this.shape_21.setTransform(-78.4,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAKAAAHADQAIADAEAFQAGAGACAHQADAHAAAJQgBAIgCAGQgCAHgDAEQgFAFgFADQgGADgJABIAjAugAgfADIAiAAQAHAAAEgBQAFgCADgDQADgDACgFQABgFABgFQgBgGgBgFQgCgFgDgDIgIgFQgEgCgHAAIgiAAg");
	this.shape_22.setTransform(-88.4,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.8,-11.8,204.8,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAVIgHgCIACgKIAHADIAHABIAFgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAIgBgDIgCgBIgIgBQgGgCgCgCIgDgCIgBgFIACgGQABgDACgBQADgCADgBIAGgBIAIABQAEABAEACIgDAJIgGgDIgHgBIgDABQgBAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIABACIADABIAHACIAEABIAEACIADADIABAFQAAADgCADQgBADgDACQgDABgEABIgGAAIgJAAg");
	this.shape.setTransform(24.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAfQgEgCgDgDIgDgHIgBgIIABgJQABgDACgCIAHgFQAEgCAEAAQAEAAADACQADACADADIAAAAIAAgGIAAgWIAMAAIAAA+IgMAAIAAgGIAAAAQgDAEgDACQgDABgEAAQgEAAgEgBgAgDAAIgEACIgCAEIgBAFIABAFIACADQAAABABAAQAAABABAAQAAAAABAAQAAABABAAIADABIAFgBIAEgDIABgDIABgFIgBgFIgBgEIgEgCIgFAAIgDAAg");
	this.shape_1.setTransform(19.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAVIAAgoIALAAIAAAHQACgEACgCIADgBIAEgBIAFABIAAAKIgHAAIgEAAIgDACIgBAFIgBADIAAAUg");
	this.shape_2.setTransform(15.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAVQgFgCgDgCIgDgDIgCgEIgBgFIAAgEQAAgFABgEIAEgHIAHgEQAEgBAEgBQAEABAEABIAGAEIAEAHQABAEAAAEIAAAEIgcAAIABADIADADIAEACIAEAAIAHAAIAHgCIAAAKIgHABIgHAAIgJAAgAAJgDIgBgEIgCgDIgCgCIgEAAIgCAAIgDACIgCADIgBAEIARAAIAAAAg");
	this.shape_3.setTransform(11.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAfIgegrIAAArIgMAAIAAg9IANAAIAeArIAAgrIAMAAIAAA9g");
	this.shape_4.setTransform(5.6,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAfIgNgWIgJAAIAAAWIgMAAIAAg9IAcAAQAEAAADACQAEABADADQACACACAEQABAEAAAEIgBAHIgDAFIgEAEIgHACIARAXgAgMAAIANAAIAFgBIACgCIACgDIABgEIgBgEIgCgDIgCgCIgFgBIgNAAg");
	this.shape_5.setTransform(-2.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEAfIgZg9IANAAIAQAuIARguIANAAIgZA9g");
	this.shape_6.setTransform(-8.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,51.9,14.2);


(lib.text2_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(75,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(69.5,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAqIgOgEIADgOQAGADAHACQAHACAHAAQAJAAAFgDQADgBABgDQACgDAAgDQAAgDgCgDQgCgCgEgCIgPgEQgNgDgEgDQgEgCgCgEQgCgEAAgFQAAgHADgEQACgFAEgDQAFgDAFgBQAGgCAFAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAEACADIAFADIAQAFIAJACIAIADQAEACACAEQACAFAAAFQAAAHgDAGQgDAEgFAEQgFACgHACIgMABIgQgBg");
	this.shape_2.setTransform(63.5,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_3.setTransform(55,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSApQgFgBgEgDQgEgEgDgFQgCgFAAgHQAAgGACgFQACgFAFgCQAEgDAGgBQAGgCAHAAIAbACIAAgFQAAgEgCgEIgEgGQgDgCgEgBIgJgBQgGAAgJACQgJABgGADIAAgNQAGgCAJgCQAKgCAGAAQAJAAAGADQAHACAEAEQAFAEACAFQACAGAAAIIAAAzIgOAAIAAgPQgCAEgEAEQgEADgEACIgJADIgHABQgGAAgFgCgAgQAFQgDACgBADQgCACAAAEQAAAEACAEQABADACABQAFAEAJAAQAEAAAEgBIAJgFQAEgEACgFQADgGABgHIgYgCQgMABgEACg");
	this.shape_4.setTransform(45.4,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSA9QgIgDgEgFQgGgGgDgIQgDgIAAgKQAAgJADgIQADgHAGgGQAEgGAIgDQAHgDAIAAQAFAAAEACQAFABAEACQAFADAJAJIAAAAIAAgOIAAgtIAOAAIAAB9IgOAAIAAgPIAAAAIgHAIIgIAFIgIADIgJABQgIAAgHgDgAgLgGQgFACgEAEQgDADgDAGQgCAGAAAGQAAAHACAGQADAGADAEQAEAEAFACQAFACAGAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgDgGQgCgFgDgEQgEgDgGgDQgFgCgGAAQgGAAgFACg");
	this.shape_5.setTransform(31.4,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgCQgEgBgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgEAEgCIAJgDQADgCAGAAQAHAAAGADQAGACADAFQAEAEABAGQACAGAAAHIAAAyg");
	this.shape_6.setTransform(21.6,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLApQgJgDgGgFQgFgFgEgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAIgCQAHgDAHAAQAJAAAGADQAIADAEAFQAFAFADAIQADAIAAAKIAAAFIg/AAQABAHADAFQABAEAEAEQAFADAFABQAFABAGABIAOgCQAJgBAFgDIABANQgFACgKACIgOABQgJAAgIgCgAAZgEQAAgHgCgEQgCgGgDgCQgDgEgFgBQgEgCgFAAQgEAAgFABQgEACgDADQgEADgCAFQgCAFgBAHIAxAAIAAAAg");
	this.shape_7.setTransform(12.3,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASA/IglgqIgDAAIAAAqIgOAAIAAh9IAOAAIAABNIADAAIAiggIATAAIgnAjIAqAtg");
	this.shape_8.setTransform(4,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIApQgIgDgGgFQgGgGgEgIQgCgFgBgOQAAgGADgMQAEgIAGgFQAGgFAIgDQAIgDAJAAIAOACQAHABAGACIgBAOQgGgDgIgCIgMgBQgHAAgEACQgGACgEAEQgEADgCAGQgCAFAAAHQAAAHACAHQACAFAEAEQAEADAGADQAEACAHAAIAMgCQAIgCAGgDIABAOQgGADgHABIgOABQgJAAgIgCg");
	this.shape_9.setTransform(-4.9,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAnQgGgCgDgFQgEgEgBgGQgCgGAAgHIAAgyIAOAAIAAAwIABAJQABAEADADQACADADACQAEABAFAAQAFAAAFgCQAEgCAEgEQADgEACgGQACgGAAgHIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgHAKgEADIgJAEIgJABQgHAAgGgDg");
	this.shape_10.setTransform(-13.9,3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAqIAAhQIANAAIAAAPIAAAAQAFgHAEgFIAHgEQAFgCAEAAIAHABIAAAOIgJgBQgFAAgFACQgEADgCADQgDAEgCAGQgCAGAAAFIAAAog");
	this.shape_11.setTransform(-21.2,3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSA9QgIgDgFgFQgFgGgDgIQgDgIAAgKQAAgJADgIQADgHAFgGQAFgGAIgDQAHgDAIAAQAFAAAEACQAFABAEACQAFADAJAJIAAAAIAAgOIAAgtIAOAAIAAB9IgOAAIAAgPIAAAAIgHAIIgIAFIgIADIgJABQgIAAgHgDgAgLgGQgEACgFAEQgDADgCAGQgCAGgBAGQABAHACAGQACAGADAEQAFAEAEACQAGACAFAAQAGAAAGgDQAFgCAEgEQAEgEACgGQACgFAAgHQAAgGgCgGQgDgFgDgEQgEgDgGgDQgFgCgGAAQgFAAgGACg");
	this.shape_12.setTransform(-30,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAXAqIAAgwIgBgJIgDgHQgDgDgDgCQgEgBgFAAQgEAAgFACQgFACgEAEQgEAEgCAFQgCAGAAAHIAAAoIgOAAIAAhQIANAAIAAAPIABAAIAFgHQADgEAEgCIAJgDQADgCAGAAQAHAAAGADQAGACADAFQAEAEABAGQACAGAAAHIAAAyg");
	this.shape_13.setTransform(-39.8,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEgBgEQABgEACgDQACgDAEAAQAEAAADADQACADAAAEQAAAEgCAEQgDACgEAAQgEAAgCgCg");
	this.shape_14.setTransform(-46.5,1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAHgCQAIgDAIAAQAIAAAGADQAHADAGAFQAEAFADAIQADAIAAAKIAAAFIg+AAQAAAHACAFQADAEAEAEQADADAGABQAFABAGABIAPgCQAHgBAGgDIACANQgGACgJACIgPABQgJAAgJgCgAAYgEQAAgHgCgEQgBgGgDgCQgDgEgEgBQgFgCgFAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAHIAvAAIAAAAg");
	this.shape_15.setTransform(-53,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMApQgIgDgFgFQgHgFgDgIQgCgGgBgOQAAgGADgMQADgIAGgFQAFgGAIgCQAHgDAIAAQAIAAAGADQAHADAGAFQAFAFACAIQADAIAAAKIAAAFIg+AAQAAAHACAFQACAEAFAEQAEADAFABQAFABAGABIAPgCQAHgBAGgDIABANQgGACgIACIgPABQgJAAgJgCgAAYgEQAAgHgCgEQgBgGgDgCQgDgEgEgBQgEgCgGAAQgEAAgEABQgFACgDADQgEADgCAFQgCAFAAAHIAvAAIAAAAg");
	this.shape_16.setTransform(-62.1,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA/IgIgDIgIgFIgGgIIgBAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAIAGgHIAHgFQAEgCAEgBIAJgCQAJAAAHADQAIADAFAGQAFAGADAHQADAIAAAJQAAAKgDAIQgDAIgFAGQgFAFgIADQgHADgJAAIgIgBgAgKgGQgGADgEADQgEAEgCAFQgCAGAAAGQAAAHACAFQACAGAEAEQAEAEAFACQAGADAFAAQAGAAAGgCQAFgCADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgGgEgDQgDgEgFgCQgGgCgGAAQgFAAgFACg");
	this.shape_17.setTransform(-71.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-10.7,157.2,24.4);


(lib.robo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJYBUQgYAAgMgNQgLgNAAgXIAAhFQAAgXALgNQAMgNAYAAIBwAAQAXAAAMANQAMANAAAXIAABFQAAAXgMANQgMANgXAAgAJMgzQgEAFAAAMIAABFQAAAMAEAFQADAEAJAAIBwAAQAIAAAEgEQAEgFAAgMIAAhFQAAgMgEgFQgEgFgIABIhwAAQgJgBgDAFgAB9BUQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAgBAAAAIAAg1IAfAAIAAAcIB4AAQALAAADgDQAFgEAAgKIAAgMQAAgKgFgFQgDgDgLAAIiXAAIAAhYQAAgBAAgBQABgBAAAAQAAgBABAAQAAAAABAAICRAAQAXAAAKALQALALAAAaQAAARgHAOQAQAKAAAVIAAAMQAAAXgMALQgNALgbAAgACZgNIB1AAQAHAAADgDQADgFAAgOQAAgOgDgDQgDgDgHAAIh1AAgAkTBUQgXAAgMgNQgMgNAAgXIAAhFQAAgXAMgNQAMgNAXAAIBwAAQAXAAAMANQALANAAAXIAABFQAAAXgLANQgMANgXAAgAkfgzQgEAFAAAMIAABFQAAAMAEAFQADAEAJAAIBwAAQAIAAAEgEQADgFAAgMIAAhFQAAgMgDgFQgEgFgIABIhwAAQgJgBgDAFgApHBUQgEAAgCgEIgZg0IhxAAIAAA0QAAAEgDAAIgYAAQgEAAAAgEIAAhQICVAAQAJAAAEgDQAEgEAAgLIAAgSQAAgMgEgEQgEgDgJAAIh2AAIAAAlIgfAAIAAg9QAAgBAAgBQABgBAAAAQABgBAAAAQABAAABAAICRAAQAYAAAMANQAMAMAAAWIAAASQAAAegWAKIAaA4QABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape.setTransform(75.9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.robo, new cjs.Rectangle(0,0,151.8,16.8), null);


(lib.recall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIgEgCIADACIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFWliIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABIgFAAIAAgBIgFgBIAAACIACgBIAAADIABABIACgCIAAgBgAFPlkIAAACIABgDgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAgBIABABIgBAAIAAABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWEoIAAhtIkIAAIAAhzIEJlvICEAAIAAFvIBXAAIgDBzIhUAAIAABtgAhkBIIB6AAIAAiqIgCAAg");
	this.shape.setTransform(600.5,36.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWEoIAAhtIkIAAIAAhzIEJlvICEAAIAAFvIBXAAIgDBzIhUAAIAABtgAhlBIIB7AAIAAiqIgCAAg");
	this.shape_1.setTransform(652.3,36.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFCWQgWgHgSgOQgTgNgNgUQgIgOgKghIghAAIAEgiIAZAAIAAgPIAAgOIgdAAIAEghIAdAAQAEgSAPgeQAMgTATgOQARgOAYgGQAWgHAbAAQAVAAAUAEQAVAFAWAJIgDAzQgVgIgUgFQgVgFgTAAQgPAAgNAEQgOAEgJAGQgLAIgHAKQgJALgEAOICNAAIgHAhIiMAAIgBAOIABAPICGAAIgIAiIh4AAQAFAOAIAKQAIALAKAHQAJAHAOADQANAEAPAAQATAAAVgFQAUgFAVgHIADAyQgWAKgVAEQgUAEgVAAQgcAAgWgGg");
	this.shape_2.setTransform(738.3,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiEEuQAigcA8hCQApgyAjg5QgjAJgpAAQgoAAgkgPQgjgOgagaQgbgbgPghQgOglAAgpQAAgiARg6QAMgbAmgrQAfgdAqgPQAdgKBBgGQAjAAA8ASQAqAQAeAeQAfAdAPAnQARAngBAsQAAAsgQA2QgQA0geA3QgbA1gmAyQglAygoAmgAglixQgSAHgMANQgNANgGARQgIASABATQgBATAIARQAGASANANQANANARAHQATAGAVAAQAVAAASgGQARgHANgNQANgNAHgSQAGgRAAgTQAAgTgGgSQgHgRgNgNQgNgNgRgHQgSgIgVAAQgWAAgSAIg");
	this.shape_3.setTransform(698.3,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(571,-14.9,185.5,103.8), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAFgDIAFgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape.setTransform(65.3,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgCgDIgEgDIgFAAIgFAAIgEAEIgEAGIgBAHIAAAcIgPAAIAAhZIAPAAIAAAgIAAAKIAFgFIAFgEQAFgDAFAAQAGAAAEACQAEACACADQADADABAEIABAKIAAAjg");
	this.shape_1.setTransform(59.2,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_2.setTransform(52.4,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAsIAAg8IgbAxIgHAAIgbgxIgBAAIAAA8IgQAAIAAhXIATAAIAcA2IAeg2IASAAIAABXg");
	this.shape_3.setTransform(43.3,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAdQgHgBgEgEIgEgFIgDgEIgCgHIgBgIQAAgGADgGQACgFAEgEQADgFAGgCQAFgBAGAAQAHAAAFABQAFACADAFQAEAEACAFQACAGAAAGIAAAFIgoAAIABAFIAEAFIAGABIAGABIAKgBIAJgCIABANIgKADIgLABQgGAAgGgCgAANgEIgBgHIgDgDIgEgDIgFgBIgEABIgEADIgCAEIgCAGIAZAAIAAAAg");
	this.shape_4.setTransform(31,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIABAKQADgGADgCIAEgDIAGgBIAHABIgBAQQgEgCgEAAQgEAAgCACIgFADIgCAFIgBAGIAAAcg");
	this.shape_5.setTransform(25.6,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAtIAAghQAAgGgDgDIgDgDIgFAAIgFAAIgFAEIgCAGIgBAHIAAAcIgQAAIAAhZIAQAAIAAAgIAAAKIAEgFIAFgEQAFgDAFAAQAGAAADACQAEACADADQACADABAEIABAKIAAAjg");
	this.shape_6.setTransform(19.4,9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPAeQgDgCgDgCIgEgGQgCgEAAgEQAAgFACgDQABgEAEgBQADgCAEgBIAKgBIAPABIAAgDQAAgFgDgCQgDgDgGAAIgLABQgHACgEACIAAgOIALgCIANgBQAGAAAGABQAEACAEAEQADADABAEQACAEAAAFIAAAjIgPAAIgBgIIgEAEIgFADQgEADgGAAIgIgBgAgHAGIgDACIgBAEQAAAEADACQACACAFABIAEgBIAEgDIAEgFQACgDAAgEIgMgBQgFAAgDACg");
	this.shape_7.setTransform(12.4,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAsIAAgsIgLAAIAAgMIALAAIAAgIIABgKIADgHQACgDADgCQAEgBAGAAIALABIAAANIgHgBQgEAAgCADQgCACAAAGIAAAHIANAAIAAAMIgNAAIAAAsg");
	this.shape_8.setTransform(7.1,9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQAEgGADgCIAEgDIAGgBIAHABIgBAQQgDgCgFAAQgEAAgDACIgEADIgCAFIgBAGIAAAcg");
	this.shape_9.setTransform(2.7,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAsIAAhXIA8AAIAAAPIgsAAIAAAVIAoAAIAAAOIgoAAIAAAWIAtAAIAAAPg");
	this.shape_10.setTransform(-3.7,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-9.8,0,79.3,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(121.7,-127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(62.5,-162.7,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC2IAAiTQAAgQgDgMQgEgMgGgKQgIgJgLgFQgLgFgRAAQgRAAgRAGQgRAHgMAMQgNAMgHASQgIAUAAAYIAAB1IgaAAIAAlrIAaAAIAACBIgBAyIACAAIANgVQAJgKALgHQAMgJAOgEQAPgFARABQAWAAARAGQAPAHALANQAKANAFARQAEAOABAVIAACUg");
	this.shape.setTransform(185.9,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXB0QgYgHgQgPQgSgPgIgXQgGgQgDgoQAAgVAJgiQAIgXASgPQAQgPAYgIQAWgGAbAAQARAAATADQAVAFARAIIgCAZQgRgJgWgEQgTgFgPAAQgWAAgRAGQgSAGgNAMQgNAMgIATQgHATAAAZQAAAZAHAUQAIASANANQANAMASAGQARAGAWAAQAPAAATgFQAWgFARgJIACAZQgQAJgWAEQgTAEgRAAQgbABgWgIg");
	this.shape_1.setTransform(159.5,172.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag2BxQgQgHgKgNQgKgNgFgQQgEgRAAgSIAAiVIAZAAIAACQQAAAQAEAMQADAOAHAKQAHAKAMAFQAMAGARAAQARAAAQgHQAQgHAMgOQAMgOAHgTQAHgWAAgZIAAhtIAZAAIAADqIgYAAIAAgyIgBAAQgQAcgPAKQgMAJgOAEQgPAFgSABQgXgBgQgHg");
	this.shape_2.setTransform(133.9,172.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyByQgXgJgQgSQgPgQgJgXQgIgXAAgZQAAgYAIgXQAJgWAPgRQAQgSAXgJQAXgKAbABQAcgBAXAKQAWAJARASQAPARAIAWQAJAXAAAYQAAAZgJAXQgIAXgPAQQgRASgWAJQgXAKgcgBQgbABgXgKgAgqhbQgSAHgMAPQgMAOgGASQgFARAAAUQAAAUAFASQAGASAMAOQAMAOASAHQATAJAXAAQAYAAATgJQASgHAMgOQALgOAGgSQAGgSAAgUQAAgUgGgRQgGgSgLgOQgMgPgSgHQgTgIgYAAQgXAAgTAIg");
	this.shape_3.setTransform(104.1,172.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIAAAYIhFAAIAAB7QAAApAEAMQAEAIAGAEQAGAFALAAQAVAAASgGIAAAXQgRAGgaAAQgRAAgLgHg");
	this.shape_4.setTransform(81.7,168.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AABCVQgKgGgFgOQgFgMgCgVIgBgwIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIgBAYIhEAAIAAB7QAAApAEAMQADAIAHAEQAGAFALAAQAVAAARgGIAAAXQgPAGgaAAQgTAAgKgHg");
	this.shape_5.setTransform(27,168.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVC1IAAjTIgwAAIAAgXIAwAAIAAgzQAAgVAEgQQADgOAIgJQAGgJALgDQAKgEANAAQAUAAAQAEIAAAZQgPgFgUAAQgSAAgHAMQgHALAAAdIAAAzIA2AAIgBAXIg1AAIAADTg");
	this.shape_6.setTransform(11.6,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCsIAAjqIAZAAIAADqgAgPiIQgEgFAAgKQgBgIAFgGQAGgGAJgBQAKABAFAGQAFAGAAAIQAAAKgFAFQgFAHgKAAQgJgBgGgGg");
	this.shape_7.setTransform(-2.8,166.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7B4IAAjqIAaAAIAAAyIABAAQAMgXAQgOQAJgJALgEQANgGANABIASACIgBAbQgKgDgLAAQgQAAgNAHQgMAIgKAOQgJANgGARQgFASAAATIAAB1g");
	this.shape_8.setTransform(-16.8,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhFAAIAAgXIBFAAIAAhBIAWAAIAABBIBKAAIAAAXIhKAAIAABNg");
	this.shape_9.setTransform(55.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-28.8,134.9,231.2,62.8), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape.setTransform(191.5,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_1.setTransform(188.2,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAGgBQADAAADABQADABADADQACACABAEQACAEAAAEIAAACIgeAAIABAGIAEAFIAEACIAFABIAHgBIAHgCIAAAFIgGACIgHAAIgIgBgAANgBIgBgGIgCgEIgFgDIgEgBIgFABIgDACIgEAFQgBACAAAEIAZAAIAAAAg");
	this.shape_2.setTransform(183.7,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAJIACABIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_3.setTransform(180.1,9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_4.setTransform(177.8,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAUIgFgDIgDgDIgBgHIABgFIADgDIAFgCIAFAAIAOABIAAgCIAAgFIgDgDIgDgCIgGAAIgGABIgGABIgBgFIAHgBIAHgBIAGABIAGADIADAEIABAHIAAAYIgFAAIAAgJIgDAEIgEADIgEACIgEAAIgEAAgAgJACIgCACIAAADIAAAFIACACIAEABIADABIAFgBIAEgCIAEgFIACgHIgOgBIgEAAIgEACg");
	this.shape_5.setTransform(174.5,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAeIAAgYIgBgFIgBgCIgDgCIgFgBIgEABIgFADIgDAEIgBAHIAAATIgFAAIAAg7IAFAAIAAAVIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAEIABAGIAAAYg");
	this.shape_6.setTransform(170.1,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAgBgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAJIACABIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_7.setTransform(166.4,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_8.setTransform(162.7,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgDgCgBgEIgBgJIABgIIAEgGQADgDADgBIAHgBQADAAAEABQADABACADQADACABAEQABAEAAAEIAAACIgeAAIABAGIAEAFIAEACIAFABIAHgBIAHgCIAAAFIgGACIgIAAIgHgBgAANgBIgBgGIgCgEIgFgDIgEgBIgFABIgDACIgDAFQgCACAAAEIAZAAIAAAAg");
	this.shape_9.setTransform(158.3,10.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAAAZQAAgBAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBIgBgFIAAgIIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAJIACABIADABIAGgBIAAAFIgHABIgFgBg");
	this.shape_10.setTransform(152.6,9.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMAeIAAgYIgBgFIgBgCIgDgCIgFgBIgEABIgFADIgDAEIgBAHIAAATIgFAAIAAg7IAFAAIAAAVIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAEIABAGIAAAYg");
	this.shape_11.setTransform(148.9,9.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDATIgHgEIgEgGIgBgJIABgIIAEgGQADgDAEgBQADgBAEAAIAGABIAGACIAAAEIgGgCIgGgBIgFABIgFADIgDAFIgBAGIABAHIADAFIAFADIAFABIAGgBIAGgCIAAAEIgGADIgGAAIgHgBg");
	this.shape_12.setTransform(144.6,10.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_13.setTransform(141.6,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_14.setTransform(138.4,10.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAdIgGgEIgEgGQgCgEAAgFQAAgFACgDQABgDADgDIAGgEQADgBAEAAIAEABIAEABIAHAGIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHIgEAEIgDACIgEACIgEAAQgEAAgDgBgAgFgEIgFADIgDAEIgBAHIABAHIADAFIAFADIAFABIAGgBIAFgEIADgFIABgGIgBgGQgBgDgDgBIgEgEIgGgBIgFABg");
	this.shape_15.setTransform(131.4,9.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_16.setTransform(126.7,10.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_17.setTransform(123.5,9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgIATIgGgCIACgEIAFACIAHABIADgBIAEgBIACgCIABgDIgBgEIgDgCIgHgCIgIgCIgCgDIgBgEIABgFIADgEIAFgBIADgBIAHABIAGACIgCAEIgEgCIgHgBQgDAAgCACIgCACIgBADIABADIADACIAHACIAFABIADABIADADIABAEIgBAGIgEAEIgFACIgFAAIgIgBg");
	this.shape_18.setTransform(120.7,10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgFATQgEgBgCgDQgDgCgBgEIgCgJIACgIIAEgGQACgDAEgBIAFgBQAFAAACABQADABADADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgEgDIgFgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_19.setTransform(114.7,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAeIAAg7IADAAIAAA7g");
	this.shape_20.setTransform(111.5,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAFgBQAFAAACABQADABADADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_21.setTransform(108.4,10.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_22.setTransform(105.2,9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAdIAAg4IAFAAIAAAHIAAAAIADgDIAEgDIAEgCIAEAAQAEAAAEABIAFAEQADADABAEQACADAAAFQAAAFgCADIgEAGQgCADgDABQgEABgEAAIgEAAIgEgCIgEgDIgDgDIAAAAIAAAHIAAATgAgFgWIgFADIgDAFIgBAGQAAAEABACIADAEQACADADABIAFABIAGgBIAFgDIADgEIABgHIgBgHIgDgFIgFgDIgGgBQgCAAgDACg");
	this.shape_23.setTransform(101.8,11.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgJAdQgFgBgFgCIACgGIAJAFIAIABIAFgBIAEgDIAEgDIACgFQgBgDgBgCIgEgEIgFgCIgFgCIgGgBIgFgDQgDgBgBgDQgBgDgBgEQABgDABgEQACgDADgBIAFgDIAGgBIAJABIAJAEIgBAFIgJgEIgIgCIgDABIgFACIgDAEIgBAEQAAADABACIADADQADACAIADIAGABIAFACIAEAFQABACAAAEQAAAEgCAEQgBADgDACQgDACgDABIgHABIgJgBg");
	this.shape_24.setTransform(96.9,9.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFATQgEgBgDgDQgCgCgBgEIgCgJIACgIIADgGQADgDAEgBIAFgBQAFAAACABQADABADADQADACAAAEQACAEAAAEIAAACIgeAAIABAGIADAFIAFACIAFABIAHgBIAHgCIAAAFIgHACIgGAAIgIgBgAANgBIgBgGIgDgEIgDgDIgGgBIgDABIgFACIgDAFQgBACAAAEIAZAAIAAAAg");
	this.shape_25.setTransform(90.4,10.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgIAdIgHgBIAAgFIAHACIAIAAIAFAAIAFgDQADgCABgDIABgHIAAgIIAAAAQgEAFgDABIgEACIgEABQgEAAgDgCIgGgEIgEgFQgCgEAAgEQAAgFACgEQABgEADgCIAGgEQADgCAEAAIAEABIAEABIAEADIADAEIAAAAIAAgIIAFAAIAAAlIgCAKIgCADIgCADQgDADgEABIgHABIgIgBgAgFgXQgDABgBACIgEAFIgBAHIABAGIAEAEQABACADABIAFABIAGgBIAFgDIADgEQABgDAAgDIgBgHIgDgFIgFgDQgDgBgDAAIgFABg");
	this.shape_26.setTransform(85.6,11.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_27.setTransform(82.2,9.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAMAUIAAgXIgBgFIgBgDIgDgCIgFgBIgEABIgFADIgDAFIgBAGIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIACgDIAEgDIAEgCIAEgBQAEAAACACIAFADIACAFIABAGIAAAXg");
	this.shape_28.setTransform(78.9,10.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_29.setTransform(75.7,9.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgRAdIAAg5IAjAAIAAAEIgfAAIAAAXIAdAAIAAADIgdAAIAAAXIAfAAIAAAEg");
	this.shape_30.setTransform(72.4,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(67.7,2.5,126.9,13.6), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgDQABAAAAgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape.setTransform(493.1,-132.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAgIgDgEIgBgHIgBgKIAAgWIgKAAIAAgGIAKAAIAAgPIAGAAIAAAPIAOAAIAAAGIgOAAIAAAYQAAAJABACQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIADABIAIgBIABAFIgKABIgGgBg");
	this.shape_1.setTransform(490,-135.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAlIAAgyIAFAAIAAAygAgDgcIgBgDIABgDQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABABIABADIgBADQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_2.setTransform(487,-135.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHAZQgFgCgDgDQgEgEgCgFIgBgLQAAgEABgHQACgFAEgDQADgEAFgBQAEgCAEABQAFgBAEACQAEABADAEIAFAHQACAGgBAGIAAACIgnAAQAAAFACAEIADAGQADACAEAAIAHABIAJgBIAJgCIAAAFQgDACgFACIgKABQgFAAgFgCgAARgCIgBgHIgDgHIgGgCQgCgCgEAAIgFABIgHADIgDAGQgCADAAAFIAhAAIAAAAg");
	this.shape_3.setTransform(482.9,-134.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcAmIAAgFIAvhAIguAAIAAgGIA3AAIAAAFIgwBAIAxAAIgBAGg");
	this.shape_4.setTransform(476.5,-136);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAZQgFgCgDgDQgEgEgCgFIgBgLQAAgEABgHQACgFAEgDQADgEAFgBQAEgCAEABQAFgBAEACQAEABADAEIAFAHQACAGgBAGIAAACIgnAAQAAAFACAEIADAGQADACAEAAIAHABIAJgBIAJgCIAAAFQgDACgFACIgKABQgFAAgFgCgAARgCIgBgHIgDgHIgGgCQgDgCgDAAIgFABIgHADIgDAGQgCADAAAFIAhAAIAAAAg");
	this.shape_5.setTransform(467.6,-134.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAgIgDgEIgBgHIgBgKIAAgWIgKAAIAAgGIAKAAIAAgPIAGAAIAAAPIAOAAIAAAGIgOAAIAAAYQAAAJABACQAAABAAAAQAAABAAAAQABAAAAABQAAAAABAAIADABIAIgBIABAFIgKABIgGgBg");
	this.shape_6.setTransform(462.8,-135.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAZIAAgDIAdgoIgcAAIAAgGIAlAAIAAADIgdAoIAeAAIAAAGg");
	this.shape_7.setTransform(458.7,-134.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAaIAAgfIAAgFIgCgFIgEgDIgFgBQgEAAgDABQgDABgDADQgDADgBAEQgBAEAAAEIAAAZIgHAAIAAgyIAGAAIAAALIABAAIADgFIADgDQADgCADgBIAGgBQAFAAAEACIAFAEQACACABAEIABAIIAAAfg");
	this.shape_8.setTransform(453.4,-134.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAZQgFgCgDgDQgEgEgCgFIgCgLQAAgEACgHQACgFAEgDQADgEAFgBQAEgCAEABQAFgBAEACQAEABADAEIAFAHQABAGAAAGIAAACIgnAAQAAAFABAEIAEAGQADACAEAAIAHABIAJgBIAJgCIAAAFQgDACgGACIgJABQgFAAgFgCgAARgCIgBgHIgEgHIgEgCQgEgCgDAAIgGABIgGADIgEAGQgBADAAAFIAhAAIAAAAg");
	this.shape_9.setTransform(447.5,-134.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMAaIAAgyIAGAAIAAALIAAAAQADgFADgDIAEgDIAFgBIAEABIAAAGIgFgBQgDAAgDACIgEAEIgDAHIgBAHIAAAZg");
	this.shape_10.setTransform(443,-134.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgLAmIgJgBIAAgHIAJACIAKABIAIgBQAEgBACgCQADgDACgEQABgEABgGIAAgKIAAAAQgFAGgEADIgGACIgFABQgFAAgFgCIgHgFQgEgDgCgEQgCgGAAgGQAAgGACgFQACgFAEgDQADgEAEgBQAFgCAFAAIAFAAIAGADIAEADIAFAFIAAAAIAAgKIAGAAIAAAxIgCAMIgDAFIgDAEQgDADgFACQgGABgFAAIgKgBgAgGgfIgHAEIgEAGQgCAFAAAEQAAAFACAEQABADADACIAHAEQACACAEAAQAEAAADgCQAEgBADgDQADgCABgEQACgDAAgFQAAgEgBgEIgFgGIgGgFQgEgBgEgBQgEABgCABg");
	this.shape_11.setTransform(437.5,-133.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAZQgFgCgDgDQgEgEgCgFIgBgLQAAgEABgHQACgFAEgDQADgEAEgBQAFgCAEABQAFgBAEACQAEABADAEIAFAHQABAGAAAGIAAACIgnAAQAAAFACAEIADAGQADACAEAAIAHABIAJgBIAJgCIAAAFQgDACgFACIgKABQgFAAgFgCgAARgCIgBgHIgDgHIgGgCQgCgCgFAAIgEABIgHADIgDAGQgCADAAAFIAhAAIAAAAg");
	this.shape_12.setTransform(431.5,-134.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAnIgFgCIgFgDIgEgGIgBAAIAAAKIgGAAIAAhNIAHAAIAAAcIgBAKIABAAIADgFIAFgDIAGgDIAFAAQAGAAAEACQAEABAEAEQADADACAEQACAFAAAGQAAAGgCAGQgCAFgDADIgIAFQgEACgGAAIgFgBgAgGgFQgEABgDAEQgDABgBAEQgCADAAAFIACAIIAEAHQADADADABQAEACAEAAQAEAAADgCIAGgEQADgCABgEQACgEAAgFQAAgEgCgFIgEgFIgGgEQgDgBgEgBQgEABgDABg");
	this.shape_13.setTransform(425.4,-136);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAaIAAgyIAGAAIAAALIAAAAQADgFADgDIAEgDIAFgBIAEABIAAAGIgFgBQgDAAgDACIgEAEIgDAHIgBAHIAAAZg");
	this.shape_14.setTransform(417.7,-134.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAjQgEgCgCgCIgDgHIgBgHIAAgfIAHAAIAAAeIAAAFIACAFIAEAEIAGABQADAAADgCIAGgEIAEgHIABgKIAAgWIAHAAIAAAxIgGAAIAAgKIgBAAQgDAGgDACIgGADIgGABQgFAAgDgCgAAHgbQgBAAAAgBQAAAAgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAgNgbQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_15.setTransform(412.5,-135.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgEAnIAAgsIgKAAIAAgGIAKAAIAAgKIABgIIACgFIADgDIAFgBIAIABIAAAGIgHgBQgEAAgBADQgCACAAAGIAAAKIAMAAIAAAGIgMAAIAAAsg");
	this.shape_16.setTransform(408.1,-136.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgMAaIAAgyIAGAAIAAALIAAAAQADgFADgDIAEgDIAFgBIAEABIAAAGIgFgBQgDAAgDACIgEAEIgDAHIgBAHIAAAZg");
	this.shape_17.setTransform(402,-134.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLAYQgEgCgCgCIgDgGIgBgIIAAgfIAHAAIAAAeIAAAGIACAEIAEAEIAGABQADAAADgCIAGgEIAEgHIABgJIAAgXIAHAAIAAAxIgGAAIAAgKIgBAAQgDAGgDACIgGADIgGABQgFAAgDgCg");
	this.shape_18.setTransform(396.8,-134.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAYAmIgwhBIAAAAIAABBIgHAAIAAhLIAIAAIAwBBIAAhBIAHAAIAABLg");
	this.shape_19.setTransform(389.6,-136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(382.4,-145.3,115.4,18.6), null);


(lib.hardware_touch_RT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_RT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_RT_1, new cjs.Rectangle(0,0,65,60), null);


(lib.hardware_touch_LT_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_touch_LT();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_touch_LT_1, new cjs.Rectangle(0,0,46,47), null);


(lib.hardware_rift_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hardware_rift();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hardware_rift_1, new cjs.Rectangle(0,0,138,84), null);


(lib.game_wilsons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_7_wilson();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_wilsons, new cjs.Rectangle(0,0,131,131), null);


(lib.game_unspoken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_1_unspoken();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_unspoken, new cjs.Rectangle(0,0,131,131), null);


(lib.game_superhot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_4_superhot();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_superhot, new cjs.Rectangle(0,0,131,131), null);


(lib.game_startrek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_3_startrek();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_startrek, new cjs.Rectangle(0,0,131,131), null);


(lib.game_rickmorty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_6_rickmorty();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_rickmorty, new cjs.Rectangle(0,0,131,131), null);


(lib.game_loneecho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_2_loneecho();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_loneecho, new cjs.Rectangle(0,0,131,131), null);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap42();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-199.5,0,1028,90), null);


(lib.legal = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{ON:1,OFF:8});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(8));

	// shop now
	this.instance = new lib.msg_shopnow();
	this.instance.parent = this;
	this.instance.setTransform(128.5,-5.3,1,1,0,0,0,29.9,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	// button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape.setTransform(127.9,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242424").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_1.setTransform(127.9,-4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#494949").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_2.setTransform(127.9,-4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6D6D").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_3.setTransform(127.9,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#929292").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_4.setTransform(127.9,-4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6B6B6").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_5.setTransform(127.9,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DBDBDB").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_6.setTransform(127.9,-4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AGmCgIAAAAItaAAIgCAAQhEAAgwgvQgwgvgBhCQABhBAwgvQAxgvBFAAIAOAAIMkAAIA4AAQBEAAAxAvQAwAvAABBQAABCgwAvQgxAvhEAAIgQAAg");
	this.shape_7.setTransform(127.9,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(67.5,-20.7,120.7,32.1);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_stadium();
	this.instance.parent = this;
	this.instance.setTransform(-506.4,655,1.809,1.809,0,0,0,81.2,66);

	this.instance_1 = new lib.logo_rifttouch();
	this.instance_1.parent = this;
	this.instance_1.setTransform(517.6,288.3,2.9,2.9,0,0,0,86.8,166.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AapIYQhjgdhQhDIBZh4QAyAnA4AWQAoAPAoAFQAmAFAmgFQAagDAZgMQATgIAOgQQAKgPADgSQABgTgKgRQgMgTgUgJQgZgQgagGIhBgQQgxgLgygOQgygSgpgiQgmgggOgwQgQg0AOg0QALgrAdgiQAlguA5gWQAqgRAsgHQA5gHA8AJQBmAQBWA9IhVByQg0ggg+gNQgogIgqADQgVACgTAIQgPAFgLALQgLAGgFAKQgHAJgBALQgDAWANAQQARARAWAJQATAHAWAHIAwAKIA3ANQAbAJAbAKQAxATAmAfQAoAhAVAzQAOAtgHAvQgHA5gkAuQgbAigmAYQgzAdg8AKQgtAHgugBQg6gCg4gQgAuhIpQg4gCgzgSQg1gSgrggQgsghghgtQgegtgRg1QgQgzgDg2QgCg3ALg2QALg1AaguQA0hkBngxQAxgYA1gGQA3gLA2AIQBvAKBYBGIhnCAQgzgig9gIQghgEgjAGQgZAEgZAMQg6AWgeA4QgNAbgHAeQgFAeACAeQABAeAKAeQAIAcASAZQAmAzA6AUQAeAIAeACQAeAAAdgGQA8gOAugqIB0B5QgnAngvAaQgwAZg2ALQgqAJgqAAIgXgBgA9zIMQhEgcgzg0Qg1g3gZhDQgahEAAhKQAAhKAahEQAchCAzg3QA0g0BEgZQBEgbBJAAQBKAABEAbQBCAbA1A2QA0A0AZBEQAbBEAABKQAABJgcBDQgZBFg0A2Qg0A0hFAbQhEAahJAAQhJAAhEgbgA8OgTQgTAEgTAJQgSAGgRAKQgQAKgNAOQgNANgLAPQgLATgHARQgHATgDAVQgFAUgBAWQAAAXAEAUQAEAUAIAUQAHASAKASQALAQAMANQAOAMARANQAQAJASAIQASAHAVAEQATAFAVgBQAVABAVgFQAUgEATgGIAjgSQAPgLAOgOQANgNALgQQAKgRAHgRQAIgVADgUQAFgUAAgXQAAgUgFgWQgDgWgIgRQgHgSgKgRQgLgRgNgNQgMgOgQgLQgRgKgRgGQgUgIgUgEQgUgEgWAAQgVgBgUAEgAPKIiQhKgGg8gnQg6gmgkhFQgQghgIghQgIgjgDgkIgDg8IgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAHAkARAfQAXAmAmASQAmASApgCQAsABAmgTQAlgSAYglQATgeAGgjQADgSACgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICoAAIAALBIiTAAIgEhFQgaAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAkIIiQhKgGg7gnQg7gmgkhFQgQghgIghQgIgjgCgkQgDgegBgeIgBhTIAAg9IAAhRIAAhSIAAg9ICoAAIAACoIAABnIABA9QAAAyAIAtQAGAkASAfQAXAmAnASQAlASAqgCQArABAngTQAkgSAYglQAUgeAFgjQAEgSABgUIABg6IAAgvIAAhMIAAhVIAAhMIAAgwICnAAIAALBIiSAAIgFhFQgZAZggATQghARghAJQgxAOgyAAQgVAAgVgDgAFeIWIAAw/ICpAAIAAQ/g");
	this.shape.setTransform(-74.2,289.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(-540.3,197.4,1393.1,182.2), null);


// stage content:
(lib.oculus_robo_728x90_DE = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(365,45.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:912.4,y:216.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(365,46,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-175.2,y:243.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(152));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(365,46.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-168,y:-155.2},32,cjs.Ease.get(-1)).to({_off:true},1).wait(149));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(365,46.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:897.6,y:6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(146));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(365.1,46,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:176.4},32,cjs.Ease.get(-1)).to({_off:true},1).wait(143));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(365,46,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:923.2,y:-251.6},32,cjs.Ease.get(-1)).to({_off:true},1).wait(140));

	// GAME_BG copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_17 = new cjs.Graphics().p("AagB2IClAAIAAClIilAAg");
	var mask_graphics_18 = new cjs.Graphics().p("AagB0ICnAAIAACnIinAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AaeBuICuAAIAACuIiuAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AacBmIC4AAIAAC4Ii4AAg");
	var mask_graphics_21 = new cjs.Graphics().p("AaaBbIDFAAIAADFIjFAAg");
	var mask_graphics_22 = new cjs.Graphics().p("AaXBNIDWAAIAADWIjWAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AaTA8IDqAAIAADqIjqAAg");
	var mask_graphics_24 = new cjs.Graphics().p("AaPAoIEBAAIAAEBIkBAAg");
	var mask_graphics_25 = new cjs.Graphics().p("AaJARIEdAAIAAEdIkdAAg");
	var mask_graphics_26 = new cjs.Graphics().p("AaEgIIE7AAIAAE6Ik7AAg");
	var mask_graphics_27 = new cjs.Graphics().p("AZ9glIFeAAIAAFdIleAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AZ2hEIGDAAIAAGCImDAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AZvhnIGrAAIAAGrImrAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AZmiMIHYAAIAAHXInYAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AZdi1IIIAAIAAIHIoIAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AZUjgII7AAIAAI6Io7AAg");
	var mask_graphics_33 = new cjs.Graphics().p("AZJkOIJyAAIAAJxIpyAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AY+k/IKsAAIAAKrIqsAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AYzlzILpAAIAALoIrpAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AYmmUIMrAAIAAMpIsrAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AYam3INvAAIAANvItvAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AYMnbIO3AAIAAO3Iu3AAg");
	var mask_graphics_39 = new cjs.Graphics().p("AX+oAIQCAAIAAQBIwCAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AXvooIRSAAIAARRIxSAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AXfpRISkAAIAASjIykAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AXPp8IT6AAIAAT5Iz6AAg");
	var mask_graphics_43 = new cjs.Graphics().p("AW+qpIVUAAIAAVTI1UAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AWtrXIWwAAIAAWvI2wAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AWbsHIYQAAIAAYPI4QAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AWIs5IZ0AAIAAZzI50AAg");
	var mask_graphics_47 = new cjs.Graphics().p("AV1tsIbaAAIAAbZI7aAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AVhuiIdFAAIAAdFI9FAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AVMvZIezAAIAAezI+zAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AU4wRMAglAAAMAAAAgjMgglAAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AUwwXMAgwAAAMAAAAgvMggwAAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AUowdMAg7AAAMAAAAg7Mgg7AAAg");
	var mask_graphics_53 = new cjs.Graphics().p("AUfwiMAhHAAAMAAAAhFMghHAAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AUXwoMAhRAAAMAAAAhRMghRAAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AUPwtMAhcAAAMAAAAhbMghcAAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AUGwzMAhoAAAMAAAAhnMghoAAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AT+w4MAhzAAAMAAAAhxMghzAAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AT2w+MAh9AAAMAAAAh9Mgh9AAAg");
	var mask_graphics_59 = new cjs.Graphics().p("ATtxDMAiJAAAMAAAAiHMgiJAAAg");
	var mask_graphics_60 = new cjs.Graphics().p("ATlxJMAiUAAAMAAAAiTMgiUAAAg");
	var mask_graphics_61 = new cjs.Graphics().p("ATdxOMAifAAAMAAAAidMgifAAAg");
	var mask_graphics_62 = new cjs.Graphics().p("ATUxUMAiqAAAMAAAAipMgiqAAAg");
	var mask_graphics_63 = new cjs.Graphics().p("ATMxaMAi1AAAMAAAAi1Mgi1AAAg");
	var mask_graphics_64 = new cjs.Graphics().p("ATExfMAjAAAAMAAAAi/MgjAAAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AS8xlMAjLAAAMAAAAjLMgjLAAAg");
	var mask_graphics_66 = new cjs.Graphics().p("ASzxqMAjWAAAMAAAAjVMgjWAAAg");
	var mask_graphics_67 = new cjs.Graphics().p("ASrxwMAjhAAAMAAAAjhMgjhAAAg");
	var mask_graphics_68 = new cjs.Graphics().p("ASjx1MAjsAAAMAAAAjrMgjsAAAg");
	var mask_graphics_69 = new cjs.Graphics().p("ASax7MAj4AAAMAAAAj3Mgj4AAAg");
	var mask_graphics_70 = new cjs.Graphics().p("ASSyAMAkDAAAMAAAAkBMgkDAAAg");
	var mask_graphics_71 = new cjs.Graphics().p("ASKyGMAkNAAAMAAAAkNMgkNAAAg");
	var mask_graphics_72 = new cjs.Graphics().p("ASByLMAkZAAAMAAAAkXMgkZAAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AR5yRMAkkAAAMAAAAkjMgkkAAAg");
	var mask_graphics_74 = new cjs.Graphics().p("ARxyXMAkvAAAMAAAAkvMgkvAAAg");
	var mask_graphics_75 = new cjs.Graphics().p("ARoycMAk6AAAMAAAAk5Mgk6AAAg");
	var mask_graphics_76 = new cjs.Graphics().p("ARgyiMAlFAAAMAAAAlFMglFAAAg");
	var mask_graphics_77 = new cjs.Graphics().p("ARYynMAlQAAAMAAAAlPMglQAAAg");
	var mask_graphics_78 = new cjs.Graphics().p("ARPytMAlcAAAMAAAAlbMglcAAAg");
	var mask_graphics_79 = new cjs.Graphics().p("ARHyyMAlmAAAMAAAAllMglmAAAg");
	var mask_graphics_80 = new cjs.Graphics().p("AQ/y4MAlxAAAMAAAAlxMglxAAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AQ2y9MAl9AAAMAAAAl7Mgl9AAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AQuzDMAmIAAAMAAAAmHMgmIAAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AQmzIMAmTAAAMAAAAmRMgmTAAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AQdzOMAmeAAAMAAAAmdMgmeAAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AQVzUMAmpAAAMAAAAmpMgmpAAAg");
	var mask_graphics_86 = new cjs.Graphics().p("AQNzZMAm0AAAMAAAAmzMgm0AAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AQEzfMAnAAAAMAAAAm/MgnAAAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AP8zkMAnKAAAMAAAAnJMgnKAAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AP0zqMAnVAAAMAAAAnVMgnVAAAg");
	var mask_graphics_90 = new cjs.Graphics().p("APrzvMAnhAAAMAAAAnfMgnhAAAg");
	var mask_graphics_91 = new cjs.Graphics().p("APjz1MAnsAAAMAAAAnrMgnsAAAg");
	var mask_graphics_92 = new cjs.Graphics().p("APbz6MAn2AAAMAAAAn1Mgn2AAAg");
	var mask_graphics_93 = new cjs.Graphics().p("APS0AMAoCAAAMAAAAoBMgoCAAAg");
	var mask_graphics_94 = new cjs.Graphics().p("APK0FMAoNAAAMAAAAoLMgoNAAAg");
	var mask_graphics_95 = new cjs.Graphics().p("APC0LMAoYAAAMAAAAoXMgoYAAAg");
	var mask_graphics_96 = new cjs.Graphics().p("AO50RMAokAAAMAAAAojMgokAAAg");
	var mask_graphics_97 = new cjs.Graphics().p("AOx0WMAouAAAMAAAAotMgouAAAg");
	var mask_graphics_98 = new cjs.Graphics().p("AOp0cMAo5AAAMAAAAo5Mgo5AAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AOh0hMApEAAAMAAAApDMgpEAAAg");
	var mask_graphics_100 = new cjs.Graphics().p("AOY0nMApQAAAMAAAApPMgpQAAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AOQ0sMApaAAAMAAAApZMgpaAAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AOI0yMAplAAAMAAAAplMgplAAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AN/03MApxAAAMAAAApvMgpxAAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AN309MAp8AAAMAAAAp7Mgp8AAAg");
	var mask_graphics_105 = new cjs.Graphics().p("ANv1CMAqGAAAMAAAAqFMgqGAAAg");
	var mask_graphics_106 = new cjs.Graphics().p("ANm1IMAqSAAAMAAAAqRMgqSAAAg");
	var mask_graphics_107 = new cjs.Graphics().p("ANe1OMAqdAAAMAAAAqdMgqdAAAg");
	var mask_graphics_108 = new cjs.Graphics().p("ANW1TMAqoAAAMAAAAqnMgqoAAAg");
	var mask_graphics_109 = new cjs.Graphics().p("ANN1ZMAqzAAAMAAAAqzMgqzAAAg");
	var mask_graphics_110 = new cjs.Graphics().p("ANF1eMAq+AAAMAAAAq9Mgq+AAAg");
	var mask_graphics_111 = new cjs.Graphics().p("AM91kMArJAAAMAAAArJMgrJAAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AM01pMArVAAAMAAAArTMgrVAAAg");
	var mask_graphics_113 = new cjs.Graphics().p("AMs1vMArgAAAMAAAArfMgrgAAAg");
	var mask_graphics_114 = new cjs.Graphics().p("AMk10MArqAAAMAAAArpMgrqAAAg");
	var mask_graphics_115 = new cjs.Graphics().p("AMb16MAr2AAAMAAAAr1Mgr2AAAg");
	var mask_graphics_116 = new cjs.Graphics().p("AMT1/MAsBAAAMAAAAr/MgsBAAAg");
	var mask_graphics_117 = new cjs.Graphics().p("AML2FMAsMAAAMAAAAsLMgsMAAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AMC2LMAsXAAAMAAAAsXMgsXAAAg");
	var mask_graphics_119 = new cjs.Graphics().p("AL62QMAsiAAAMAAAAshMgsiAAAg");
	var mask_graphics_120 = new cjs.Graphics().p("ALy2WMAstAAAMAAAAstMgstAAAg");
	var mask_graphics_121 = new cjs.Graphics().p("ALp2bMAs5AAAMAAAAs3Mgs5AAAg");
	var mask_graphics_122 = new cjs.Graphics().p("ALh2hMAtDAAAMAAAAtDMgtDAAAg");
	var mask_graphics_123 = new cjs.Graphics().p("ALZ2mMAtOAAAMAAAAtNMgtOAAAg");
	var mask_graphics_124 = new cjs.Graphics().p("ALQ2sMAtaAAAMAAAAtZMgtaAAAg");
	var mask_graphics_125 = new cjs.Graphics().p("ALI2xMAtlAAAMAAAAtjMgtlAAAg");
	var mask_graphics_126 = new cjs.Graphics().p("ALA23MAtwAAAMAAAAtvMgtwAAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AK328MAt7AAAMAAAAt5Mgt7AAAg");
	var mask_graphics_128 = new cjs.Graphics().p("AKv3CMAuGAAAMAAAAuFMguGAAAg");
	var mask_graphics_129 = new cjs.Graphics().p("AKn3IMAuRAAAMAAAAuRMguRAAAg");
	var mask_graphics_130 = new cjs.Graphics().p("AKe3NMAudAAAMAAAAubMgudAAAg");
	var mask_graphics_131 = new cjs.Graphics().p("AKW3TMAunAAAMAAAAunMgunAAAg");
	var mask_graphics_132 = new cjs.Graphics().p("AKO3YMAuzAAAMAAAAuxMguzAAAg");
	var mask_graphics_133 = new cjs.Graphics().p("AKH3cMAu6AAAMAAAAu5Mgu6AAAg");
	var mask_graphics_134 = new cjs.Graphics().p("AJz3mMAvOAAAMAAAAvNMgvOAAAg");
	var mask_graphics_135 = new cjs.Graphics().p("AJQ34MAvyAAAMAAAAvxMgvyAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("AIg4QMAwjAAAMAAAAwhMgwjAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AHi4wMAxiAAAMAAAAxhMgxiAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("AGW5XMAyvAAAMAAAAyvMgyvAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("AE96EMA0KAAAMAAAA0JMg0KAAAg");
	var mask_graphics_140 = new cjs.Graphics().p("ADV65MA10AAAMAAAA1zMg10AAAg");
	var mask_graphics_141 = new cjs.Graphics().p("ABg70MA3rAAAMAAAA3pMg3rAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("Agi83MA5vAAAMAAAA5vMg5vAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("Aiz+BMA8DAAAMAAAA8DMg8DAAAg");
	var mask_graphics_144 = new cjs.Graphics().p("AlR/SMA+kAAAMAAAA+lMg+kAAAg");
	var mask_graphics_145 = new cjs.Graphics().p("EgH+ggpMBBUAAAMAAABBTMhBUAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("EgNvgjsMBHZAAAMAAABHZMhHZAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("EgTggmvMBNfAAAMAAABNfMhNfAAAg");
	var mask_graphics_148 = new cjs.Graphics().p("EgZRgpyMBTkAAAMAAABTlMhTkAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("EgfDgs0MBZqAAAMAAABZpMhZqAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("Egk0gv3MBfvAAAMAAABfvMhfvAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("Egqlgy6MBl0AAAMAAABl1Mhl0AAAg");
	var mask_graphics_152 = new cjs.Graphics().p("EgwWg18MBr5AAAMAAABr5Mhr5AAAg");
	var mask_graphics_153 = new cjs.Graphics().p("Eg2Ig4/MByAAAAMAAABx/MhyAAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("Eg75g8CMB4FAAAMAAAB4FMh4FAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("Eg/Eg/EMB+JAAAMAAAB+JMh+JAAAg");
	var mask_graphics_156 = new cjs.Graphics().p("EhCHhCHMCEPAAAMAAACEPMiEPAAAg");
	var mask_graphics_157 = new cjs.Graphics().p("AL9hTIAAh8QAAgMgCgKQgDgLgFgHQgGgIgJgEQgJgDgNAAQgNAAgNAFQgNAFgKAKQgJAKgFAOQgGAPAAATIAABlIgjAAIAAjOIAiAAIAAAnIABAAIAOgRQAHgJALgFQAKgHALgDQALgEAOAAQATAAAPAGQAOAGAJAMQAJAKAEAQQAFAOAAAVIAAB/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(17).to({graphics:mask_graphics_17,x:186.1,y:28.3}).wait(1).to({graphics:mask_graphics_18,x:186.3,y:28.3}).wait(1).to({graphics:mask_graphics_19,x:186.8,y:28.4}).wait(1).to({graphics:mask_graphics_20,x:187.6,y:28.6}).wait(1).to({graphics:mask_graphics_21,x:188.7,y:28.8}).wait(1).to({graphics:mask_graphics_22,x:190.1,y:29.1}).wait(1).to({graphics:mask_graphics_23,x:191.7,y:29.4}).wait(1).to({graphics:mask_graphics_24,x:193.6,y:29.7}).wait(1).to({graphics:mask_graphics_25,x:195.8,y:30.2}).wait(1).to({graphics:mask_graphics_26,x:198.3,y:30.6}).wait(1).to({graphics:mask_graphics_27,x:201.1,y:31.2}).wait(1).to({graphics:mask_graphics_28,x:204.1,y:31.8}).wait(1).to({graphics:mask_graphics_29,x:207.4,y:32.4}).wait(1).to({graphics:mask_graphics_30,x:211,y:33.1}).wait(1).to({graphics:mask_graphics_31,x:214.9,y:33.8}).wait(1).to({graphics:mask_graphics_32,x:219.1,y:34.6}).wait(1).to({graphics:mask_graphics_33,x:223.5,y:35.5}).wait(1).to({graphics:mask_graphics_34,x:228.2,y:36.4}).wait(1).to({graphics:mask_graphics_35,x:233.2,y:37.3}).wait(1).to({graphics:mask_graphics_36,x:238.5,y:36.2}).wait(1).to({graphics:mask_graphics_37,x:244.1,y:34.9}).wait(1).to({graphics:mask_graphics_38,x:249.9,y:33.5}).wait(1).to({graphics:mask_graphics_39,x:256,y:32.1}).wait(1).to({graphics:mask_graphics_40,x:262.5,y:30.6}).wait(1).to({graphics:mask_graphics_41,x:269.1,y:29}).wait(1).to({graphics:mask_graphics_42,x:276.1,y:27.4}).wait(1).to({graphics:mask_graphics_43,x:283.4,y:25.7}).wait(1).to({graphics:mask_graphics_44,x:290.9,y:24}).wait(1).to({graphics:mask_graphics_45,x:298.7,y:22.2}).wait(1).to({graphics:mask_graphics_46,x:306.8,y:20.3}).wait(1).to({graphics:mask_graphics_47,x:315.1,y:18.3}).wait(1).to({graphics:mask_graphics_48,x:323.8,y:16.3}).wait(1).to({graphics:mask_graphics_49,x:332.7,y:14.3}).wait(1).to({graphics:mask_graphics_50,x:342.1,y:12.4}).wait(1).to({graphics:mask_graphics_51,x:342.4,y:12.1}).wait(1).to({graphics:mask_graphics_52,x:342.7,y:11.9}).wait(1).to({graphics:mask_graphics_53,x:343,y:11.6}).wait(1).to({graphics:mask_graphics_54,x:343.2,y:11.4}).wait(1).to({graphics:mask_graphics_55,x:343.5,y:11.2}).wait(1).to({graphics:mask_graphics_56,x:343.8,y:10.9}).wait(1).to({graphics:mask_graphics_57,x:344.1,y:10.7}).wait(1).to({graphics:mask_graphics_58,x:344.3,y:10.5}).wait(1).to({graphics:mask_graphics_59,x:344.6,y:10.2}).wait(1).to({graphics:mask_graphics_60,x:344.9,y:10}).wait(1).to({graphics:mask_graphics_61,x:345.2,y:9.8}).wait(1).to({graphics:mask_graphics_62,x:345.4,y:9.5}).wait(1).to({graphics:mask_graphics_63,x:345.7,y:9.3}).wait(1).to({graphics:mask_graphics_64,x:346,y:9.1}).wait(1).to({graphics:mask_graphics_65,x:346.3,y:8.8}).wait(1).to({graphics:mask_graphics_66,x:346.5,y:8.6}).wait(1).to({graphics:mask_graphics_67,x:346.8,y:8.4}).wait(1).to({graphics:mask_graphics_68,x:347.1,y:8.1}).wait(1).to({graphics:mask_graphics_69,x:347.4,y:7.9}).wait(1).to({graphics:mask_graphics_70,x:347.7,y:7.7}).wait(1).to({graphics:mask_graphics_71,x:347.9,y:7.4}).wait(1).to({graphics:mask_graphics_72,x:348.2,y:7.2}).wait(1).to({graphics:mask_graphics_73,x:348.5,y:7}).wait(1).to({graphics:mask_graphics_74,x:348.8,y:6.7}).wait(1).to({graphics:mask_graphics_75,x:349,y:6.5}).wait(1).to({graphics:mask_graphics_76,x:349.3,y:6.3}).wait(1).to({graphics:mask_graphics_77,x:349.6,y:6}).wait(1).to({graphics:mask_graphics_78,x:349.9,y:5.8}).wait(1).to({graphics:mask_graphics_79,x:350.1,y:5.6}).wait(1).to({graphics:mask_graphics_80,x:350.4,y:5.3}).wait(1).to({graphics:mask_graphics_81,x:350.7,y:5.1}).wait(1).to({graphics:mask_graphics_82,x:351,y:4.8}).wait(1).to({graphics:mask_graphics_83,x:351.3,y:4.6}).wait(1).to({graphics:mask_graphics_84,x:351.5,y:4.4}).wait(1).to({graphics:mask_graphics_85,x:351.8,y:4.1}).wait(1).to({graphics:mask_graphics_86,x:352.1,y:3.9}).wait(1).to({graphics:mask_graphics_87,x:352.4,y:3.7}).wait(1).to({graphics:mask_graphics_88,x:352.6,y:3.4}).wait(1).to({graphics:mask_graphics_89,x:352.9,y:3.2}).wait(1).to({graphics:mask_graphics_90,x:353.2,y:3}).wait(1).to({graphics:mask_graphics_91,x:353.5,y:2.7}).wait(1).to({graphics:mask_graphics_92,x:353.7,y:2.5}).wait(1).to({graphics:mask_graphics_93,x:354,y:2.3}).wait(1).to({graphics:mask_graphics_94,x:354.3,y:2}).wait(1).to({graphics:mask_graphics_95,x:354.6,y:1.8}).wait(1).to({graphics:mask_graphics_96,x:354.9,y:1.6}).wait(1).to({graphics:mask_graphics_97,x:355.1,y:1.3}).wait(1).to({graphics:mask_graphics_98,x:355.4,y:1.1}).wait(1).to({graphics:mask_graphics_99,x:355.7,y:0.9}).wait(1).to({graphics:mask_graphics_100,x:356,y:0.6}).wait(1).to({graphics:mask_graphics_101,x:356.2,y:0.4}).wait(1).to({graphics:mask_graphics_102,x:356.5,y:0.2}).wait(1).to({graphics:mask_graphics_103,x:356.8,y:-0.1}).wait(1).to({graphics:mask_graphics_104,x:357.1,y:-0.3}).wait(1).to({graphics:mask_graphics_105,x:357.3,y:-0.5}).wait(1).to({graphics:mask_graphics_106,x:357.6,y:-0.8}).wait(1).to({graphics:mask_graphics_107,x:357.9,y:-1}).wait(1).to({graphics:mask_graphics_108,x:358.2,y:-1.2}).wait(1).to({graphics:mask_graphics_109,x:358.4,y:-1.5}).wait(1).to({graphics:mask_graphics_110,x:358.7,y:-1.7}).wait(1).to({graphics:mask_graphics_111,x:359,y:-1.9}).wait(1).to({graphics:mask_graphics_112,x:359.3,y:-2.2}).wait(1).to({graphics:mask_graphics_113,x:359.6,y:-2.4}).wait(1).to({graphics:mask_graphics_114,x:359.8,y:-2.7}).wait(1).to({graphics:mask_graphics_115,x:360.1,y:-2.9}).wait(1).to({graphics:mask_graphics_116,x:360.4,y:-3.1}).wait(1).to({graphics:mask_graphics_117,x:360.7,y:-3.4}).wait(1).to({graphics:mask_graphics_118,x:360.9,y:-3.6}).wait(1).to({graphics:mask_graphics_119,x:361.2,y:-3.8}).wait(1).to({graphics:mask_graphics_120,x:361.5,y:-4.1}).wait(1).to({graphics:mask_graphics_121,x:361.8,y:-4.3}).wait(1).to({graphics:mask_graphics_122,x:362,y:-4.5}).wait(1).to({graphics:mask_graphics_123,x:362.3,y:-4.8}).wait(1).to({graphics:mask_graphics_124,x:362.6,y:-5}).wait(1).to({graphics:mask_graphics_125,x:362.9,y:-5.2}).wait(1).to({graphics:mask_graphics_126,x:363.2,y:-5.5}).wait(1).to({graphics:mask_graphics_127,x:363.4,y:-5.7}).wait(1).to({graphics:mask_graphics_128,x:363.7,y:-5.9}).wait(1).to({graphics:mask_graphics_129,x:364,y:-6.2}).wait(1).to({graphics:mask_graphics_130,x:364.3,y:-6.4}).wait(1).to({graphics:mask_graphics_131,x:364.5,y:-6.6}).wait(1).to({graphics:mask_graphics_132,x:364.9,y:-6.7}).wait(1).to({graphics:mask_graphics_133,x:364.9,y:-6.8}).wait(1).to({graphics:mask_graphics_134,x:364.9,y:-7}).wait(1).to({graphics:mask_graphics_135,x:365,y:-7.3}).wait(1).to({graphics:mask_graphics_136,x:365.1,y:-7.7}).wait(1).to({graphics:mask_graphics_137,x:365.2,y:-8.3}).wait(1).to({graphics:mask_graphics_138,x:365.3,y:-9}).wait(1).to({graphics:mask_graphics_139,x:365.5,y:-9.8}).wait(1).to({graphics:mask_graphics_140,x:365.7,y:-10.7}).wait(1).to({graphics:mask_graphics_141,x:365.9,y:-11.8}).wait(1).to({graphics:mask_graphics_142,x:366.1,y:-13}).wait(1).to({graphics:mask_graphics_143,x:366.4,y:-14.3}).wait(1).to({graphics:mask_graphics_144,x:366.7,y:-15.8}).wait(1).to({graphics:mask_graphics_145,x:367,y:-17.3}).wait(1).to({graphics:mask_graphics_146,x:369,y:-19.4}).wait(1).to({graphics:mask_graphics_147,x:371.1,y:-21.4}).wait(1).to({graphics:mask_graphics_148,x:373.1,y:-23.5}).wait(1).to({graphics:mask_graphics_149,x:375.1,y:-25.5}).wait(1).to({graphics:mask_graphics_150,x:377.1,y:-27.6}).wait(1).to({graphics:mask_graphics_151,x:379.1,y:-29.6}).wait(1).to({graphics:mask_graphics_152,x:381.1,y:-31.7}).wait(1).to({graphics:mask_graphics_153,x:383.2,y:-33.7}).wait(1).to({graphics:mask_graphics_154,x:385.2,y:-35.8}).wait(1).to({graphics:mask_graphics_155,x:370.6,y:-37.8}).wait(1).to({graphics:mask_graphics_156,x:355.2,y:-39.9}).wait(1).to({graphics:mask_graphics_157,x:80.2,y:-29.6}).wait(1).to({graphics:null,x:0,y:0}).wait(30));

	// Layer 4
	this.instance_6 = new lib.robo();
	this.instance_6.parent = this;
	this.instance_6.setTransform(364,48.2,0.024,0.024,0,0,0,77.8,10.2);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({regX:76.7,regY:9.2,scaleX:0.6,scaleY:0.6,x:580.3,y:17.3},33,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,x:580.6,y:12.3},82).to({scaleX:1.2,scaleY:1.2,x:526.2,y:-2.9},13,cjs.Ease.get(-1)).to({regX:76.4,regY:9.1,scaleX:2.3,scaleY:2.3,x:341.1,y:-4.7,alpha:0},12).to({_off:true},1).wait(30));

	// Layer 27
	this.instance_7 = new lib.robo();
	this.instance_7.parent = this;
	this.instance_7.setTransform(364.1,48.2,0.024,0.024,0,0,0,77.8,12.3);
	this.instance_7._off = true;
	this.instance_7.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_7.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({_off:false},0).to({regX:76.8,regY:9,scaleX:0.6,scaleY:0.6,x:581.1,y:17.8},33,cjs.Ease.get(-1)).to({regY:9.1,scaleX:0.81,scaleY:0.81,x:581.6,y:13.1},82).to({regX:76.7,scaleX:1.2,scaleY:1.2,x:527.4,y:-1.8},13,cjs.Ease.get(-1)).to({regX:76.5,scaleX:2.3,scaleY:2.3,x:342.7,y:-3.8,alpha:-1},12).to({_off:true},1).wait(30));

	// Layer 3
	this.instance_8 = new lib.recall();
	this.instance_8.parent = this;
	this.instance_8.setTransform(364,49.5,0.024,0.024,0,0,0,92.1,41);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).to({regX:90,regY:38.9,scaleX:0.6,scaleY:0.6,x:579.7,y:50.1},33,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,y:56.9},82).to({regY:38.8,scaleX:1.2,scaleY:1.2,x:524.9,y:63},13,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:2.42,scaleY:2.42,x:339.6,y:126.4,alpha:0},12).to({_off:true},1).wait(30));

	// Layer 28
	this.instance_9 = new lib.recall();
	this.instance_9.parent = this;
	this.instance_9.setTransform(364,49.6,0.024,0.024,0,0,0,90,41);
	this.instance_9._off = true;
	this.instance_9.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).to({regX:90.2,regY:38.9,scaleX:0.6,scaleY:0.6,x:580.3,y:50.7},33,cjs.Ease.get(-1)).to({scaleX:0.81,scaleY:0.81,x:580.5,y:57.6},82).to({regX:90,scaleX:1.2,scaleY:1.2,x:526,y:64.2},13,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:2.42,scaleY:2.42,x:341,y:127.4,alpha:-1},12).to({_off:true},1).wait(30));

	// Layer 7
	this.instance_10 = new lib.Tween12("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(580.3,13.2,0.599,0.599,0,0,0,0.4,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween13("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(326.4,-51.1,2.982,2.982,0,0,0,0.1,0.1);
	this.instance_11.alpha = 0;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},50).to({state:[{t:this.instance_10}]},82).to({state:[{t:this.instance_10}]},13).to({state:[{t:this.instance_11}]},12).to({state:[]},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({_off:false},0).to({regX:0.3,regY:0.2,scaleX:0.85,scaleY:0.85,y:-5.6},82).to({scaleX:1.19,scaleY:1.19,x:525.3,y:-18.1},13,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:2.98,scaleY:2.98,x:326.4,y:-51.1,alpha:0},12).wait(31));

	// SMOKE_MASK (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_50 = new cjs.Graphics().p("AxnNmIAA7MMAjPAAAIAAbMg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AxtNnIAA7NMAjbAAAIAAbNg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AxzNmIAA7MMAjnAAAIAAbMg");
	var mask_1_graphics_53 = new cjs.Graphics().p("Ax5NnIAA7NMAjzAAAIAAbNg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Ax/NnIAA7NMAj/AAAIAAbNg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AyFNnIAA7NMAkLAAAIAAbNg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AyLNnIAA7NMAkXAAAIAAbNg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AyRNmIAA7LMAkjAAAIAAbLg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AyXNnIAA7NMAkuAAAIAAbNg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AycNmIAA7LMAk5AAAIAAbLg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AyiNmIAA7LMAlGAAAIAAbLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AypNmIAA7LMAlSAAAIAAbLg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AyuNmIAA7LMAldAAAIAAbLg");
	var mask_1_graphics_63 = new cjs.Graphics().p("Ay0NnIAA7NMAlpAAAIAAbNg");
	var mask_1_graphics_64 = new cjs.Graphics().p("Ay6NmIAA7LMAl1AAAIAAbLg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AzANnIAA7NMAmBAAAIAAbNg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AzGNnIAA7NMAmNAAAIAAbNg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AzMNnIAA7NMAmZAAAIAAbNg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AzSNnIAA7NMAmlAAAIAAbNg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AzYNmIAA7LMAmxAAAIAAbLg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AzeNnIAA7NMAm9AAAIAAbNg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AzkNmIAA7LMAnJAAAIAAbLg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AzqNmIAA7LMAnVAAAIAAbLg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AzwNnIAA7MMAngAAAIAAbMg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Az1NmIAA7LMAnrAAAIAAbLg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Az7NmIAA7LMAn3AAAIAAbLg");
	var mask_1_graphics_76 = new cjs.Graphics().p("A0BNmIAA7LMAoDAAAIAAbLg");
	var mask_1_graphics_77 = new cjs.Graphics().p("A0HNmIAA7MMAoPAAAIAAbMg");
	var mask_1_graphics_78 = new cjs.Graphics().p("A0NNmIAA7LMAobAAAIAAbLg");
	var mask_1_graphics_79 = new cjs.Graphics().p("A0TNmIAA7MMAonAAAIAAbMg");
	var mask_1_graphics_80 = new cjs.Graphics().p("A0ZNnIAA7NMAozAAAIAAbNg");
	var mask_1_graphics_81 = new cjs.Graphics().p("A0fNmIAA7LMAo/AAAIAAbLg");
	var mask_1_graphics_82 = new cjs.Graphics().p("A0lNnIAA7NMApLAAAIAAbNg");
	var mask_1_graphics_83 = new cjs.Graphics().p("A0rNnIAA7NMApXAAAIAAbNg");
	var mask_1_graphics_84 = new cjs.Graphics().p("A0wNmIAA7LMAphAAAIAAbLg");
	var mask_1_graphics_85 = new cjs.Graphics().p("A02NnIAA7NMApuAAAIAAbNg");
	var mask_1_graphics_86 = new cjs.Graphics().p("A09NmIAA7LMAp6AAAIAAbLg");
	var mask_1_graphics_87 = new cjs.Graphics().p("A1CNmIAA7LMAqFAAAIAAbLg");
	var mask_1_graphics_88 = new cjs.Graphics().p("A1JNmIAA7LMAqTAAAIAAbLg");
	var mask_1_graphics_89 = new cjs.Graphics().p("A1ONmIAA7LMAqdAAAIAAbLg");
	var mask_1_graphics_90 = new cjs.Graphics().p("A1UNmIAA7LMAqpAAAIAAbLg");
	var mask_1_graphics_91 = new cjs.Graphics().p("A1aNmIAA7LMAq1AAAIAAbLg");
	var mask_1_graphics_92 = new cjs.Graphics().p("A1gNnIAA7NMArBAAAIAAbNg");
	var mask_1_graphics_93 = new cjs.Graphics().p("A1mNmIAA7LMArNAAAIAAbLg");
	var mask_1_graphics_94 = new cjs.Graphics().p("A1sNmIAA7LMArZAAAIAAbLg");
	var mask_1_graphics_95 = new cjs.Graphics().p("A1yNnIAA7NMArlAAAIAAbNg");
	var mask_1_graphics_96 = new cjs.Graphics().p("A14NmIAA7LMArxAAAIAAbLg");
	var mask_1_graphics_97 = new cjs.Graphics().p("A1+NmIAA7LMAr9AAAIAAbLg");
	var mask_1_graphics_98 = new cjs.Graphics().p("A2ENmIAA7LMAsJAAAIAAbLg");
	var mask_1_graphics_99 = new cjs.Graphics().p("A2KNmIAA7LMAsVAAAIAAbLg");
	var mask_1_graphics_100 = new cjs.Graphics().p("A2PNmIAA7LMAsfAAAIAAbLg");
	var mask_1_graphics_101 = new cjs.Graphics().p("A2VNmIAA7LMAsrAAAIAAbLg");
	var mask_1_graphics_102 = new cjs.Graphics().p("A2bNmIAA7LMAs3AAAIAAbLg");
	var mask_1_graphics_103 = new cjs.Graphics().p("A2hNmIAA7LMAtDAAAIAAbLg");
	var mask_1_graphics_104 = new cjs.Graphics().p("A2nNmIAA7MMAtPAAAIAAbMg");
	var mask_1_graphics_105 = new cjs.Graphics().p("A2tNmIAA7LMAtbAAAIAAbLg");
	var mask_1_graphics_106 = new cjs.Graphics().p("A2zNmIAA7LMAtnAAAIAAbLg");
	var mask_1_graphics_107 = new cjs.Graphics().p("A25NnIAA7NMAtzAAAIAAbNg");
	var mask_1_graphics_108 = new cjs.Graphics().p("A2/NmIAA7LMAt/AAAIAAbLg");
	var mask_1_graphics_109 = new cjs.Graphics().p("A3FNmIAA7LMAuLAAAIAAbLg");
	var mask_1_graphics_110 = new cjs.Graphics().p("A3LNnIAA7NMAuXAAAIAAbNg");
	var mask_1_graphics_111 = new cjs.Graphics().p("A3RNmIAA7LMAuiAAAIAAbLg");
	var mask_1_graphics_112 = new cjs.Graphics().p("A3WNmIAA7LMAutAAAIAAbLg");
	var mask_1_graphics_113 = new cjs.Graphics().p("A3dNmIAA7LMAu7AAAIAAbLg");
	var mask_1_graphics_114 = new cjs.Graphics().p("A3jNmIAA7LMAvGAAAIAAbLg");
	var mask_1_graphics_115 = new cjs.Graphics().p("A3oNmIAA7LMAvRAAAIAAbLg");
	var mask_1_graphics_116 = new cjs.Graphics().p("A3uNmIAA7LMAvdAAAIAAbLg");
	var mask_1_graphics_117 = new cjs.Graphics().p("A30NmIAA7LMAvpAAAIAAbLg");
	var mask_1_graphics_118 = new cjs.Graphics().p("A36NmIAA7LMAv1AAAIAAbLg");
	var mask_1_graphics_119 = new cjs.Graphics().p("A4ANmIAA7LMAwBAAAIAAbLg");
	var mask_1_graphics_120 = new cjs.Graphics().p("A4GNmIAA7LMAwNAAAIAAbLg");
	var mask_1_graphics_121 = new cjs.Graphics().p("A4MNmIAA7LMAwZAAAIAAbLg");
	var mask_1_graphics_122 = new cjs.Graphics().p("A4SNmIAA7LMAwlAAAIAAbLg");
	var mask_1_graphics_123 = new cjs.Graphics().p("A4YNmIAA7LMAwxAAAIAAbLg");
	var mask_1_graphics_124 = new cjs.Graphics().p("A4eNmIAA7LMAw9AAAIAAbLg");
	var mask_1_graphics_125 = new cjs.Graphics().p("A4jNmIAA7LMAxHAAAIAAbLg");
	var mask_1_graphics_126 = new cjs.Graphics().p("A4qNmIAA7LMAxVAAAIAAbLg");
	var mask_1_graphics_127 = new cjs.Graphics().p("A4wNmIAA7LMAxhAAAIAAbLg");
	var mask_1_graphics_128 = new cjs.Graphics().p("A41NmIAA7LMAxrAAAIAAbLg");
	var mask_1_graphics_129 = new cjs.Graphics().p("A47NmIAA7LMAx3AAAIAAbLg");
	var mask_1_graphics_130 = new cjs.Graphics().p("A5BNmIAA7LMAyDAAAIAAbLg");
	var mask_1_graphics_131 = new cjs.Graphics().p("A5HNmIAA7LMAyPAAAIAAbLg");
	var mask_1_graphics_132 = new cjs.Graphics().p("A5NNmIAA7LMAybAAAIAAbLg");
	var mask_1_graphics_133 = new cjs.Graphics().p("A5QNnIAA7NMAyhAAAIAAbNg");
	var mask_1_graphics_134 = new cjs.Graphics().p("A5aNpIAA7RMAy1AAAIAAbRg");
	var mask_1_graphics_135 = new cjs.Graphics().p("A5qNsIAA7XMAzVAAAIAAbXg");
	var mask_1_graphics_136 = new cjs.Graphics().p("A6BNwIAA7fMA0DAAAIAAbfg");
	var mask_1_graphics_137 = new cjs.Graphics().p("A6eN2IAA7rMA09AAAIAAbrg");
	var mask_1_graphics_138 = new cjs.Graphics().p("A7BN9IAA75MA2DAAAIAAb5g");
	var mask_1_graphics_139 = new cjs.Graphics().p("A7rOFIAA8JMA3YAAAIAAcJg");
	var mask_1_graphics_140 = new cjs.Graphics().p("A8cOPIAA8cMA45AAAIAAccg");
	var mask_1_graphics_141 = new cjs.Graphics().p("A9TOZIAA8xMA6nAAAIAAcxg");
	var mask_1_graphics_142 = new cjs.Graphics().p("A+ROlIAA9JMA8jAAAIAAdJg");
	var mask_1_graphics_143 = new cjs.Graphics().p("A/VOyIAA9jMA+rAAAIAAdjg");
	var mask_1_graphics_144 = new cjs.Graphics().p("EggfAPBIAA+BMBA/AAAIAAeBg");
	var mask_1_graphics_145 = new cjs.Graphics().p("ApmPQIAA+fMBDhAAAIAAefg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_1_graphics_50,x:580.3,y:9.2}).wait(1).to({graphics:mask_1_graphics_51,x:580.3,y:9}).wait(1).to({graphics:mask_1_graphics_52,x:580.3,y:8.8}).wait(1).to({graphics:mask_1_graphics_53,x:580.4,y:8.5}).wait(1).to({graphics:mask_1_graphics_54,x:580.4,y:8.3}).wait(1).to({graphics:mask_1_graphics_55,x:580.3,y:8.1}).wait(1).to({graphics:mask_1_graphics_56,x:580.3,y:7.8}).wait(1).to({graphics:mask_1_graphics_57,x:580.3,y:7.6}).wait(1).to({graphics:mask_1_graphics_58,x:580.4,y:7.4}).wait(1).to({graphics:mask_1_graphics_59,x:580.4,y:7.1}).wait(1).to({graphics:mask_1_graphics_60,x:580.4,y:6.9}).wait(1).to({graphics:mask_1_graphics_61,x:580.4,y:6.7}).wait(1).to({graphics:mask_1_graphics_62,x:580.4,y:6.4}).wait(1).to({graphics:mask_1_graphics_63,x:580.4,y:6.2}).wait(1).to({graphics:mask_1_graphics_64,x:580.4,y:6}).wait(1).to({graphics:mask_1_graphics_65,x:580.4,y:5.7}).wait(1).to({graphics:mask_1_graphics_66,x:580.4,y:5.5}).wait(1).to({graphics:mask_1_graphics_67,x:580.4,y:5.3}).wait(1).to({graphics:mask_1_graphics_68,x:580.4,y:5}).wait(1).to({graphics:mask_1_graphics_69,x:580.4,y:4.8}).wait(1).to({graphics:mask_1_graphics_70,x:580.4,y:4.6}).wait(1).to({graphics:mask_1_graphics_71,x:580.4,y:4.3}).wait(1).to({graphics:mask_1_graphics_72,x:580.4,y:4.1}).wait(1).to({graphics:mask_1_graphics_73,x:580.4,y:3.9}).wait(1).to({graphics:mask_1_graphics_74,x:580.4,y:3.6}).wait(1).to({graphics:mask_1_graphics_75,x:580.4,y:3.4}).wait(1).to({graphics:mask_1_graphics_76,x:580.4,y:3.2}).wait(1).to({graphics:mask_1_graphics_77,x:580.4,y:2.9}).wait(1).to({graphics:mask_1_graphics_78,x:580.4,y:2.7}).wait(1).to({graphics:mask_1_graphics_79,x:580.4,y:2.5}).wait(1).to({graphics:mask_1_graphics_80,x:580.4,y:2.2}).wait(1).to({graphics:mask_1_graphics_81,x:580.4,y:2}).wait(1).to({graphics:mask_1_graphics_82,x:580.4,y:1.8}).wait(1).to({graphics:mask_1_graphics_83,x:580.4,y:1.5}).wait(1).to({graphics:mask_1_graphics_84,x:580.4,y:1.3}).wait(1).to({graphics:mask_1_graphics_85,x:580.4,y:1.1}).wait(1).to({graphics:mask_1_graphics_86,x:580.4,y:0.8}).wait(1).to({graphics:mask_1_graphics_87,x:580.4,y:0.6}).wait(1).to({graphics:mask_1_graphics_88,x:580.4,y:0.4}).wait(1).to({graphics:mask_1_graphics_89,x:580.4,y:0.1}).wait(1).to({graphics:mask_1_graphics_90,x:580.4,y:-0.1}).wait(1).to({graphics:mask_1_graphics_91,x:580.4,y:-0.3}).wait(1).to({graphics:mask_1_graphics_92,x:580.4,y:-0.6}).wait(1).to({graphics:mask_1_graphics_93,x:580.4,y:-0.8}).wait(1).to({graphics:mask_1_graphics_94,x:580.4,y:-1.1}).wait(1).to({graphics:mask_1_graphics_95,x:580.4,y:-1.3}).wait(1).to({graphics:mask_1_graphics_96,x:580.4,y:-1.5}).wait(1).to({graphics:mask_1_graphics_97,x:580.4,y:-1.8}).wait(1).to({graphics:mask_1_graphics_98,x:580.4,y:-2}).wait(1).to({graphics:mask_1_graphics_99,x:580.5,y:-2.2}).wait(1).to({graphics:mask_1_graphics_100,x:580.5,y:-2.5}).wait(1).to({graphics:mask_1_graphics_101,x:580.4,y:-2.7}).wait(1).to({graphics:mask_1_graphics_102,x:580.4,y:-2.9}).wait(1).to({graphics:mask_1_graphics_103,x:580.4,y:-3.2}).wait(1).to({graphics:mask_1_graphics_104,x:580.5,y:-3.4}).wait(1).to({graphics:mask_1_graphics_105,x:580.5,y:-3.6}).wait(1).to({graphics:mask_1_graphics_106,x:580.5,y:-3.9}).wait(1).to({graphics:mask_1_graphics_107,x:580.5,y:-4.1}).wait(1).to({graphics:mask_1_graphics_108,x:580.5,y:-4.3}).wait(1).to({graphics:mask_1_graphics_109,x:580.5,y:-4.6}).wait(1).to({graphics:mask_1_graphics_110,x:580.5,y:-4.8}).wait(1).to({graphics:mask_1_graphics_111,x:580.5,y:-5}).wait(1).to({graphics:mask_1_graphics_112,x:580.5,y:-5.3}).wait(1).to({graphics:mask_1_graphics_113,x:580.5,y:-5.5}).wait(1).to({graphics:mask_1_graphics_114,x:580.5,y:-5.7}).wait(1).to({graphics:mask_1_graphics_115,x:580.5,y:-6}).wait(1).to({graphics:mask_1_graphics_116,x:580.5,y:-6.2}).wait(1).to({graphics:mask_1_graphics_117,x:580.5,y:-6.4}).wait(1).to({graphics:mask_1_graphics_118,x:580.5,y:-6.7}).wait(1).to({graphics:mask_1_graphics_119,x:580.5,y:-6.9}).wait(1).to({graphics:mask_1_graphics_120,x:580.5,y:-7.1}).wait(1).to({graphics:mask_1_graphics_121,x:580.5,y:-7.4}).wait(1).to({graphics:mask_1_graphics_122,x:580.5,y:-7.6}).wait(1).to({graphics:mask_1_graphics_123,x:580.5,y:-7.8}).wait(1).to({graphics:mask_1_graphics_124,x:580.5,y:-8.1}).wait(1).to({graphics:mask_1_graphics_125,x:580.5,y:-8.3}).wait(1).to({graphics:mask_1_graphics_126,x:580.5,y:-8.5}).wait(1).to({graphics:mask_1_graphics_127,x:580.5,y:-8.8}).wait(1).to({graphics:mask_1_graphics_128,x:580.5,y:-9}).wait(1).to({graphics:mask_1_graphics_129,x:580.5,y:-9.2}).wait(1).to({graphics:mask_1_graphics_130,x:580.5,y:-9.5}).wait(1).to({graphics:mask_1_graphics_131,x:580.5,y:-9.7}).wait(1).to({graphics:mask_1_graphics_132,x:580.5,y:-9.9}).wait(1).to({graphics:mask_1_graphics_133,x:580.2,y:-10}).wait(1).to({graphics:mask_1_graphics_134,x:579.2,y:-10.2}).wait(1).to({graphics:mask_1_graphics_135,x:577.6,y:-10.4}).wait(1).to({graphics:mask_1_graphics_136,x:575.3,y:-10.9}).wait(1).to({graphics:mask_1_graphics_137,x:572.4,y:-11.4}).wait(1).to({graphics:mask_1_graphics_138,x:568.8,y:-12}).wait(1).to({graphics:mask_1_graphics_139,x:564.5,y:-12.8}).wait(1).to({graphics:mask_1_graphics_140,x:559.6,y:-13.6}).wait(1).to({graphics:mask_1_graphics_141,x:554.1,y:-14.6}).wait(1).to({graphics:mask_1_graphics_142,x:547.9,y:-15.7}).wait(1).to({graphics:mask_1_graphics_143,x:541,y:-17}).wait(1).to({graphics:mask_1_graphics_144,x:533.5,y:-18.3}).wait(1).to({graphics:mask_1_graphics_145,x:370.7,y:-19.8}).wait(1).to({graphics:null,x:0,y:0}).wait(42));

	// Layer 5
	this.instance_12 = new lib.Tween10("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(580.6,120,0.69,0.69,0,0,0,0.4,0.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween11("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(580.9,-61.3,0.991,0.991,0,0,0,0.5,0);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50).to({_off:false},0).to({_off:true,regX:0.5,regY:0,scaleX:0.99,scaleY:0.99,x:580.9,y:-61.3},82).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({_off:false},82).to({regX:0.4,regY:-0.1,scaleX:1.39,scaleY:1.39,x:526.1,y:-116.1},13,cjs.Ease.get(-1)).to({_off:true},1).wait(42));

	// SMOKE
	this.instance_14 = new lib.Tween10("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(580.6,120,0.69,0.69,0,0,0,0.4,0.2);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween11("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(580.9,-61.3,0.991,0.991,0,0,0,0.5,0);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(50).to({_off:false},0).to({_off:true,regX:0.5,regY:0,scaleX:0.99,scaleY:0.99,x:580.9,y:-61.3},82).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(50).to({_off:false},82).to({regX:0.4,regY:-0.1,scaleX:1.39,scaleY:1.39,x:526.1,y:-116.1},13,cjs.Ease.get(-1)).to({_off:true},1).wait(42));

	// GAME_BG
	this.instance_16 = new lib.Tween8("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(364,48.4,0.024,0.024,0,0,0,2,2);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(340.5,-38,2.53,2.53,0,0,0,0.2,0.1);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},17).to({state:[{t:this.instance_16}]},33).to({state:[{t:this.instance_16}]},82).to({state:[{t:this.instance_16}]},13).to({state:[{t:this.instance_17}]},12).to({state:[]},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(17).to({_off:false},0).to({regX:0.4,regY:1.7,scaleX:0.6,scaleY:0.6,x:580.3,y:13.4},33,cjs.Ease.get(-0.98)).to({regX:0.3,regY:1.5,scaleX:0.86,scaleY:0.86,y:-5.4},82).to({scaleX:1.2,scaleY:1.2,x:525.4,y:-15.5},13,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.1,scaleX:2.53,scaleY:2.53,x:340.5,y:-38,alpha:0},12).wait(31));

	// Layer 10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A8ZChIAAlBMA40AAAIAAFBg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:229.6,y:20.3}).wait(87).to({graphics:null,x:0,y:0}).wait(57));

	// Layer 11
	this.instance_18 = new lib.Tween7("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(213.4,50.6,1.345,1.345,0,0,0,0.1,0.1);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},0).to({y:20.6},9).wait(74).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.72,scaleY:1.72,x:73.7,y:9.9},13,cjs.Ease.get(-1)).to({regX:0.1,regY:0.1,scaleX:2.55,scaleY:2.55,x:-431.3,y:-20.6,alpha:0},13).to({_off:true},1).wait(29));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("A8ZCXIAAktMA40AAAIAAEtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:229.6,y:51.5}).wait(87).to({graphics:null,x:0,y:0}).wait(57));

	// Layer 13
	this.instance_19 = new lib.text2_mc("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(213.2,78,1.345,1.345);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(54).to({_off:false},0).to({y:48},9).wait(69).to({startPosition:0},0).to({regX:-0.1,regY:0.1,scaleX:1.72,scaleY:1.72,x:73.6,y:48.6},13,cjs.Ease.get(-1)).to({regX:0.1,scaleX:2.55,scaleY:2.55,x:-431.3,y:36.5,alpha:0},13).to({_off:true},1).wait(29));

	// Layer 1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_44 = new cjs.Graphics().p("A8ZBqIAAjTMA40AAAIAADTg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_4_graphics_44,x:229.6,y:74.3}).wait(87).to({graphics:null,x:0,y:0}).wait(57));

	// Layer 2
	this.instance_20 = new lib.text3_mc("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(315.7,97.4,1.345,1.345,0,0,0,0.2,0.1);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(59).to({_off:false},0).to({y:77.4},9).wait(64).to({startPosition:0},0).to({regX:0,scaleX:1.72,scaleY:1.72,x:204.5,y:89.7},13,cjs.Ease.get(-1)).to({scaleX:2.55,scaleY:2.55,x:-238,y:97.4,alpha:0},13).to({_off:true},1).wait(29));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(656.6,44.2,0.825,0.825,0,0,0,127.8,-4.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(132).to({_off:false},0).wait(56));

	// legal
	this.instance_21 = new lib.legal_limitedtime();
	this.instance_21.parent = this;
	this.instance_21.setTransform(511.5,74.4,0.868,0.868,0,0,0,439.4,-135.3);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(162).to({_off:false},0).to({y:59.4,alpha:1},7).wait(19));

	// legal
	this.instance_22 = new lib.legal_withpurchase();
	this.instance_22.parent = this;
	this.instance_22.setTransform(392.3,70.6,1.052,1.052);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(166).to({_off:false},0).to({y:62.6,alpha:1},7).wait(15));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_154 = new cjs.Graphics().p("AqOFSIAAqjIUdAAIAAKjg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_5_graphics_154,x:520.2,y:19.7}).wait(34));

	// price
	this.instance_23 = new lib.newPrice();
	this.instance_23.parent = this;
	this.instance_23.setTransform(164.8,73.6,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(154).to({_off:false},0).to({y:28.6},10,cjs.Ease.get(1)).wait(24));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_154 = new cjs.Graphics().p("AxVCaIAAkyMAirAAAIAAEyg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_6_graphics_154,x:136.7,y:44.2}).wait(34));

	// oculus
	this.instance_24 = new lib.logo_oculus();
	this.instance_24.parent = this;
	this.instance_24.setTransform(136.7,53.1,0.153,0.153,0,0,0,156.9,111.5);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(154).to({_off:false},0).to({y:16.6},10,cjs.Ease.get(1)).wait(24));

	// touch RT
	this.instance_25 = new lib.hardware_touch_RT_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(338.5,47.8,0.176,0.176,0,0,0,32.5,29.9);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(154).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:291.9,y:63.1},13,cjs.Ease.get(-1)).wait(21));

	// touch LT
	this.instance_26 = new lib.hardware_touch_LT_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(377.1,45.7,0.176,0.176,0,0,0,23.1,23.4);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(154).to({_off:false},0).to({regY:23.5,scaleX:0.63,scaleY:0.63,x:412.2,y:56.7},13,cjs.Ease.get(-1)).wait(21));

	// rift
	this.instance_27 = new lib.hardware_rift_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(358.9,40.3,0.176,0.176,0,0,0,69,42.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(154).to({_off:false},0).to({scaleX:0.63,scaleY:0.63,x:355.9,y:36.4},13,cjs.Ease.get(-1)).wait(21));

	// bg
	this.instance_28 = new lib.bg();
	this.instance_28.parent = this;
	this.instance_28.setTransform(307,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(188));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.5,45,1028,90);
// library properties:
lib.properties = {
	id: '445691DF23B34698A49B16CCBF1C0F47',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Bitmap42.jpg", id:"Bitmap42"},
		{src:"images/game_1_unspoken.jpg", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg", id:"game_4_superhot"},
		{src:"images/game_6_rickmorty.jpg", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg", id:"game_7_wilson"},
		{src:"images/hardware_rift.png", id:"hardware_rift"},
		{src:"images/hardware_touch_LT.png", id:"hardware_touch_LT"},
		{src:"images/hardware_touch_RT.png", id:"hardware_touch_RT"},
		{src:"images/RR_poster_final12.jpg", id:"RR_poster_final12"},
		{src:"images/SmokeEffectPNGFile.png", id:"SmokeEffectPNGFile"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['445691DF23B34698A49B16CCBF1C0F47'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;