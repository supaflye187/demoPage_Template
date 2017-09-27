(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,50);


(lib.echo1 = function() {
	this.initialize(img.echo1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,263);


(lib.echo2 = function() {
	this.initialize(img.echo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,233);


(lib.echo3 = function() {
	this.initialize(img.echo3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,263);


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


(lib.game_5_roborecall = function() {
	this.initialize(img.game_5_roborecall);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_6_rickmorty = function() {
	this.initialize(img.game_6_rickmorty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);


(lib.game_7_wilson = function() {
	this.initialize(img.game_7_wilson);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,131);// helper functions:

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


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.echo3();
	this.instance.parent = this;
	this.instance.setTransform(-160,-131.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-131.5,320,263);


(lib.newPrice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKBoIAAgOQgPgBgQgDQgQgCgMgEIACggIAPAEIAVAEIAVACIAAguQgPgDgOgFQgNgEgJgKQgJgJgBgSQABgQAIgLQAJgLAOgFQAOgGAPgBIAAgRIAVAAIAAAQIASACIASADIAQAFIgCAfIgOgEIgSgEIgSgCIAAArIAVAGQALADAJAFQAJAEAFAJQAFAJABAOQgBARgIALQgIAKgOAHQgOAFgQACIAAAQgAALA5QAKgBAHgFQAIgFAAgIQAAgJgHgFQgHgFgLgCgAgbgyQgIAEAAAIQAAAIAHAEQAHAEALACIAAgkQgKABgHAFg");
	this.shape.setTransform(5.4,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPC1QAfgZAagfQAZgfAUghQgLACgMABIgWACQghgBgbgOQgagPgPgbQgPgZAAgiQAAgpASgdQATgeAfgQQAfgQApAAQAqAAAfASQAfARARAdQAQAdABAjQgBAcgJAfQgLAfgQAhQgRAggXAeQgVAdgZAXgAgdhnQgNAIgGANQgIANAAAPQAAAQAIANQAGANANAHQANAHASAAQARAAANgHQANgHAHgNQAHgNAAgQQAAgPgHgNQgHgNgNgIQgNgHgRAAQgSAAgNAHg");
	this.shape_1.setTransform(84.5,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPC1QAfgZAZgfQAagfATghQgKACgMABIgXACQgggBgagOQgagPgQgbQgPgZgBgiQABgpASgdQASgeAggQQAggQAnAAQArAAAfASQAfARAQAdQARAdAAAjQAAAcgKAfQgKAfgRAhQgQAggWAeQgXAdgYAXgAgdhnQgMAIgIANQgGANAAAPQAAAQAGANQAIANANAHQANAHAQAAQASAAANgHQANgHAHgNQAHgNAAgQQAAgPgHgNQgHgNgNgIQgNgHgSAAQgRAAgNAHg");
	this.shape_2.setTransform(54.8,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5C5IgogGIgjgHIAGhOIATAFIAfAFIAiAEQARACAOAAQAcAAAQgKQAPgJAAgUQgBgTgKgJQgKgJgQgEQgOgCgQAAIhIAAIgDhDIBSAAQAMgBAMgDQAMgDAJgHQAIgIAAgOQAAgPgKgHQgIgIgOgCQgOgDgOABQgUAAgVACIglAHIgZAEIgDhLIA2gKQAdgEAfgBQAYAAAYAFQAZAEATAKQAUAKAMAQQALASABAYQgBAhgRAYQgTAYggANIAAABQAWAEAQANQASANAKASQAKATABAZQgBAbgNASQgNATgWAMQgWALgaAGQgbAFgbABQgTAAgUgCg");
	this.shape_3.setTransform(27.4,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.newPrice, new cjs.Rectangle(-4.9,-9.2,108.1,62.8), null);


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
	this.shape.setTransform(121.7,-127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_stadium, new cjs.Rectangle(62.5,-162.7,118.4,71.5), null);


(lib.logo_rifttouch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABMC2IAAiTQAAgfgNgTQgNgSgigBQgXAAgVALQgVALgNAWQgMAWgBAhIAAB1IgaAAIAAlrIAaAAIAACBIgBAyIABAAQAIgOALgMQANgNASgJQASgHAYAAQAfAAASAMQATAMAIAVQAJAUAAAaIAACUg");
	this.shape.setTransform(185.9,165.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmBvQgcgNgQgbQgQgcAAgrQAAgqAQgbQAQgcAcgNQAcgMAkAAQAPAAAVAEQATAEATAJIgCAYQgTgIgUgFQgTgFgPAAQgcAAgWALQgXAKgMAXQgNAWAAAhQAAAjANAWQAMAWAXALQAWAKAcAAQAPAAATgFQAUgEATgJIACAZQgSAIgUAEQgUAEgQAAQgkAAgcgMg");
	this.shape_1.setTransform(159.5,172.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhBBsQgSgNgIgVQgIgVAAgZIAAiTIAZAAIAACQQAAAUAGAQQAGAQANAKQAOAKAXAAQAXAAAUgMQAUgNAMgYQAMgYAAgiIAAhtIAZAAIAADqIgYAAIAAgzIgBAAQgHANgLANQgLANgSAJQgSAIgZAAQgfAAgTgMg");
	this.shape_2.setTransform(133.9,172.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhBBrQgbgRgOgcQgPgcAAgiQAAghAPgcQAOgcAbgQQAcgRAlAAQAnAAAbARQAbAQAOAcQAOAcABAhQgBAigOAcQgOAcgbARQgbAQgnAAQglAAgcgQgAg2hVQgVAOgKAXQgKAWAAAaQAAAbAKAXQAKAWAVAOQAWAOAgAAQAhAAAWgOQAVgOAKgWQAKgXAAgbQAAgagKgWQgKgXgVgOQgWgNghgBQggABgWANg");
	this.shape_3.setTransform(104.1,172.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFCQQgLgLgEgYQgCgYAAglIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIAAAYIhFAAIAAB7QAAAYABAPQACAQAGAHQAIAIAOAAQAIAAAMgCQAKgCAJgCIAAAXIgUAEQgMACgLAAQgYAAgKgMg");
	this.shape_4.setTransform(81.7,168.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgECQQgMgLgEgYQgDgYABglIAAhsIgwAAIAAgYIAwAAIAAhHIAYAAIAABHIBFAAIgBAYIhEAAIAAB7QAAAYACAPQABAQAHAHQAGAIAPAAQAIAAALgCQAMgCAHgCIAAAXIgTAEQgMACgKAAQgYAAgKgMg");
	this.shape_5.setTransform(27,168.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVC1IAAjTIgwAAIAAgXIAwAAIAAgzQAAgdAHgRQAHgQALgIQANgGARAAIAUABIAQADIAAAZIgQgDIgTgCQgSAAgHAMQgHAMAAAcIAAAzIA1AAIAAAXIg1AAIAADTg");
	this.shape_6.setTransform(11.6,165.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgMCsIAAjqIAZAAIAADqgAgPiIQgEgGAAgJQAAgIAEgGQAGgHAJAAQAKAAAFAHQAFAGAAAIQAAAJgFAGQgFAHgKAAQgJgBgGgGg");
	this.shape_7.setTransform(-2.8,166.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag7B4IAAjqIAaAAIAAAyIABAAQAHgMAJgNQALgNAOgIQAOgJAUAAIAHAAIAJACIgBAbIgLgCIgJgBQgVAAgQANQgPANgKAWQgJAWAAAaIAAB1g");
	this.shape_8.setTransform(-16.8,171.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNBTIAAhNIhFAAIAAgXIBFAAIAAhBIAWAAIAABBIBKAAIAAAXIhKAAIAABNg");
	this.shape_9.setTransform(55.1,167.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_rifttouch, new cjs.Rectangle(-28.8,134.9,231.2,62.8), null);


(lib.logo_LoneEcho = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#278A90").s().p("AEJIpIBdheIA/AAIhdBegAqeGsIBeheIA+AAIhdBegAIDnKIBdheIA/AAIhdBegAoFnKIBdheIA/AAIhdBeg");
	this.shape.setTransform(692,83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#518D6B").s().p("AB0IqIBghhIA/AAIhgBhgAscIqIBghhIA/AAIhgBhgAGDGsIBehfIA+AAIhdBfgAsvGsIBehfIA/AAIheBfgAIYlPIBehdIA/AAIheBdgAqBlPIBeheIA+AAIhdBegAKTnLIBeheIA/AAIheBegAqWnLIBeheIA+AAIhdBeg");
	this.shape_1.setTransform(692.1,83.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2EC6C9").s().p("AG/IqIDcjcIA/AAIjcDcgAvqIqIDcjcIA/AAIjcDcgALSlPIDajaIA/AAIjaDagAtOlPIDZjaIA/AAIjZDag");
	this.shape_2.setTransform(686.1,83.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6A6E74").s().p("AhkGnQBYhXAuhvQAuhvABh7QgBh5gshtQgohlhLhSIAOgOQBNBVAqBoQAuBxABB9QAABUgWBQQgWBPgpBIQgpBHg9A8g");
	this.shape_3.setTransform(1382.2,84);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(706.7,82.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_LoneEcho, new cjs.Rectangle(0,0,1413.4,165.6), null);


(lib.legal_withpurchase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEIgCgEIACgDIADgCIAEACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(220.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAoQgGgDgEgHQgDgGAAgJQAAgKADgFQAEgHAGgDQAGgDAHAAQAHAAAGADQAGADADAGIABAAIgBgLIAAgfIAHAAIAABVIgGAAIAAgLIgBAAQgEAHgGADQgFADgHAAQgHAAgGgEgAgKgEQgFACgDAEQgCAFAAAIQAAAHACAFQADAFAFADQAFACAFAAQAGAAAFgDQAFgDADgFQADgFAAgGQgBgHgCgFQgDgEgFgDQgFgDgGAAQgFAAgFADg");
	this.shape_1.setTransform(215.4,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAaQgHgDgDgHQgEgGAAgKQAAgJAEgHQAEgGAGgDQAGgDAGAAQAHAAAGADQAFADAEAGQADAHAAAJIAAADIgsAAQABALAGAEQAGAEAIAAIAKgBIAKgCIAAAGIgGACIgHACIgGAAQgIAAgHgDgAATgDQAAgIgFgFQgFgGgIAAQgEAAgEACQgFACgCAFQgDAEgBAGIAlAAIAAAAg");
	this.shape_2.setTransform(208.7,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAoQgGgDgEgHQgDgGAAgJQAAgKADgFQAEgHAGgDQAGgDAHAAQAHAAAGADQAGADADAGIABAAIgBgLIAAgfIAHAAIAABVIgGAAIAAgLIgBAAQgEAHgGADQgFADgHAAQgHAAgGgEgAgKgEQgFACgDAEQgCAFAAAIQAAAHACAFQADAFAFADQAFACAFAAQAGAAAFgDQAFgDADgFQADgFAAgGQgBgHgCgFQgDgEgFgDQgFgDgGAAQgFAAgFADg");
	this.shape_3.setTransform(201.8,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAaQgFgEgCgFQgCgFAAgFIAAgiIAIAAIAAAhQgBAEACAEQABADADADQADACAFAAQAFAAAEgDQAFgCACgGQADgGAAgGIAAgaIAHAAIAAA2IgGAAIAAgLIgBAAIgFAGQgCADgEABQgEACgFAAQgIAAgDgCg");
	this.shape_4.setTransform(195,8.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDArIAAhVIAHAAIAABVg");
	this.shape_5.setTransform(190.3,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAaQgHgDgEgHQgDgGgBgKQABgJADgGQAEgHAHgDQAGgDAIAAIAIABIAJADIAAAHIgJgEIgIgBQgGAAgFACQgFADgDAFQgCAFAAAHQAAAIACAEQADAFAFADQAFADAGgBIAIgBIAJgCIAAAGIgJADIgIABQgIAAgGgDg");
	this.shape_6.setTransform(186,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARAcIAAghQABgHgEgFQgDgEgHAAQgFAAgEACQgFADgDAFQgDAFAAAHIAAAbIgHAAIAAg2IAHAAIAAALIAAAAQACgDADgDIAHgFQAEgBAFAAQAHAAAEACQAEADACAFQACAFAAAGIAAAig");
	this.shape_7.setTransform(179.6,8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCApIAAg3IAGAAIAAA3gAgDgeQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAIABgEQABgBAAAAQAAAAABAAQABgBAAAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEIgBAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgBAAAAgBQAAAAgBAAg");
	this.shape_8.setTransform(174.8,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAiQgDgDgBgFIgBgOIAAgZIgLAAIAAgGIALAAIAAgRIAGAAIAAARIAQAAIAAAGIgQAAIAAAcIAAAIIACAGQACABADAAIAFAAIAEgBIAAAGIgFABIgFABQgGAAgBgDg");
	this.shape_9.setTransform(168.4,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPAZQgGgEgEgHQgDgGAAgIQAAgIADgGQAEgGAGgEQAHgEAIAAQAJAAAGAEQAHAEADAGQAEAGAAAIQAAAIgEAGQgDAHgHAEQgGAEgJAAQgIAAgHgEgAgLgTQgFAEgDAEQgCAGAAAFQAAAGACAFQADAGAFADQAEACAHAAQAHAAAFgCQAFgDACgGQADgFAAgGQAAgFgDgGQgCgEgFgEQgFgDgHAAQgHAAgEADg");
	this.shape_10.setTransform(162.9,8.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAcIAAghQABgHgEgFQgDgEgHAAQgFAAgEACQgFADgDAFQgDAFAAAHIAAAbIgHAAIAAg2IAHAAIAAALIAAAAQACgDADgDIAHgFQAEgBAFAAQAHAAAEACQAEADACAFQACAFAAAGIAAAig");
	this.shape_11.setTransform(156,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLAcIgJgDIABgHIAJADIAJABIAHgBQAEgBACgCQACgCAAgEQAAgFgDgCIgJgCIgIgDQgGgBgDgDQgDgCgBgHQAAgFAEgEQADgDAEgBQAEgCAEAAIAKABIAIADIgBAHIgIgEQgEgBgFAAQgEAAgEACQgDADAAAEQAAAEADADIAIACIAJADQAGABACADQAEACAAAHQAAAGgDAEQgDAEgGACQgEABgGAAQgFAAgFgBg");
	this.shape_12.setTransform(147.1,8.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLAaQgHgDgDgHQgEgGAAgKQAAgJAEgHQAEgGAGgDQAGgDAGAAQAHAAAGADQAFADAEAGQADAHAAAJIAAADIgsAAQABALAGAEQAGAEAIAAIAKgBIAKgCIAAAGIgGACIgHACIgGAAQgIAAgHgDgAATgDQAAgIgFgFQgFgGgIAAQgEAAgEACQgFACgCAFQgDAEgBAGIAlAAIAAAAg");
	this.shape_13.setTransform(141.3,8.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAkAcIAAghIgCgIQgBgEgDgCQgDgCgFAAQgFAAgFADQgDADgDAEQgCAFgBAFIAAAdIgGAAIAAghQABgFgCgDQgBgEgDgCQgDgCgFAAQgFAAgEACQgFADgCAFQgCAFAAAHIAAAbIgHAAIAAg2IAGAAIAAALIABAAQACgFAFgEQAFgDAIAAQAHAAAEADQAEAEACAHQADgGAFgEQAGgEAHAAQAHAAAEADQAEADACAEQABAFAAAGIAAAig");
	this.shape_14.setTransform(132.9,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAbQgFgCgDgEQgCgEAAgGQgBgHADgDQADgDAEgBQAFgCAGAAIAGAAIAIABIAHABIAAgEQAAgIgFgDQgFgEgHAAIgGABIgIABIgGACIAAgGIAKgDIALgBQAGAAAFACQAFADADAEQADAFAAAHIAAAjIgGAAIAAgMQgDAFgDADIgIAEIgIABQgEAAgFgCgAgNACQgDADAAAGQAAAEACADQABACADABQAEACADAAQAEAAAFgDQAFgCADgEQADgFABgIIgHAAIgHgBIgFAAQgIAAgEACg");
	this.shape_15.setTransform(124.3,8.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMAqIgKgCIAAgHIAKADIALAAQAGAAAFgCQAFgCADgFQADgFAAgIIABgLIgBAAQgDAFgGAEQgGADgGAAQgIAAgGgDQgGgEgEgGQgDgGAAgJQAAgJADgHQAEgGAGgEQAGgDAIAAQAGAAAFADQAGADAEAGIABAAIAAgLIAGAAIAAA2QAAALgEAGQgEAHgGADQgHADgIAAIgLgBgAgKghQgFADgCAFQgDAFAAAHQAAAHADAFQACAEAFADQAFADAFAAQAGAAAFgDQAFgDADgEQADgFAAgHQAAgGgDgFQgDgFgFgDQgFgEgGAAQgFAAgFADg");
	this.shape_16.setTransform(117.6,9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLAaQgHgDgDgHQgEgGAAgKQAAgJAEgHQAEgGAGgDQAGgDAGAAQAHAAAGADQAFADAEAGQADAHAAAJIAAADIgsAAQABALAGAEQAGAEAIAAIAKgBIAKgCIAAAGIgGACIgHACIgGAAQgIAAgHgDgAATgDQAAgIgFgFQgFgGgIAAQgEAAgEACQgFACgCAFQgDAEgBAGIAlAAIAAAAg");
	this.shape_17.setTransform(107.8,8.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAkAcIAAghIgBgIQgCgEgDgCQgCgCgGAAQgFAAgFADQgEADgCAEQgDAFAAAFIAAAdIgFAAIAAghQAAgFgCgDQgBgEgDgCQgDgCgFAAQgGAAgEACQgEADgCAFQgCAFgBAHIAAAbIgHAAIAAg2IAHAAIAAALIAAAAQADgFAFgEQAFgDAHAAQAIAAAFADQADAEABAHQADgGAGgEQAGgEAHAAQAHAAAEADQAEADACAEQACAFAAAGIAAAig");
	this.shape_18.setTransform(99.4,8.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPAZQgGgEgEgHQgDgGAAgIQAAgIADgGQAEgGAGgEQAHgEAIAAQAJAAAGAEQAHAEADAGQAEAGAAAIQAAAIgEAGQgDAHgHAEQgGAEgJAAQgIAAgHgEgAgLgTQgFAEgDAEQgCAGAAAFQAAAGACAFQADAGAFADQAEACAHAAQAHAAAFgCQAFgDACgGQADgFAAgGQAAgFgDgGQgCgEgFgEQgFgDgHAAQgHAAgEADg");
	this.shape_19.setTransform(90.7,8.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNAqQgHgCgHgDIACgHQAHAEAGABIALACQAFAAAGgCQAFgCADgDQADgFAAgFQAAgGgEgDQgDgDgGgCIgKgEIgLgDQgGgDgDgEQgDgEgBgIQABgHADgFQAEgFAGgDQAHgCAGAAQAGAAAGACQAHABAHAFIgCAGIgNgFQgFgCgGgBQgFAAgEACQgFACgDADQgCADAAAGQAAAFADAEQAEADAFACIAKADIAMAEQAFACADAEQAEAFAAAIQAAAIgEAFQgEAFgHADQgHACgHAAIgMgBg");
	this.shape_20.setTransform(83.7,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_withpurchase, new cjs.Rectangle(77.4,-3,147.8,19.6), null);


(lib.legal_limitedtime = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABQAAAAAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(144.3,-164.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAdIAHgSIgPgnIAFAAIAMAhIANghIAFAAIgPAmIgHATg");
	this.shape_1.setTransform(141.2,-165.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAeIAAg7IAFAAIAAA7g");
	this.shape_2.setTransform(138.3,-167.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAMAUIAAgXQAAgFgCgDQgCgDgGAAQgCAAgEACQgDABgCAEQgCADAAAFIAAATIgFAAIAAgmIAFAAIAAAIIAAAAIADgEIAFgDQADgCADAAQAFAAADACQADACABAEQACADAAAFIAAAXg");
	this.shape_3.setTransform(135,-166.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKARQgFgCgCgFQgCgEAAgGQAAgFACgEQACgFAFgCQAFgDAFAAQAGAAAEADQAFACACAFQADAEAAAFQAAAGgDAEQgCAFgFACQgEADgGAAQgFAAgFgDgAgIgMQgDACgBADQgCAEAAADQAAAEACAEQABADADADQADACAFAAQAFAAADgCQAEgDACgDQABgEAAgEQAAgDgBgEQgCgDgEgCQgDgDgFAAQgFAAgDADg");
	this.shape_4.setTransform(130.2,-166);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIASQgEgCgDgEQgCgFAAgHQAAgGACgEQADgFAEgCQAFgCADAAQAGAAADACQAFACACAFQACAEAAAGIAAACIgeAAQAAAHAEAEQAFADAFAAIAHgBIAHgCIAAAFIgEABIgFABIgFAAQgFAAgFgCgAANgBQAAgHgEgDQgCgEgHAAQgCAAgDACQgDABgCADQgCADAAAFIAZAAIAAAAg");
	this.shape_5.setTransform(123.5,-166);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAZAUIAAgXIgBgGIgDgEQgBgBgEAAQgEAAgDACQgDACgBADQgCADgBAEIAAAUIgDAAIAAgXIgBgGIgDgEQgCgBgDAAQgEAAgEACQgDABgBAEQgCADAAAFIAAATIgEAAIAAgmIAEAAIAAAIQACgEAEgCQAEgDAEAAQAGAAADADQACADABAFQACgFADgDQAEgDAGAAQAFAAADACIADAGIABAIIAAAXg");
	this.shape_6.setTransform(117.6,-166.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_7.setTransform(113,-166.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAYIgDgGIAAgKIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAHIABADIAEABIADAAIADgBIAAAFIgDAAIgEABQgEAAgBgCg");
	this.shape_8.setTransform(110.7,-166.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAcQgEgDgCgEQgDgFAAgGQAAgGADgEQACgEAEgDQAFgCAFAAQAEAAAEACQAEADADADIAAgHIAAgVIAFAAIAAA6IgFAAIAAgHQgDAEgEACQgEACgEAAQgFAAgFgCgAgHgDQgDACgCADQgCADAAAFQAAAFACAEQACADADACQADACAEAAQAEAAAEgCQADgCACgEQACgEAAgEQAAgFgCgDQgCgDgEgCQgDgCgEAAQgEAAgDACg");
	this.shape_9.setTransform(104.6,-167);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHASQgFgCgCgEQgDgFAAgHQAAgGADgEQACgFAFgCQADgCAFAAQAEAAAFACQADACACAFQADAEAAAGIAAACIgeAAQAAAHAFAEQADADAHAAIAGgBIAHgCIAAAFIgEABIgFABIgEAAQgGAAgEgCgAANgBQAAgHgDgDQgEgEgFAAQgDAAgDACQgDABgCADQgCADAAAFIAZAAIAAAAg");
	this.shape_10.setTransform(100,-166);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAYIgDgGIAAgKIAAgQIgIAAIAAgFIAIAAIAAgMIAEAAIAAAMIALAAIAAAFIgLAAIAAASIAAAHIABADIAEABIADAAIADgBIAAAFIgDAAIgEABQgEAAgBgCg");
	this.shape_11.setTransform(96.4,-166.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_12.setTransform(94,-166.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAUIAAgXIgBgGIgDgEQgCgBgDAAQgEAAgDACQgDACgBADQgCADAAAEIAAAUIgFAAIAAgXIAAgGIgDgEQgCgBgEAAQgDAAgEACQgDABgBAEQgBADAAAFIAAATIgGAAIAAgmIAGAAIAAAIQABgEAEgCQAEgDAEAAQAGAAADADQACADABAFQACgFADgDQAFgDAFAAQAEAAADACIAFAGIABAIIAAAXg");
	this.shape_13.setTransform(89.5,-166.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAcIAAglIAEAAIAAAlgAgCgVIgBgCIABgDIACgBIADABIABADIgBACIgDABIgCgBg");
	this.shape_14.setTransform(84.9,-166.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAdIAAg5IAEAAIAAA1IAeAAIAAAEg");
	this.shape_15.setTransform(82.1,-167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.legal_limitedtime, new cjs.Rectangle(77.6,-173.8,70,13.6), null);


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


(lib.game_roborecall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.game_5_roborecall();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.game_roborecall, new cjs.Rectangle(0,0,131,131), null);


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


(lib.echo2_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.echo2, null, new cjs.Matrix2D(1,0,0,1,-100.6,-119.2)).s().p("AuCRyIAIgEQAqgVAvgCIAXgBQAMgBAKgDIAGgCQAMgDAOgGQAggUARgHQAMgFAWgFIAigJQAKgEAmgUQAegPATgDIAcgDQAOgCAKgFIAEAAQAXgDAQgHQAIgDALgIIATgLQAYgIAMgGIAUgMQAXgJAKgHQAMgJAGgOQAFgLABgKIACgFQAHgMABgOQgBgOgGgMQgKgVgkgVQgcgQgkgRIgXgKQgMgHgIgGIgNgNQgIgIgHgDQgFgDgLgCIgQgEQgKgDgUgNIgngcQgZgTgOgGIgMgFQgOgJgUgGQgagKgUACIgUAGQgMADgHAAQgIgBgOgGIhYghQgbgJgdgEIgGgVIgMggQgGgLgJgIQgCgIgDgGIgEgGIABgKQAAgMgCgNIgHgYQgIgVgGgIIgGgHQgBgDAAgJQABgUgBgUQgBgSgCgFQgEgMgNgNIgBgBIgCgGQABgFADgHQADgHADgDIAJgEQALgEALgHIAOgJQANADAQAAIAhAAQAPAAAGADQAPAEAQAWQAQAZAJAHQANAMASACIAIAAIAKABQAhAAASABIAYADIAHAGQAYAXATAPQALAJALAHQAIAgAZA3QAJATAHAJQALAPAUALQANAGAbAKQA+AWAdAFQAZAFAFADQAHADAHAGIANAJQALAJAZANQArAWAXADQATABAQgGIAHgDIABgBQAMgDAJgKQAJgJAEgMQABgHAAgHIABgBQAFgJAFgSIARg6QADgIADgDIAJgIQAJgKADgTIACggIAEgRIAAgEIACgVQAAgfgHgaIgFgUQABgPAAgYIAAhWQAAgUABgJIAHgVIAIgXIAEgPIADgGQAGgMAAgZQAAgSgDgVIAAgCIADgDQAQgLARgeQAMgXADgPIAEgTIAIgSQACgGADgPQADgUACgOQAJgPABgVQAAgKgBgIQgBgIgCgIQgCgFgDgEQgEgIgIgGQgOgLgaAAQgUAAghAHIgPAFIgDAAQgXAGgQAYQgIANgLAhQgRACgbALQgfAOgNADIgWAEIgGACQgNgFgVAAQgNABgKACIgLgMQgIgHgHgFIAAgBQAFgNgDgNIgCgHQgEgOgMgJIgFgCIgGgGIgfgdIgdgeIgwgrIgMgJQgGgIgKgLIgvgvQgNgMgKgJIgVgSIgLgMIgJgKIgKgQIgTgfQgVglgIgaIgBgEIgDgaQgBgLAAgaQABgYgBgNIgDgWIADgXQABgTACgGQACgJAJgPIAMgVQARgdACgSIABgFQAKgLAFgOQAJgKADgOIACgJQALgNAggUIA3ghQAYgOAQgMQAbgXAQgJQAJgFAVgIIA1gUQARgHALgGIAQgEQAUgFAegBIAygDIAUgDIAUAHQAXAIAMADQASAEAOAAIAIAGQALAHAbANIADACIAPALIBlBbQARAPAMAIIAGADIADAEQACAIAFAIQAGAKAOAKIALAHIABAGQADAKAHAJIgBAIIAAAJIgCAGQgEAJABAJQgCAIAAAJQACARALANIAIAHIgDAIIgBAMIgCACQgIAGgFAKIgDAGQgFAQAFAPIACAGIAAABQgFAPAEAPQACAGAEAFIgBAPQgLAHgFALQgIAOABAWQgBAWAEANQAFAMAPARQAVAbARAFQAIADALgBIAGAGQALAIANACQAOACAUgFIAjgHIAKgBQAHAHAJADIAUAHIARAKIAvAZQAjASAdAVIADADQAHAKANAPIAvA3QALAMAJAIQAEAEAFAEIAMAFQAIADAGAAIAEABIAMAAQAiAAAIABQAQAEAJAAQASgBAJACIAXALQALAHALADIAGAGQANAOANASIAuBPQACAUANAbQANAcAOAXIAVAoIASApIARAZQAMAUAPAsQAKAWALANIAACrQgEAFgCAGIgHAUIgKASQgEAJgBASQgBAKgIAQIgOAaQgLASgEAJIgIAXIgIARIgCAHQgIAIgIANQgGAMgGAFIgOAJQgbASgcAsQgKAPgEANIgHAGQgXAZgLAZQgIAUgCAQQgGAMgBATQAAAZAHAXQAFAWALAPIgMAOIgHAJIgOAIQgOAJgXAWQgaAWgMAJIgUANQgMAIgHAGQgHAGgMAPQg3BGgUApIgCAHg");
	this.shape.setTransform(97.4,113.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo2_mc, new cjs.Rectangle(0,0,194.7,227.6), null);


(lib.echo1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.echo1, null, new cjs.Matrix2D(1,0,0,1,-64.6,-131.5)).s().p("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");
	this.shape.setTransform(63.4,131.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo1_mc, new cjs.Rectangle(0,0,126.8,263), null);


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


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgCQAEAAADgDQADgDAAgFQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgIAEgGQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAHQAAAFAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAHgIACQgJACgIAAQgIAAgIgCg");
	this.shape.setTransform(95.9,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.8,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA+IgfgtIgaAAIAAAtIgPAAIAAh7IAyAAQANABAIAEQAIAFAFAJQAEAJAAAMQABAQgJAJQgHAKgRACIAjAugAgeADIAiAAQAMAAAHgGQAFgHAAgLQAAgMgFgHQgHgHgMAAIgiAAg");
	this.shape_2.setTransform(82.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPQAAgPAGgHQAEgHAMAAIAHAAIAGACIAAAMIgFgBIgFAAQgHAAgCAEQgDAEAAAJIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_4.setTransform(57.8,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_5.setTransform(49.7,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAnQgKgFgGgJQgFgKAAgOQAAgPAFgJQAGgKAJgEQAJgFAKAAQAMAAAIAFQAJAEAEAKQAFAJAAAOIAAAFIg/AAQACAOAHAGQAJAFAMAAIAOgBIAPgEIAAANIgJADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgHQgGgGgLAAQgFAAgGADQgFADgEAFQgEAFgBAJIAxAAIAAAAg");
	this.shape_6.setTransform(35.6,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGAEQgHADgDAHQgEAHAAAJIAAAoIgOAAIAAhRIANAAIAAAQIABAAQAFgIAHgEQAIgGAKAAQAKAAAHAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_7.setTransform(26,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_8.setTransform(16,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgCQAEAAADgDQADgDAAgFQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgIAEgGQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAHQAAAFAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAHgIACQgJACgIAAQgIAAgIgCg");
	this.shape_9.setTransform(2.5,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCgBgFQABgEACgCQACgEAEAAQAEAAADAEQADACgBAEQABAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.4,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_11.setTransform(-15,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXA/IAAgxQAAgKgEgFQgFgGgKAAQgGAAgGAEQgHADgDAGQgEAHAAAKIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAQAEgHAIgFQAIgFAKgBQAKAAAHAFQAGAEADAHQADAHAAAKIAAAyg");
	this.shape_12.setTransform(-25,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAmQgKgEgGgKQgGgKAAgOQAAgOAGgJQAGgKAKgEQAKgFAMAAIAOABIANAFIgBANQgGgDgIgBIgMgCQgNAAgIAHQgIAIAAAOQAAAPAIAIQAIAHANAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgMAAgKgFg");
	this.shape_13.setTransform(-34.2,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.5,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAnQgKgFgFgJQgGgKAAgOQAAgPAGgJQAFgKAJgEQAJgFALAAQALAAAIAFQAIAEAFAKQAEAJABAOIAAAFIg+AAQAAAOAJAGQAHAFANAAIAPgBIANgEIABANIgJADIgLABIgJABQgMAAgLgEgAAYgFQAAgMgGgHQgGgGgLAAQgFAAgGADQgGADgEAFQgDAFAAAJIAvAAIAAAAg");
	this.shape_15.setTransform(-58.1,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGAEQgHADgDAHQgEAHAAAJIAAAoIgOAAIAAhRIANAAIAAAQIABAAQAFgIAHgEQAIgGAKAAQAKAAAHAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_16.setTransform(-67.7,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_17.setTransform(-77.7,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA+IAAh7IAPAAIAABtIA8AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACAWQACgKAEgMIAJgVIANABIgHAUIgFAWgAgdAWIAHgWIAIgVIANABIgHAUIgEAWg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,204,24.4);


(lib.text3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAVIAAgWQAAgEgCgDQgCgCgEAAQgEgBgCAEQgDAEAAAEIAAAUIgLAAIAAgoIALAAIAAAHQADgEAEgCQACgCAFAAQAHAAAEAEQADAFAAAJIAAAXg");
	this.shape.setTransform(18,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLATQgFgDgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAFgEAGAAQAHAAAFAEQAFADADAEQACAFAAAFQAAAGgCAFQgDAFgFADQgFACgHAAQgGAAgFgCgAgFgJQgDABgBADIgBAFIABAGQABADADACQACABADAAQAEAAACgBQACgCABgDIABgGIgBgFQgBgDgCgBQgCgCgEAAQgDAAgCACg");
	this.shape_1.setTransform(13,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKAfIgIgBIABgKIAEABIAGABIAFABIAGgBQADgBADgDQACgCAAgFIAAgHIgBAAQgDAEgDACQgDABgEAAQgGAAgEgCQgFgDgCgFQgCgEgBgGQABgGACgFQACgFAFgDQAEgDAGAAQAEAAADACIAHAFIAAgGIAKAAIAAApQABAIgEAFQgDAEgGACQgFACgFAAIgKgBgAgHgSQgDAEAAAFQAAAFADADQADADAFAAQADAAACgCQADAAACgDIABgGIgBgGIgFgFQgCgBgDAAQgFAAgDADg");
	this.shape_2.setTransform(7.9,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAfIAJgUIgRgpIAMAAIAJAeIAKgeIAMAAIgQAoIgGAVg");
	this.shape_3.setTransform(3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAgIAAg/IALAAIAAA/g");
	this.shape_4.setTransform(-0.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgLATQgFgDgDgFQgCgFAAgGQAAgFACgFQADgEAFgDQAFgEAGAAQAHAAAFAEQAFADADAEQACAFAAAFQAAAGgCAFQgDAFgFADQgFACgHAAQgGAAgFgCgAgFgJQgDABgBADIgBAFIABAGQABADADACQACABADAAQAEAAACgBQACgCABgDIABgGIgBgFQgBgDgCgBQgCgCgEAAQgDAAgCACg");
	this.shape_5.setTransform(-3.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWAfIAAg9IAZAAQAGAAAFADQAEACADAFQACAFAAAFQAAAGgCAEQgDAFgEACQgFADgGAAIgOAAIAAAVgAgLAAIANAAQADAAACgBQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAIABgGIgBgFQAAAAAAgBQgBAAAAgBQgBAAAAgBQgBAAAAAAQgCgCgDAAIgNAAg");
	this.shape_6.setTransform(-8.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.5,2,1).p("AgqAAIBVAA");
	this.shape_7.setTransform(-18.3,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-7.1,46.1,14.2);


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
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAVIAGgVIAFgVIARAAIgHAVIgJAWgAgdAVIAHgVIAFgVIAQAAIgGAVIgJAWg");
	this.shape.setTransform(75.5,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAIQgCgEgBgEQABgEACgDQADgDAEAAQAFAAADADQACADABAEQgBAEgCAEQgDADgFAAQgEAAgDgDg");
	this.shape_1.setTransform(69.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgCQAEAAADgDQADgDAAgFQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgIAEgGQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAHQAAAFAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAHgIACQgJACgIAAQgIAAgIgCg");
	this.shape_2.setTransform(63.4,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAzQgFgEgBgIQgCgIABgMIAAgjIgRAAIAAgMIARAAIAAgZIAMAAIAAAZIAYAAIAAAMIgYAAIAAAlIABAMQABAEADADQACACAEAAIAGAAIAHgCIAAANIgIABIgIAAQgJAAgEgDg");
	this.shape_3.setTransform(56.5,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGAEQgHADgDAHQgEAHAAAJIAAAoIgOAAIAAhRIANAAIAAAQIABAAQAFgIAHgEQAIgGAKAAQAKAAAHAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_4.setTransform(48.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA9IAAhRIAOAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAFAAACAEQACACABAEQgBAFgCACQgCADgFAAQgEAAgCgDg");
	this.shape_5.setTransform(41.6,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_6.setTransform(34.5,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqA+IAAh5IAOAAIAAAPIAAAAQAGgJAIgEQAIgFAJAAQAMAAAJAGQAJAGAFAJQAFAJAAANQAAAOgFAJQgFAJgJAFQgJAGgMgBQgJAAgIgEQgIgEgFgJIgBAAIAAAQIAAAogAgOgtQgHAFgDAHQgEAHAAAHQAAAJAEAHQAEAGAGAEQAHAEAHAAQANAAAIgIQAHgHAAgPQAAgOgHgHQgIgJgNABQgIAAgGADg");
	this.shape_7.setTransform(24.3,4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAXA/IAAgxQAAgKgEgFQgFgGgKAAQgGAAgGAEQgHADgDAGQgEAHAAAKIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAQAEgHAIgFQAIgFAKgBQAKAAAHAFQAGAEADAHQADAHAAAKIAAAyg");
	this.shape_8.setTransform(9.5,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTA+IgQgDIABgMIAKACIALABIALABQAIAAAHgCQAHgDAFgHQADgGAAgMIABgQIgBAAQgFAJgIAEQgHAEgKAAQgMABgIgGQgKgFgFgJQgFgJAAgOQAAgNAFgJQAFgJAKgGQAIgGAMAAQAJAAAIAFQAHAEAGAIIABAAIAAgOIAOAAIAABRQAAAPgHAKQgFAJgLAEQgKAEgMABIgRgCgAgNguQgHAEgEAGQgDAIAAAIQAAAKADAHQAEAFAHAEQAFAEAIAAQAIAAAHgEQAGgEAEgGQAEgHAAgJQAAgHgEgHQgDgHgHgFQgHgDgIAAQgIAAgFADg");
	this.shape_9.setTransform(-0.7,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCAAgFQAAgEACgCQADgEADAAQAEAAADAEQADACAAAEQAAAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-8,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA/IAAgxQAAgKgEgFQgFgGgKAAQgGAAgGAEQgHADgDAGQgEAHAAAKIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAQAEgHAIgFQAIgFAKgBQAKAAAHAFQAGAEADAHQADAHAAAKIAAAyg");
	this.shape_11.setTransform(-14.9,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBAzQgFgEgCgIQgCgIAAgMIAAgjIgQAAIAAgMIAQAAIAAgZIAOAAIAAAZIAWAAIAAAMIgWAAIAAAlIABAMQAAAEACADQADACAFAAIAFAAIAGgCIABANIgIABIgIAAQgJAAgDgDg");
	this.shape_12.setTransform(-27.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgCQAEAAADgDQADgDAAgFQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgIAEgGQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAHQAAAFAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAHgIACQgJACgIAAQgIAAgIgCg");
	this.shape_13.setTransform(-34.3,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAnQgKgFgGgJQgFgKAAgOQAAgPAFgJQAGgKAJgEQAJgFAKAAQAMAAAIAFQAIAEAFAKQAFAJAAAOIAAAFIg/AAQACAOAHAGQAJAFAMAAIAOgBIAPgEIABANIgKADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgHQgGgGgLAAQgFAAgGADQgFADgEAFQgEAFgBAJIAxAAIAAAAg");
	this.shape_14.setTransform(-42.8,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVApIgVg/IAAAAIgVA/IgOAAIgbhRIAQAAIATBAIAVhAIANAAIAVBAIAThAIAQAAIgbBRg");
	this.shape_15.setTransform(-54,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAnQgKgFgFgJQgGgKAAgOQAAgPAGgJQAFgKAJgEQAJgFALAAQALAAAIAFQAJAEAEAKQAEAJABAOIAAAFIg+AAQAAAOAJAGQAHAFANAAIAPgBIANgEIACANIgKADIgLABIgJABQgMAAgLgEgAAYgFQAAgMgGgHQgGgGgLAAQgGAAgFADQgGADgEAFQgDAFAAAJIAvAAIAAAAg");
	this.shape_16.setTransform(-65.1,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGAEQgHADgDAHQgEAHAAAJIAAAoIgOAAIAAhRIANAAIAAAQIABAAQAFgIAHgEQAIgGAKAAQAKAAAHAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_17.setTransform(-74.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.7,-12.2,163.5,24.4);


(lib.text1_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgCQAEAAADgDQADgDAAgFQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgIAEgGQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAHQAAAFAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAHgIACQgJACgIAAQgIAAgIgCg");
	this.shape.setTransform(95.9,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgFAWIgBgrIANAAIgBArg");
	this.shape_1.setTransform(89.8,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA+IgfgtIgaAAIAAAtIgPAAIAAh7IAyAAQANABAIAEQAIAFAFAJQAEAJAAAMQABAQgJAJQgHAKgRACIAjAugAgeADIAiAAQAMAAAHgGQAFgHAAgLQAAgMgFgHQgHgHgMAAIgiAAg");
	this.shape_2.setTransform(82.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGA+Igwh7IAQAAIAmBnIAnhnIAQAAIgwB7g");
	this.shape_3.setTransform(70.5,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA/IAAhFIgRAAIAAgMIARAAIAAgPQAAgPAGgHQAEgHAMAAIAHAAIAGACIAAAMIgFgBIgFAAQgHAAgCAEQgDAEAAAJIAAAOIATAAIAAAMIgTAAIAABFg");
	this.shape_4.setTransform(57.8,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_5.setTransform(49.7,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAnQgKgFgGgJQgFgKAAgOQAAgPAFgJQAGgKAJgEQAJgFAKAAQAMAAAIAFQAJAEAEAKQAFAJAAAOIAAAFIg/AAQACAOAHAGQAJAFAMAAIAOgBIAPgEIAAANIgJADIgKABIgKABQgNAAgKgEgAAZgFQgBgMgGgHQgGgGgLAAQgFAAgGADQgFADgEAFQgEAFgBAJIAxAAIAAAAg");
	this.shape_6.setTransform(35.6,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGAEQgHADgDAHQgEAHAAAJIAAAoIgOAAIAAhRIANAAIAAAQIABAAQAFgIAHgEQAIgGAKAAQAKAAAHAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_7.setTransform(26,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_8.setTransform(16,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSApQgIgBgGgCIADgOIANAFQAHACAHAAQAFAAAFgCQAEAAADgDQADgDAAgFQAAgGgFgCQgFgDgHgCIgOgDQgHgCgFgEQgFgFAAgIQAAgIAEgGQAFgGAHgDQAHgCAHAAQAIAAAHACQAIACAGADIgEAMQgFgDgGgCQgHgCgGAAQgHAAgFADQgEACAAAHQAAAFAFACQAFADAGACIAOADQAIACAFAEQAFAFAAAJQAAAKgFAFQgFAHgIACQgJACgIAAQgIAAgIgCg");
	this.shape_9.setTransform(2.5,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA9IAAhRIANAAIAABRgAgGgrQgCgCgBgFQABgEACgCQACgEAEAAQAEAAADAEQADACgBAEQABAFgDACQgDADgEAAQgEAAgCgDg");
	this.shape_10.setTransform(-3.4,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_11.setTransform(-15,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAXA/IAAgxQAAgKgEgFQgFgGgKAAQgGAAgGAEQgHADgDAGQgEAHAAAKIAAAoIgOAAIAAh9IAOAAIAAAtIgBAPIABAAQAEgHAIgFQAIgFAKgBQAKAAAHAFQAGAEADAHQADAHAAAKIAAAyg");
	this.shape_12.setTransform(-25,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAmQgKgEgGgKQgGgKAAgOQAAgOAGgJQAGgKAKgEQAKgFAMAAIAOABIANAFIgBANQgGgDgIgBIgMgCQgNAAgIAHQgIAIAAAOQAAAPAIAIQAIAHANAAIAMgBQAIgBAGgEIABAOQgGACgHABIgOACQgMAAgKgFg");
	this.shape_13.setTransform(-34.2,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoA+IAAh7IBPAAIAAAOIhAAAIAAApIA8AAIgBANIg7AAIAAApIBCAAIAAAOg");
	this.shape_14.setTransform(-43.5,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRAnQgKgFgFgJQgGgKAAgOQAAgPAGgJQAFgKAJgEQAJgFALAAQALAAAIAFQAIAEAFAKQAEAJABAOIAAAFIg+AAQAAAOAJAGQAHAFANAAIAPgBIANgEIABANIgJADIgLABIgJABQgMAAgLgEgAAYgFQAAgMgGgHQgGgGgLAAQgFAAgGADQgGADgEAFQgDAFAAAJIAvAAIAAAAg");
	this.shape_15.setTransform(-58.1,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAqIAAgwQAAgKgEgGQgFgGgKAAQgGAAgGAEQgHADgDAHQgEAHAAAJIAAAoIgOAAIAAhRIANAAIAAAQIABAAQAFgIAHgEQAIgGAKAAQAKAAAHAEQAGAFADAHQADAIAAAKIAAAxg");
	this.shape_16.setTransform(-67.7,1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXAmQgJgHgFgJQgFgKAAgMQAAgLAFgKQAFgJAJgGQAKgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAKQgFAJgKAHQgJAFgOAAQgNAAgKgFgAgPgZQgHAEgDAHQgDAHAAAHQAAAJADAGQADAHAHAEQAGAEAJAAQAKAAAGgEQAGgEADgHQADgGAAgJQAAgHgDgHQgDgHgGgEQgGgEgKAAQgJAAgGAEg");
	this.shape_17.setTransform(-77.7,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglA+IAAh7IAPAAIAABtIA8AAIAAAOg");
	this.shape_18.setTransform(-86.7,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AACAWQACgKAEgMIAJgVIANABIgHAUIgFAWgAgdAWIAHgWIAIgVIANABIgHAUIgEAWg");
	this.shape_19.setTransform(-95.8,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.9,-12.2,204,24.4);


(lib.bg = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 1
	this.instance = new lib.Bitmap34();
	this.instance.parent = this;
	this.instance.setTransform(-44,0,0.863,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-44,0,328,50), null);


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


(lib.echo3_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_LoneEcho();
	this.instance.parent = this;
	this.instance.setTransform(150.3,4.3,0.22,0.22,0,0,0,706.6,82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.echo3_mc, new cjs.Rectangle(-5.1,-13.9,310.8,36.4), null);


// stage content:
(lib.oculus_echo_320x50_ER = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// star trek
	this.instance = new lib.game_startrek();
	this.instance.parent = this;
	this.instance.setTransform(161.2,23.9,0.067,0.067,0,0,0,65.5,65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.32,scaleY:2.32,x:542.4,y:86.4},25,cjs.Ease.get(-1)).to({_off:true},1).wait(182));

	// unspoken
	this.instance_1 = new lib.game_unspoken();
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.8,24,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-255.2,y:33.2},25,cjs.Ease.get(-1)).to({_off:true},1).wait(179));

	// lone echo
	this.instance_2 = new lib.game_loneecho();
	this.instance_2.parent = this;
	this.instance_2.setTransform(159.2,23.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-108,y:-155.2},25,cjs.Ease.get(-1)).to({_off:true},1).wait(176));

	// roborecall
	this.instance_3 = new lib.game_roborecall();
	this.instance_3.parent = this;
	this.instance_3.setTransform(164.2,23.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:324.4,y:-161.2},25,cjs.Ease.get(-1)).to({_off:true},1).wait(173));

	// superhot
	this.instance_4 = new lib.game_superhot();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.2,27.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:477.6,y:36},25,cjs.Ease.get(-1)).to({_off:true},1).wait(170));

	// rick morty
	this.instance_5 = new lib.game_rickmorty();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160.6,28.3,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(15).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:-27.2,y:216.4},25,cjs.Ease.get(-1)).to({_off:true},1).wait(167));

	// wilsons
	this.instance_6 = new lib.game_wilsons();
	this.instance_6.parent = this;
	this.instance_6.setTransform(161.2,29.8,0.067,0.067,0,0,0,65.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({_off:false},0).to({scaleX:2.32,scaleY:2.32,x:13.2,y:-161.6},25,cjs.Ease.get(-1)).to({_off:true},1).wait(164));

	// game_BG copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_27 = new cjs.Graphics().p("AKaA1IBzAAIAABfIhzAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AKZA0IB1AAIAABgIh1AAg");
	var mask_graphics_29 = new cjs.Graphics().p("AKVAwIB9AAIAABnIh9AAg");
	var mask_graphics_30 = new cjs.Graphics().p("AKQAqICIAAIAABwIiIAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AKIAiICZAAIAAB+IiZAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AJ9AXICvAAIAACQIivAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AJxAKIDIAAIAAClIjIAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AJigEIDnAAIAAC9IjnAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AJRgWIEKAAIAADaIkKAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AI9gqIEzAAIAAD7IkzAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AInhBIFhAAIAAEhIlhAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AIPhaIGSAAIAAFKImSAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AH1h1IHIAAIAAF3InIAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AHYiTIIEAAIAAGoIoEAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AG5izIJEAAIAAHcIpEAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AGYjVIKJAAIAAIUIqJAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AF0j6ILTAAIAAJRIrTAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AFOkhIMhAAIAAKRIshAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AEmlLIN0AAIAALWIt0AAg");
	var mask_graphics_46 = new cjs.Graphics().p("AD7l3IPMAAIAAMeIvMAAg");
	var mask_graphics_47 = new cjs.Graphics().p("ADOmlIQpAAIAANqIwpAAg");
	var mask_graphics_48 = new cjs.Graphics().p("ACfnWISLAAIAAO6IyLAAg");
	var mask_graphics_49 = new cjs.Graphics().p("ABuoHITwAAIAAQPIzwAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AA6oyIVbAAIAARlI1bAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AAKpgIXKAAIAATBI3KAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AAIphIXNAAIAATDI3NAAg");
	var mask_graphics_53 = new cjs.Graphics().p("AAGpiIXPAAIAATFI3PAAg");
	var mask_graphics_54 = new cjs.Graphics().p("AADpjIXTAAIAATHI3TAAg");
	var mask_graphics_55 = new cjs.Graphics().p("AABpkIXVAAIAATJI3VAAg");
	var mask_graphics_56 = new cjs.Graphics().p("AAAplIXWAAIAATLI3WAAg");
	var mask_graphics_57 = new cjs.Graphics().p("AgCpmIXZAAIAATNI3ZAAg");
	var mask_graphics_58 = new cjs.Graphics().p("AgEpnIXbAAIAATPI3bAAg");
	var mask_graphics_59 = new cjs.Graphics().p("AgGpoIXeAAIAATRI3eAAg");
	var mask_graphics_60 = new cjs.Graphics().p("AgIppIXgAAIAATTI3gAAg");
	var mask_graphics_61 = new cjs.Graphics().p("AgKprIXjAAIAATXI3jAAg");
	var mask_graphics_62 = new cjs.Graphics().p("AgMpsIXlAAIAATZI3lAAg");
	var mask_graphics_63 = new cjs.Graphics().p("AgOptIXnAAIAATbI3nAAg");
	var mask_graphics_64 = new cjs.Graphics().p("AgQpuIXqAAIAATdI3qAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AgSpvIXsAAIAATfI3sAAg");
	var mask_graphics_66 = new cjs.Graphics().p("AgUpwIXvAAIAAThI3vAAg");
	var mask_graphics_67 = new cjs.Graphics().p("AgWpxIXxAAIAATjI3xAAg");
	var mask_graphics_68 = new cjs.Graphics().p("AgZpyIX0AAIAATlI30AAg");
	var mask_graphics_69 = new cjs.Graphics().p("AgbpzIX3AAIAATnI33AAg");
	var mask_graphics_70 = new cjs.Graphics().p("Agdp0IX5AAIAATpI35AAg");
	var mask_graphics_71 = new cjs.Graphics().p("Agfp1IX8AAIAATrI38AAg");
	var mask_graphics_72 = new cjs.Graphics().p("Aghp2IX+AAIAATtI3+AAg");
	var mask_graphics_73 = new cjs.Graphics().p("Agjp3IYAAAIAATvI4AAAg");
	var mask_graphics_74 = new cjs.Graphics().p("Aglp4IYDAAIAATxI4DAAg");
	var mask_graphics_75 = new cjs.Graphics().p("Agnp5IYFAAIAATzI4FAAg");
	var mask_graphics_76 = new cjs.Graphics().p("Agpp6IYIAAIAAT1I4IAAg");
	var mask_graphics_77 = new cjs.Graphics().p("Agrp7IYKAAIAAT3I4KAAg");
	var mask_graphics_78 = new cjs.Graphics().p("Agtp8IYMAAIAAT5I4MAAg");
	var mask_graphics_79 = new cjs.Graphics().p("Agvp9IYPAAIAAT7I4PAAg");
	var mask_graphics_80 = new cjs.Graphics().p("Agxp+IYRAAIAAT9I4RAAg");
	var mask_graphics_81 = new cjs.Graphics().p("Ag0p/IYVAAIAAT/I4VAAg");
	var mask_graphics_82 = new cjs.Graphics().p("Ag2qAIYXAAIAAUBI4XAAg");
	var mask_graphics_83 = new cjs.Graphics().p("Ag4qBIYaAAIAAUDI4aAAg");
	var mask_graphics_84 = new cjs.Graphics().p("Ag6qCIYcAAIAAUFI4cAAg");
	var mask_graphics_85 = new cjs.Graphics().p("Ag8qDIYeAAIAAUHI4eAAg");
	var mask_graphics_86 = new cjs.Graphics().p("Ag+qEIYhAAIAAUJI4hAAg");
	var mask_graphics_87 = new cjs.Graphics().p("AhAqFIYjAAIAAULI4jAAg");
	var mask_graphics_88 = new cjs.Graphics().p("AhCqGIYmAAIAAUNI4mAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AhEqHIYoAAIAAUPI4oAAg");
	var mask_graphics_90 = new cjs.Graphics().p("AhGqIIYqAAIAAURI4qAAg");
	var mask_graphics_91 = new cjs.Graphics().p("AhIqJIYtAAIAAUTI4tAAg");
	var mask_graphics_92 = new cjs.Graphics().p("AhKqKIYvAAIAAUVI4vAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AhMqLIYyAAIAAUXI4yAAg");
	var mask_graphics_94 = new cjs.Graphics().p("AhOqMIY0AAIAAUZI40AAg");
	var mask_graphics_95 = new cjs.Graphics().p("AhRqNIY3AAIAAUbI43AAg");
	var mask_graphics_96 = new cjs.Graphics().p("AhTqOIY6AAIAAUdI46AAg");
	var mask_graphics_97 = new cjs.Graphics().p("AhVqPIY8AAIAAUfI48AAg");
	var mask_graphics_98 = new cjs.Graphics().p("AhXqQIY/AAIAAUhI4/AAg");
	var mask_graphics_99 = new cjs.Graphics().p("AhZqRIZBAAIAAUjI5BAAg");
	var mask_graphics_100 = new cjs.Graphics().p("AhbqSIZDAAIAAUlI5DAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AhdqTIZGAAIAAUnI5GAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AhfqUIZIAAIAAUpI5IAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AhhqVIZLAAIAAUrI5LAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AhjqWIZNAAIAAUtI5NAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AhlqXIZQAAIAAUvI5QAAg");
	var mask_graphics_106 = new cjs.Graphics().p("AhnqYIZSAAIAAUxI5SAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AhpqZIZUAAIAAUzI5UAAg");
	var mask_graphics_108 = new cjs.Graphics().p("AhsqaIZYAAIAAU1I5YAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AhuqcIZaAAIAAU5I5aAAg");
	var mask_graphics_110 = new cjs.Graphics().p("AhwqdIZdAAIAAU7I5dAAg");
	var mask_graphics_111 = new cjs.Graphics().p("AhyqeIZfAAIAAU9I5fAAg");
	var mask_graphics_112 = new cjs.Graphics().p("Ah0qfIZhAAIAAU/I5hAAg");
	var mask_graphics_113 = new cjs.Graphics().p("Ah2qgIZkAAIAAVBI5kAAg");
	var mask_graphics_114 = new cjs.Graphics().p("Ah4qhIZmAAIAAVDI5mAAg");
	var mask_graphics_115 = new cjs.Graphics().p("Ah6qiIZpAAIAAVFI5pAAg");
	var mask_graphics_116 = new cjs.Graphics().p("Ah8qjIZrAAIAAVHI5rAAg");
	var mask_graphics_117 = new cjs.Graphics().p("Ah+qkIZtAAIAAVJI5tAAg");
	var mask_graphics_118 = new cjs.Graphics().p("AiAqlIZwAAIAAVLI5wAAg");
	var mask_graphics_119 = new cjs.Graphics().p("AiCqmIZyAAIAAVNI5yAAg");
	var mask_graphics_120 = new cjs.Graphics().p("AiEqmIZ0AAIAAVNI50AAg");
	var mask_graphics_121 = new cjs.Graphics().p("AiJqpIZ6AAIAAVTI56AAg");
	var mask_graphics_122 = new cjs.Graphics().p("AiSqsIaDAAIAAVZI6DAAg");
	var mask_graphics_123 = new cjs.Graphics().p("AieqxIaPAAIAAVjI6PAAg");
	var mask_graphics_124 = new cjs.Graphics().p("Aitq4IaeAAIAAVxI6eAAg");
	var mask_graphics_125 = new cjs.Graphics().p("AjArAIayAAIAAWBI6yAAg");
	var mask_graphics_126 = new cjs.Graphics().p("AjWrJIbIAAIAAWTI7IAAg");
	var mask_graphics_127 = new cjs.Graphics().p("AjwrUIbjAAIAAWpI7jAAg");
	var mask_graphics_128 = new cjs.Graphics().p("AkNrgIcAAAIAAXBI8AAAg");
	var mask_graphics_129 = new cjs.Graphics().p("AkuruIciAAIAAXdI8iAAg");
	var mask_graphics_130 = new cjs.Graphics().p("AlSr9IdHAAIAAX7I9HAAg");
	var mask_graphics_131 = new cjs.Graphics().p("Al5sNIdvAAIAAYbI9vAAg");
	var mask_graphics_132 = new cjs.Graphics().p("AmksfIebAAIAAY/I+bAAg");
	var mask_graphics_133 = new cjs.Graphics().p("AnSszIfKAAIAAZnI/KAAg");
	var mask_graphics_134 = new cjs.Graphics().p("AoEtIIf9AAIAAaRI/9AAg");
	var mask_graphics_135 = new cjs.Graphics().p("Ao5teMAgzAAAIAAa9MggzAAAg");
	var mask_graphics_136 = new cjs.Graphics().p("Apyt2MAhtAAAIAAbtMghtAAAg");
	var mask_graphics_137 = new cjs.Graphics().p("AquuPMAirAAAIAAcfMgirAAAg");
	var mask_graphics_138 = new cjs.Graphics().p("ArtuqMAjrAAAIAAdVMgjrAAAg");
	var mask_graphics_139 = new cjs.Graphics().p("AswvGMAkvAAAIAAeNMgkvAAAg");
	var mask_graphics_140 = new cjs.Graphics().p("At3vjMAl4AAAIAAfHMgl4AAAg");
	var mask_graphics_141 = new cjs.Graphics().p("AvAwCMAnDAAAMAAAAgFMgnDAAAg");
	var mask_graphics_142 = new cjs.Graphics().p("AwOwjMAoSAAAMAAAAhHMgoSAAAg");
	var mask_graphics_143 = new cjs.Graphics().p("AxexFMApkAAAMAAAAiLMgpkAAAg");
	var mask_graphics_144 = new cjs.Graphics().p("AyyxoMAq6AAAMAAAAjRMgq6AAAg");
	var mask_graphics_145 = new cjs.Graphics().p("A0KyNMAsUAAAMAAAAkbMgsUAAAg");
	var mask_graphics_146 = new cjs.Graphics().p("A1kyzMAtxAAAMAAAAlnMgtxAAAg");
	var mask_graphics_147 = new cjs.Graphics().p("A2gzSMAu8AAAMAAAAmlMgu8AAAg");
	var mask_graphics_148 = new cjs.Graphics().p("A3dzxMAwJAAAMAAAAnjMgwJAAAg");
	var mask_graphics_149 = new cjs.Graphics().p("A4Z0RMAxVAAAMAAAAojMgxVAAAg");
	var mask_graphics_150 = new cjs.Graphics().p("A5Q0wMAyhAAAMAAAAphMgyhAAAg");
	var mask_graphics_151 = new cjs.Graphics().p("A521PMAztAAAMAAAAqfMgztAAAg");
	var mask_graphics_152 = new cjs.Graphics().p("A6c1vMA05AAAMAAAArfMg05AAAg");
	var mask_graphics_153 = new cjs.Graphics().p("A7C2OMA2FAAAMAAAAsdMg2FAAAg");
	var mask_graphics_154 = new cjs.Graphics().p("A7o2tMA3RAAAMAAAAtbMg3RAAAg");
	var mask_graphics_155 = new cjs.Graphics().p("A8O3MMA4dAAAMAAAAuZMg4dAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(27).to({graphics:mask_graphics_27,x:78.1,y:14.8}).wait(1).to({graphics:mask_graphics_28,x:78.2,y:14.8}).wait(1).to({graphics:mask_graphics_29,x:78.6,y:15.1}).wait(1).to({graphics:mask_graphics_30,x:79.2,y:15.4}).wait(1).to({graphics:mask_graphics_31,x:80.1,y:16}).wait(1).to({graphics:mask_graphics_32,x:81.2,y:16.7}).wait(1).to({graphics:mask_graphics_33,x:82.5,y:17.5}).wait(1).to({graphics:mask_graphics_34,x:84.1,y:18.5}).wait(1).to({graphics:mask_graphics_35,x:85.9,y:19.6}).wait(1).to({graphics:mask_graphics_36,x:88,y:20.9}).wait(1).to({graphics:mask_graphics_37,x:90.4,y:22.4}).wait(1).to({graphics:mask_graphics_38,x:92.9,y:24}).wait(1).to({graphics:mask_graphics_39,x:95.7,y:25.8}).wait(1).to({graphics:mask_graphics_40,x:98.8,y:27.7}).wait(1).to({graphics:mask_graphics_41,x:102.1,y:29.7}).wait(1).to({graphics:mask_graphics_42,x:105.7,y:31.9}).wait(1).to({graphics:mask_graphics_43,x:109.5,y:34.3}).wait(1).to({graphics:mask_graphics_44,x:113.5,y:36.8}).wait(1).to({graphics:mask_graphics_45,x:117.8,y:39.5}).wait(1).to({graphics:mask_graphics_46,x:122.3,y:42.3}).wait(1).to({graphics:mask_graphics_47,x:127.1,y:45.3}).wait(1).to({graphics:mask_graphics_48,x:132.2,y:48.4}).wait(1).to({graphics:mask_graphics_49,x:137.4,y:51.5}).wait(1).to({graphics:mask_graphics_50,x:142.9,y:54}).wait(1).to({graphics:mask_graphics_51,x:149.2,y:55.9}).wait(1).to({graphics:mask_graphics_52,x:149.3,y:55.9}).wait(1).to({graphics:mask_graphics_53,x:149.3,y:55.9}).wait(1).to({graphics:mask_graphics_54,x:149.4,y:56}).wait(1).to({graphics:mask_graphics_55,x:149.4,y:56}).wait(1).to({graphics:mask_graphics_56,x:149.4,y:56}).wait(1).to({graphics:mask_graphics_57,x:149.5,y:56}).wait(1).to({graphics:mask_graphics_58,x:149.5,y:56}).wait(1).to({graphics:mask_graphics_59,x:149.6,y:56.1}).wait(1).to({graphics:mask_graphics_60,x:149.6,y:56.1}).wait(1).to({graphics:mask_graphics_61,x:149.7,y:56.1}).wait(1).to({graphics:mask_graphics_62,x:149.7,y:56.1}).wait(1).to({graphics:mask_graphics_63,x:149.7,y:56.2}).wait(1).to({graphics:mask_graphics_64,x:149.8,y:56.2}).wait(1).to({graphics:mask_graphics_65,x:149.8,y:56.2}).wait(1).to({graphics:mask_graphics_66,x:149.9,y:56.2}).wait(1).to({graphics:mask_graphics_67,x:149.9,y:56.2}).wait(1).to({graphics:mask_graphics_68,x:149.9,y:56.3}).wait(1).to({graphics:mask_graphics_69,x:150,y:56.3}).wait(1).to({graphics:mask_graphics_70,x:150,y:56.3}).wait(1).to({graphics:mask_graphics_71,x:150.1,y:56.3}).wait(1).to({graphics:mask_graphics_72,x:150.1,y:56.3}).wait(1).to({graphics:mask_graphics_73,x:150.1,y:56.4}).wait(1).to({graphics:mask_graphics_74,x:150.2,y:56.4}).wait(1).to({graphics:mask_graphics_75,x:150.2,y:56.4}).wait(1).to({graphics:mask_graphics_76,x:150.3,y:56.4}).wait(1).to({graphics:mask_graphics_77,x:150.3,y:56.5}).wait(1).to({graphics:mask_graphics_78,x:150.3,y:56.5}).wait(1).to({graphics:mask_graphics_79,x:150.4,y:56.5}).wait(1).to({graphics:mask_graphics_80,x:150.4,y:56.5}).wait(1).to({graphics:mask_graphics_81,x:150.5,y:56.5}).wait(1).to({graphics:mask_graphics_82,x:150.5,y:56.6}).wait(1).to({graphics:mask_graphics_83,x:150.6,y:56.6}).wait(1).to({graphics:mask_graphics_84,x:150.6,y:56.6}).wait(1).to({graphics:mask_graphics_85,x:150.6,y:56.6}).wait(1).to({graphics:mask_graphics_86,x:150.7,y:56.6}).wait(1).to({graphics:mask_graphics_87,x:150.7,y:56.7}).wait(1).to({graphics:mask_graphics_88,x:150.8,y:56.7}).wait(1).to({graphics:mask_graphics_89,x:150.8,y:56.7}).wait(1).to({graphics:mask_graphics_90,x:150.8,y:56.7}).wait(1).to({graphics:mask_graphics_91,x:150.9,y:56.8}).wait(1).to({graphics:mask_graphics_92,x:150.9,y:56.8}).wait(1).to({graphics:mask_graphics_93,x:151,y:56.8}).wait(1).to({graphics:mask_graphics_94,x:151,y:56.8}).wait(1).to({graphics:mask_graphics_95,x:151,y:56.8}).wait(1).to({graphics:mask_graphics_96,x:151.1,y:56.9}).wait(1).to({graphics:mask_graphics_97,x:151.1,y:56.9}).wait(1).to({graphics:mask_graphics_98,x:151.2,y:56.9}).wait(1).to({graphics:mask_graphics_99,x:151.2,y:56.9}).wait(1).to({graphics:mask_graphics_100,x:151.2,y:56.9}).wait(1).to({graphics:mask_graphics_101,x:151.3,y:57}).wait(1).to({graphics:mask_graphics_102,x:151.3,y:57}).wait(1).to({graphics:mask_graphics_103,x:151.4,y:57}).wait(1).to({graphics:mask_graphics_104,x:151.4,y:57}).wait(1).to({graphics:mask_graphics_105,x:151.5,y:57.1}).wait(1).to({graphics:mask_graphics_106,x:151.5,y:57.1}).wait(1).to({graphics:mask_graphics_107,x:151.5,y:57.1}).wait(1).to({graphics:mask_graphics_108,x:151.6,y:57.1}).wait(1).to({graphics:mask_graphics_109,x:151.6,y:57.1}).wait(1).to({graphics:mask_graphics_110,x:151.7,y:57.2}).wait(1).to({graphics:mask_graphics_111,x:151.7,y:57.2}).wait(1).to({graphics:mask_graphics_112,x:151.7,y:57.2}).wait(1).to({graphics:mask_graphics_113,x:151.8,y:57.2}).wait(1).to({graphics:mask_graphics_114,x:151.8,y:57.2}).wait(1).to({graphics:mask_graphics_115,x:151.9,y:57.3}).wait(1).to({graphics:mask_graphics_116,x:151.9,y:57.3}).wait(1).to({graphics:mask_graphics_117,x:151.9,y:57.3}).wait(1).to({graphics:mask_graphics_118,x:152,y:57.3}).wait(1).to({graphics:mask_graphics_119,x:152,y:57.3}).wait(1).to({graphics:mask_graphics_120,x:152,y:57.3}).wait(1).to({graphics:mask_graphics_121,x:152.1,y:57.3}).wait(1).to({graphics:mask_graphics_122,x:152.1,y:57.3}).wait(1).to({graphics:mask_graphics_123,x:152.1,y:57.3}).wait(1).to({graphics:mask_graphics_124,x:152.1,y:57.3}).wait(1).to({graphics:mask_graphics_125,x:152.2,y:57.3}).wait(1).to({graphics:mask_graphics_126,x:152.2,y:57.3}).wait(1).to({graphics:mask_graphics_127,x:152.3,y:57.3}).wait(1).to({graphics:mask_graphics_128,x:152.3,y:57.4}).wait(1).to({graphics:mask_graphics_129,x:152.4,y:57.4}).wait(1).to({graphics:mask_graphics_130,x:152.5,y:57.4}).wait(1).to({graphics:mask_graphics_131,x:152.6,y:57.4}).wait(1).to({graphics:mask_graphics_132,x:152.7,y:57.4}).wait(1).to({graphics:mask_graphics_133,x:152.8,y:57.4}).wait(1).to({graphics:mask_graphics_134,x:152.9,y:57.4}).wait(1).to({graphics:mask_graphics_135,x:153,y:57.5}).wait(1).to({graphics:mask_graphics_136,x:153.1,y:57.5}).wait(1).to({graphics:mask_graphics_137,x:153.3,y:57.5}).wait(1).to({graphics:mask_graphics_138,x:153.4,y:57.5}).wait(1).to({graphics:mask_graphics_139,x:153.5,y:57.6}).wait(1).to({graphics:mask_graphics_140,x:153.7,y:57.6}).wait(1).to({graphics:mask_graphics_141,x:153.9,y:57.6}).wait(1).to({graphics:mask_graphics_142,x:154,y:57.6}).wait(1).to({graphics:mask_graphics_143,x:154.2,y:57.7}).wait(1).to({graphics:mask_graphics_144,x:154.4,y:57.7}).wait(1).to({graphics:mask_graphics_145,x:154.6,y:57.7}).wait(1).to({graphics:mask_graphics_146,x:154.9,y:57.9}).wait(1).to({graphics:mask_graphics_147,x:156.4,y:58.2}).wait(1).to({graphics:mask_graphics_148,x:158,y:58.4}).wait(1).to({graphics:mask_graphics_149,x:159.6,y:58.7}).wait(1).to({graphics:mask_graphics_150,x:160.5,y:58.9}).wait(1).to({graphics:mask_graphics_151,x:159.9,y:59.2}).wait(1).to({graphics:mask_graphics_152,x:159.2,y:59.5}).wait(1).to({graphics:mask_graphics_153,x:158.5,y:59.7}).wait(1).to({graphics:mask_graphics_154,x:157.8,y:60}).wait(1).to({graphics:mask_graphics_155,x:157.1,y:60.3}).wait(1).to({graphics:null,x:0,y:0}).wait(52));

	// Layer 5
	this.instance_7 = new lib.echo3_mc();
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.7,28.6,0.036,0.036,0,0,0,158.8,18.1);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(27).to({_off:false},0).to({regX:156.1,regY:18.4,scaleX:0.44,scaleY:0.44,x:227.7,y:108.7},24,cjs.Ease.get(-1)).to({regX:156.2,scaleX:0.49,scaleY:0.49,x:225.3,y:116.2},68).to({regX:156,regY:18.2,scaleX:0.83,scaleY:0.83,x:166,y:138.1},27,cjs.Ease.get(-1)).to({regX:156.1,scaleX:1.02,scaleY:1.02,x:161.5,y:160.5,alpha:0},9).to({_off:true},1).wait(52));

	// Layer 4
	this.instance_8 = new lib.echo1_mc();
	this.instance_8.parent = this;
	this.instance_8.setTransform(154,24.8,0.036,0.036,0,0,0,65.5,129.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(27).to({_off:false},0).to({regX:63.8,regY:131.4,scaleX:0.46,scaleY:0.46,x:269.6,y:55.8},24,cjs.Ease.get(-1)).to({regX:63.7,scaleX:0.52,scaleY:0.52,rotation:9.7,x:273,y:64},68).to({regX:63.8,regY:131.3,scaleX:0.92,scaleY:0.92,rotation:20.2,x:265.3,y:111.5},27,cjs.Ease.get(-1)).to({regY:131.1,scaleX:1.13,scaleY:1.13,rotation:32.9,x:283.9,y:127.7,alpha:0},9).to({_off:true},1).wait(52));

	// Layer 3
	this.instance_9 = new lib.echo2_mc();
	this.instance_9.parent = this;
	this.instance_9.setTransform(148.4,25.4,0.036,0.036,0,0,0,98.9,112.8);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(27).to({_off:false},0).to({regX:97.8,regY:114,scaleX:0.46,scaleY:0.46,x:196.5,y:64.1},24,cjs.Ease.get(-1)).to({regX:98,regY:114.1,scaleX:0.52,scaleY:0.52,rotation:-4,x:183.1,y:66.4},68).to({regX:97.4,regY:113.8,scaleX:0.92,scaleY:0.92,rotation:-15.7,x:104.2,y:82.1},27,cjs.Ease.get(-1)).to({scaleX:1.13,scaleY:1.13,rotation:-24.1,x:64.6,y:97.1,alpha:0},9).to({_off:true},1).wait(52));

	// Layer 14
	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.6,24.8,0.036,0.036,0,0,0,2.8,-1.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.Tween5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(224.6,56,0.463,0.463,0,0,0,0.5,0.1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(27).to({_off:false},0).to({_off:true,regX:0.5,regY:0.1,scaleX:0.46,scaleY:0.46,x:224.6,y:56},24,cjs.Ease.get(-1)).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},24,cjs.Ease.get(-1)).to({regX:0.4,regY:0.2,scaleX:0.52,scaleY:0.52,x:221.7,y:57.4},68).to({regX:0.1,regY:0.1,scaleX:0.92,scaleY:0.92,x:163.4,y:57},27,cjs.Ease.get(-1)).to({regX:0.2,scaleX:1.13,scaleY:1.13,x:158.3,y:60.5,alpha:0},9).to({_off:true},1).wait(52));

	// Layer 10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_44 = new cjs.Graphics().p("Aq2A+IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_1_graphics_44,x:66.1,y:18}).wait(74).to({graphics:null,x:0,y:0}).wait(90));

	// Layer 11
	this.instance_12 = new lib.text1_mc("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(64.2,29.7,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.Tween7("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(64.2,18,0.533,0.533,0,0,0,0.2,0.2);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).to({_off:true,y:18},9).wait(150));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(49).to({_off:false},9).wait(61).to({startPosition:0},0).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:-138.4,y:8.7},27,cjs.Ease.get(-1)).to({regX:0.1,regY:-0.1,scaleX:1.78,scaleY:1.78,x:-204.1,y:7.7,alpha:0},9).to({_off:true},1).wait(52));

	// Layer 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_44 = new cjs.Graphics().p("Aq2A+IAAh7IVtAAIAAB7g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_2_graphics_44,x:66.1,y:30.2}).wait(74).to({graphics:null,x:0,y:0}).wait(90));

	// Layer 12
	this.instance_14 = new lib.text2_mc("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(64.2,41.9,0.533,0.533,0,0,0,0.2,0.1);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween9("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-204.1,53.7,1.776,1.776,0,0,0,0.1,-0.1);
	this.instance_15.alpha = 0;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},51).to({state:[{t:this.instance_14}]},9).to({state:[{t:this.instance_14}]},59).to({state:[{t:this.instance_14}]},27).to({state:[{t:this.instance_15}]},9).to({state:[]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(51).to({_off:false},0).to({regY:0.2,y:29.7},9).wait(59).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-138.3,y:33.2},27,cjs.Ease.get(-1)).to({_off:true,regY:-0.1,scaleX:1.78,scaleY:1.78,x:-204.1,y:53.7,alpha:0},9).wait(53));

	// Layer 6 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_44 = new cjs.Graphics().p("Aq2A9IAAh5IVtAAIAAB5g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_3_graphics_44,x:68.5,y:37.7}).wait(74).to({graphics:null,x:0,y:0}).wait(90));

	// Layer 13
	this.instance_16 = new lib.text3_mc("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(107.1,47.9,0.533,0.533,0,0,0,0.2,0.3);
	this.instance_16._off = true;

	this.instance_17 = new lib.text3("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-66.7,93.5,1.776,1.776,0,0,0,0.1,0.1);
	this.instance_17.alpha = 0;

	var maskedShapeInstanceList = [this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},53).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_16}]},57).to({state:[{t:this.instance_16}]},27).to({state:[{t:this.instance_17}]},9).to({state:[]},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(53).to({_off:false},0).to({regY:0.2,y:37.7},9).wait(57).to({startPosition:0},0).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-52.6,y:54.7},27,cjs.Ease.get(-1)).to({_off:true,scaleX:1.78,scaleY:1.78,x:-66.7,y:93.5,alpha:0},9).wait(53));

	// cta btn
	this.cta = new lib.legal();
	this.cta.parent = this;
	this.cta.setTransform(268.7,25,0.671,0.671,0,0,0,128,-4.5);
	this.cta._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(146).to({_off:false},0).wait(62));

	// Layer 1 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_153 = new cjs.Graphics().p("AnVAkIAAhHIOrAAIAABHg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(153).to({graphics:mask_4_graphics_153,x:170.1,y:40.3}).wait(55));

	// Layer 2
	this.instance_18 = new lib.legal_withpurchase();
	this.instance_18.parent = this;
	this.instance_18.setTransform(162.2,47.8,0.483,0.483,0,0,0,117.8,8.2);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(153).to({_off:false},0).to({y:40.3},9).wait(46));

	// Layer 7 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_150 = new cjs.Graphics().p("AnVAkIAAhHIOrAAIAABHg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(150).to({graphics:mask_5_graphics_150,x:170.1,y:33.1}).wait(58));

	// Layer 9
	this.instance_19 = new lib.legal_limitedtime();
	this.instance_19.parent = this;
	this.instance_19.setTransform(115,161.6,0.697,0.697,0,0,0,37.6,6.8);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(150).to({_off:false},0).to({y:154.1},9).wait(49));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_147 = new cjs.Graphics().p("AnuBuIAAjbIPdAAIAADbg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_6_graphics_147,x:182.3,y:17}).wait(61));

	// price
	this.instance_20 = new lib.newPrice();
	this.instance_20.parent = this;
	this.instance_20.setTransform(169.8,59.1,0.58,0.58,0,0,0,57.5,33.2);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(147).to({_off:false},0).to({regX:0,regY:0,x:136.4,y:4.9},8,cjs.Ease.get(1)).wait(53));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_147 = new cjs.Graphics().p("An9BEIAAiHIP7AAIAACHg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(147).to({graphics:mask_7_graphics_147,x:63.4,y:26.2}).wait(61));

	// oculus
	this.instance_21 = new lib.logo_oculus();
	this.instance_21.parent = this;
	this.instance_21.setTransform(64,40.1,0.07,0.07,0,0,0,155.6,288.1);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(147).to({_off:false},0).to({y:25.1},8,cjs.Ease.get(1)).wait(53));

	// bg
	this.instance_22 = new lib.bg();
	this.instance_22.parent = this;
	this.instance_22.setTransform(186.8,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(152.8,25,328,50);
// library properties:
lib.properties = {
	id: '44B24EA6166247E9A0640E9ABC08EE25',
	width: 320,
	height: 50,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap34.jpg?1502909942480", id:"Bitmap34"},
		{src:"images/echo1.jpg?1502909942480", id:"echo1"},
		{src:"images/echo2.jpg?1502909942480", id:"echo2"},
		{src:"images/echo3.jpg?1502909942480", id:"echo3"},
		{src:"images/game_1_unspoken.jpg?1502909942480", id:"game_1_unspoken"},
		{src:"images/game_2_loneecho.jpg?1502909942480", id:"game_2_loneecho"},
		{src:"images/game_3_startrek.jpg?1502909942480", id:"game_3_startrek"},
		{src:"images/game_4_superhot.jpg?1502909942480", id:"game_4_superhot"},
		{src:"images/game_5_roborecall.jpg?1502909942480", id:"game_5_roborecall"},
		{src:"images/game_6_rickmorty.jpg?1502909942480", id:"game_6_rickmorty"},
		{src:"images/game_7_wilson.jpg?1502909942480", id:"game_7_wilson"}
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
an.compositions['44B24EA6166247E9A0640E9ABC08EE25'] = {
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