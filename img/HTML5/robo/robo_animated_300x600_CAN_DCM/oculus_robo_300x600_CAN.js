(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(75.5,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAIQgCgEgBgEQABgEACgDQADgDAEAAQAFAAADADQACADABAEQgBAEgCAEQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(69.7,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAqQgIgCgGgDIADgMIANAEQAHACAHAAQAFAAAFgCQAEgBADgCQADgDAAgFQAAgGgFgDQgFgCgHgBIgOgFQgHgBgFgEQgFgFAAgIQAAgJAEgFQAFgFAHgDQAHgDAHAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAAFAFADQAFACAGABIAOAFQAIACAFADQAFAFAAAJQAAAJgFAHQgFAFgIADQgJACgIAAQgIAAgIgBg");
	this.shape_2.setTransform(63.4,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAzQgFgEgBgIQgCgIABgNIAAgiIgRAAIAAgMIARAAIAAgaIAMAAIAAAaIAYAAIAAAMIgYAAIAAAlIABAMQABAFADACQACACAEAAIAGAAIAHgCIAAAMIgIACIgIAAQgJABgEgEg");
	this.shape_3.setTransform(56.5,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGADQgHAEgDAHQgEAHAAAJIAAAoIgOAAIAAhQIANAAIAAAPIABAAQAFgIAHgEQAIgFAKgBQAKAAAHAFQAGADADAIQADAHAAAKIAAAyg");
	this.shape_4.setTransform(48.6,-4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIAOAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAFAAACACQACADABAFQgBADgCAEQgCACgFAAQgEAAgCgCg");
	this.shape_5.setTransform(41.6,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAlQgJgFgFgKQgFgKAAgMQAAgLAFgJQAFgKAJgGQAKgFANgBQAOABAJAFQAKAGAFAKQAFAJAAALQAAAMgFAKQgFAKgKAFQgJAGgOAAQgNAAgKgGgAgPgZQgHAEgDAHQgDAHAAAHQAAAIADAIQADAGAHAEQAGAFAJgBQAKABAGgFQAGgEADgGQADgIAAgIQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_6.setTransform(34.5,-4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA/IAAh6IAOAAIAAAPIAAAAQAGgJAIgEQAIgFAJABQAMgBAJAGQAJAFAFAKQAFAJAAAOQAAANgFAIQgFAKgJAGQgJAEgMAAQgJABgIgFQgIgEgFgJIgBAAIAAAPIAAAqgAgOgsQgHADgDAIQgEAGAAAJQAAAIAEAHQAEAGAGAEQAHAEAHAAQANAAAIgIQAHgHAAgOQAAgOgHgJQgIgHgNgBQgIAAgGAFg");
	this.shape_7.setTransform(24.3,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA/IAAgxQAAgKgEgFQgFgGgKAAQgGAAgGAEQgHADgDAGQgEAHAAAKIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAQAEgHAIgFQAIgFAKgBQAKAAAHAFQAGAEADAHQADAHAAAKIAAAyg");
	this.shape_8.setTransform(9.5,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTA/IgQgEIABgMIAKACIALABIALABQAIAAAHgDQAHgDAFgGQADgGAAgMIABgQIgBAAQgFAJgIAEQgHAFgKgBQgMAAgIgEQgKgGgFgKQgFgIAAgNQAAgOAFgJQAFgKAKgFQAIgGAMABQAJgBAIAFQAHAEAGAJIABAAIAAgPIAOAAIAABQQAAAQgHAKQgFAJgLAEQgKAFgMAAIgRgBgAgNguQgHAEgEAHQgDAGAAAKQAAAJADAHQAEAFAHAEQAFAEAIAAQAIAAAHgEQAGgEAEgGQAEgHAAgIQAAgJgEgGQgDgIgHgDQgHgFgIAAQgIABgFADg");
	this.shape_9.setTransform(-0.7,-1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA8IAAhQIANAAIAABQgAgGgqQgCgEAAgDQAAgFACgDQADgCADAAQAEAAADACQADADAAAFQAAADgDAEQgDACgEAAQgEAAgCgCg");
	this.shape_10.setTransform(-8,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXA/IAAgxQAAgKgEgFQgFgGgKAAQgGAAgGAEQgHADgDAGQgEAHAAAKIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAQAEgHAIgFQAIgFAKgBQAKAAAHAFQAGAEADAHQADAHAAAKIAAAyg");
	this.shape_11.setTransform(-14.9,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgBAzQgFgEgCgIQgCgIAAgNIAAgiIgQAAIAAgMIAQAAIAAgaIAOAAIAAAaIAWAAIAAAMIgWAAIAAAlIABAMQAAAFACACQADACAFAAIAFAAIAGgCIABAMIgIACIgIAAQgJABgDgEg");
	this.shape_12.setTransform(-27.3,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAqQgIgCgGgDIADgMIANAEQAHACAHAAQAFAAAFgCQAEgBADgCQADgDAAgFQAAgGgFgDQgFgCgHgBIgOgFQgHgBgFgEQgFgFAAgIQAAgJAEgFQAFgFAHgDQAHgDAHAAQAIAAAHACQAIABAGAEIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEADAAAGQAAAFAFADQAFACAGABIAOAFQAIACAFADQAFAFAAAJQAAAJgFAHQgFAFgIADQgJACgIAAQgIAAgIgBg");
	this.shape_13.setTransform(-34.3,-4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAnQgKgEgGgKQgFgJAAgQQAAgNAFgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAIAFAFAJQAFAKAAANIAAAGIg/AAQACANAHAGQAJAGAMgBIAOgBIAPgEIABANIgKADIgKACIgKAAQgNAAgKgEgAAZgFQgBgMgGgHQgGgGgLAAQgFAAgGADQgFADgEAFQgEAGgBAIIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,-4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_15.setTransform(-54,-4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAnQgKgEgFgKQgGgJAAgQQAAgNAGgKQAFgJAJgFQAJgFALAAQALAAAIAFQAJAFAEAJQAEAKABANIAAAGIg+AAQAAANAJAGQAHAGANgBIAPgBIANgEIACANIgKADIgLACIgJAAQgMAAgLgEgAAYgFQAAgMgGgHQgGgGgLAAQgGAAgFADQgGADgEAFQgDAGAAAIIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,-4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGADQgHAEgDAHQgEAHAAAJIAAAoIgOAAIAAhQIANAAIAAAPIABAAQAFgIAHgEQAIgFAKgBQAKAAAHAFQAGADADAIQADAHAAAKIAAAyg");
	this.shape_17.setTransform(-74.7,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-18.2,163.5,24.4);


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
	this.shape.graphics.f("#000000").s().p("AACAWIAGgVIAJgWIANABIgHAUIgFAWgAgdAWIAHgVIAJgWIAMABIgGAUIgFAWg");
	this.shape.setTransform(-105.2,-4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_1.setTransform(96.2,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRAnQgKgEgGgKQgFgKAAgOQAAgOAFgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAEAJQAFAKAAANIAAAFIg/AAQACAOAHAGQAIAFANABIAOgCIAPgEIAAANIgJADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgGQgGgHgLAAQgGAAgFACQgGADgDAGQgEAFgBAJIAxAAIAAAAg");
	this.shape_2.setTransform(89.7,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRAnQgKgEgGgKQgFgKAAgOQAAgOAFgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAEAJQAFAKAAANIAAAFIg/AAQACAOAHAGQAJAFAMABIAOgCIAPgEIABANIgKADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgGQgGgHgLAAQgFAAgGACQgFADgEAGQgEAFgBAJIAxAAIAAAAg");
	this.shape_3.setTransform(80.6,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPQAAgPAGgHQAEgHAMAAIAHAAIAGACIAAAMIgFgBIgFAAQgHAAgCAEQgDAEAAAJIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_4.setTransform(73.6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAmQgGgFgDgHQgDgIAAgJIAAgyIAOAAIAAAwQAAAGACAFQACAFAEADQAEADAHAAQAHAAAGgDQAGgEADgHQADgHAAgKIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgEAIgHAFQgIAFgKAAQgKAAgHgEg");
	this.shape_5.setTransform(61.8,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgFANgBQAOABAJAFQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJABQAKgBAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_6.setTransform(52.1,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA9IARgnIgihSIARAAIAXBCIAYhCIAQAAIghBQIgOApg");
	this.shape_7.setTransform(42.9,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAnQgKgEgFgKQgGgKAAgOQAAgOAGgKQAFgJAJgFQAJgFAKAAQAMAAAIAFQAIAFAFAJQAEAKABANIAAAFIg+AAQABAOAIAGQAHAFANABIAPgCIANgEIABANIgJADIgLABIgJABQgMAAgLgEgAAYgFQAAgMgGgGQgGgHgLAAQgGAAgFACQgGADgEAGQgDAFAAAJIAvAAIAAAAg");
	this.shape_8.setTransform(30,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARA/IgkgqIgDAAIAAAqIgOAAIAAh9IAOAAIAABNIADAAIAiggIATAAIgnAjIAqAtg");
	this.shape_9.setTransform(21.7,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAoQgHgCgEgGQgEgGAAgKQAAgJAEgFQAEgFAHgCQAHgDAKAAIAHABIAKAAIAKABIAAgFQAAgJgGgFQgGgEgKAAIgKAAIgLADIgJADIAAgNIAJgDIAMgCIAKgBQARAAAJAJQAJAIAAAPIAAAzIgOAAIAAgPIAAAAQgEAGgFAEQgFAEgGABIgKACQgIAAgGgDgAgQAFQgGADAAAJQAAAIAFADQAGAEAIAAQAFAAAGgDQAGgCAFgHQAEgGABgKIgJgBIgJgBIgGAAQgKAAgGADg");
	this.shape_10.setTransform(12,2.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAxAqIAAgwQABgGgCgFQgCgFgDgDQgEgDgHAAQgHAAgGAEQgFADgDAHQgDAGgBAHIAAArIgNAAIAAgwQAAgGgBgGQgCgEgEgDQgEgDgHAAQgLAAgGAIQgIAHAAAPIAAAoIgOAAIAAhRIAOAAIAAAQIAAAAQAFgIAHgFQAIgFAKAAQALAAAGAFQAFAGACAJQAFgJAJgGQAHgFALAAQAKAAAFAEQAHAFACAHQADAIAAAKIAAAxg");
	this.shape_11.setTransform(0.1,2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgBQAEgBADgEQADgDAAgEQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgJAEgFQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAGQAAAGAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAGgIADQgJACgIAAQgIAAgIgCg");
	this.shape_12.setTransform(-15.5,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRAnQgKgEgGgKQgFgKAAgOQAAgOAFgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAEAJQAFAKAAANIAAAFIg/AAQACAOAHAGQAJAFAMABIAOgCIAPgEIAAANIgJADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgGQgGgHgLAAQgFAAgGACQgFADgEAGQgEAFgBAJIAxAAIAAAAg");
	this.shape_13.setTransform(-23.8,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAyAqIAAgwQAAgGgCgFQgBgFgEgDQgEgDgGAAQgJAAgFAEQgFADgEAHQgDAGAAAHIAAArIgNAAIAAgwQAAgGgCgGQgCgEgDgDQgEgDgHAAQgLAAgHAIQgGAHAAAPIAAAoIgPAAIAAhRIAOAAIAAAQIABAAQAEgIAHgFQAIgFAKAAQALAAAGAFQAFAGADAJQAEgJAIgGQAJgFAKAAQAKAAAFAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_14.setTransform(-35.8,2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAoQgHgCgEgGQgEgGAAgKQAAgJAEgFQAEgFAHgCQAHgDAKAAIAHABIAKAAIAKABIAAgFQAAgJgGgFQgGgEgKAAIgKAAIgLADIgJADIAAgNIAJgDIAMgCIAKgBQARAAAJAJQAJAIAAAPIAAAzIgOAAIAAgPIAAAAQgEAGgFAEQgFAEgGABIgKACQgIAAgGgDgAgQAFQgGADAAAJQAAAIAFADQAGAEAIAAQAFAAAGgDQAGgCAFgHQAEgGABgKIgJgBIgJgBIgGAAQgKAAgGADg");
	this.shape_15.setTransform(-48.2,2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTA+IgQgDIABgMIAKACIALABIALABQAIAAAHgCQAHgDAFgHQADgGAAgMIABgQIgBAAQgFAJgIAEQgHAEgKABQgMAAgIgGQgKgFgFgJQgFgJAAgOQAAgMAFgKQAFgKAKgFQAIgGAMAAQAJAAAIAFQAHAEAGAIIABAAIAAgOIAOAAIAABRQAAAPgHAJQgFAKgLAEQgKAEgMAAIgRgBgAgNguQgHAEgEAGQgDAHAAAJQAAAKADAHQAEAFAHAEQAFAEAIAAQAIAAAHgEQAGgEAEgFQAEgIAAgJQAAgHgEgIQgDgGgHgFQgHgDgIAAQgIgBgFAEg");
	this.shape_16.setTransform(-57.9,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_17.setTransform(-73.6,2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAnQgKgEgGgKQgFgKAAgOQAAgOAFgKQAGgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAEAJQAFAKAAANIAAAFIg/AAQACAOAHAGQAJAFAMABIAOgCIAPgEIAAANIgJADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgGQgGgHgLAAQgFAAgGACQgFADgEAGQgEAFgBAJIAxAAIAAAAg");
	this.shape_18.setTransform(-84.5,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgmA+IAAh7IBNAAIAAAOIg/AAIAAApIA7AAIAAANIg7AAIAAA3g");
	this.shape_19.setTransform(-93.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,-11.8,208.4,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAfIgNgWIgIAAIAAAWIgMAAIAAg9IAbAAQAHAAAEADQAEACACAFQADAEAAAGQAAAIgEAEQgEAFgGABIAQAXgAgMAAIANAAQAFAAADgDQACgCAAgFQAAgEgCgDQgDgDgFAAIgNAAg");
	this.shape.setTransform(26.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEAfIgZg9IANAAIAQAuIARguIANAAIgZA9g");
	this.shape_1.setTransform(20.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAeQgEgDgCgFQgCgFgBgGQABgGACgFQADgEADgDQAFgDAGAAQADAAAEACQADACADADIABAAIgBgGIAAgWIALAAIAAA+IgKAAIAAgGIgBAAQgDAEgDACQgEABgDAAQgGAAgFgCgAgHACQgDAEAAAFQAAAFADADQADAEAEAAQADAAADgCQADgBABgDQABgDABgDQgBgEgBgCIgEgFQgDAAgDAAQgEAAgDACg");
	this.shape_2.setTransform(14.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAUQgDgBgCgDQgCgDAAgEQAAgFACgDQACgCAEgBQAEgBAFgBIAEABIAHAAIAAgCQAAgDgDgCQgCgBgEgBIgFABIgGABIgEABIgBgIIAGgCIAGgBIAFgBQAHAAAEACQAEADACADQACAEAAAFIAAAZIgLAAIAAgGQgDADgEACIgHABQgEAAgDgBgAgFAEQgDABAAAEQAAAAAAABQABABAAAAQAAABAAAAQABABAAAAQACACADgBIAEgBIAEgDIACgHIgEAAIgEAAQgDgBgDACg");
	this.shape_3.setTransform(9.5,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLATQgFgDgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAFgEAGAAQAHAAAFAEQAFADADAEQACAFAAAFQAAAGgCAFQgDAFgFADQgFACgHAAQgGAAgFgCgAgFgJQgDABgBADIgBAFIABAGQABADADACQACABADAAQAEAAACgBQACgCABgDIABgGIgBgFQgBgDgCgBQgCgCgEAAQgDAAgCACg");
	this.shape_4.setTransform(4.7,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_5.setTransform(1.1,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfIAAg8IALAAIAAAHQADgEADgCQAEgCADAAQAHAAAEADQAFADACAEQADAFgBAGQABAGgDAEQgCAFgFADQgEADgGAAQgEAAgDgCIgHgFIAAAGIAAAUgAgGgTIgDAEQgCADAAADQAAAEACACQABADACABQADABADAAQAFAAADgCQADgDAAgGQAAgFgDgDQgDgEgFAAQgDAAgDACg");
	this.shape_6.setTransform(-2.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAZQgHgIAAgMIAAgjIAMAAIAAAiQAAAGACAEQACAEADABQAEABADAAQAEAAADgBQAEgBACgEQACgEAAgGIAAgiIAMAAIAAAjQAAAMgHAIQgHAGgNABQgMgBgHgGg");
	this.shape_7.setTransform(-8.5,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_8.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,54.8,14.2);


(lib.text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAJAVIAAgWQAAgEgCgCQgCgDgEAAQgEAAgCADQgDAEAAAEIAAAUIgLAAIAAgoIALAAIAAAHQADgEAEgCQACgCAFAAQAHAAAEAEQADAFAAAIIAAAYg");
	this.shape.setTransform(18,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLATQgFgDgDgFQgCgFAAgGQAAgFACgFQADgEAFgEQAFgDAGAAQAHAAAFADQAFAEADAEQACAFAAAFQAAAGgCAFQgDAFgFADQgFACgHABQgGgBgFgCgAgFgJQgDACgBACIgBAFIABAGQABADADACQACABADAAQAEAAACgBQACgCABgDIABgGIgBgFQgBgCgCgCQgCgCgEAAQgDAAgCACg");
	this.shape_1.setTransform(13,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAfIgIgBIABgKIAEABIAGABIAFABIAGgBQADgBADgDQACgCAAgFIAAgHIgBAAQgDAEgDACQgDABgEAAQgGAAgEgCQgFgDgCgFQgCgEgBgGQABgGACgFQACgFAFgDQAEgDAGAAQAEAAADACIAHAFIAAgGIAKAAIAAApQABAIgEAFQgDAEgGACQgFACgFAAIgKgBgAgHgSQgDAEAAAFQAAAFADADQADADAFAAQADAAACgCQADAAACgDIABgGIgBgGIgFgFQgCgBgDAAQgFAAgDADg");
	this.shape_2.setTransform(7.9,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,-9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLATQgFgDgDgFQgCgFAAgGQAAgFACgFQADgEAFgEQAFgDAGAAQAHAAAFADQAFAEADAEQACAFAAAFQAAAGgCAFQgDAFgFADQgFACgHABQgGgBgFgCgAgFgJQgDACgBACIgBAFIABAGQABADADACQACABADAAQAEAAACgBQACgCABgDIABgGIgBgFQgBgCgCgCQgCgCgEAAQgDAAgCACg");
	this.shape_5.setTransform(-3.8,-10);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWAfIAAg9IAZAAQAGAAAFADQAEACADAFQACAFAAAFQAAAGgCAEQgDAFgEACQgFADgGAAIgOAAIAAAVgAgLAAIANAAQADAAACgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAIABgGIgBgFQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAAAQgCgCgDAAIgNAAg");
	this.shape_6.setTransform(-8.8,-11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-18.1,46.1,14.2);


(lib.text2_mc = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(109.1,-4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgCgEgBgEQABgEACgDQADgDAEAAQAFAAADADQACADABAEQgBAEgCAEQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(102.7,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_2.setTransform(98.5,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_3.setTransform(94.6,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAoQgHgCgEgGQgEgGAAgKQAAgJAEgFQAEgFAHgCQAHgDAKAAIAHABIAKAAIAKABIAAgFQAAgJgGgFQgGgEgKAAIgKAAIgLADIgJADIAAgNIAJgDIAMgCIAKgBQARAAAJAJQAJAIAAAPIAAAzIgOAAIAAgPIAAAAQgEAGgFAEQgFAEgGABIgKACQgIAAgGgDgAgQAFQgGADAAAJQAAAIAFADQAGAEAIAAQAFAAAGgDQAGgCAFgHQAEgGABgKIgJgBIgJgBIgGAAQgKAAgGADg");
	this.shape_4.setTransform(87.7,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAnQgKgFgGgKQgGgJAAgPQAAgNAGgKQAGgJAKgFQAKgFAMAAIAOACIANADIgBAOQgGgDgIgCIgMgBQgNAAgIAIQgIAHAAAOQAAAQAIAHQAIAIANAAIAMgCQAIgCAGgDIABAOQgGADgHABIgOABQgMAAgKgEg");
	this.shape_5.setTransform(79.1,3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAnQgKgFgGgJQgFgJAAgQQAAgOAFgJQAGgJAJgFQAJgFAKAAQAMAAAIAFQAJAFAEAJQAFAJAAAOIAAAFIg/AAQACAOAHAGQAIAFANABIAOgCIAOgEIABANIgJADIgKABIgKABQgNAAgKgEgAAZgEQgBgNgGgGQgGgHgLAAQgGAAgFACQgGADgDAGQgEAFgBAKIAxAAIAAAAg");
	this.shape_6.setTransform(70.4,3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbA+IgfgtIgbAAIAAAtIgOAAIAAh7IAyAAQAMABAJAEQAJAFAEAJQAFAJgBAMQAAAQgIAJQgHAKgQACIAiAugAgfADIAjAAQAMAAAHgGQAFgHABgLQgBgMgFgHQgHgHgMAAIgjAAg");
	this.shape_7.setTransform(60.8,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgJQAFgKAJgGQAKgGANAAQAOAAAJAGQAKAGAFAKQAFAJAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJABQAKgBAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_8.setTransform(45.5,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNA8QgIgEgHgJIAAAAIAAAPIgOAAIAAh9IAOAAIAAAtIAAAOIABAAQAFgHAIgFQAIgFAJAAQAMAAAJAGQAJAFAFAKQAFAIAAANQAAAOgFAJQgFAKgJAFQgJAFgMAAQgJAAgHgEgAgOgEQgGAEgEAGQgEAGAAAJQAAAJAEAHQADAGAHAFQAGAEAIAAQAJAAAGgEQAGgEAEgGQADgHAAgKQAAgJgDgHQgEgFgGgEQgGgEgJAAQgHAAgHAEg");
	this.shape_9.setTransform(35.5,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgJQAFgKAJgGQAKgGANAAQAOAAAJAGQAKAGAFAKQAFAJAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJABQAKgBAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_10.setTransform(25.2,3.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbA+IgggtIgaAAIAAAtIgOAAIAAh7IAxAAQAOABAIAEQAIAFAFAJQAFAJAAAMQgBAQgHAJQgJAKgQACIAjAugAgfADIAiAAQANAAAGgGQAHgHgBgLQABgMgHgHQgGgHgNAAIgiAAg");
	this.shape_11.setTransform(15.2,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAqQgIgCgGgCIADgOIANAFQAHACAHAAQAFAAAFgBQAEgCADgDQADgDAAgEQAAgGgFgDQgFgCgHgCIgOgDQgHgCgFgEQgFgEAAgJQAAgIAEgGQAFgFAHgDQAHgDAHAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAGAFACQAFADAGACIAOADQAIADAFADQAFAFAAAJQAAAJgFAHQgFAFgIADQgJACgIAAQgIAAgIgBg");
	this.shape_12.setTransform(1,3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAoQgHgCgEgGQgEgGAAgKQAAgJAEgFQAEgFAHgCQAHgDAKAAIAHABIAKAAIAKABIAAgFQAAgJgGgFQgGgEgKAAIgKAAIgLADIgJADIAAgNIAJgDIAMgCIAKgBQARAAAJAJQAJAIAAAPIAAAzIgOAAIAAgPIAAAAQgEAGgFAEQgFAEgGABIgKACQgIAAgGgDgAgQAFQgGADAAAJQAAAIAFADQAGAEAIAAQAFAAAGgDQAGgCAFgHQAEgGABgKIgJgBIgJgBIgGAAQgKAAgGADg");
	this.shape_13.setTransform(-7.7,3.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_14.setTransform(-18.3,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAmQgGgFgDgHQgDgIAAgJIAAgyIAOAAIAAAwQAAAGACAFQACAFAEADQAEADAHAAQAHAAAGgDQAGgEADgHQADgHAAgKIAAgnIAPAAIAABRIgOAAIAAgQIgBAAQgEAIgHAFQgIAFgKAAQgKAAgHgEg");
	this.shape_15.setTransform(-25,3.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPQAAgPAGgHQAEgHAMAAIAHAAIAGACIAAAMIgFgBIgGAAQgGAAgDAEQgCAEAAAJIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_16.setTransform(-32.1,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAqIAAhQIAOAAIAAAPIABAAIAFgIQADgEAFgDQAFgDAGAAIAHABIAAAOIgEgBIgFAAQgIABgEADQgFAEgDAHQgCAGAAAIIAAAog");
	this.shape_17.setTransform(-37.6,3.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAnQgKgFgFgJQgGgJAAgQQAAgOAGgJQAFgJAJgFQAJgFALAAQALAAAIAFQAIAFAFAJQAEAJABAOIAAAFIg+AAQAAAOAJAGQAHAFANABIAPgCIANgEIABANIgJADIgLABIgJABQgMAAgLgEgAAYgEQAAgNgGgGQgGgHgLAAQgFAAgGACQgGADgEAGQgDAFAAAKIAvAAIAAAAg");
	this.shape_18.setTransform(-45.5,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_19.setTransform(-56.6,3.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgJQAFgKAJgGQAKgGANAAQAOAAAJAGQAKAGAFAKQAFAJAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJABQAKgBAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_20.setTransform(-68,3.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAQAGgJAIgEQAIgEAJgBQAMABAJAFQAJAGAFAJQAFAKAAANQAAANgFAIQgFAKgJAFQgJAFgMABQgJAAgIgFQgIgFgFgHIgBAAIAAAOIAAApgAgOgtQgHAFgDAGQgEAHAAAJQAAAJAEAHQAEAFAGAEQAHAEAHAAQANAAAIgIQAHgHAAgOQAAgOgHgJQgIgHgNAAQgIAAgGADg");
	this.shape_21.setTransform(-78,5.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAqQgIgCgGgCIADgOIANAFQAHACAHAAQAFAAAFgBQAEgCADgDQADgDAAgEQAAgGgFgDQgFgCgHgCIgOgDQgHgCgFgEQgFgEAAgJQAAgIAEgGQAFgFAHgDQAHgDAHAAQAIAAAHACQAIABAGAEIgEANQgFgEgGgCQgHgCgGAAQgHAAgFADQgEADAAAFQAAAGAFACQAFADAGACIAOADQAIADAFADQAFAFAAAJQAAAJgFAHQgFAFgIADQgJACgIAAQgIAAgIgBg");
	this.shape_22.setTransform(-91.4,3.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgVAoQgHgCgEgGQgEgGAAgKQAAgJAEgFQAEgFAHgCQAHgDAKAAIAHABIAKAAIAKABIAAgFQAAgJgGgFQgGgEgKAAIgKAAIgLADIgJADIAAgNIAJgDIAMgCIAKgBQARAAAJAJQAJAIAAAPIAAAzIgOAAIAAgPIAAAAQgEAGgFAEQgFAEgGABIgKACQgIAAgGgDgAgQAFQgGADAAAJQAAAIAFADQAGAEAIAAQAFAAAGgDQAGgCAFgHQAEgGABgKIgJgBIgJgBIgGAAQgKAAgGADg");
	this.shape_23.setTransform(-100.1,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.7,-10.7,218.8,24.4);


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
	this.shape.graphics.f("#F4C120").s().p("AGvF9QgQgDgKgHIgGgEIAAgBIgBAAIgBgBIABAAIACABIAAgCQgFgBgEgDIgCgDIAHAFIALAHIAAAAIABABIAAgBQADAAACACIABABIABAAIgEgCIADACIABAAIAEADIAEACQADAAACABIAGACIAIABQAHABADgBIAFAAIgBgBQgMACgHgDIgCAAQAJABAJgBIACABQABgCAFAAIAKgDIAIgCQAFgCABgBIAHgDIAOgHIANgIIAIgFIAAgCIgQAJIgTAKIgTAJIgQAEQgKABgHgCQgHgDgHABQgDgCgCAAQgEgBgBgBIgNgHIgCgBIAIAEQAGADADAAIABgCIgQgGQgHgEgHgGIgBAAIgIgFIABABIgCAAQADAFAFABIAAACIgOgMQgJgIgBgEIAAgBQAAABAAAAQABABAAAAQAAAAABAAQAAAAABAAIAAgCIgBgCIgDgDIgBgBIACAAIADACIAAgBIAAAAIgBgCQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAABQAAAAABABQAAAAAAABQABAAAAAAIgBAAIABACIADABIAJAJQAFAFAEABIAAgBQgGgCgDgGIACABIgFgGQgCgCgBgEIAAgCIgDgCIgHgGIAJgXIAHgnQABgIAEgNQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABgCIgBAAIAAgEIABAAIABgCIAAABIABgBIAAgGIACgFIAAABIAAADIAAAAIABAAIABgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFIAFgZIAEgPQADgKACgYIABgCQABgKADgVIAHgnIAHglQAEgSgBgGQADgOACgQQABgOAFgQQgBgHADgHQADgIgBgGIAAgBQAAgDADgGQgBgLADgKQADgKAAgLIAAAAIAEgPIACgPIAAABIACgHIAAgCIgBAAIAAgBIABAAIABgEIgBAAIgBADIACgQIAEgZIADgZIABgNIABgCIAAABIABgCIgBgIIAAgJIAFgWQACgLAEgIQADgIAIgIIAIgHQAIgCAFgGIALgEIABgCIADAAIAAgDIACgBIgBgBIACgCIgDgBIgCgDIAAgCQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIACACIAAgEIABgCIAEAFQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAHAAIAAABIADgBIAAgFIABgCIgBABIgBAAIgCgCIgBgFIACABIACgCIAFgBIADABIgCADIAEAAIAEgFIACABIABAAIABAEIADADIAAAEIAEABIAFAFIACAAIAAgCIgEgCIABgCIgDgBIACgDIgEgDIAAgDIgFABQAAgEADgBIAEgCIAFgBQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAEABIAEAFIADAHIACABIABAFIACAEIAAAGIACABIACgEIgDgMQgCgHABgFIABACIAEACIAAADIAGAGQABAKACACIgBABIAAAHIABAGIgCACQAFATgGATQgGASgCAVQgCABABAEQAAAFgCABIgBgEIgBAGIAAgBIgBAGQAAAGgCAGQADAEgDAHIgEALQABAGgCAEQgBAEAAAGIAAgBIAAADIgWCBIgNBBQABgNADgNIgCAAIAAgCIgEASQgCAIABAIIgDAIIgFAlIABADIgCAIQgCABgBAEIgCAHIgDARQgDALABAGIAAABIACgIIAAACQgDAOABAGIgBABIAAAGIgBAGIgCAAIABgCIAAgBIgDAFIAAABIACgBIAAACIAAgCIAAAJIgBgBIAAALIgDARIgDASQgCAGgBAHIgKBVQAZgIAbgMIAygZIBagmIBaglQAZgKAfgFQAOgBALAAIgEAEIAPABQAJAAAEADQgcARgeAPIhKAfIhbAnIABAAIgBABIgBAAIABgBIgEACIAAABIgKAHIgLAFIgQAJIggARIgjASIgWANIgCACIAAABIAAgBIgGAEQgHABgEAEIgEACIAEgDQAAgBANgGIAdgRIAegQIARgJIABAAQADgFAGgCIAMgFIADgCIAGgDIAUgMIgGADIgIADIAAABIgBAAIgEACIgCABQABABAHgEIAHgEIAAAAIgVANIAAgBIgBABQgGABgHAEIAAABIgBAAIgCABIABgBIgDACIABAAIgDACIgTALIgGACQgFACgDADIgKAGIgHACIgBABIgHAFIgIADIgGAFQgDAAgDADQgEgBgDADQgEACgCADIgEACQgDABgBACIgCAAIABABIADgBIgGAEIgKAGQgEABgKAGQgLAFgHAAIgHADIAAgBIgBAAIgBABIgJABIgUgCgAHCF4IACAAIgCgBIgCAAgAG1F2IAJACIACgBIADgBIAAAAIgFAAIgJgCIgJgBIgCAAIALADgAHoFzIgEACIAIgDIAFgCIAFgCIAAgBIgBABIABgCIACgBIgBAAQgHAFgIADgAGnFzIACgBIgCAAIAAAAgAGZFnIgQgJIAAgBIgCAAIABAAIAAABIgCgCIAAAAIABACIgBAAIgCgBIgBgBIAAABIABAAIAFAEIABgBIAEADIAKAEIABAAgAF6FYIAAABIABAAIgBgCIgCgBgAIWFVIgBACIACAAIAIgFIgEACIAAgBgAF2FWIgDgDIACAAQAAABAAAAIABABIAAgBQABAAAAAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIgCgBIAAAAIgBAAIABAAIgBgBIAAgBIgDgCIABAEIAFAFgAFvFHIAAgBIgBAAgAJwEnIABAAIACgBIgCAAgAGKDfIAAABIgCADQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIACgGIAAgGIgBAFIgBAEIAAgBIAAACgAILCNIAAABIAAACIACgDIgBgBIgBABgAIPCHIAAAAIAAgCQAAABAAABQABAAAAAAQAAAAAAgBQAAgBAAgBIABgGIAAgCgAIOB7IAAACIABgDIAAABIAAgCgAGoBDIAAADIABgCIAAgCIAAgBgAGrAyIAAADIACgKQgEADACAEgAGtAlIACgFIABgFgAGwAVIACAAIgBgCIgBACgAG2gKIABgCIAAgDIgBAFgAG9gzIAAABIgBABIAAABIABAAIABgCIAAgCgAHAg/IAAgCIgBAAgAHWjTIgCAJQgBAEAAAEIABABIABgGQgBgCACgEIABgCIAAgDIAAgCgAHYjbIABACIAAgFIACgLQgEAIABAGgAJQjbQABgFAAgDIAAgBQgCACABAHgAJOjiIgBAGIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAgBIAAgFIAAgDIgBAGgAIoluIADAEIABAAIADAAIABABIADgBIgEgFIgDgBIAAgDgAGjF3IgBgBIABAAIAHACQAEABACABIgNgDgAGeF0IAAgBIABAAIAAABgAGJFsIAAgBIgEgBIgDgCIgDgDIgDgCIgDgDIgBgBIAAgBIABABIgBgBIAPALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIADADIgFgCgAGSFsIAAAAQAAgBAAABgAGQFrIABAAIABABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAGCFfQgBgBABAAIAAABgAIdFYIACgBIAAABgAFxFXIAAgBIgBgBIABAAIACACgAFvFVIABABIAAABgAIlFTIAAABIgBAAgAImFTIABAAIgBABgAEcFSIgBgCQAGgDAJAAIgJAFgAEsFKIADgCIABgBIAGgCIAHgDIACAAIAAAAIgGAFQgFADgCAAIgBAAIgCADgAEsFGIAAgDIAFgFIAAgBIAEgFQACgEADgBIAAAAIAAgCIgCgBIACAAIAAAAIAAgCIgDAAIgCAFQgDAAgCADIgEAEIgCAAIgEADIAAABQgGABgEADIgJAAIgLgJIACgDIAEADIADgDIAEgBIABgEIACACIABgBIgBgCIAEAAIACAAIAAAAQABgDAEgCIgCAAIgGACQgEABgDACIgEgBIgCAEIgGABIgCACIAAACQgFAAgBgEQgBgEgEgCIABgDIAGAAIAGgDIgEgCIgBgBIgEgBIACADIgCAAIgCgBIgFABIACACIAAAGIACAEIgEgBIgCgCQgFgBgDgEIAEgDIAEABIABABIgBgEIAEgFIgEgFIACgCIADABIACgBIgBgDIgEABIgCgBIgCAEQAAABAAABQAAAAAAABQAAABAAAAQAAABAAAAIgEAAIgEgCIgCABIgBAGQgBAEgDAAIgDAAIgCgDIAEgEIgIAAIABgCIACABIABgBIAEAAIgCgFIADAAIgDgBIAEgDIgCgBIgEAAIADgCIgEgGIADgCIAAgDIAEgCIAAABIADgBIABgDIgEgGQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIgBgFIgCADIgCAHIgBgCIgEAAIADADIgCADIAAAEIgDAAIgDACIAAgBQAAgFAEgKIAEgOIACAAIAAgFQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAIACABQAAgMAEgKQADgNAAgKIgBgBIABgEIABgBIAKhGIAMhHIgjADIghAEQgHAKgLAUIgRAeQgBABAAAAQgBAAAAABQAAAAgBAAQgBAAAAAAIgEABIgBABIAAgBIgFACQgEAAgEADQgEAEgDABQgBADgEABIgEABIAAAAIgIACIgDADQgCgBgFAFQgEAEgDACIAAgEQgFAAgDAEIgBgBIgLAAIADgFIACgFIAAgDIgDAAIAAgBIADAAIABgHIACgIIgDgBIgFAJIAAgFIACgCIgBgCIAAAAIgBAAIABAAIgBABIAAABIAAACIgDADIgCgBIABgJIACgFIACgFIAAAAIADgDIAAAAIABgBIABgBIgHADIgCAEIABgCIACAAIgDACIgCACIAAAAIAAgBIABgEIgFADIAAAAIABACIADgBIgBABIgCABIAAAAIgCAFIAAABQABAAAAABQABAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIABgDIgBAAIgCACIAAgDIAAgDIgJAFIgKAEIgBAAQAKgGAKgEIAAgCIgVALIgBAAIgDABIgBACIgCACIgCgCIAAACIACAAIgGADIgJAEIAFgDIAAgBQAAABABAAQAAABAAgBQAAAAABAAQAAgBAAgBIgEAAIgEAEIgEAEIgHAEIAAgBIABgCIACAAIAAgBIgCACIgEABIABABIACAAIgHADIgNAIIgCAAQgGAGgWAMQgYANggAOIhFAhIhFAgIg4AXQgaAIgFAAQgNAAgNgHQgOgJgKgMQgLgMgHgPQgIgOgBgNIgBABIgBgCIACAAIAAgIIgDAAIgBgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIABgBQAAgKAEgFIABACIgCAGIADgCIADgLIAFgMIgBgGIAAABIgCAEIgCACIgEAGIgBgBIACgIIABgCIAAgBIgBADIgEAGQAAADgDACQgDACAAADIgBgBQAAgDADgFQADgFAAgFIAAgBIAIgKQAAABgBAAQAAAAAAAAQAAgBAAAAQAAgBABgBIAEgFIgBgBIADgCIAHgKIAQgTIAfghIgBgBIABAAIABABIADgEIAFgFIgBgBIACABIAAgCIAAAAIAEgDIgCgBIADAAIAFgFIAEgFIAAgCIACABIAHgGIAKgHIgBgBIACAAIgQAQIgQAPQgEAIgMAJQgNAJgCAIIgEACIgEAGIgCAAIACACIgFADIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgEADIAAACIgFAEIAAABIgCACIgFAIIgFAHIAAABQgGAFgBAJIAGgJIABABIAAgCQADAAABgDQACgDACgCIACgBQAAgCAFgGIAKgPIAMgOIAJgKIABACIAEgFIABAAIACgFIABAAQAHgEAEgHQAEgIAIgFIABAAIAGgGIgBgBIAEgEIABAAIAFgDIANgPIgIAGIADgEIgBAAQACgFAFAAQABgDAEgCIgDAFIgDADIAHgHIAWgUIAAABIATgTIAMgNIAJgGIgKAKIAAgBIgBAAIABABIgHAIQgJAKgKAHIgBADIADgDIABABQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBIACgBIgBABIAAACQACgDAGgFIgDACIAGgGIADgDIACgCIABAAIgBgBIABgBIABABIAAgBIADgBIABgCIAGgGQAFgFACgGIADgBIAYgZIgCADIAEgEIABgCIgFACIgXAKIABAAIgBAAIAHgEIAAABIAHgEIAAAAIgEABIgXALIgZAMIAAABIgpASIgxAWIguAXQgWANgOAKQgEAAgGAFQgFAEgDAAQgNAFgXANIAAAAIAAAFIgEAAIAAABQgEAAgEACIgBAAIABgBIAGgCIAFgFQgMAFgJAGQgEAAgBAEIgFADIABACIABgCIABABIABgBIgBABIAHAFIABADQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAIgCACIAEAGIAGAHIgCgBQABACADACIgCgDIABAAIAGAIIACAEIAAABIgBgBQAJAPAEAWIAJAQIAHAOIAAAEQAAABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIgBgBIAFACQgCACABAFQACADAAAEIgBAOIgDAEIgDAFIAAACIgEAEIgBADIgCgDIABgHIgBgBIAAgGIgBgFIACgCIAAgBIgBAAIgCABIgBAAQABAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAIAAACIgCgBIgBABIABAAIABAFIgCAFIABACQgEAMgHAKQgIAKgNAAQgFAAAAgDIAGgCIABAAIABgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIgCgCIAEgDIgCgBQADgDACgBIACgHIgDABIgGAJQgCAEgFADIACADIgGAGIgBADIACABIgGADIgEgDIgHACIgBgDIADgCQACgCABgFIADgBIgHABIgEABIADgBIABADIgGACIgCAEIAFADIAGADIgFADQgEgBgCACIgFABIgCAAIACgFQABgDADAAIABAAIgCgCIgCAAIABgFIgHgCIAAgCQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIABgEIgDAAIgCAEIgEABIACACQgBABAAABQAAAAABAAQAAABAAAAQABAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgKAGIgBADIABABIACAAIAAAEIgDAEIABABIgCACIgDgBIAAgEIgEAEIgDABIAAgBIABgBIABgDIADgCIgDgBIgBgBIADgCIgEAAIABgEIgDABIgCACIgBgBIACgCIgBgBIgDABIgEgBIAAgFIgBgBIABgEIADAAIABgDIgBgDIgDgDIgEADIgFACQAAAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgDgCIAAAEIADAGIgDgBIgDAEIAEgBIAAAEIADADIABAAIgEADIgBADIgCgEQgBgGgDgGIgHgLIABgCQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAGgEQACgCAEgBQAAAAAAAAQgBgBAAAAQAAAAABgBQAAAAABAAIAEgBIgBgFIgFgJIgFgKIABgBQgIgJgFgJQgGgJgHgIQgFgRgMgNQgNgMgGgRIABAAQgMgRgGgLIgTgeQgEgBAAgDIgDgIIgDAAIAAgEQgGgFgBgCIgDAAIAAgBIACgCIgCgBIgDgFIgCAAIgDgCIACgBIABAAIgFgCIAEgDIgDgDIAEAAIgJgMIgJgOIgEALIABAAIAAADIgCAAQgCAFgBADIgDAHIAAADIAAAAIAAABIgIATIgHAVIgDAJIgGAOIgJAZIgIAYIgEAMIgGARIgDAKIgDAKIgOgEQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAIgCAEQgFAAgBABIACABIgEADIgEAAQgCAEgEADQgFACgBAFIgCAAIAAgCIgBAAIgDADQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIgBgDQAAABAAAAQAAAAgBABQAAAAgBABQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDACIgBgBQADgHAAgDQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIACAAIgBgQIgCgBIgBABQAAADgEAGIAAgEQgBAAAAABQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBgEIAAgCIACgEIgBgBIAAgEQAAABgBABQAAABAAAAQgBABAAAAQgBAAAAAAIgBAAIABgCQAAgHACgFIABgNQAAgEgDgDQgCACAAAEIgCAHIAAgBIgCgFIgBAAIAAgDIAAADQgCACAAAEIgBAGQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIABgEIACgNIAEgNIgCgKQAAAEgDAFIgCAPIgBACIABAFIgBAFIgCAIIgBAHIABABQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAgKADgJQACgJAAgKIABgCQAAgFACgDIADgIQAIguAKgjQAJgjAPgrIA2ieQAHgWAKgTQAKgVAAgWIgBgKQgBgEABgEQAAgDADgDQACgEAHgEIAAABIgCAIIAEgBQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAIAAABIgBACIAEgDIABACIADgBIABgCIAFgCIADAEIACgEQAGAAADgDIAEADIACgEIAFABIAGgBIADgBIgBgBIAEgDIAGACQAFABgBgEQALAAAKgCIAUgCIAKABIADgDIABAAIAAAEIgBABIAUgBIAagBIAagDQALAAAGgEIALgEQAEgCAHgBIABABQAGACAHgBIAOAAIgCAFIACACIAAAKQAAABgBAAQAAABAAAAQAAAAAAAAQABABAAAAIAEABIACgCIAAABQACABAGAAIAKgBIAKACIAEgBIgCgEIAJAFIgBACIADAAIAAAAQADgEAHgGQAAgDAFAAIgBABIAAABIAEgBIABgBIAFAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIAIgBIAEACQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAgBIAMAAIgBgBIAEgCIAGACQADABAAgDQAKACAKgBIAVAAIARAHQAHACAMAAIAQABIAFgBIABAAIAJABIABgBIAAgBIABABIgBAAIAAABIAIgBQAEABAFgCIAHgBIAMgCIAMAAIAHgBQgGAAgDgCIAAABIgDAAIAAgBQABAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAAAIAHAAQAFAAADACIAIAAIABABIABgCIAFABQADAAADACIgBABIgBAAIgEgBIgPAAIAKACIANABIAFgBIABAAIgBAAIgBAAIgCgBIABABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgBIACgBQAIADALgDQANgCAHAAIABABIABgBIAHAAIALgBIALAAQAGgBAAgBIAEgCQAAAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAIAAACIACgBIACAFIgDABIgBACIAAADIABABIABgCIACACIAAgBIABADIAAABIABACIgBgBIAAAIIgBACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIABAFIgFAHQgFACgDAGQgEAGgKAEQAEAAAEgCIACABIgLACIgLABIgMABQgwAFgvAAQgtAAgxADQgJABgGAFQgGAGgEAJIgHARIgEAOIAmAAIAEgBIAFgBIAEgBIAAgBIABAAIABAAIABAAIAAgBIAEAAIADgBIABABIAAgBIABAEIABgBQAGACAGgDIADgBIACABIAEAAIAAABIADgBQABACAHAAQAFAAAEgCQAEACAIAAQAIABAEgCQAFACAEAAIAJgBIACgBIABAAIACAAIAFAAIACABIADABIACgBIAHABIACgCQADABACACQAAAAAAABQABAAAAAAQABAAABABQAAAAABAAIABgBIAEADIgBACIABAAIAAAAIADABIgBACIgCAAIgBgBQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAABAAIADABIAAACQABACAEAAIACAAIACACIAAACIgBgBQgFACgGgBIAAgBIgBABIgBABIAAAAIAEAHQgCAGgDADQACADAEAAIABgBIAAABIABAAIABAAIADAAIgEADIgGABQAAAAAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgCABIADADIAAABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAQgCgCgEAAIgFABIgDABIACABIAAAAQgFABgEACIgFAAQgGAAgHADIAAgBQgDACgGgBQgGAAgCABIAAABIgGgBIgDABIAGACIABAAIAAAAIgGAAQgEgBgBACIAAgBIgBgBIAAAAQghAGgcABQgdABgVAHQgVAGgNARQgMARgDAmQgBAEACAEIAEAHIBhghIBjgfIgCAAIAAAAIAFgBIADgBIABAAIABgBIADAAIAAAAIAEgBIAAgBIAEgBIAAABIACAAIAIgDIAJgBIAHgCIABgBIABABIAAgBIABAAIAEAAQAJAAAGgGIABAAQAEgCADAAIABABIABgBIAFABIAEACIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgBAAIAFgFIAHgHIAAgBIABAAIAIgJIgEAEQACgDAEgDIAGgIIACgBIAAgBIABAAIABgBIAAgBIABAAIABgCIABAAIACgCIAAgBIABABIAAgCIACgCIABgBIAHgHIALgLIAAgBIALgLIAKgLIAHgIIASgRIARgSQAJgIAAgDIABAAIAFgIIABAAIADgEIgEAEIgBABIgDAEIgBAAIAFgGIADgFIAAAAIABgBIAAgBIABAAIgBAEQAIgKAKgKIAggfIAEgBIAAgFIADAAIAJgHQAGgEAFAAIAFACIAFgCIAFADIABAAIgBACIgHABIAAABIgHAEIAKABIAGAAIAAgBIALABIAHAEIAFALQAAADAEAGIAJAMIAJAPIAAABIAEAKIAEAKIgCgBQABAPgIAYQgIAXgNAbIgZAxQgOAXgGAOIgMAUQgHAKgEAMIAAADIgCAEQAAADgCAEQgDAEAAADIAAADIgHAQIgBABIAAACIgBABIAAACIgBAAIgBACIAAACIgBADIgBACIAAABIgCADIgDAFIAAABIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAgBIgIAMIgHAJIgCACIAAgBIgCACIgBABIgCACIABgBIAAABIgBAAIgCADIABgCIABgCIABgDIABgBIAAgCIABAAIACgGIAAgBIgBAAIADgHIABgIIgCAAIABgBIgCAAIAAAEIABAAIABABIgBABIgBgBIgBABIAAACIABgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIAAACIgBAAIgBAEIgDAFIAAABIgBAAIABgCIAAgBIgBAAIAAADIgCAGIgBAGIgBABIAAgDIABgEIAAgCQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBIgCADIABgCQACgGABgGIABgMIAAgBIgCAEIAAADIgBACIgBgEIAAAAIAAgBIAAAAIAAAAQAAgCACgDIgCAAIAAhYQgPAJgSAQQgTAPgXAWQgXAWgWAXQgXAYgUAYQgSAWgRAXQgQAXgIANQAvgJAugSQAxgUApgUIABABQAQgJARgGQAOgFAXgFIACABQACgCAHgCIAKgDIABAAIACgEIAFgKIAHgLIAEgFIAFgJQADgGACgBIAAgBIACAAIAAgCIABAAIAJgNIACgFIgBAAIAAgBIABAAIAAgBIAAgBIACABIAGgJQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAHgKIAGgJIABgCQAEAAACgDIAEgHIADgBIgBgDIAJgQIALgTIAJgSIALgPIAAgEIACAAIABAAIABgKQABgGAGAAIAAACIABACIACgDIgCABIADgEIACgEIAAgBIABAAIAGgOQAagbAVgmQATgkAWghIAAABIAEACIAAACIAFgFIAAgDIACgCIANgSIAFgGIABgCIAFgLIAAAAIgCABIgEgBIAAACIgFAHIAAAFIgDAAIAAgEIgEAJQgCADgDACIABgFQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIgCgBIAGgNIAEgBIgDAFIAAAEIACgBIACgIIAEAAIgCgFIgBAAIAIgCQAFAAAEgDIAAADIACgDIAKACIAAADIACgDIARABQAMABAEgCIAAgBIAFAAIgDABIADADIADgDIACADIAFgCIAOAFIABAAIAAACIAAgCQAFACADADQADADABAFIABARQAAAjgEArQgGAsgGAhIgQBNQgHAngFAiIAEgIIAAADIABACIgBAHIgBAKIgCAJIgCAEIgBAAIABgHIABgIIgCgGQgLBFgHBHIABgCIgDAXIAAgCIgCAOIABgBIgCAcIgDAWIAAgBIgCADIgGAjIgIAjIgCAHIgBAGIABACIAAAAIACADQgEAAgEAJIgIANIAAAAIgEACQgFgCgCAGIgDABgAFOERQgDAKgEAGIADgBIAAgFIAFgNQAEgKAAgEgAD8EXIABAAIAAgBgADmEMIAAABIABAAIADgBIgCAAIgCgBIAAAAgADuEMIABgDIgBAAgAozD9IABAAIABABIAAABIABgDIAAgBIAAAAgAotD1IABACQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAIABACgAoXDzIADAAIgBgBgApGDpIACADIAJACIAAgEIgCgEIgDgBIgCACIgDAAIgBgCIAAAEgAnQDLIABABIABAAIAAAAIABAAIABgEIgCgBgAnIDHIABAAIAAgBIgBAAgAnTDDIABgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAIAAACgAnKDCIADgDIgDgDIgIgUIgDAMIAAABIAAACIACAAIgBACIACABIAAACIAFgDgAtTC7IAAABIACgDIAAgBgAtOCmQgDACABADIgBAEIADAEIAAgCIABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIACgDIgDgFIAAAAgAtbCxIAAABIABAAIAAgCIgCAAgAtbCqIAAAEIACgBIACgDIABAAIACgCIgCgBIgCAAgAtkCsIABgCIgBAAgAtZCjIAAACIABgCIAAAAgAtoCXIgBABQABAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAFAAAAgFIgCgFIAAgCgAmHCKIABAAIACgEIAAgBIgBAAIgCABIAAADIgBAAgABTCBIACgBIAAgCgABYBxIgBAFIAAACIACACIACgEQABgEABgBIAAgDIgBgCQgDACgBADgABMB2IABAAIABgBIgCgBIgBAAgABOBvIgBADIACAAIACgDQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAgBIgBgBIgDAAIgCADgAA3BhIABABIACgCIgDABgAA9A2IAAAAIAAgBgAAzA2IAIAAIAAgEIgIAEgAktAjIAAABIABABIACgBIAAgBIABgCIABAAIAAgCgABTAPIgCADIgCABIAAABIgEAGIACACIADgDIgBgDIAIgIIAJgOIAIgNQAEgGACAAIACgFIgCAAIgEAFIAAgBIgDADIgMARIAAABIgEAHIgEAGIgBAAgAkiAZIABABIAFgGIABAAIAAgCQgDABgEAGgAAQAWIAAABIACgCIAAgBgAATASIABAAIAAgBgAkXANIAAABIACAAIABgCQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAgBAAgAARALIABgBIgBgBgAkSAJIAAABQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAgBIAAgCgAncj6IgrAyIgtA0IgmArIgXAaQAVAkAVAeIAOATQACgGAFgHIAKgUIACAAIAAAAIAEgFIAAgCIgBACIgBgBIAFgJIAHgSIAJgWIgBADIABgBIABgCIgBAAIABgDQADgNAHgQQAFgNAFgPIABgGIADgFIACgEIAFgPIACgGIABgBIgBgBIAAAAIABgBIABgCIABgBIAAAAIABgBIACgHIABgGQABgEACAAIADgMIADgMIAAgDQABAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgDIAAgBIABAAIABgCQAAAAgBAAIAAgBIABgEIACAAIAAgGIADgGIAAABIABAAIAAgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIACgFIAAgCIgKANgABwgJIAAACIABAAIAAgBIABgCgAF5gRQABABAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgDIgBAEgAongXIAAACQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAIAAgCgAB7gsIAAAAIgEAGQgCADgCABQgBAFgDACIACACIAHgKIAIgLIABgDIgBACIgCADIAAgCgADggiIALAAIAAgHIACgDIAAAAIAAgCIABAAIAAAAIABAAIgBACIAAAAIAAAIQArgIALgOQAMgPAAgqIgBgiIgCgjgAobgkIAAAAIgBABIABABIABgBIAAgDgAohgiIABAAIAAAAIADgHIAAAAIABgCIgBACIgBAAgAoZgzIABAAIAAgCIgBACgAoShKIgBACIABABIAAgCIABgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAjOhJIACAAIABgBgAjChNIgBAAIgDADIABAAIAOgHIABgCIAAAAgAoMhZIAAAEIABgCIAAgCIABABIAAgCIgBAAgAoJhgIAAAAIABABIABgCgAoBhxIABAAIAAAAIgBgEgAoAh1IABAAIAAgCIgBAAgAn6iFIgBAAIAAADIgBABIABABIACgFIgBAAIABAAIgBgBIAAABgAiSiKIAAgCIgBgBgAh+iMIABAAIABABIAFgFQANgMAJgOgAiSiNIABABIABAAIgBgBIAAgBgAC7iUIgCACIgCADIAAACIAFgIIAAgBgAiBiNIASgSIgDABIgIAHIgHAHIgBABIAAAAIgBABIAAgBIAAACIABgBgAiMiPIABAAIABAAIAAgBIgCgBgAiIiQIADgBIgCAAIAAgBIgBAAgApykgQgfADgbACQgHAlgDAaIgKA+IAQAJQAmgfAfghQAhgjATguIg7AGgAC9iWIABgDIgBAAgAnvieIABABIABgDIgBgBgAnqisIAAABIABABIABgEIABAAIgBgBIAAAAgAnsisQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAgBIgBAAgAhlivIAAABIAHgHIAAAAIgHAGgAnoixIABABIACgFgAnki5IgBADIABgCIAAAAIABgCIAAAAgAnni3IABAAIAAgBgAgljyIgFAGIACAAIgGAHIgKALIgeAgIABAAIAYgZIAFgGQAGgEAHgHIgGAIQAIgHAGgIIAFgGIgHAHIAdghIgLAJIgSATIgDADIAAgBIAEgFIAFgFIgBgBIgFAGgAi+i+IAAAAIABABIAAgCgAnjjFIgBAFIAAABIABAAIABgFIACgFIAAgBgAnfjLIAAABIABAAIAAgCgAnfjNIABABIAAgCgAhIjPIAAACIAAgBIACgBIABgBIgCAAgAhCjVIAAABIAEgDIgBAAgAEZkmQgDAEAAAEIgFAFQgBAHgDADQgFAFAAAGIgFAEIgBAEIgEAGIgGAJIgGALIgDAIIABACIAIgNQAEgFADgJQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBIADgEIAAgCQAFgFADgIIAEgHIAMgWQADgFAAgCIgCgBIgFAIgAg9jZIAAABIAGgHIgBAAQgCAEgDACgAi/jeIAAAAIAEABIAAgBIgCgBIgBAAgAjEjdIABgBIABAAIgBgBIgBAAgAnWj5IAAACIABgBIAAgCgAASkkIgVAXIgGAIIAjglIgIAGgArNktIABABIAAgDIgBACgArck6IAKAAIgIgCgAE9k6IACgBIgDgBgAnEk9IAAADIABgEgAnJk9IABABIAAgCIgBgBgArXlFIgDAFIAHgHgAnPlKIAAgBIABAAIgBgBIgCAAgAkFlNIAAAAIAEgBIgGAAgAkAlOIABAAIADABIABgCIgDAAgAmXlPIAAACIAKgBIgHgBgAiylPIACAAIADABIABgBIgBgBIAGAAQADAAAEgBIABAAIgBgBIgEAAIgMAAQgFABgHAAIAAgBIgBACIAKgBgAjIlRIACABIAJAAIAAgBIgBgBIgBAAIgCAAIgHAAIAAAAgAjSlSIABABQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAIgBgCIgFAAIgDAAgAjzlRQAEAAAEgBIABAAIgCgBIgDAAQgIgBgFADIAFAAIAEAAgAjKlRIABgBIgDAAgAjalSIACAAIgBgBgAmSlWIgCAEIAGgEgAiklUIAFABIACgBIACAAIAAgBIABABIABgBIAAABIABgBIABAAIAFgBIgCgBIAAABQgGgBgGACQgEABgGAAIgBAAIgBgBIgBAAIgBAAIABACIADgBQADACADgCgAizlTIAEAAIABgBIgFAAgAiGlXQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAgAFKlZIACABIABgBIAAgBgAFPleIACABIgBgDgAFjljQACABADAAIAFABIAKgCIACgCIgDAAIgCgBIgRAAgAFallIgFAAIABADIAEAAIAFgCIAAACIABgBIAAgBIgBgCIgFABgAFSljIABABIACgCIAAgBIAAgBIgFgBIAAACIgBABIAAACIABgDIACgBgAGOljIAEAAIgBgEIgBAAIgFACQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAgBIgBAAQACADAGAAgAFAlkIACgBIgBgBgAEpE+IABgBIABABgAFIE9IgBgEQABgDADgDQADgCAAgDIgBgCIAEAAIgCADIAAAAQAAAIgFAGgAD4E9IACgBIAAABgAD8EqIAAgBIABAAIAAABgADQEjIgDgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIADAAIgBACIAIABIADADIgFgBIgDABIgCgCIgBAAIAAADQgCgBgBgDgApOEiIAAAAIAAgBIABAAIAAACIgBgBgAo5EbIAEgCIAAACIAJgFIAEgBIgBACQgEABgCADIgDAAIgBAAIAAAAIABABIACACIgBAAIAAAAIgGAAIgDACgAn/EQIABAAIAAABIgBgBgAoMENIABAAIgBAAgAo3ENIAAgBIAAAAIAAABgAnkEHIABAAIAAAAgAnsEHIABAAIABgBIgCABgAo/EHIAAgBIABABgAnSEEIAFgHIAHgGIgFAKIgCABIgCADgAmKDzIAAgBIABABgAm5DyIABAAIAAABIgBgBgAnGDzIAEgIIAFgIQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAIAAAAIgDAIIgEAGIAAACIgCADgAGKDhIAAAAIAAAAgApXDgIgKgNIgDgIIgCgCIgCgEQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgBAAIgCgDIABgEIgDgCIgEgFIgBgDIgDgCIgBgEIADAAIABgCQAFAFAEAHIAHAMIAAAAIAAAFQAEACAAABIACAGIAFADIAAAGIABAAIADADIAAABIADAFIgCAAgAFjDWIAEgKIAAAIIgDAGgAm5DTIABgCIgCgGIABgEIgDgCIAEgEIAAAFIACABIABAFIACAEIAAAEIgCACgAs6DLIABAAIAAABgAs6DFIgCABIgEgBIgFABQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgFAGAAIAEgCIgCADIAJgIIACgBIAAACIgBACIgBACIAAACIAGgCIgIAJgAttDHIAAgBIABABgAswDBIABAAIgBAAgAsgC8IABAAIAAAAgAteC8IAAgBIAAAAIABABIgBAAgAs1C3IABgBIAAABgAsxCwIAAgBIAAABgAJyCrIgHgBIgKgEIAAAAIgPgGIgHgEIAAgCIACACIAAgBIAEACIAIADIABAAIgPgHIgBAAIAAAAIgBgCIACACIAAgBIgDgCIgIgKIAAgDIgIgFQAEgJADgJIAEgNIADgOQAAgFAEgLIABgBIAAgBIAAAAIAAgDIABAAIAAgBIABgBIABgDQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAgBIAAACIAAACIABAAIABgCQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgDIAFgaIAGgZIABAAIgBgBIABgCIAEgWIAJglIAAACIAAAEIACgJIgCACIAEgQQADgMgBgHQAEgLABgKQAAgJAFgMQgBgFADgFQADgGgBgFIAAgBIACgGQgBgIADgHQACgGABgJIAAAAIAFgWIAAABIABgFIAAgBIAAAAIAAgBIAAAAIACgDIgBAAIgBACIAKg4IAAgBIAAgBIAAgGIAAgHIAFgPQACgJADgFQAEgHAFgEIAIgHIAIgEIAAAAIAKgEIABgBIACAAIAAgBIAMgBIAFAAIASADQAKACAFAGQALAKABAWIAAAAQgFANgCAPIgBAEIgBAEIgCgDIgBAIQAAAEgCAEQACAEgCAEIgDAIQAAADgBAEIgBAIIAAgBIAAACQgKAxgLAsIgLAuIAEgSIgBAAIAAgCIgEANQgBAGAAAGIgCAGIgCALIgCAKIgBAFIABACIgCAHQAAAAAAAAQgBAAAAABQAAAAgBABQAAABAAAAIgCAFIgCAKIAAABIAAAAIgBABQgCAJAAADIAAABIACgGIABgBIgBADIgCAPIgBAAIAAADIgBAEIgBABIAAgCIAAAAIgBADIgBABIABgBIAAACIABgCIAAABIgBAFIgBAAIAAAIIgCAMIgDANIgCAJIgKA9QAWgGAUgJIApgTQAYgKASgGQAUgIAagEIAUgBQAJABAKAEQgXAMgZAMIghAOIgCABQgOADgTAKIggAQIgXALIgYAMIAAABIgZAJQgHACgEAFIgFADIgJADIgFAAIgCABIgGAAIgHgBgAJvCqIAIABIACAAIACgBIAAAAIgEAAIgHgBIgHgBIgCAAIAIACgAJPA/IAAABIAAAAIgBACIABgBIACgFIABgEIgCAGIAAgBgAK5AEIAAAAIABgCIgBAAgAK8gBIAAgBQAAAAAAABQAAAAAAAAQAAAAABgBQAAAAAAgBIAAgEIAAgCgAK5gEIAAABIABgCIAAgCgAJ3hoIAAgBIAAgCIAAADgAJ/iOIABgBIgBAAgAKUj4IgCAGQgBADAAADIAAABIABgEIABgFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAIgBgCgAKVj+IAAACIABgEIABgIQgDAGABAEgAL1kAIABgFIAAgBQgBACAAAEgAL0kFIgBAEIAAABIACgHIAAgCgAtwCqIgCABIgBgFIgBgBIAAgHIAAgCIABgCIABADIAAAFIABgCIADADIABAFIgDAEgAmlCqIABAAIAAABgAmjCpIABAAIAAABgAmXCoIABAAIAAABgAt3CnIAAABIAAAAIAAgBgAt2CmIAAgBIABABgAt3CjIAAAAIAAACgAsaChIABAAIgBABgAt9CeIAAAAIAAABgAtyCXIAAAAIAAABIAAgBgAggCUIA4gdIgiAVQgQAJgFAAgABpCSIABgBIgDAAIgDgCIgFAAIgEgCIAEgCQABgDAHgDIACAAIAAgDIACABQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAADQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgGAGIAGgDIAGgDIABgBIgBACQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIAAADIgBABIgBAAIABAAIgBAAIADABIAEgBIgFAEIgEADgAmPCIIABAAIAAABgAByCCIAAAAIAAABIAAgBgAFsCCQACgGgBgFQgBgFABgFIACABIABALIAAACIgBAEIgBADgAB0CBIAAgBIABABgAB2B+IAAgBIABABgAB3B9IAAgBIAAAAIAAABgAFpBsIACACIgEAMQAAgGACgIgAt1B4IAAgBIABABgAA0BnIgMAIIgPAIIAbgQgAFqBlIABgLIACgLIAAAHIgBAHIAAADIABABIgCACIABAEIgCACgAMtBeIABAAIgBABIAAAAgAnsBXIAAAAIAAgBIABABIgBAAIAAABgAnxBLIABAAIABAAIgCABgAnsBJIABgBIAAABgAlYBAIAAgBIABAAIAAABgAFwAxQAAgKACgHIAEgRIABgBIABAGQAAAGgDAEIABAEIABABIgEADIADABIgDAHIgBABIAAADgAIpAIIgBAHQAAAOgGAQgAJQAnIABAAIgBABgAk3AoIACgCIACgDIAAABIgEAEgAJWANIAAAAIAAABIAAAAgAAHAKIABAAIgBABgAJYAJIABgBIAAgBIAAABIABABIgBAAIgBABgAAGgBIABAAIAAABgAkNgCIABAAIgBABgAkNgHIgDAEIADgGIAHgIIAIgIQADgEACAAIABABIgBABQgGAEgCAFIgEAFIAAABIgCABIAAABQgEAFgFADgAragEIABgBIAAABgAkSgTIAAgCQABAAAAABQAAAAAAAAQABAAAAAAQAAABAAAAgAkGgWIABgBIAAABgAkOgYIgBgBIABAAIABABgAAzgdIABAAIgBABgAj5geIAAgBIABABgAkLgfIABAAIgBABgAj6ghIABgBIAAABgAB4gmIABAAIgBABgAjrgqIAAgCIABACgAA6gtIABgBIAAABgADzgvIAAAAIAAABIAAgBgAA7gvIAAgCIABACgAA8g0IAAgBIABAAIAAABgALLg/IAAgBIABgCIAGgbIAAAGQgBALgFAKIgCAMQgBgDACgGgAjig3IAAgBQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAgAjag+IAAgBIABABgACPhXIAPgXIgJARIgJAPIAAACIgCAFIgCAAIgCACIABAEIgEACQADgJAJgPgAD0hDIABAAIAAABgAjlh/IABAAIAAABIgBgBgAn6iFgAiFiUIAAAAIAAABgAjzirIABgBIAAABgAjoisIABgBIgBABgAj3isIABAAIAAAAgAjeiuIAAgBIABAAIAAABgAi4i3IABAAIgBABgAjCi3IABAAIAAAAgAi3i+QAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAgAi7jAIABAAIAAABIgBgBgAnmjEIAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIABgCgAJOjIIABgBIAAABgAjTjmIAAgBIABABgAL0jyIAAgBIAAABgArNlPIAAgBIABABIAAABIgBgBgArolPIAAAAIgBABgAnTlUIABgCIAIAEIgDAAIgDgBIgBAAIgBAEgAq+lQIABAAIAAABIgBgBgAkVlSIAAgBIAAABIAAAAgAkTlTIABAAIgBABIAAgBgAkllUIABABIgBAAgAkOlUIABAAIAAABIgBgBgAJmlWIAAgDQgBgBAAgEIABgFIACgFIABABIAAAEIAAAJIgBACIABAEgAkMlUQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAgAqzlXIAEgCIASAAIgKABIgBABIgDABIgDgCIgBAEgAnZlWIgDgCIADgBIAHADgAjnlZIAAgBIAAAAIAAACgAjllZIAAgBIABABIgBAAgAmMlaIABgBIABABIgBAAgAmRlcIAAAAIAAABIAAgBgAmYlcIABABIAAAAIgBgBgABlliIgBgBIACABgAA+lmIAEgCIAAgBIAFgEIAFgCIACAAIgBAEIgLAHgAIRlrIABAAIgBABIgBACgAB0lrIgIgEIACAAIALACIAAACgABbltQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBIARAAIAAADgAIrluIABAAIAAAAIgBAAgAJilvIgIgLIAAgDIABgBIAFAGQACAEABADIAAACgAJTlyIgBAAIACAAgAIol4IgBgBIACABg");
	this.shape.setTransform(89.4,38.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.recall, new cjs.Rectangle(0,0,178.9,76.6), null);


(lib.newPrice = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRCqIAAgaQgYAAgagEQgagEgUgHIAEg0QAJADAPAEIAiAGIAiADIAAhKQgYgEgWgIQgWgHgPgQQgOgQgBgcQABgbAOgSQAOgRAWgJQAWgJAZgDIAAgaIAjAAIAAAaIAcACIAdAGQAPADALAEIgCAzIgXgHIgdgFQgPgDgOAAIAABEQARADARAGQASAFAOAKQAPAIAIANQAJAPAAAVQgBAcgNARQgNATgXAJQgVAKgbADIAAAbgAASBcQAQgBAMgJQALgHABgOQAAgPgMgHQgLgIgRgEgAgthSQgMAGAAANQAAAOAMAGQALAIARADIAAg6QgQAAgMAIg");
	this.shape.setTransform(-7.7,225.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah6EVQAwgmAogwQAmgvAfgzQgRAEgSACIgiACQgzAAgogXQgogXgXgoQgYgnAAg0QABg/AbgtQAcguAwgZQAxgYA9gBQBBABAwAbQAwAaAZAtQAZAsAAA2QAAArgOAvQgQAxgaAyQgaAxgiAtQghAtgmAkgAgsieQgUAMgLAUQgLATAAAYQABAYAKAUQALAUAUAMQAUAKAaAAQAbAAAUgKQAUgMALgUQAKgUABgYQgBgYgKgTQgLgUgUgMQgUgLgbAAQgbAAgTALg");
	this.shape_1.setTransform(121.3,235.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUEQIAAhkIjxAAIAAhpIDylSIB5AAIAAFSIBQAAIgDBpIhNAAIAABkgAhcBDIBwAAIAAidIgCAAg");
	this.shape_2.setTransform(75.9,236);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah9ERQgngGglgKIAHh3QAQAGAYAFQAZAGAcAEQAcAEAaAAQAhAAAbgHQAbgHARgRQAQgQAAgcQAAgYgNgPQgNgRgUgIQgVgJgWgDQgYgEgWAAQghABggAFQggAFgVAHIAYkwIFMAAIgHBxIjaAAIgJBUIAfgBIAagBQBoABAyAtQAyAsgBBQQAAA1gUAlQgUAlgjAXQgjAWgsAKQgtAKgwAAQgpAAgngGg");
	this.shape_3.setTransform(29.2,236.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-24.3,188.2,174.3,96.2), null);


(lib.msg_shopnow = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAcQgIgEgEgGQgFgHAAgLQAAgJAEgHQAEgHAHgDQAGgEAIAAQANABAHAHQAHAIABAOIAAAEIgoAAQAAAHAFADQAFADAHAAIAKgBIAJgCIABANIgKADIgLAAIgDABQgHAAgGgDgAANgFQAAgGgEgEQgDgDgGAAQgEAAgEAEQgDADgBAGIAZAAIAAAAg");
	this.shape.setTransform(59.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQADgGAEgCQAEgDAGgBIAEABIADAAIgBAQIgEgBIgEgBQgIAAgDAFQgDAEAAAHIAAAcg");
	this.shape_1.setTransform(53.8,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAaQgHgDgEgIQgDgHAAgIQAAgHADgHQAEgHAHgEQAHgEAJAAQALAAAGAEQAIAEADAHQADAHABAHQgBAIgDAHQgDAIgIADQgGAFgLAAQgJAAgHgFgAgIgNQgDACgBADQgCAEAAAEQAAAFACADQABAFADACQAEACAEAAQAGAAADgCQADgCACgFQABgDAAgFQAAgEgBgEQgCgDgDgCQgDgCgGgBQgEABgEACg");
	this.shape_2.setTransform(47.5,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAsIAAg8IgbAxIgIAAIgbgxIAAAAIAAA8IgRAAIAAhXIATAAIAcA2IAeg2IASAAIAABXg");
	this.shape_3.setTransform(38.2,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAeIAAggQAAgFgDgEQgCgEgGAAQgGAAgEAFQgEAFAAAHIAAAcIgQAAIAAg5IAPAAIABAKQAEgGAGgDQAEgDAGAAQAKABAGAGQAFAGgBAMIAAAig");
	this.shape_4.setTransform(25.6,10.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IAPAAIAAAKQADgGAEgCQAEgDAGgBIADABIAEAAIgBAQIgEgBIgEgBQgIAAgDAFQgDAEAAAHIAAAcg");
	this.shape_5.setTransform(19.9,10.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAcQgEgCgDgDQgDgFAAgGQAAgGADgFQADgDAFgBQAGgCAHAAIAGAAIAJABIAAgDQAAgFgDgCQgDgDgGAAIgHABIgIACIgHACIAAgOIAHgBIAJgBIAIgBQAJAAAGADQAGADACAFQADAGAAAGIAAAjIgPAAIAAgIIgBAAQgEAFgFACQgEADgGAAQgFAAgFgDgAgHAGQgEABAAAFQAAAEADACQACACAFABQACAAADgCQAEgBACgEQACgEABgFIgGgBIgGAAQgFAAgDACg");
	this.shape_6.setTransform(13.7,10.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLAcQgIgEgEgGQgFgHAAgLQAAgJAEgHQAEgHAHgDQAGgEAIAAQANABAHAHQAHAIABAOIAAAEIgoAAQAAAHAFADQAFADAHAAIAKgBIAJgCIABANIgKADIgLAAIgDABQgHAAgGgDgAANgFQAAgGgEgEQgDgDgGAAQgEAAgEAEQgDADgBAGIAZAAIAAAAg");
	this.shape_7.setTransform(7.1,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAsIAAhXIARAAIAABIIAmAAIAAAPg");
	this.shape_8.setTransform(0.9,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.msg_shopnow, new cjs.Rectangle(-4.9,0,69.6,18.4), null);


(lib.logo_stadium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACgFlIk/AAIhEAAQgXgBgWgDQgWgCgXgGQgngJgjgRQgkgSgfgZQgqgigegrQgdgsgQgyQgPgzgBg2QABg1APgzQAQgyAdgsQAegrAqgiQAfgZAkgSQAjgRAngJQAXgGAWgCQAWgDAXgBIBEAAIE/AAIBEAAQAtABAtALQBOASA/AzQAqAiAeArQAdAsAQAyQAQAzAAA1QAAA2gQAyQgQAzgdAsQgeArgqAiQg/AzhOASQgtALgtABIgtAAIgXAAgAjdh2QgOAAgOACQgdAFgXAQQgZARgNAZQgNAZAAAcQAAAdANAZQANAZAYARQAYAQAdAFIAcACIAcAAIGDAAIAcAAIAdgCQAcgFAYgQQAYgRANgZQANgZAAgdQAAgcgNgZQgNgZgYgRQgYgQgcgFQgPgCgOAAIgcAAImDAAIgOAAIgOAAg");
	this.shape.setTransform(81.7,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(22.5,-3.2,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2pGWIAAsrMAtTAAAIAAMrg");
	mask.setTransform(78.6,160.7);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgT4AkoQiAgBhegDQlEgKkKhAQoEh8mblJQmclLjlncQjlndAAoRQAAoQDlncQDlndGclLQGYlIIHh9QEHhAFHgKQB2gEFFAAMAg3AAAQFIAABzADQFJAMEFA/QIGB9GZFIQGcFLDlHcQDlHdAAIQQAAIQjlHdQjkHcmdFMQmZFIoGB9QkJBAlFAKQheADh/ABIjeAAMgg3AAAIiBAAIhcAAgA2xsMQhpADhQANQjAAfiWBnQicBshYCmQhZCnAAC9QAAC9BZCnQBYCnCcBrQCVBoDBAfQBQANBpADIC5AAMAnxAAAIC5AAQBpgDBQgNQC/gfCXhnQCchsBYimQBZinAAi+QAAi8hYinQhYinichsQiXhnjAgfQhQgNhpgDIi5AAMgnxAAAIi5AAg");
	this.shape.setTransform(79.7,-46.5,0.225,0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNKSQhdhTAAiZIAAqzIikAAIAAhkICkAAIAAlrIBtAAIAAFrIGMAAIAABkImMAAIAAKoQAABzA/A3QA5AxBpAAQAqAAAmgJQAngJAwgWIAABnQgtAUgrAJQgsAKg1AAQiLAAhUhKg");
	this.shape_1.setTransform(25.6,164.2,0.225,0.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah+MVIAAvWIj7AAIAAhkID7AAIAAhvQAAi3BYhlQBYhkCgAAQBbAABNAaIAABnQgxgQgmgGQgmgHgrAAQh1AAg4BGQg3BHAACRIAABtIGLAAIAABkImLAAIAAPWg");
	this.shape_2.setTransform(5.7,162.5,0.225,0.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1L7IAAw5IBrAAIAAQ5gAhDpmIAAiVICHAAIAACVg");
	this.shape_3.setTransform(-9.9,163,0.225,0.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkwInIAAw6IBsAAIAAFCQBFidCChcQCKhhCkAGIAAB4IgLAAQjMAAiKCfQiUCoAAELIAAGCg");
	this.shape_4.setTransform(-24.4,167.8,0.225,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AFmMDIAAqAQAAinhZhjQhchkihAAQifAAhqBsQhsBtAACmIAAJvIhoAAIAA4FIBoAAIAAKaQCAjiEDAAQDJAAB1B9QBxB5AADEIAAKTg");
	this.shape_5.setTransform(187.3,162,0.225,0.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AlPGNQieikAAjlIAAgEQAAjkCfimQChipDkAAQCLAAByA8QBZAuBZBdIhKBMQhThUhHgpQhfg1huAAQi2AAh/CHQh9CGAADCIAAADQAADDCBCIQCBCIC4AAQDJAACgi0IBIA/QhaBnhgAzQhxA8iMAAQjmAAiging");
	this.shape_6.setTransform(160.4,167.2,0.225,0.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlbGqQhxh5AAjFIAAqSIBnAAIAAJ/QAACoBaBjQBbBkChAAQCfAABqhsQBshtAAinIAApuIBnAAIAAQ0IhnAAIAAjJQg7BohZA5QhmBBiKAAQjIAAh1h9g");
	this.shape_7.setTransform(132.9,167.5,0.225,0.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AmMGNQiciiAAjnIAAgEQAAjmCdikQChipDsAAQDrAACgCnQCcCiAADnIAAADQAADmidClQiiCpjrAAQjsAAifingAk9lKQh8CGAADBIAAADQAADDCBCIQCACIC6AAQC9AAB/iIQB7iGAAjBIAAgEQAAjCiAiIQiBiIi5AAQi9AAh/CIg");
	this.shape_8.setTransform(104.5,167.2,0.225,0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhJKJQhZhOAAiSIAArBIicAAIAAhfICcAAIAAlYIBoAAIAAFYIF5AAIAABfIl5AAIAAK2QAABtA8A1QA2AvBkAAQAoAAAkgIQAlgKAugUIAABhQhSAmheAAQiFAAhPhHg");
	this.shape_9.setTransform(81.5,163.6,0.225,0.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKBaIAAhQIhMAAIAAgUIBMAAIAAhPIAVAAIAABPIBMAAIAAAUIhMAAIAABQg");
	this.shape_10.setTransform(54,164.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("EBG6AVnQiPgFiJgnQj4hHjLioIDgkrQCDBlCJAzQBeAjBnANQBkAMBXgLQBKgJA3gbQA0gZAdgmQAcglAFgrQAEgwgZgpQgagsg1gfQgxgehRgXQgogMh8gbQihgjhUgdQiLgxhXhLQhhhVglh0QgoiBAmiHQAchpBGhWQBahvCTg9QBigqB2gPQCOgTCSAWQECAnDVCZIjSEgQiNhWiPgdQhsgXhhALQg3AGgtARQgoAQgdAXQg0AqgHA2QgFAwAhArQAfAmBBAdQAqASA7APQAoALBRASQBVATA1AOQBKAUA8AXQCCAzBZBNQBpBZArB4QAnBtgRB4QgUCOhYBzQhBBUhhA6Qh1BHihAcQhaAQhfAAIgsgBgEgkTAVmQiKgIiAgsQiDgshshQQhuhRhPhwQhMhugriFQgpiAgHiKQgGiJAciEQAciJA/h1QBCh6BhhdQBihdB9g7QB5g6CJgVQCHgWCIAPQEVAdDaCsIj9FAQiHhWiSgRQhVgKhTAOQhDALg8AaQiSA+hICIQgiBCgPBNQgPBKAEBLQAJChBVB6QBZB9CWAxQCQAvCagiQCZgiBvhoIEgEoQheBih5BCQh2BAiIAcQhnAXhrAAQgdAAgegCgEhE6AVfQi5gBinhEQishGh/iCQh/iChDiuQhAioAAi5QABi5BCioQBEisB/iBQCAiBCthFQCohDC4ABQC5AACoBEQCrBGCACCQB+CCBDCtQBBCogBC5QAAC5hCCoQhECuiACBQiACBisBEQinBDi3AAIgDAAgEhGcgAwQg2ALgrASQguASgoAZQgoAbghAhQggAggbApQgbAqgSAuQgSAugLA1QgKA2AAA0QAAA4AKAzQAJAzATAwQATAxAZAnQAZAnAiAjQAhAiAnAaQAqAcArARQAuATAzAKQA1AKAyAAQA2AAAygJQAxgJAwgTQAugTAogaQAqgcAeggQAjgjAYgmQAbgpASgvQAUgwAJgzQAJgwABg6QAAg4gJgzQgJgxgTgyQgTgxgagnQgagpggghQghghgngbQgngagvgSQgugTgzgKQgzgKg0AAQg2AAgxAJgEAl2AVXQi6gWiThgQiahkhRijQgmhNgVhbQgThOgIhiQgGhCgDhUQgChFgBiJIAArIIGjAAIABKkQAABNABBNQAECYARBWQATBgApBFQA3BcBgAwQBaAsBugBQBtgBBbguQBigwA4hZQAshFAShfQAIgrADgyQADgoABhpIABs+IGjAAIAAbeIlvAAIgMiqQg5A8hVAvQhMAqhYAaQh9Akh9AAQg0AAgzgGgAqUVXQi5gWiThgQiahkhRijQgmhNgWhbQgShOgJhiQgGhCgChUQgChFgBiJIgBrIIGkAAIAAKkQAABNACBNQAECYAQBWQATBgApBFQA3BcBgAwQBbAsBugBQBsgBBcguQBhgwA5hZQAshFAShfQAIgrADgyQADgoABhpIAAs+IGjAAIAAbeIlvAAIgLiqQg6A8hVAvQhMAqhYAaQh8Akh+AAQgzAAg0gGgANpU0MAAAgqbIGkAAMAAAAqbg");
	this.shape_11.setTransform(79.8,63.9,0.225,0.225);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-40,120.1,239.6,60.6), null);


(lib.logo_oculus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKJDMQgmgLgfgaIAigtQATAOAWAJQAPAGAPABQAOADAPgDQAKAAAJgFQAIgEAFgFQAEgGABgHQAAgHgEgGQgEgIgIgDQgJgGgKgCIgZgHQgTgEgTgFQgTgHgPgMQgPgNgFgSQgGgUAFgTQAFgQAKgNQAPgSAVgIQAQgHARgCQAWgDAWADQAnAGAhAXIggAsQgUgMgYgFQgPgEgQACQgIABgHACQgGACgEAFQgEACgCAEQgDADAAAEQgBAIAFAGQAGAHAIADIAQAGIASADIAVAGIAVAHQASAGAPANQAPAMAIATQAFASgCARQgDAWgOASQgKAMgOAJQgUALgXAFQgRACgRAAQgWgBgVgGgAlhDTQgVgBgTgIQgUgGgRgMQgQgMgNgSQgLgRgHgUQgGgTgBgVQgBgVAEgVQAFgTAJgSQAUglAngTQATgJAUgDQAVgDAVACQAqAEAhAbIgnAvQgTgMgXgCQgNgCgNACQgKABgJAFQgWAIgMAVQgFALgCALQgCALAAAMQABALAEALQADALAHAKQAOATAWAHQALAEAMABQALgBALgCQAXgFASgQIAsAtQgPAPgSAKQgSAKgVAFQgQADgRAAIgIAAgArUDHQgagKgUgVQgUgUgJgaQgKgaAAgcQAAgbAKgbQAKgYAUgVQAUgUAZgJQAagKAcAAQAcAAAaAKQAZAKAUAUQAUAVAKAYQAKAaAAAcQAAAcgLAaQgJAagUAUQgUAVgaAKQgaAJgcABQgcAAgZgLgAqugGQgHABgHADIgOAGQgGAEgFAFIgJALIgHAOIgEAOIgCAQQAAAJACAIIAEAPQADAHAEAGIAJALIALAKQAGAEAHACQAHADAIACQAHABAIABIAQgCIAPgEIANgHIALgJIAJgLIAHgNIAEgPQACgJAAgIIgCgQIgEgPIgHgOIgJgLQgEgFgGgEIgNgGQgIgDgHgBIgQgCQgIAAgIACgAFxDQQgcgDgXgOQgWgPgOgaQgGgNgDgNQgDgNgBgNIgBgXIgBggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIABAXQAAATADARQACAOAHAMQAJAPAOAGQAOAHAQgBQARABAOgIQAOgGAJgPQAIgLACgNIACgOIAAgXIAAgSIAAgdIAAgfIAAgdIAAgSIBAAAIAAELIg4AAIgBgaQgKAJgMAHQgNAHgMADQgTAGgUAAIgPgBgAhkDQQgcgDgWgOQgXgPgNgaQgGgNgDgNQgDgNgBgNIgCgXIAAggIAAgWIAAgfIAAgfIAAgXIBAAAIAAA/IAAAnIAAAXQAAATADARQADAOAGAMQAJAPAPAGQAOAHAQgBQAQABAPgIQAOgGAJgPQAHgLACgNIACgOIABgXIAAgSIAAgdIAAgfIAAgdIAAgSIA/AAIAAELIg4AAIgCgaQgJAJgMAHQgMAHgNADQgTAGgTAAIgQgBgACFDLIAAmdIBAAAIAAGdg");
	this.shape.setTransform(82.3,107.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_oculus, new cjs.Rectangle(1.3,86,162.1,42.2), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape.setTransform(184,-66.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMAjQgFgDgEgGQgDgFAAgIQAAgIADgFQAEgGAFgCQAFgDAHAAQAFAAAFADQAFACADAFIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAQgDAGgFACQgFADgFAAQgHAAgFgDgAgJgEQgEADgCADQgDAFAAAGQAAAGADAEQACAFAEACQAEACAFAAQAFAAAFgCQAEgDACgEQADgFAAgFQAAgGgDgFQgDgDgEgCQgEgDgFAAQgFAAgEACg");
	this.shape_1.setTransform(179.4,-69.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADAZQgHAAgGgCQgFgDgEgFQgCgGAAgJQAAgIADgFQADgGAFgCQAGgDAFAAQAGAAAFADQAFACADAGQADAFAAAIIAAADIgmAAQAAAJAFAEQAGAEAHgBIAJAAIAIgDIAAAGIgFACIgHABIgFAAgAAQgCQAAgIgEgEQgEgFgHAAQgEABgDABQgEACgCAEQgDADAAAGIAfAAIAAAAg");
	this.shape_2.setTransform(173.6,-68.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAjQgFgDgEgGQgDgFAAgIQAAgIADgFQAEgGAFgCQAFgDAHAAQAFAAAFADQAFACADAFIABAAIgBgJIAAgbIAHAAIAABKIgGAAIAAgKIgBAAQgDAGgFACQgFADgFAAQgHAAgFgDgAgJgEQgEADgCADQgDAFAAAGQAAAGADAEQACAFAEACQAEACAFAAQAFAAAFgCQAEgDACgEQADgFAAgFQAAgGgDgFQgDgDgEgCQgEgDgFAAQgFAAgEACg");
	this.shape_3.setTransform(167.5,-69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAWQgDgDgCgEQgCgEAAgGIAAgdIAGAAIAAAdIABAHQACAEACACQADABAEAAQAEAAAEgCQAEgDACgEQADgFAAgGIAAgXIAGAAIAAAvIgGAAIAAgKIgEAGQgCADgEABQgEACgEAAQgGAAgEgDg");
	this.shape_4.setTransform(161.6,-68.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAlIAAhJIAFAAIAABJg");
	this.shape_5.setTransform(157.6,-69.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAXQgGgDgDgFQgEgGABgJQgBgIAEgFQADgGAGgCQAFgDAIAAIAHABIAHACIAAAGIgIgDIgHgBQgFAAgEACQgEACgDAFQgDAEAAAGQAAAHADAEQADAEAEACQAEACAFAAIAHAAIAIgDIAAAGIgHACIgHABQgIAAgFgCg");
	this.shape_6.setTransform(153.9,-68.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAYIAAgdQAAgFgDgFQgDgDgGAAQgEAAgEACQgEADgDAEQgCAEAAAGIAAAXIgGAAIAAgvIAGAAIAAAKIAEgFIAGgEQAEgBAEgBQAGABAEACQADADADADQABAFAAAFIAAAdg");
	this.shape_7.setTransform(148.4,-68.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAjIAAgvIAFAAIAAAvgAgCgaIgBgEIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABADIgBAEQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape_8.setTransform(144.3,-69.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGAgQgFAAgBgCQgDgDgBgFIAAgMIAAgVIgKAAIAAgFIAKAAIAAgPIAFAAIAAAPIAOAAIAAAFIgOAAIAAAYIAAAIIACAEQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEAAIAEgBIAAAGIgEABIgFAAg");
	this.shape_9.setTransform(138.7,-69.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAWQgFgEgDgFQgDgGAAgHQAAgGADgFQADgGAFgEQAGgDAHAAQAIAAAFADQAGAEADAGQADAFAAAGQAAAHgDAGQgDAFgGAEQgFADgIAAQgHAAgGgDgAgJgQQgFADgCAEQgCAEAAAFQAAAGACAEQACAEAFADQAEACAFAAQAHAAAEgCQAEgDACgEQACgEAAgGQAAgFgCgEQgCgEgEgDQgEgCgHgBQgFABgEACg");
	this.shape_10.setTransform(134,-68.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAPAYIAAgdQAAgFgDgFQgDgDgGAAQgEAAgEACQgEADgDAEQgCAEAAAGIAAAXIgGAAIAAgvIAGAAIAAAKIAEgFIAGgEQAEgBAEgBQAGABAEACQAEADACADQABAFAAAFIAAAdg");
	this.shape_11.setTransform(128,-68.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAZIgKgBIgIgDIADgFIAGACIAJABIAFAAIAGgDQACgCAAgEQgBgDgCgCIgIgDIgHgCQgFAAgDgDQgDgDAAgFQAAgFADgDQACgDAEgBIAIgBIAIABIAHACIgCAGIgGgDIgHgBQgFAAgCACQgEACAAAEQAAAEADABIAHADIAIACQAEABADACQADADABAFQgBAGgDADQgCADgFACIgHABIgBAAg");
	this.shape_12.setTransform(120.2,-68.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AADAZQgHAAgFgCQgGgDgDgFQgDgGgBgJQAAgIAEgFQADgGAGgCQAEgDAGAAQAGAAAFADQAFACACAGQADAFAAAIIAAADIglAAQAAAJAGAEQAEAEAIgBIAIAAIAJgDIAAAGIgFACIgGABIgGAAgAARgCQgBgIgEgEQgEgFgHAAQgEABgDABQgEACgDAEQgCADgBAGIAhAAIAAAAg");
	this.shape_13.setTransform(115.2,-68.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAfAYIAAgdIgBgHQgBgDgCgBQgDgCgEAAQgFAAgEADQgDACgDAEQgBAEgBAEIAAAZIgFAAIAAgdIgBgHQgBgDgDgBQgCgCgFAAQgEAAgEACQgDADgCAEQgDAEAAAGIAAAXIgGAAIAAgvIAGAAIAAAKQACgEAFgEQAEgDAHAAQAGAAAFADQACAEABAGQADgGAFgDQAEgDAHgBQAGABADACQAEACACAFQABAEAAAFIAAAdg");
	this.shape_14.setTransform(107.9,-68.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLAYQgEgCgDgEQgCgDAAgGQAAgFACgEQADgCAEgBQAEgBAFAAIAFAAIAGABIAGAAIAAgEQAAgFgEgEQgEgDgGAAIgFABIgGABIgGACIAAgGIAJgCIAIgBQAGAAAFACQAEACADADQACAFAAAFIAAAfIgGAAIAAgKQgCAEgDADQgDACgEABIgGABQgEAAgEgBgAgLACQgDACAAAFQAAAEACACIAEADIAGABQADAAAEgCQAFgBACgEQADgFAAgGIgGgBIgGAAIgEAAQgGAAgEACg");
	this.shape_15.setTransform(100.4,-68.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAlIgJgBIgKgBIABgGIAJACIAJAAQAGAAAEgBQAEgCADgFQADgEAAgHIAAgKIAAAAQgEAFgEADQgGADgFAAQgGAAgGgDQgGgDgDgGQgCgEAAgIQAAgIACgGQADgGAGgCQAGgDAGAAQAFAAAFACQAFADAEAFIAAAAIAAgJIAFAAIAAAuQABAJgEAGQgDAGgGACQgFADgGAAIgCAAgAgIgdQgEADgDAEQgCAFAAAGQAAAGACAEQADAEAEACQADACAFAAQAFAAAFgCQAEgDACgDQADgEAAgGQAAgGgDgEQgCgFgEgCQgEgDgGAAQgFAAgDACg");
	this.shape_16.setTransform(94.6,-67.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AADAZQgHAAgFgCQgGgDgDgFQgEgGAAgJQABgIADgFQADgGAGgCQAFgDAFAAQAGAAAFADQAFACADAGQACAFAAAIIAAADIglAAQAAAJAGAEQAEAEAIgBIAIAAIAJgDIAAAGIgFACIgGABIgGAAgAARgCQgBgIgEgEQgEgFgHAAQgDABgEABQgEACgDAEQgCADAAAGIAgAAIAAAAg");
	this.shape_17.setTransform(86.2,-68.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfAYIAAgdIgBgHQgBgDgCgBQgDgCgEAAQgFAAgEADQgEACgCAEQgCAEAAAEIAAAZIgFAAIAAgdIgBgHQgBgDgCgBQgDgCgEAAQgFAAgEACQgDADgDAEQgCAEAAAGIAAAXIgGAAIAAgvIAGAAIAAAKQADgEAEgEQAFgDAGAAQAGAAAEADQADAEACAGQACgGAFgDQAFgDAGgBQAGABAEACQADACACAFQABAEAAAFIAAAdg");
	this.shape_18.setTransform(78.9,-68.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAWQgFgEgDgFQgDgGAAgHQAAgGADgFQADgGAFgEQAGgDAHAAQAIAAAFADQAGAEADAGQADAFAAAGQAAAHgDAGQgDAFgGAEQgFADgIAAQgHAAgGgDgAgJgQQgFADgCAEQgCAEAAAFQAAAGACAEQACAEAFADQAEACAFAAQAHAAAEgCQAEgDACgEQACgEAAgGQAAgFgCgEQgCgEgEgDQgEgCgHgBQgFABgEACg");
	this.shape_19.setTransform(71.3,-68.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMAkQgGgBgFgDIABgGQAHADAFABIAKACQAEAAAEgCQAFgCACgDQADgDAAgFQAAgFgDgDIgIgEIgIgDIgKgDQgFgCgDgEQgDgEAAgGQAAgHADgEQAEgFAFgCQAGgCAFAAIAKACQAGABAGAEIgBAGIgLgFQgFgCgFAAQgEAAgEACQgEABgCADQgDADAAAEQAAAFADADQADADAFACIAJADIAKACQAEADADADQADAEAAAHQAAAHgDAFQgEAEgGADQgGACgFAAIgMgCg");
	this.shape_20.setTransform(65.4,-69.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(60.4,-77.8,127,16), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AH4BFIANggIgbhDIAKAAIAWA5IAWg5IAKAAIgoBjgAEvAgQgIgEgEgIQgEgIAAgKQAAgJAEgIQAEgIAIgFQAIgEALAAQALAAAIAEQAIAFAEAIQAEAIAAAJQAAAKgEAIQgEAIgIAEQgIAFgLAAQgLAAgIgFgAEzgVQgGAEgDAGQgCAHAAAGQAAAIACAFQADAHAGADQAGAFAJAAQAJAAAGgFQAGgDADgHQACgFAAgIQAAgGgCgHQgDgGgGgEQgGgDgJAAQgJAAgGADgAC5AhQgIgDgFgIQgEgIAAgMQAAgLAFgJQAEgHAIgEQAHgEAJABQAJAAAGADQAHAEAEAHQAEAJAAAKIAAAEIg2AAQAAANAHAGQAIAGAMAAIALgBIAMgFIABAIIgIADIgIABIgIABQgLAAgIgEgADegBQAAgLgGgHQgFgFgKAAQgGAAgGACQgFACgDAFQgEAGAAAIIAtAAIAAAAgAggAiQgEgEgBgGQgBgHAAgLIAAgdIgOAAIABgHIANAAIAAgVIAJAAIAAAVIATAAIAAAHIgTAAIAAAiIAAAKQABAFABABQACADAEAAIAGgBIAFgBIAAAHIgGABIgGABQgHAAgDgDgAigAhQgIgEgEgIQgEgIgBgLQABgKAEgIQAEgIAIgEQAHgFAJABQAKgBAHAFQAGAEAFAGIAAAAIAAgyIAIAAIAABnIgIAAIAAgNIAAAAQgFAIgHADQgHAEgJAAQgJAAgHgEgAibgVQgGADgEAGQgDAGAAAIQAAAIADAHQAEAGAGADQAFAEAHAAQAJAAAGgFQAGgDADgHQADgFAAgIQAAgIgDgGQgEgFgGgEQgGgDgIAAQgHAAgFADgAjwAhQgIgDgEgIQgEgIgBgMQABgLAEgJQAFgHAHgEQAIgEAIABQAJAAAHADQAHAEADAHQAEAJAAAKIAAAEIg2AAQABANAHAGQAHAGAMAAIAMgBIAMgFIAAAIIgHADIgJABIgIABQgLAAgIgEgAjKgBQAAgLgGgHQgGgFgKAAQgGAAgFACQgFACgEAFQgDAGgBAIIAuAAIAAAAgAklAiQgDgEgBgGQgCgHABgLIAAgdIgOAAIAAgHIAOAAIAAgVIAIAAIAAAVIATAAIAAAHIgTAAIAAAiIABAKQAAAFACABQACADAEAAIAFgBIAGgBIAAAHIgGABIgHABQgHAAgDgDgAHPAjIAAhnIAJAAIAABngAGsAjIAAgoQAAgJgDgFQgEgGgJABQgHAAgGADQgFADgEAGQgDAGAAAIIAAAhIgJAAIAAhBIAIAAIAAANIABAAQACgEADgDQAEgEAFgCQAFgCAHAAQAIgBAGAEQAFAEACAFQADAHAAAHIAAApgACKAjIAAgoQAAgGgBgEQgCgEgDgDQgEgCgFAAQgHAAgGADQgFAEgDAFQgDAFAAAGIAAAkIgIAAIAAgoQAAgGgCgEQgBgEgEgDQgDgCgHAAQgGAAgFADQgFADgDAGQgDAGAAAIIAAAhIgJAAIAAhBIAIAAIAAANIABAAQADgHAGgEQAGgFAJABQAKAAAFAEQAFAFACAJQADgIAHgGQAHgEAJAAQAJAAAEADQAFAEADAGQACAGAAAHIAAApgAAIAjIAAhBIAJAAIAABBgAlTAjIAAhBIAJAAIAABBgAl2AjIAAgoQAAgGgBgEQgCgEgDgDQgEgCgFAAQgHAAgGADQgFAEgDAFQgDAFAAAGIAAAkIgIAAIAAgoQAAgGgCgEQgBgEgEgDQgDgCgHAAQgGAAgFADQgFADgDAGQgDAGAAAIIAAAhIgJAAIAAhBIAIAAIAAANIABAAQADgHAGgEQAGgFAJABQAKAAAFAEQAFAFACAJQADgIAHgGQAHgEAJAAQAJAAAEADQAFAEADAGQACAGAAAHIAAApgAn4AjIAAhBIAJAAIAABBgApFAjIAAhkIAJAAIAABcIA0AAIAAAIgAI6AfQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCADgDgBQgDABgCgDgAAHgzQgBgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAQABAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgCgAlUgzQgBgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAQABAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgCgAn5gzQgBgCAAgDQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgDADAAQABAAABABQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAADgCACQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgCg");
	this.shape.setTransform(-10.9,143.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(-69.1,137,116.5,13.8), null);


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


// stage content:
(lib.oculus_robo_300x600_CAN = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(154,301.3,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:362.4,y:766.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(168));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(154.1,301.1,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-195.2,y:583.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(165));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(154,301,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-188,y:-135.2},37,cjs.Ease.get(-1)).to({_off:true},1).wait(162));

	// superhot
	this.instance_3 = new lib.game_superhot();
	this.instance_3.parent = this;
	this.instance_3.setTransform(153.9,301.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:457.6,y:360},37,cjs.Ease.get(-1)).to({_off:true},1).wait(159));

	// rick morty
	this.instance_4 = new lib.game_rickmorty();
	this.instance_4.parent = this;
	this.instance_4.setTransform(153.8,301.4,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-167.2,y:346.4},37,cjs.Ease.get(-1)).to({_off:true},1).wait(156));

	// wilsons
	this.instance_5 = new lib.game_wilsons();
	this.instance_5.parent = this;
	this.instance_5.setTransform(153.6,301.5,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-136.8,y:-161.6},37,cjs.Ease.get(-1)).to({_off:true},1).wait(153));

	// Layer 19 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:153.5,y:70.5}).wait(75).to({graphics:null,x:0,y:0}).wait(87));

	// Layer 22
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,119.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(49).to({_off:false},0).to({y:70.5},9).wait(63).to({startPosition:0},0).to({scaleX:2.04,scaleY:2.04,x:151.4,y:-337,alpha:0.551},26,cjs.Ease.get(-1)).to({scaleX:3.33,scaleY:3.33,x:153,y:-621.3,alpha:0},13).to({_off:true},1).wait(45));

	// Layer 21 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:153.5,y:93.5}).wait(75).to({graphics:null,x:0,y:0}).wait(87));

	// Layer 23
	this.instance_7 = new lib.text2_mc("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,139.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(153,-534.9,3.334,3.334);
	this.instance_8.alpha = 0;

	var maskedShapeInstanceList = [this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},54).to({state:[{t:this.instance_7}]},9).to({state:[{t:this.instance_7}]},58).to({state:[{t:this.instance_7}]},26).to({state:[{t:this.instance_8}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54).to({_off:false},0).to({y:92.5},9).wait(58).to({startPosition:0},0).to({scaleX:2.04,scaleY:2.04,x:151.4,y:-286.3,alpha:0.551},26,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:153,y:-534.9,alpha:0},13).wait(46));

	// Layer 1 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("A0YB0IAAjnMAoxAAAIAADng");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:153.5,y:116.5}).wait(75).to({graphics:null,x:0,y:0}).wait(87));

	// Layer 5
	this.instance_9 = new lib.text3_mc("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(226,159.5);
	this.instance_9._off = true;

	this.instance_10 = new lib.text3("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(406.4,-451.6,3.334,3.334);
	this.instance_10.alpha = 0;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},59).to({state:[{t:this.instance_9}]},9).to({state:[{t:this.instance_9}]},53).to({state:[{t:this.instance_9}]},26).to({state:[{t:this.instance_10}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(59).to({_off:false},0).to({y:116.5},9).wait(53).to({startPosition:0},0).to({scaleX:2.04,scaleY:2.04,x:306.2,y:-235.9,alpha:0.551},26,cjs.Ease.get(-1)).to({_off:true,scaleX:3.33,scaleY:3.33,x:406.4,y:-451.6,alpha:0},13).wait(46));

	// MASK (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_20 = new cjs.Graphics().p("AKIWHICMAAIAACLIiMAAg");
	var mask_3_graphics_21 = new cjs.Graphics().p("AKGWFICOAAIAACOIiOAAg");
	var mask_3_graphics_22 = new cjs.Graphics().p("AKBWAICVAAIAACWIiVAAg");
	var mask_3_graphics_23 = new cjs.Graphics().p("AJ4V4IChAAIAACiIihAAg");
	var mask_3_graphics_24 = new cjs.Graphics().p("AJrVtICyAAIAACyIiyAAg");
	var mask_3_graphics_25 = new cjs.Graphics().p("AJbVfIDIAAIAADHIjIAAg");
	var mask_3_graphics_26 = new cjs.Graphics().p("AJHVNIDiAAIAADiIjiAAg");
	var mask_3_graphics_27 = new cjs.Graphics().p("AIwU5IEBAAIAAEAIkBAAg");
	var mask_3_graphics_28 = new cjs.Graphics().p("AIVUhIElAAIAAEkIklAAg");
	var mask_3_graphics_29 = new cjs.Graphics().p("AH3UGIFNAAIAAFNIlNAAg");
	var mask_3_graphics_30 = new cjs.Graphics().p("AHVTnIF6AAIAAF7Il6AAg");
	var mask_3_graphics_31 = new cjs.Graphics().p("AGvTGIGsAAIAAGsImsAAg");
	var mask_3_graphics_32 = new cjs.Graphics().p("AGGShIHjAAIAAHkInjAAg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AFZR6IIfAAIAAIeIofAAg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AEpRPIJfAAIAAJfIpfAAg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AD1QhIKkAAIAAKkIqkAAg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AC9PvILvAAIAALuIrvAAg");
	var mask_3_graphics_37 = new cjs.Graphics().p("ACCO7IM9AAIAAM9Is9AAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("ABEODIOQAAIAAOQIuQAAg");
	var mask_3_graphics_39 = new cjs.Graphics().p("AABNIIPpAAIAAPpIvpAAg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AhEMKIRFAAIAARGIxFAAg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AiNLJISmAAIAASnIymAAg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AjaKFIUNAAIAAUNI0NAAg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AkrI9IV4AAIAAV5I14AAg");
	var mask_3_graphics_44 = new cjs.Graphics().p("Al/HyIXoAAIAAXpI3oAAg");
	var mask_3_graphics_45 = new cjs.Graphics().p("AnWGkIZcAAIAAZeI5cAAg");
	var mask_3_graphics_46 = new cjs.Graphics().p("AoyFTIbXAAIAAbXI7XAAg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AqRD/IdVAAIAAdWI9VAAg");
	var mask_3_graphics_48 = new cjs.Graphics().p("ArzCnIfYAAIAAfZI/YAAg");
	var mask_3_graphics_49 = new cjs.Graphics().p("AtZBNMAhfAAAMAAAAhgMghfAAAg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AvDgQMAjsAAAMAAAAjsMgjsAAAg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AwwhxMAl9AAAMAAAAl9Mgl9AAAg");
	var mask_3_graphics_52 = new cjs.Graphics().p("AyhjVMAoUAAAMAAAAoTMgoUAAAg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A0Vk9MAquAAAMAAAAqvMgquAAAg");
	var mask_3_graphics_54 = new cjs.Graphics().p("A2NmnMAtOAAAMAAAAtOMgtOAAAg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A35oWMAvzAAAMAAAAvyMgvzAAAg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A4AoiMAwBAAAMAAAAwAMgwBAAAg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A4GotMAwNAAAMAAAAwNMgwNAAAg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A4No4MAwbAAAMAAAAwaMgwbAAAg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A4TpEMAwnAAAMAAAAwoMgwnAAAg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A4apPMAw1AAAMAAAAw1Mgw1AAAg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A4hpaMAxDAAAMAAAAxCMgxDAAAg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A4npmMAxPAAAMAAAAxQMgxPAAAg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A4upxMAxdAAAMAAAAxdMgxdAAAg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A41p8MAxrAAAMAAAAxqMgxrAAAg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A47qIMAx3AAAMAAAAx4Mgx3AAAg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A5CqTMAyFAAAMAAAAyFMgyFAAAg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A5JqeMAyTAAAMAAAAySMgyTAAAg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A5PqqMAyfAAAMAAAAygMgyfAAAg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A5Wq1MAytAAAMAAAAytMgytAAAg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A5crAMAy5AAAMAAAAy5Mgy5AAAg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A5jrMMAzHAAAMAAAAzHMgzHAAAg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A5qrXMAzVAAAMAAAAzUMgzVAAAg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A5wriMAzhAAAMAAAAzhMgzhAAAg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A53ruMAzvAAAMAAAAzvMgzvAAAg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A5+r5MAz9AAAMAAAAz8Mgz9AAAg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A6EsEMA0JAAAMAAAA0JMg0JAAAg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A6LsQMA0XAAAMAAAA0XMg0XAAAg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A6RsbMA0jAAAMAAAA0kMg0jAAAg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A6YsmMA0xAAAMAAAA0xMg0xAAAg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A6fsyMA0/AAAMAAAA0/Mg0/AAAg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A6ls9MA1LAAAMAAAA1MMg1LAAAg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A6stIMA1ZAAAMAAAA1ZMg1ZAAAg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A6ztUMA1nAAAMAAAA1nMg1nAAAg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A65tfMA1zAAAMAAAA10Mg1zAAAg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A7AtqMA2BAAAMAAAA2AMg2BAAAg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A7Gt2MA2NAAAMAAAA2OMg2NAAAg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A7NuBMA2bAAAMAAAA2bMg2bAAAg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A7UuMMA2pAAAMAAAA2oMg2pAAAg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A7auYMA21AAAMAAAA22Mg21AAAg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A7hujMA3DAAAMAAAA3DMg3DAAAg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A7ouuMA3RAAAMAAAA3QMg3RAAAg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A7uu6MA3dAAAMAAAA3eMg3dAAAg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A71vFMA3rAAAMAAAA3rMg3rAAAg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A78vQMA35AAAMAAAA34Mg35AAAg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A8CvcMA4FAAAMAAAA4GMg4FAAAg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A8JvnMA4TAAAMAAAA4TMg4TAAAg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A8PvyMA4fAAAMAAAA4gMg4fAAAg");
	var mask_3_graphics_98 = new cjs.Graphics().p("A8Wv+MA4tAAAMAAAA4uMg4tAAAg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A8dwJMA47AAAMAAAA47Mg47AAAg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A8jwUMA5HAAAMAAAA5HMg5HAAAg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A8qwfMA5VAAAMAAAA5UMg5VAAAg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A8xwrMA5jAAAMAAAA5iMg5jAAAg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A83w2MA5vAAAMAAAA5vMg5vAAAg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A8+xBMA59AAAMAAAA58Mg59AAAg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A9ExNMA6JAAAMAAAA6KMg6JAAAg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A9LxYMA6XAAAMAAAA6XMg6XAAAg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A9SxjMA6lAAAMAAAA6kMg6lAAAg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A9YxvMA6xAAAMAAAA6yMg6xAAAg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A9fx6MA6/AAAMAAAA6/Mg6/AAAg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A9myFMA7NAAAMAAAA7MMg7NAAAg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A9syRMA7ZAAAMAAAA7aMg7ZAAAg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A9zycMA7nAAAMAAAA7nMg7nAAAg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A96ynMA71AAAMAAAA70Mg71AAAg");
	var mask_3_graphics_114 = new cjs.Graphics().p("A+AyzMA8BAAAMAAAA8CMg8BAAAg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A+Hy+MA8PAAAMAAAA8OMg8PAAAg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A+NzJMA8bAAAMAAAA8bMg8bAAAg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A+UzVMA8pAAAMAAAA8pMg8pAAAg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A+bzgMA83AAAMAAAA82Mg83AAAg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A+hzrMA9DAAAMAAAA9DMg9DAAAg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A+oz3MA9RAAAMAAAA9RMg9RAAAg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A+v0CMA9fAAAMAAAA9eMg9fAAAg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A+z0JMA9nAAAMAAAA9nMg9nAAAg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A/A0eMA+BAAAMAAAA+CMg+BAAAg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A/X1AMA+vAAAMAAAA+uMg+vAAAg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A/21wMA/tAAAMAAAA/tMg/tAAAg");
	var mask_3_graphics_126 = new cjs.Graphics().p("EggegWuMBA9AAAMAAABA9MhA9AAAg");
	var mask_3_graphics_127 = new cjs.Graphics().p("EghPgX5MBCfAAAMAAABCfMhCfAAAg");
	var mask_3_graphics_128 = new cjs.Graphics().p("EgiJgZTMBETAAAMAAABEUMhETAAAg");
	var mask_3_graphics_129 = new cjs.Graphics().p("EgjMga6MBGZAAAMAAABGaMhGZAAAg");
	var mask_3_graphics_130 = new cjs.Graphics().p("EgkYgcuMBIxAAAMAAABIxMhIxAAAg");
	var mask_3_graphics_131 = new cjs.Graphics().p("EgltgexMBLbAAAMAAABLcMhLbAAAg");
	var mask_3_graphics_132 = new cjs.Graphics().p("EgnLghBMBOXAAAMAAABOXMhOXAAAg");
	var mask_3_graphics_133 = new cjs.Graphics().p("EgoygjfMBRlAAAMAAABRlMhRlAAAg");
	var mask_3_graphics_134 = new cjs.Graphics().p("EgqhgmLMBVDAAAMAAABVEMhVDAAAg");
	var mask_3_graphics_135 = new cjs.Graphics().p("EgsagpEMBY1AAAMAAABY1MhY1AAAg");
	var mask_3_graphics_136 = new cjs.Graphics().p("EgucgsLMBc5AAAMAAABc4Mhc5AAAg");
	var mask_3_graphics_137 = new cjs.Graphics().p("EgwmgvgMBhNAAAMAAABhNMhhNAAAg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Egy6gy6MBl1AAAMAAABl1Mhl1AAAg");
	var mask_3_graphics_139 = new cjs.Graphics().p("Eg1Wg1WMBqtAAAMAAABqtMhqtAAAg");
	var mask_3_graphics_140 = new cjs.Graphics().p("Eg37g37MBv3AAAMAAABv3Mhv3AAAg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Eg6pg6pMB1TAAAMAAAB1TMh1TAAAg");
	var mask_3_graphics_142 = new cjs.Graphics().p("Eg9gg9gMB7BAAAMAAAB7BMh7BAAAg");
	var mask_3_graphics_143 = new cjs.Graphics().p("EhAhhAhMCBDAAAMAAACBDMiBDAAAg");
	var mask_3_graphics_144 = new cjs.Graphics().p("EhDqhDqMCHVAAAMAAACHVMiHVAAAg");
	var mask_3_graphics_145 = new cjs.Graphics().p("EhG8hG8MCN5AAAMAAACN5MiN5AAAg");
	var mask_3_graphics_146 = new cjs.Graphics().p("EhKWhKWMCUtAAAMAAACUtMiUtAAAg");
	var mask_3_graphics_147 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_148 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_149 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_150 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_151 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_152 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_153 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_154 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_155 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_156 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_157 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_158 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_159 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");
	var mask_3_graphics_160 = new cjs.Graphics().p("EhN6hN6MCb1AAAMAAACb1Mib1AAAg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_3_graphics_20,x:78.8,y:155.4}).wait(1).to({graphics:mask_3_graphics_21,x:78.8,y:155.5}).wait(1).to({graphics:mask_3_graphics_22,x:79,y:155.8}).wait(1).to({graphics:mask_3_graphics_23,x:79.3,y:156.2}).wait(1).to({graphics:mask_3_graphics_24,x:79.7,y:156.7}).wait(1).to({graphics:mask_3_graphics_25,x:80.3,y:157.4}).wait(1).to({graphics:mask_3_graphics_26,x:80.9,y:158.3}).wait(1).to({graphics:mask_3_graphics_27,x:81.7,y:159.3}).wait(1).to({graphics:mask_3_graphics_28,x:82.6,y:160.5}).wait(1).to({graphics:mask_3_graphics_29,x:83.6,y:161.9}).wait(1).to({graphics:mask_3_graphics_30,x:84.7,y:163.4}).wait(1).to({graphics:mask_3_graphics_31,x:85.9,y:165}).wait(1).to({graphics:mask_3_graphics_32,x:87.3,y:166.9}).wait(1).to({graphics:mask_3_graphics_33,x:88.8,y:168.8}).wait(1).to({graphics:mask_3_graphics_34,x:90.4,y:171}).wait(1).to({graphics:mask_3_graphics_35,x:92.1,y:173.3}).wait(1).to({graphics:mask_3_graphics_36,x:94,y:175.7}).wait(1).to({graphics:mask_3_graphics_37,x:95.9,y:178.4}).wait(1).to({graphics:mask_3_graphics_38,x:98,y:181.1}).wait(1).to({graphics:mask_3_graphics_39,x:100.2,y:184.1}).wait(1).to({graphics:mask_3_graphics_40,x:102.5,y:187.2}).wait(1).to({graphics:mask_3_graphics_41,x:104.9,y:190.4}).wait(1).to({graphics:mask_3_graphics_42,x:107.5,y:193.8}).wait(1).to({graphics:mask_3_graphics_43,x:110.1,y:197.4}).wait(1).to({graphics:mask_3_graphics_44,x:112.9,y:201.1}).wait(1).to({graphics:mask_3_graphics_45,x:115.8,y:205}).wait(1).to({graphics:mask_3_graphics_46,x:118.9,y:209}).wait(1).to({graphics:mask_3_graphics_47,x:122,y:213.3}).wait(1).to({graphics:mask_3_graphics_48,x:125.3,y:217.6}).wait(1).to({graphics:mask_3_graphics_49,x:128.6,y:222.1}).wait(1).to({graphics:mask_3_graphics_50,x:132.1,y:226.8}).wait(1).to({graphics:mask_3_graphics_51,x:135.7,y:231.6}).wait(1).to({graphics:mask_3_graphics_52,x:139.5,y:236.6}).wait(1).to({graphics:mask_3_graphics_53,x:143.3,y:241.8}).wait(1).to({graphics:mask_3_graphics_54,x:147.3,y:247.1}).wait(1).to({graphics:mask_3_graphics_55,x:150.6,y:252.4}).wait(1).to({graphics:mask_3_graphics_56,x:150.6,y:252.6}).wait(1).to({graphics:mask_3_graphics_57,x:150.6,y:252.8}).wait(1).to({graphics:mask_3_graphics_58,x:150.6,y:253}).wait(1).to({graphics:mask_3_graphics_59,x:150.6,y:253.2}).wait(1).to({graphics:mask_3_graphics_60,x:150.6,y:253.4}).wait(1).to({graphics:mask_3_graphics_61,x:150.6,y:253.6}).wait(1).to({graphics:mask_3_graphics_62,x:150.6,y:253.8}).wait(1).to({graphics:mask_3_graphics_63,x:150.6,y:254}).wait(1).to({graphics:mask_3_graphics_64,x:150.6,y:254.2}).wait(1).to({graphics:mask_3_graphics_65,x:150.6,y:254.4}).wait(1).to({graphics:mask_3_graphics_66,x:150.6,y:254.6}).wait(1).to({graphics:mask_3_graphics_67,x:150.6,y:254.8}).wait(1).to({graphics:mask_3_graphics_68,x:150.6,y:255}).wait(1).to({graphics:mask_3_graphics_69,x:150.6,y:255.2}).wait(1).to({graphics:mask_3_graphics_70,x:150.6,y:255.3}).wait(1).to({graphics:mask_3_graphics_71,x:150.6,y:255.5}).wait(1).to({graphics:mask_3_graphics_72,x:150.6,y:255.7}).wait(1).to({graphics:mask_3_graphics_73,x:150.6,y:255.9}).wait(1).to({graphics:mask_3_graphics_74,x:150.6,y:256.1}).wait(1).to({graphics:mask_3_graphics_75,x:150.6,y:256.3}).wait(1).to({graphics:mask_3_graphics_76,x:150.6,y:256.5}).wait(1).to({graphics:mask_3_graphics_77,x:150.6,y:256.7}).wait(1).to({graphics:mask_3_graphics_78,x:150.6,y:256.9}).wait(1).to({graphics:mask_3_graphics_79,x:150.6,y:257.1}).wait(1).to({graphics:mask_3_graphics_80,x:150.6,y:257.3}).wait(1).to({graphics:mask_3_graphics_81,x:150.6,y:257.5}).wait(1).to({graphics:mask_3_graphics_82,x:150.6,y:257.7}).wait(1).to({graphics:mask_3_graphics_83,x:150.6,y:257.9}).wait(1).to({graphics:mask_3_graphics_84,x:150.6,y:258.1}).wait(1).to({graphics:mask_3_graphics_85,x:150.6,y:258.2}).wait(1).to({graphics:mask_3_graphics_86,x:150.6,y:258.4}).wait(1).to({graphics:mask_3_graphics_87,x:150.6,y:258.6}).wait(1).to({graphics:mask_3_graphics_88,x:150.6,y:258.8}).wait(1).to({graphics:mask_3_graphics_89,x:150.6,y:259}).wait(1).to({graphics:mask_3_graphics_90,x:150.6,y:259.2}).wait(1).to({graphics:mask_3_graphics_91,x:150.6,y:259.4}).wait(1).to({graphics:mask_3_graphics_92,x:150.6,y:259.6}).wait(1).to({graphics:mask_3_graphics_93,x:150.6,y:259.8}).wait(1).to({graphics:mask_3_graphics_94,x:150.6,y:260}).wait(1).to({graphics:mask_3_graphics_95,x:150.6,y:260.2}).wait(1).to({graphics:mask_3_graphics_96,x:150.6,y:260.4}).wait(1).to({graphics:mask_3_graphics_97,x:150.6,y:260.6}).wait(1).to({graphics:mask_3_graphics_98,x:150.6,y:260.8}).wait(1).to({graphics:mask_3_graphics_99,x:150.6,y:261}).wait(1).to({graphics:mask_3_graphics_100,x:150.6,y:261.1}).wait(1).to({graphics:mask_3_graphics_101,x:150.6,y:261.3}).wait(1).to({graphics:mask_3_graphics_102,x:150.6,y:261.5}).wait(1).to({graphics:mask_3_graphics_103,x:150.6,y:261.7}).wait(1).to({graphics:mask_3_graphics_104,x:150.6,y:261.9}).wait(1).to({graphics:mask_3_graphics_105,x:150.6,y:262.1}).wait(1).to({graphics:mask_3_graphics_106,x:150.6,y:262.3}).wait(1).to({graphics:mask_3_graphics_107,x:150.6,y:262.5}).wait(1).to({graphics:mask_3_graphics_108,x:150.6,y:262.7}).wait(1).to({graphics:mask_3_graphics_109,x:150.6,y:262.9}).wait(1).to({graphics:mask_3_graphics_110,x:150.6,y:263.1}).wait(1).to({graphics:mask_3_graphics_111,x:150.6,y:263.3}).wait(1).to({graphics:mask_3_graphics_112,x:150.6,y:263.5}).wait(1).to({graphics:mask_3_graphics_113,x:150.6,y:263.7}).wait(1).to({graphics:mask_3_graphics_114,x:150.6,y:263.9}).wait(1).to({graphics:mask_3_graphics_115,x:150.6,y:264}).wait(1).to({graphics:mask_3_graphics_116,x:150.6,y:264.2}).wait(1).to({graphics:mask_3_graphics_117,x:150.6,y:264.4}).wait(1).to({graphics:mask_3_graphics_118,x:150.6,y:264.6}).wait(1).to({graphics:mask_3_graphics_119,x:150.6,y:264.8}).wait(1).to({graphics:mask_3_graphics_120,x:150.6,y:265}).wait(1).to({graphics:mask_3_graphics_121,x:150.6,y:265.2}).wait(1).to({graphics:mask_3_graphics_122,x:150.5,y:265.4}).wait(1).to({graphics:mask_3_graphics_123,x:150.5,y:266}).wait(1).to({graphics:mask_3_graphics_124,x:150.5,y:267}).wait(1).to({graphics:mask_3_graphics_125,x:150.5,y:268.5}).wait(1).to({graphics:mask_3_graphics_126,x:150.5,y:270.3}).wait(1).to({graphics:mask_3_graphics_127,x:150.5,y:272.6}).wait(1).to({graphics:mask_3_graphics_128,x:150.5,y:275.3}).wait(1).to({graphics:mask_3_graphics_129,x:150.5,y:278.4}).wait(1).to({graphics:mask_3_graphics_130,x:150.5,y:281.9}).wait(1).to({graphics:mask_3_graphics_131,x:150.5,y:285.9}).wait(1).to({graphics:mask_3_graphics_132,x:150.5,y:290.2}).wait(1).to({graphics:mask_3_graphics_133,x:150.5,y:295}).wait(1).to({graphics:mask_3_graphics_134,x:150.4,y:300.1}).wait(1).to({graphics:mask_3_graphics_135,x:150.4,y:305.7}).wait(1).to({graphics:mask_3_graphics_136,x:150.4,y:311.7}).wait(1).to({graphics:mask_3_graphics_137,x:150.4,y:318.1}).wait(1).to({graphics:mask_3_graphics_138,x:150.4,y:324.1}).wait(1).to({graphics:mask_3_graphics_139,x:150.3,y:322.9}).wait(1).to({graphics:mask_3_graphics_140,x:150.3,y:321.7}).wait(1).to({graphics:mask_3_graphics_141,x:150.3,y:320.4}).wait(1).to({graphics:mask_3_graphics_142,x:150.3,y:319.1}).wait(1).to({graphics:mask_3_graphics_143,x:150.2,y:317.6}).wait(1).to({graphics:mask_3_graphics_144,x:150.2,y:316.1}).wait(1).to({graphics:mask_3_graphics_145,x:150.2,y:314.6}).wait(1).to({graphics:mask_3_graphics_146,x:150.1,y:313}).wait(1).to({graphics:mask_3_graphics_147,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_148,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_149,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_150,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_151,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_152,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_153,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_154,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_155,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_156,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_157,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_158,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_159,x:150.1,y:311.3}).wait(1).to({graphics:mask_3_graphics_160,x:150.1,y:311.3}).wait(1).to({graphics:null,x:0,y:0}).wait(45));

	// Layer 4
	this.instance_11 = new lib.robo();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.6,304.4,0.04,0.04,0,0,0,77,10);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({regX:76.5,regY:9,scaleX:0.88,scaleY:0.88,x:150.9,y:362.9},35,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:151,y:347.8},66).to({scaleX:2.63,scaleY:2.63,x:151.8,y:355.9,alpha:0.328},26,cjs.Ease.get(-1)).to({regX:76.4,regY:9.1,scaleX:3.38,scaleY:3.38,x:152.2,y:360.1,alpha:0},13).to({_off:true},1).wait(45));

	// Layer 27
	this.instance_12 = new lib.robo();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.7,304.5,0.04,0.04,0,0,0,77,10);
	this.instance_12._off = true;
	this.instance_12.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-2,-2,156,21);

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({regX:76.6,regY:8.8,scaleX:0.88,scaleY:0.88,x:151.9,y:363.7},35,cjs.Ease.get(-1)).to({regX:76.7,scaleX:1.13,scaleY:1.13,x:152.4,y:348.8},66).to({regX:76.6,scaleX:2.63,scaleY:2.63,x:153.7,y:357.1,alpha:-0.328},26,cjs.Ease.get(-1)).to({regX:76.5,regY:9.1,scaleX:3.38,scaleY:3.38,x:154.5,y:361.4,alpha:-1},13).to({_off:true},1).wait(45));

	// Layer 3
	this.instance_13 = new lib.recall();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.6,306.6,0.04,0.04,0,0,0,90.7,38.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(20).to({_off:false},0).to({regX:89.9,regY:38.8,scaleX:0.88,scaleY:0.88,x:150,y:411.2},35,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:149.8,y:409.9},66).to({scaleX:2.75,scaleY:2.75,x:149.9,y:504.8,alpha:0.328},26,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,y:552.5,alpha:0},13).to({_off:true},1).wait(45));

	// Layer 28
	this.instance_14 = new lib.recall();
	this.instance_14.parent = this;
	this.instance_14.setTransform(150.6,306.7,0.04,0.04,0,0,0,90.7,39.8);
	this.instance_14._off = true;
	this.instance_14.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-2,-2,183,81);

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(20).to({_off:false},0).to({regX:90.1,regY:38.8,scaleX:0.88,scaleY:0.88,x:150.9,y:412},35,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,x:151,y:410.9},66).to({scaleX:2.75,scaleY:2.75,x:151.6,y:506.2,alpha:-0.328},26,cjs.Ease.get(-1)).to({regX:89.7,regY:39,scaleX:3.56,scaleY:3.56,x:152,y:553.9,alpha:-1},13).to({_off:true},1).wait(45));

	// Layer 7
	this.instance_15 = new lib.Tween12("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(150.9,352.1,0.88,0.88,0,0,0,0.4,0.1);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween13("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(130.6,287,4.377,4.377,0,0,0,0.1,0.1);
	this.instance_16.alpha = 0;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},55).to({state:[{t:this.instance_15}]},66).to({state:[{t:this.instance_15}]},26).to({state:[{t:this.instance_16}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(55).to({_off:false},0).to({regY:0.2,scaleX:1.13,scaleY:1.13,x:151,y:334},66).to({scaleX:3.3,scaleY:3.3,x:137.5,y:302.6,alpha:0.328},26,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0.1,scaleX:4.38,scaleY:4.38,x:130.6,y:287,alpha:0},13).wait(46));

	// SMOKE_MASK (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_55 = new cjs.Graphics().p("A3/WnMAAAgtNMAv/AAAMAAAAtNg");
	var mask_4_graphics_56 = new cjs.Graphics().p("A4GWtMAAAgtaMAwNAAAMAAAAtag");
	var mask_4_graphics_57 = new cjs.Graphics().p("A4NW0MAAAgtnMAwbAAAMAAAAtng");
	var mask_4_graphics_58 = new cjs.Graphics().p("A4TW6MAAAgt0MAwnAAAMAAAAt0g");
	var mask_4_graphics_59 = new cjs.Graphics().p("A4aXBMAAAguBMAw1AAAMAAAAuBg");
	var mask_4_graphics_60 = new cjs.Graphics().p("A4hXHMAAAguNMAxCAAAMAAAAuNg");
	var mask_4_graphics_61 = new cjs.Graphics().p("A4nXOMAAAguaMAxPAAAMAAAAuag");
	var mask_4_graphics_62 = new cjs.Graphics().p("A4uXUMAAAgunMAxdAAAMAAAAung");
	var mask_4_graphics_63 = new cjs.Graphics().p("A41XaMAAAgu0MAxqAAAMAAAAu0g");
	var mask_4_graphics_64 = new cjs.Graphics().p("A47XhMAAAgvBMAx3AAAMAAAAvBg");
	var mask_4_graphics_65 = new cjs.Graphics().p("A5CXnMAAAgvNMAyFAAAMAAAAvNg");
	var mask_4_graphics_66 = new cjs.Graphics().p("A5JXuMAAAgvbMAyTAAAMAAAAvbg");
	var mask_4_graphics_67 = new cjs.Graphics().p("A5PX0MAAAgvnMAyfAAAMAAAAvng");
	var mask_4_graphics_68 = new cjs.Graphics().p("A5WX7MAAAgv0MAytAAAMAAAAv0g");
	var mask_4_graphics_69 = new cjs.Graphics().p("A5cYBMAAAgwBMAy6AAAMAAAAwBg");
	var mask_4_graphics_70 = new cjs.Graphics().p("A5jYHMAAAgwOMAzHAAAMAAAAwOg");
	var mask_4_graphics_71 = new cjs.Graphics().p("A5qYOMAAAgwbMAzVAAAMAAAAwbg");
	var mask_4_graphics_72 = new cjs.Graphics().p("A5wYUMAAAgwnMAzhAAAMAAAAwng");
	var mask_4_graphics_73 = new cjs.Graphics().p("A53YbMAAAgw1MAzvAAAMAAAAw1g");
	var mask_4_graphics_74 = new cjs.Graphics().p("A5+YhMAAAgxBMAz9AAAMAAAAxBg");
	var mask_4_graphics_75 = new cjs.Graphics().p("A6EYoMAAAgxOMA0JAAAMAAAAxOg");
	var mask_4_graphics_76 = new cjs.Graphics().p("A6LYuMAAAgxbMA0XAAAMAAAAxbg");
	var mask_4_graphics_77 = new cjs.Graphics().p("A6SY0MAAAgxnMA0lAAAMAAAAxng");
	var mask_4_graphics_78 = new cjs.Graphics().p("A6YY7MAAAgx1MA0xAAAMAAAAx1g");
	var mask_4_graphics_79 = new cjs.Graphics().p("A6fZBMAAAgyBMA0/AAAMAAAAyBg");
	var mask_4_graphics_80 = new cjs.Graphics().p("A6mZIMAAAgyPMA1NAAAMAAAAyPg");
	var mask_4_graphics_81 = new cjs.Graphics().p("A6sZOMAAAgybMA1ZAAAMAAAAybg");
	var mask_4_graphics_82 = new cjs.Graphics().p("A6zZVMAAAgyoMA1nAAAMAAAAyog");
	var mask_4_graphics_83 = new cjs.Graphics().p("A66ZbMAAAgy1MA11AAAMAAAAy1g");
	var mask_4_graphics_84 = new cjs.Graphics().p("A7BZhMAAAgzBMA2DAAAMAAAAzBg");
	var mask_4_graphics_85 = new cjs.Graphics().p("A7HZnMAAAgzOMA2PAAAMAAAAzOg");
	var mask_4_graphics_86 = new cjs.Graphics().p("A7NZuMAAAgzbMA2cAAAMAAAAzbg");
	var mask_4_graphics_87 = new cjs.Graphics().p("A7VZ1MAAAgzpMA2rAAAMAAAAzpg");
	var mask_4_graphics_88 = new cjs.Graphics().p("A7bZ7MAAAgz1MA23AAAMAAAAz1g");
	var mask_4_graphics_89 = new cjs.Graphics().p("A7haBMAAAg0BMA3DAAAMAAAA0Bg");
	var mask_4_graphics_90 = new cjs.Graphics().p("A7oaHMAAAg0NMA3RAAAMAAAA0Ng");
	var mask_4_graphics_91 = new cjs.Graphics().p("A7vaOMAAAg0bMA3fAAAMAAAA0bg");
	var mask_4_graphics_92 = new cjs.Graphics().p("A72aUMAAAg0oMA3sAAAMAAAA0og");
	var mask_4_graphics_93 = new cjs.Graphics().p("A78abMAAAg01MA35AAAMAAAA01g");
	var mask_4_graphics_94 = new cjs.Graphics().p("A8DahMAAAg1BMA4HAAAMAAAA1Bg");
	var mask_4_graphics_95 = new cjs.Graphics().p("A8KaoMAAAg1PMA4VAAAMAAAA1Pg");
	var mask_4_graphics_96 = new cjs.Graphics().p("A8QauMAAAg1bMA4hAAAMAAAA1bg");
	var mask_4_graphics_97 = new cjs.Graphics().p("A8Xa0MAAAg1nMA4vAAAMAAAA1ng");
	var mask_4_graphics_98 = new cjs.Graphics().p("A8ea7MAAAg11MA49AAAMAAAA11g");
	var mask_4_graphics_99 = new cjs.Graphics().p("A8kbBMAAAg2BMA5JAAAMAAAA2Bg");
	var mask_4_graphics_100 = new cjs.Graphics().p("A8rbIMAAAg2PMA5XAAAMAAAA2Pg");
	var mask_4_graphics_101 = new cjs.Graphics().p("A8ybOMAAAg2bMA5lAAAMAAAA2bg");
	var mask_4_graphics_102 = new cjs.Graphics().p("A84bVMAAAg2pMA5xAAAMAAAA2pg");
	var mask_4_graphics_103 = new cjs.Graphics().p("A8/bbMAAAg21MA5/AAAMAAAA21g");
	var mask_4_graphics_104 = new cjs.Graphics().p("A9GbhMAAAg3BMA6NAAAMAAAA3Bg");
	var mask_4_graphics_105 = new cjs.Graphics().p("A9MboMAAAg3PMA6ZAAAMAAAA3Pg");
	var mask_4_graphics_106 = new cjs.Graphics().p("A9TbuMAAAg3bMA6nAAAMAAAA3bg");
	var mask_4_graphics_107 = new cjs.Graphics().p("A9Zb0MAAAg3oMA6zAAAMAAAA3og");
	var mask_4_graphics_108 = new cjs.Graphics().p("A9gb7MAAAg31MA7BAAAMAAAA31g");
	var mask_4_graphics_109 = new cjs.Graphics().p("A9ncBMAAAg4BMA7PAAAMAAAA4Bg");
	var mask_4_graphics_110 = new cjs.Graphics().p("A9tcIMAAAg4PMA7bAAAMAAAA4Pg");
	var mask_4_graphics_111 = new cjs.Graphics().p("A90cOMAAAg4bMA7pAAAMAAAA4bg");
	var mask_4_graphics_112 = new cjs.Graphics().p("A97cVMAAAg4pMA73AAAMAAAA4pg");
	var mask_4_graphics_113 = new cjs.Graphics().p("A+CcbMAAAg41MA8FAAAMAAAA41g");
	var mask_4_graphics_114 = new cjs.Graphics().p("A+IchMAAAg5BMA8RAAAMAAAA5Bg");
	var mask_4_graphics_115 = new cjs.Graphics().p("A+PcoMAAAg5PMA8fAAAMAAAA5Pg");
	var mask_4_graphics_116 = new cjs.Graphics().p("A+WcuMAAAg5bMA8tAAAMAAAA5bg");
	var mask_4_graphics_117 = new cjs.Graphics().p("A+cc1MAAAg5oMA85AAAMAAAA5og");
	var mask_4_graphics_118 = new cjs.Graphics().p("A+jc7MAAAg51MA9HAAAMAAAA51g");
	var mask_4_graphics_119 = new cjs.Graphics().p("A+pdCMAAAg6DMA9TAAAMAAAA6Dg");
	var mask_4_graphics_120 = new cjs.Graphics().p("A+wdIMAAAg6PMA9hAAAMAAAA6Pg");
	var mask_4_graphics_121 = new cjs.Graphics().p("A+3dOMAAAg6bMA9vAAAMAAAA6bg");
	var mask_4_graphics_122 = new cjs.Graphics().p("A+6dTMAAAg6lMA91AAAMAAAA6lg");
	var mask_4_graphics_123 = new cjs.Graphics().p("A/GdfMAAAg69MA+NAAAMAAAA69g");
	var mask_4_graphics_124 = new cjs.Graphics().p("A/Zd0MAAAg7nMA+zAAAMAAAA7ng");
	var mask_4_graphics_125 = new cjs.Graphics().p("A/zeRMAAAg8hMA/nAAAMAAAA8hg");
	var mask_4_graphics_126 = new cjs.Graphics().p("EggUAe2MAAAg9rMBApAAAMAAAA9rg");
	var mask_4_graphics_127 = new cjs.Graphics().p("Egg+AfkMAAAg/GMBB9AAAMAAAA/Gg");
	var mask_4_graphics_128 = new cjs.Graphics().p("EghuAgZMAAAhAxMBDdAAAMAAABAxg");
	var mask_4_graphics_129 = new cjs.Graphics().p("EginAhYMAAAhCvMBFPAAAMAAABCvg");
	var mask_4_graphics_130 = new cjs.Graphics().p("EgjmAieMAAAhE7MBHNAAAMAAABE7g");
	var mask_4_graphics_131 = new cjs.Graphics().p("EgkuAjtMAAAhHZMBJdAAAMAAABHZg");
	var mask_4_graphics_132 = new cjs.Graphics().p("Egl8AlEMAAAhKHMBL5AAAMAAABKHg");
	var mask_4_graphics_133 = new cjs.Graphics().p("EgnTAmjMAAAhNFMBOnAAAMAAABNFg");
	var mask_4_graphics_134 = new cjs.Graphics().p("EgowAoLMAAAhQUMBRhAAAMAAABQUg");
	var mask_4_graphics_135 = new cjs.Graphics().p("EgqWAp6MAAAhT0MBUtAAAMAAABT0g");
	var mask_4_graphics_136 = new cjs.Graphics().p("EgsCArzMAAAhXkMBYFAAAMAAABXkg");
	var mask_4_graphics_137 = new cjs.Graphics().p("Egt3AtzMAAAhblMBbvAAAMAAABblg");
	var mask_4_graphics_138 = new cjs.Graphics().p("EgvyAv8MAAAhf3MBflAAAMAAABf3g");
	var mask_4_graphics_139 = new cjs.Graphics().p("Egx2AyNMAAAhkZMBjtAAAMAAABkZg");
	var mask_4_graphics_140 = new cjs.Graphics().p("Eg0AA0mMAAAhpMMBoBAAAMAAABpMg");
	var mask_4_graphics_141 = new cjs.Graphics().p("Eg2SA3IMAAAhuPMBslAAAMAAABuPg");
	var mask_4_graphics_142 = new cjs.Graphics().p("Eg4sA5yMAAAhzjMBxZAAAMAAABzjg");
	var mask_4_graphics_143 = new cjs.Graphics().p("Eg7NA8kMAAAh5HMB2bAAAMAAAB5Hg");
	var mask_4_graphics_144 = new cjs.Graphics().p("Eg92A/eMAAAh+7MB7tAAAMAAAB+7g");
	var mask_4_graphics_145 = new cjs.Graphics().p("EhAmBChMAAAiFBMCBNAAAMAAACFBg");
	var mask_4_graphics_146 = new cjs.Graphics().p("EhDeBFsMAAAiLXMCG9AAAMAAACLXg");
	var mask_4_graphics_147 = new cjs.Graphics().p("EhGdBJAMAAAiR/MCM7AAAMAAACR/g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(55).to({graphics:mask_4_graphics_55,x:151,y:345}).wait(1).to({graphics:mask_4_graphics_56,x:151,y:344.7}).wait(1).to({graphics:mask_4_graphics_57,x:151,y:344.4}).wait(1).to({graphics:mask_4_graphics_58,x:151,y:344.1}).wait(1).to({graphics:mask_4_graphics_59,x:151,y:343.8}).wait(1).to({graphics:mask_4_graphics_60,x:151.1,y:343.4}).wait(1).to({graphics:mask_4_graphics_61,x:151,y:343.1}).wait(1).to({graphics:mask_4_graphics_62,x:151.1,y:342.8}).wait(1).to({graphics:mask_4_graphics_63,x:151.1,y:342.5}).wait(1).to({graphics:mask_4_graphics_64,x:151.1,y:342.2}).wait(1).to({graphics:mask_4_graphics_65,x:151.1,y:341.8}).wait(1).to({graphics:mask_4_graphics_66,x:151.1,y:341.5}).wait(1).to({graphics:mask_4_graphics_67,x:151.1,y:341.2}).wait(1).to({graphics:mask_4_graphics_68,x:151.1,y:340.9}).wait(1).to({graphics:mask_4_graphics_69,x:151.1,y:340.6}).wait(1).to({graphics:mask_4_graphics_70,x:151.1,y:340.2}).wait(1).to({graphics:mask_4_graphics_71,x:151.1,y:339.9}).wait(1).to({graphics:mask_4_graphics_72,x:151.1,y:339.6}).wait(1).to({graphics:mask_4_graphics_73,x:151.1,y:339.3}).wait(1).to({graphics:mask_4_graphics_74,x:151.1,y:338.9}).wait(1).to({graphics:mask_4_graphics_75,x:151.1,y:338.6}).wait(1).to({graphics:mask_4_graphics_76,x:151.1,y:338.3}).wait(1).to({graphics:mask_4_graphics_77,x:151.1,y:338}).wait(1).to({graphics:mask_4_graphics_78,x:151.1,y:337.6}).wait(1).to({graphics:mask_4_graphics_79,x:151.1,y:337.3}).wait(1).to({graphics:mask_4_graphics_80,x:151.1,y:337}).wait(1).to({graphics:mask_4_graphics_81,x:151.1,y:336.7}).wait(1).to({graphics:mask_4_graphics_82,x:151.1,y:336.4}).wait(1).to({graphics:mask_4_graphics_83,x:151.1,y:336}).wait(1).to({graphics:mask_4_graphics_84,x:151.1,y:335.7}).wait(1).to({graphics:mask_4_graphics_85,x:151.1,y:335.4}).wait(1).to({graphics:mask_4_graphics_86,x:151.1,y:335.1}).wait(1).to({graphics:mask_4_graphics_87,x:151.1,y:334.8}).wait(1).to({graphics:mask_4_graphics_88,x:151.1,y:334.4}).wait(1).to({graphics:mask_4_graphics_89,x:151.1,y:334.1}).wait(1).to({graphics:mask_4_graphics_90,x:151.1,y:333.8}).wait(1).to({graphics:mask_4_graphics_91,x:151.1,y:333.5}).wait(1).to({graphics:mask_4_graphics_92,x:151.1,y:333.2}).wait(1).to({graphics:mask_4_graphics_93,x:151.1,y:332.8}).wait(1).to({graphics:mask_4_graphics_94,x:151.1,y:332.5}).wait(1).to({graphics:mask_4_graphics_95,x:151.1,y:332.2}).wait(1).to({graphics:mask_4_graphics_96,x:151.1,y:331.9}).wait(1).to({graphics:mask_4_graphics_97,x:151.1,y:331.6}).wait(1).to({graphics:mask_4_graphics_98,x:151.1,y:331.2}).wait(1).to({graphics:mask_4_graphics_99,x:151.1,y:330.9}).wait(1).to({graphics:mask_4_graphics_100,x:151.1,y:330.6}).wait(1).to({graphics:mask_4_graphics_101,x:151.1,y:330.3}).wait(1).to({graphics:mask_4_graphics_102,x:151.1,y:330}).wait(1).to({graphics:mask_4_graphics_103,x:151.1,y:329.6}).wait(1).to({graphics:mask_4_graphics_104,x:151.2,y:329.3}).wait(1).to({graphics:mask_4_graphics_105,x:151.1,y:329}).wait(1).to({graphics:mask_4_graphics_106,x:151.2,y:328.7}).wait(1).to({graphics:mask_4_graphics_107,x:151.2,y:328.3}).wait(1).to({graphics:mask_4_graphics_108,x:151.2,y:328}).wait(1).to({graphics:mask_4_graphics_109,x:151.2,y:327.7}).wait(1).to({graphics:mask_4_graphics_110,x:151.2,y:327.4}).wait(1).to({graphics:mask_4_graphics_111,x:151.2,y:327}).wait(1).to({graphics:mask_4_graphics_112,x:151.2,y:326.7}).wait(1).to({graphics:mask_4_graphics_113,x:151.2,y:326.4}).wait(1).to({graphics:mask_4_graphics_114,x:151.2,y:326.1}).wait(1).to({graphics:mask_4_graphics_115,x:151.2,y:325.8}).wait(1).to({graphics:mask_4_graphics_116,x:151.2,y:325.4}).wait(1).to({graphics:mask_4_graphics_117,x:151.2,y:325.1}).wait(1).to({graphics:mask_4_graphics_118,x:151.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_119,x:151.2,y:324.5}).wait(1).to({graphics:mask_4_graphics_120,x:151.2,y:324.2}).wait(1).to({graphics:mask_4_graphics_121,x:151.2,y:323.8}).wait(1).to({graphics:mask_4_graphics_122,x:151.2,y:323.8}).wait(1).to({graphics:mask_4_graphics_123,x:151.2,y:323.6}).wait(1).to({graphics:mask_4_graphics_124,x:151.2,y:323.2}).wait(1).to({graphics:mask_4_graphics_125,x:151.2,y:322.8}).wait(1).to({graphics:mask_4_graphics_126,x:151.2,y:322.2}).wait(1).to({graphics:mask_4_graphics_127,x:151.2,y:321.5}).wait(1).to({graphics:mask_4_graphics_128,x:151.2,y:320.6}).wait(1).to({graphics:mask_4_graphics_129,x:151.2,y:319.6}).wait(1).to({graphics:mask_4_graphics_130,x:151.2,y:318.5}).wait(1).to({graphics:mask_4_graphics_131,x:151.2,y:317.2}).wait(1).to({graphics:mask_4_graphics_132,x:151.2,y:315.8}).wait(1).to({graphics:mask_4_graphics_133,x:151.2,y:314.3}).wait(1).to({graphics:mask_4_graphics_134,x:151.2,y:312.7}).wait(1).to({graphics:mask_4_graphics_135,x:151.2,y:310.9}).wait(1).to({graphics:mask_4_graphics_136,x:151.2,y:309}).wait(1).to({graphics:mask_4_graphics_137,x:151.2,y:306.9}).wait(1).to({graphics:mask_4_graphics_138,x:151.2,y:304.7}).wait(1).to({graphics:mask_4_graphics_139,x:151.2,y:302.4}).wait(1).to({graphics:mask_4_graphics_140,x:151.2,y:300}).wait(1).to({graphics:mask_4_graphics_141,x:151.2,y:297.4}).wait(1).to({graphics:mask_4_graphics_142,x:151.2,y:294.7}).wait(1).to({graphics:mask_4_graphics_143,x:151.2,y:291.8}).wait(1).to({graphics:mask_4_graphics_144,x:151.2,y:288.9}).wait(1).to({graphics:mask_4_graphics_145,x:151.2,y:285.7}).wait(1).to({graphics:mask_4_graphics_146,x:151.2,y:282.5}).wait(1).to({graphics:mask_4_graphics_147,x:151.2,y:279.1}).wait(1).to({graphics:null,x:0,y:0}).wait(58));

	// SMOKE
	this.instance_17 = new lib.Tween10("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(151.4,516.5,1.019,1.019,0,0,0,0.4,0.3);
	this.instance_17._off = true;

	this.instance_18 = new lib.Tween11("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(153.3,324.7,4.377,4.377,0,0,0,0.1,0);
	this.instance_18.alpha = 0;

	var maskedShapeInstanceList = [this.instance_17,this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17}]},55).to({state:[{t:this.instance_17}]},66).to({state:[{t:this.instance_17}]},26).to({state:[{t:this.instance_18}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55).to({_off:false},0).to({scaleX:1.31,scaleY:1.31,x:151.6,y:291.3},66).to({scaleX:3.36,scaleY:3.36,x:153,y:100.3,alpha:0.328},26,cjs.Ease.get(-1)).to({_off:true,regX:0.1,regY:0,scaleX:4.38,scaleY:4.38,x:153.3,y:324.7,alpha:0},13).wait(46));

	// GAME_BG
	this.instance_19 = new lib.Tween8("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(150.6,304,0.04,0.04,0,0,0,1.3,1.3);
	this.instance_19._off = true;

	this.instance_20 = new lib.Tween9("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(151.3,306.3,3.713,3.713,0,0,0,0.2,0.1);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19}]},20).to({state:[{t:this.instance_19}]},35).to({state:[{t:this.instance_19}]},66).to({state:[{t:this.instance_19}]},26).to({state:[{t:this.instance_20}]},13).to({state:[]},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(20).to({_off:false},0).to({regX:0.4,regY:1.6,scaleX:0.87,scaleY:0.87,x:150.9,y:353.3},35,cjs.Ease.get(-1)).to({scaleX:1.12,scaleY:1.12,x:151,y:335.4},66).to({scaleX:2.85,scaleY:2.85,x:151.3,y:315.9,alpha:0.328},26,cjs.Ease.get(-1)).to({_off:true,regX:0.2,regY:0.1,scaleX:3.71,scaleY:3.71,y:306.3,alpha:0},13).wait(46));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(154.6,547,1.014,1.014,0,0,0,128.8,-4.7);
	this.cta.alpha = 0;
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(148).to({_off:false},0).to({x:156.6,y:541,alpha:1},4).wait(54));

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_157 = new cjs.Graphics().p("AuNBIIAAiPIcaAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(157).to({graphics:mask_5_graphics_157,x:155.9,y:481.1}).wait(49));

	// legal
	this.instance_21 = new lib.legal_withpurchase();
	this.instance_21.parent = this;
	this.instance_21.setTransform(150.5,595.2,1.216,1.216,0,0,0,117.9,8.1);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(157).to({_off:false},0).to({y:574.7},9).wait(40));

	// Layer 9 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_156 = new cjs.Graphics().p("AuNBIIAAiPIcaAAIAACPg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(156).to({graphics:mask_6_graphics_156,x:155.9,y:466.1}).wait(50));

	// Layer 10
	this.instance_22 = new lib.legal_limitedtime();
	this.instance_22.parent = this;
	this.instance_22.setTransform(156.1,485.3,0.822,0.822,0,0,0,-10.3,142.4);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(156).to({_off:false},0).to({y:465.3},9).wait(41));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_155 = new cjs.Graphics().p("AuNF2IAArsIcaAAIAALsg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_7_graphics_155,x:145.9,y:421.9}).wait(51));

	// price
	this.instance_23 = new lib.newPrice();
	this.instance_23.parent = this;
	this.instance_23.setTransform(145.9,506.2,0.814,0.814,0,0,0,59.5,246.1);
	this.instance_23._off = true;

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(155).to({_off:false},0).to({y:436.2},10,cjs.Ease.get(1)).wait(41));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_155 = new cjs.Graphics().p("AtqDIIAAmPIbVAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_8_graphics_155,x:149.3,y:370}).wait(51));

	// oculus
	this.instance_24 = new lib.logo_rifttouch();
	this.instance_24.parent = this;
	this.instance_24.setTransform(156.7,405.5,0.415,0.415,0,0,0,88,162.3);
	this.instance_24._off = true;

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(155).to({_off:false},0).to({y:378},10,cjs.Ease.get(1)).wait(41));

	// stadium (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_155 = new cjs.Graphics().p("AqyIMIAAwXIVlAAIAAQXg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(155).to({graphics:mask_9_graphics_155,x:149.7,y:304.2}).wait(51));

	// oculus
	this.instance_25 = new lib.logo_oculus();
	this.instance_25.parent = this;
	this.instance_25.setTransform(152.5,342,0.616,0.616,0,0,0,81.4,66.2);
	this.instance_25._off = true;

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(155).to({_off:false},0).to({y:312},10,cjs.Ease.get(1)).wait(41));

	// stadium
	this.instance_26 = new lib.logo_stadium();
	this.instance_26.parent = this;
	this.instance_26.setTransform(152.8,352.1,0.618,0.618,0,0,0,81.4,66);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(155).to({_off:false},0).to({y:312.1},10,cjs.Ease.get(1)).wait(41));

	// touch RT
	this.instance_27 = new lib.hardware_touch_RT_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(137.5,296.7,0.106,0.106,0,0,0,33,30.6);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(146).to({_off:false},0).to({regX:32.6,regY:30.2,scaleX:1.15,scaleY:1.15,x:90.5,y:206.2},19,cjs.Ease.get(-1)).wait(41));

	// touch LT
	this.instance_28 = new lib.hardware_touch_LT_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(148.4,296.5,0.106,0.106,0,0,0,23.6,24);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(146).to({_off:false},0).to({regX:23.1,regY:23.7,scaleX:1.15,scaleY:1.15,x:209.8,y:204.2},19,cjs.Ease.get(-1)).wait(41));

	// rift
	this.instance_29 = new lib.hardware_rift_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(144.5,289.4,0.106,0.106,0,0,0,69.3,42.4);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(146).to({_off:false},0).to({regX:69.1,regY:42.1,scaleX:1.23,scaleY:1.23,x:168.8,y:127.2},19,cjs.Ease.get(-1)).wait(41));

	// bg
	this.instance_30 = new lib.Bitmap38();
	this.instance_30.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	id: '98DEA8F0A3B34EA3A9E66A2FEDFF34AB',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap38.jpg?1503312034184", id:"Bitmap38"},
		{src:"images/game_1_unspoken.jpg?1503312034184", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg?1503312034184", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg?1503312034184", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg?1503312034184", id:"game_4_superhot"},
		{src:"images/game_6_rickmorty.jpg?1503312034184", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg?1503312034184", id:"game_7_wilson"},
		{src:"images/hardware_rift.png?1503312034184", id:"hardware_rift"},
		{src:"images/hardware_touch_LT.png?1503312034184", id:"hardware_touch_LT"},
		{src:"images/hardware_touch_RT.png?1503312034184", id:"hardware_touch_RT"},
		{src:"images/RR_poster_final12.jpg?1503312034184", id:"RR_poster_final12"},
		{src:"images/SmokeEffectPNGFile.png?1503312034184", id:"SmokeEffectPNGFile"}
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
an.compositions['98DEA8F0A3B34EA3A9E66A2FEDFF34AB'] = {
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