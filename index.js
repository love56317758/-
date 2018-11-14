(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"荷塘月色_Canvas_atlas_", frames: [[602,338,43,25],[647,338,25,34],[602,302,57,34],[0,0,600,450],[585,452,68,263],[653,152,62,62],[693,50,47,77],[602,152,49,80],[602,0,66,85],[602,234,36,59],[653,216,43,84],[602,87,89,63],[670,0,93,48],[0,452,583,235]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.蜻蜓翅膀1 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.蜻蜓翅膀2 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.蜻蜓身体 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.莲花着色 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第一层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第七层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第三层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第九层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第八层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第六层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第二层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第五层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.莲花盛开第四层 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.莲花线框 = function() {
	this.spriteSheet = ss["荷塘月色_Canvas_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.背景 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花着色();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.背景, new cjs.Rectangle(0,0,600,450), null);


(lib.线框 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花线框();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.线框, new cjs.Rectangle(0,0,583,235), null);


(lib.文字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag+GJQgVAFgHgZQABgJgBgOQgBgNAPgDQAgg7Asg6QgDgGgBgLQgBgMgKAEQgQADgTgCQgygUgrgiQgRgMAQAFQBDgVBHgQQAJgmAHgmQABgRgNANQgbACgbgIQgaABgOgSQAcgfAlghQAOgHAJgMQAIgMATACQAnghAignQASgMACgOQg3AIgvAcQgkATgkAYQg1AkgqAvQgGAPgOAFQgNADgHAOQgdAHgdARQgaANgVgcQgCgRgQgOQgPg6AoguQARgiAfgZQAfgYAbgaQACAogKAkQgFA1gkApQgSARgCAOIAvgtQBlhGBsgxQA0gbA5gKQAOgGASgEQAlAIAdAaQAJAbgYATQgfADgaAUQghANgfAXQAWAagUAeQALAWgSASIgGBiQABAMAKgDQAJgCAIAFQAYAFAPASQAIAMALAMQAMAMgLAPQgZAZgNAeQg8A0g9AmQgUAOgQANQAUAAATgJQAcgJAggBQAggCAagTQAQgSANgYQAFgNABAJIADAPIADAaQgIAWAPAVQABAmglAGQgjAHgogCQgXAHgbAAQgagKgeADgAAHgKQABAKAEgGQAAgBABgBQAAgBAAAAQgBgBAAAAQgBAAgBAAIgDAAgAEDE3QgKgGAFgFQAGgFgBgIQgZgxgQg0QgHgKgKgBQgJgBANgLQARAAARAHQBDgDASA6QAIAygxAhIgPAJIgFACQgEAAAAgIgAgIkMQg4gugzgzIgNgRQgIgJALgEQAAgCAKgCQARACAMgCQAoAHAjAKQArAcAgAoQgFAHAFALQAFAKgMAEQABALgJACQgKADgEAIQgHACgHAAQgPAAgOgMg");
	this.shape.setTransform(720.4,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+GJQgVAFgHgZQABgJgBgOQgBgNAPgDQAgg7Asg6QgDgGgBgLQgBgMgKAEQgQADgTgCQgygUgrgiQgRgMAQAFQBDgVBHgQQAJgmAHgmQABgRgNANQgbACgbgIQgaABgOgSQAcgfAlghQAOgHAJgMQAIgMATACQAnghAignQASgMACgOQg3AIgvAcQgkATgkAYQg1AkgqAvQgGAPgOAFQgNADgHAOQgdAHgdARQgaANgVgcQgCgRgQgOQgPg6AoguQARgiAfgZQAfgYAbgaQACAogKAkQgFA1gkApQgSARgCAOIAvgtQBlhGBsgxQA0gbA5gKQAOgGASgEQAlAIAdAaQAJAbgYATQgfADgaAUQghANgfAXQAWAagUAeQALAWgSASIgGBiQABAMAKgDQAJgCAIAFQAYAFAPASQAIAMALAMQAMAMgLAPQgZAZgNAeQg8A0g9AmQgUAOgQANQAUAAATgJQAcgJAggBQAggCAagTQAQgSANgYQAFgNABAJIADAPIADAaQgIAWAPAVQABAmglAGQgjAHgogCQgXAHgbAAQgagKgeADgAAHgKQABAKAEgGQAAgBABgBQAAgBAAAAQgBgBAAAAQgBAAgBAAIgDAAgAEDE3QgKgGAFgFQAGgFgBgIQgZgxgQg0QgHgKgKgBQgJgBANgLQARAAARAHQBDgDASA6QAIAygxAhIgPAJIgFACQgEAAAAgIgAgIkMQg4gugzgzIgNgRQgIgJALgEQAAgCAKgCQARACAMgCQAoAHAjAKQArAcAgAoQgFAHAFALQAFAKgMAEQABALgJACQgKADgEAIQgHACgHAAQgPAAgOgMg");
	this.shape_1.setTransform(624.4,50.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AC6E8QgrgWglgkQgagXgbgRQgwgWgqgjQAZAMAeAAQAPAAgJgFQgIgFgFgGIAHABQAVAIASgBQBXgCBDA0QAWAfAJAhQAKAOgKAOQgMAKgQAGQgGAFgGAAQgJAAgHgMgAj2DxQAFgJABgMQAAgMANAKQA4gbAmg3QAUgiAQgmQgCgHgGAIQgGAIgFgJQgUgDgfAAQgjgOgOgiIgEgYQgSgRAIgSQAGAUAWAFQA0gQAugbQAagGAJgOQAJhYgQhQQgOgYgaACQgSgRgYgKQACgHAXAAQAYgPAegEQAYADAXALQAdAMAEAeQAFAeAAAfQABAOgEANIAGAzQAVAEAXgFQAVgIARAEQBDgEAFA/QgYAogsAOQgkAJgjANQgXAEgFAbQgNAbgGAhQAAAdgRAGIgRAeQgVAggVAZQgcAUgfATQgeAVgmADQgTgHgBgagAAGh+QAFAKACgIQABgBAAgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgGACg");
	this.shape_2.setTransform(528.5,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADDHLIg/hEQgggjgqgOQgcAOgTAWIgvAdQgZATgUgEQgSgRAQgXQAkgSAUgkQgSgPgdAAQgPgCgRAIQgQAHgJgNQgMgLAFgPQAGgPgHgMQgMgQARgIQARgIgBgNQgZACgdALQggAEgcAQQgdAAgVAOQgbARgbgRQgSAAgPgHQAEgEgPgGIAgADQCHg5CSgdQAPgTANgWQAHgKAFgPQAGgNgPgIQgLgJgCgIQASABAKgNIALACQASACALAIQAdAEAXAZQAOAGgFAOQgGAOAFAMQAqgDAvgMQATAAAPgHQAbAKAbADIAmAUQAEAngqAIQglgGgqAAQgRACgFATQAEASgTAHQgLAcgVAZQgNAJAKADIASAGQBqAfApBkQgBAbgdABIgRABQgOAAgOgDgAAqDCQgNAFgMAJQgiAegkAYQAbANAeAHQAeACALgdQAWgYANgeQADgRgWAHIgEAAQgIAAgHADgAhXDRQgTAEATACQAOgGgLAAIgDAAgAjMB5QgRgHgHgQQAAgSgOgPQgFgaAHgVQAQgJACgUQgBgiABglQgMguAMgyQgGA3ArAbQARAZgEAhQgCAaAJgEQA1g7AshBQABgOADgKQAFgQAUgBQAUAAANAJQASAxgOAxQgBAUAUABQBHgCBGACQASgSALgVQAGgNgNADQgMADgHgEQgXAHgXAEQgbgQgIgeIgQg6QgFgLgRAIQgRgLgUgDQgZgBgWABQARgOAWgKQAYgPAhgNQASgDABgVQAGgxAAguIgBgiQAAgTgUAGQgXADgGAbQgEAJAAAMQABAMgEgPQgMgfAXgXQAhgXAkgBQAXADAPAPQAIAcgCAjIgGBVIAlgJQAIABAGgIQAFgHAJAHQAMAEANgDIArAKQAdAMgIAaQguAZguAfQgbAYgjAEQgbgDgCAdQgJARAXABQAeAEAYgJQAOAGAQACQAsAAADAjQgaAKgOAcQgIAKAOADQBUAVA9BAQAKALAEAOQACANgHAGQgPgEgLANQgMACgOgCQhHg2hMgsQgiAcgpAKQgnARgegUQgIgMgMgHQAKACAYAAQApgLAegaQglgNgpAFIgugXQgNAPgKAVQgFAUgQgHQgQgIgBgSQAYgygCg9QgIgOgIAMIgOAUQgQAsgSAqQgIAVgOATQgRAngUAjQgJAMgEATQgEAQgNAAIgGgBgACLj6QgKARAEAZQASgMARgTQAHgGAFgLQAGgLgMAFIgEAAQgRAAgOAMgAigj3QgFgFgDgBQgZgagRgfQgHgOgCgJIAHADQASAWAdgCQAbAKAUARQAaAMgTAYQgKAKgMAAQgNAAgOgKg");
	this.shape_3.setTransform(432.4,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AkBFqQgIAIgGgMQAVgIAOgUQABgPAXgPQAKgCABgLQAAgLAJAAQA6hdBVhNQAZgOgZgEQAIgFAIgKQANgGAHAGIAhgfQASgQAIgPQhQALhHAgQgmAUgpAOQgYAAgUAOQgbgBgSANQgUgDgNgIQgngHALgjQAHgMgEAVQATAEAZAAQBXggBdgcQAygOAwgPIgLghQADgQgLgNQAXAHgEggQgUgNgUgSQgRgTgEgaQALgSAOAPQAEAKANgHQAcAEgCgaQABgygMg1QAAgbgZAKQgRAMARgWQAEgIAEgDQAPgCgUgNQgHgDAJgRQAWAKAUgBQAJAGAMgEQAMgDAGAJQAuARgEAtQgLAogHAoQAJAEAHgEQAMAJAQgCQARgBAIAOQAWAGADAYQAIAKgLAEQgxATgvAXQgIAqgSAlQAbAAAbgJQAjgEAYgdQAYgWAZgRQgfgMgfAOQATgPAcACQAJAIABgJQABgJAHgBQAQARAUAQQAIANgMAGQgNAFgIAJQgLAKAMgBQAMgDACgHQAhgHAaAYQAWADAFASQATARABAXQgRAIgNgIQgHACgMgDQhYgOhYAJQgiAdghAiQgXAPAXAOQAJATAWgRQAjgKApACIAgAYQgDAQAJARQgXAUglABQgUAFgWgCQgXgDgUAJQgKApAFAsQgDAUAVAAQAjAEAZgSIAlADQAbgDAbAHQAUgEAFAQQAGAQANAHQAZAggnAMQgLANgQgGQgQgGgQAFQg/ACg4gQQgagIgVgWQglgZgEgrQgDgbAHgaQAHgagIgYQhFBNg/BUQgVAegbAYQgRAOgQAFIgEAAQgMAAgFgPg");
	this.shape_4.setTransform(336.3,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ACgEsIg+gJQgNgJgMACQADgTgHgQQgIgRAHgRQgMgUAAgdIAHgrQgCgjAXgbQAjADAbAIQAfAJABAhQADAggcAMQghgagbggQgNAOALAXQgEAwAsAaQAhgDAegJQATgFABgTQABgTAEgPQAJhOgDhJQgagKgYAOQgkAHgkAQQgGAYgRAMQgOhAALhFQAPg/AHhCQAKgmgNgjQgLgPgMAIQgNAIgLAJQgcAtgUAzQgKAlgQAjIgaBIQARAQgEATQAAAfgHAeIAABRQgEAlgUAYQgMAQgJgMIgUgUQgTgGgUgKQgSAJADgVQAQhLAmg+QAHgNgCgJQgUAKgYgNQgMgLgJgQQAhgHAegNQAOAEARAAQA7hZAmhiQAOgwAxgaIAHAAQAYAMAXAUQASAKAFARQABA1gIAvQAAAYgKARQgHAsgQAoQAYgCAYgRQAZgRAcAGQA3AFgBA3IAAAaQgDAcAAAZQgIAOAGAOQAFAPgFANQgLARAEAXQAFAWgKASQADAjgWAYQgHATgWAAQgNACgKAAQgQAAgMgFgAh2B/QgBAQAMgJQALgIgDgOQADgZgJgBQgMATgBAWgAjkDNQgZgUAAgcQABgcgHgZQgKgLgCgOQACgdgDgdQgJgNAQgKQAQgOANgXIAsg+QAWgfgEgsQADgPgKgIQgJgJAGgMIAaABQAZAQAUASQAPATgHAWQgCAogqALQgrAkgnAlQgLAYgBAZQAtAuAMA+QACAOgEAOQgGAOgGALQgHAPgRAAIgEAAg");
	this.shape_5.setTransform(240.2,50.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADMFVQg4hMgmhPQgTgNgZAeQgZAegYAHQgrAfgGgiQgHghAOggQACAPATAAQARgBAKgbQA4gmgVgzQgUgygSgxQgkgFgrAOQgrAPgnAKQgLAmAdgQQAdgQgBADQg8A7ADBIQADBIgGBOQgGAdgXgBQgXgBgKgUQgYgjgmgEQgngEgkAIQgWg0AtgmIBWhEQAigKAJgkQAKglgoATQg1A1g4gnQg4gmAghBQgEAVAIAdQAIAeAlgKQAXgGAjgOQAigOgggMQgpgLAbgHQAbgHAVgSQA6AZAygWQAzgVAwgaIg3kFQAHgjgkgJQgjgJAcgJQA6gBAhAyQAABsAmBtQABApAbAWQAdAXAQAfQgfAJASAmQASAmANAEQAegaAEgoQAEgpAkgHQBAAggpAyQgpAzgcAuQAaBhBOBTQAXg7gEhIQgEhIgUg8QAqA9AQBSQAQBSAiBKQAPAXALAnQALAogiAHQhbgQg5hLgAisEPQAEgGgGACIgCAAQABAJADgFgAj5DAQgZAWAUANQAnAYAHgmQAHgngKgWQgMASgaAWgAkFizQAWgOAUgPQAmgTABgaQABgcgDghQALAZATgIQAdADAfAgQAfAggNAoQgoACguAOQgvAOgoAFQgkgKAWgOgACIjFQgpgeglgfQgkgPARgDIAsgJQA3gHArAWQArAWgFA6QgSAJgSAAQgYAAgXgQg");
	this.shape_6.setTransform(143.6,50);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AD3FXQgcgGgTgGIhMgTQgjgBghgJQgigKgggPQg6gWg7gKQgqAOgtAGQgPgKgPgIIAEgeQgCgkAmgYQgagUgnACQgagYgPgkQgUgqANgvQAGgQgQgDQgPgDgNgFIARAAQANgMAUAMQAMgBAJgJQATADAVAHQATAAAEAQQAEAQgNAIQgSAnABAuQA5AbAzAjQAMAEANAPQANAPgQARQgWALgegFQgTADgEALQAugEAygBQAaADAdAHQAlAGAhAIQBLgMBUAFIBRAPQAbAIAPgJQgBgJAJAKQAJAKAIAAQALAGABAKQAOALgNAGQAGALgGAEQgEATgPAMQgOAJgOAAQgKACgKAAQgRAAgSgFgADKC7QgJgEgIAFQg4gZgqgwQgZgSgaAHIgcAqQgOAVgbACQgZgOADgaQAjgSASgkQgEgHgKAHQgJAHgGgDQgSgCgCgMQgDgNgKgLQgMgUAOgYQgEAVAVANQAfgIAdgRQARgHgDgUIgHghQAAgOgLAEQgLAFgCgHQAIgIgKgEQgMgEAGgBQAbAGANgYQgQgGgQAJQgKgKgMAKQANgLgLgDQgLgDgJgFQgMACAFgGQAEgFAHAFQApgJAhgeQAvg4Alg8QAMgUAGgUQg4AMgqAvQgWAPgQARIgoAqQgPAWgHgYQgLgNACgVQABgVgMgOQARgRALgWQAGgKgDALQgCALAGAFQgEAYAQATQAggJAagXQAZgXAegRQAUgQAUgMQAKABAGgMIANAKQACgIADAFQAEAFAEgFQAlgEAMAhQAPARgIAZQgKANgQAKQgkAlgrAdQAOADANgCQAUACASAGQAEAjgoAEQgeAJgdAWQgEAJgLADQgMAEADAJQALAIgDAKQgDAKAJAEQAeACAcgCQAYgEAUAEQAGAHgKAHQgKAHgBAJQgnApgzAVQgTACgCAVQABAJgHAHQgGAIALAFQAZgEAeAHQAvgHAqAVQAUAQAJAVQACAOgIAMQgDAIgGAAIgEgBgAjPiGQghgIgWgaIgug1QARgDAMAIQA1gJAmAkQANATgGASQgEASgUAAIgCAAg");
	this.shape_7.setTransform(48.6,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,772.2,110.7);


(lib.蜻蜓 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.蜻蜓翅膀2();
	this.instance.parent = this;
	this.instance.setTransform(-32,-80);

	this.instance_1 = new lib.蜻蜓翅膀1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-31,-71);

	this.instance_2 = new lib.蜻蜓身体();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{rotation:0,x:-31,y:-71}},{t:this.instance,p:{rotation:0,x:-32,y:-80}}]}).to({state:[{t:this.instance_2},{t:this.instance_1,p:{rotation:23,x:-21.2,y:-69}},{t:this.instance,p:{rotation:-37.7,x:-52.5,y:-72.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-80,62,63);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第九层();
	this.instance.parent = this;
	this.instance.setTransform(0,2,1,1,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._9, new cjs.Rectangle(0,0,52.2,81.9), null);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第八层();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._8, new cjs.Rectangle(0,0,66,85), null);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第七层();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._7, new cjs.Rectangle(0,0,62,62), null);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第六层();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._6, new cjs.Rectangle(0,0,36,59), null);


(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第五层();
	this.instance.parent = this;
	this.instance.setTransform(29.7,0,1,1,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._5, new cjs.Rectangle(0,0,108.2,97.6), null);


(lib._4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第四层();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._4, new cjs.Rectangle(0,0,93,48), null);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第三层();
	this.instance.parent = this;
	this.instance.setTransform(0,7.9,1,1,-9.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._3, new cjs.Rectangle(0,0,59.3,83.8), null);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.莲花盛开第二层();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib._2, new cjs.Rectangle(0,0,43,84), null);


// stage content:
(lib.荷塘月色_Canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_109 = function() {
		/* 在此帧处停止
		时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(109).call(this.frame_109).wait(1));

	// 遮罩层 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_85 = new cjs.Graphics().p("AnzHqIAAvTIPnAAIAAPTg");
	var mask_graphics_86 = new cjs.Graphics().p("ApDHqIAAvTISHAAIAAPTg");
	var mask_graphics_87 = new cjs.Graphics().p("AqUHqIAAvTIUpAAIAAPTg");
	var mask_graphics_88 = new cjs.Graphics().p("ArkHqIAAvTIXJAAIAAPTg");
	var mask_graphics_89 = new cjs.Graphics().p("As0HqIAAvTIZpAAIAAPTg");
	var mask_graphics_90 = new cjs.Graphics().p("AuFHqIAAvTIcLAAIAAPTg");
	var mask_graphics_91 = new cjs.Graphics().p("AvVHqIAAvTIerAAIAAPTg");
	var mask_graphics_92 = new cjs.Graphics().p("AwlHqIAAvTMAhLAAAIAAPTg");
	var mask_graphics_93 = new cjs.Graphics().p("Ax2HqIAAvTMAjtAAAIAAPTg");
	var mask_graphics_94 = new cjs.Graphics().p("AzGHqIAAvTMAmNAAAIAAPTg");
	var mask_graphics_95 = new cjs.Graphics().p("A0WHqIAAvTMAotAAAIAAPTg");
	var mask_graphics_96 = new cjs.Graphics().p("A1nHqIAAvTMArPAAAIAAPTg");
	var mask_graphics_97 = new cjs.Graphics().p("A23HqIAAvTMAtvAAAIAAPTg");
	var mask_graphics_98 = new cjs.Graphics().p("A4IHqIAAvTMAwRAAAIAAPTg");
	var mask_graphics_99 = new cjs.Graphics().p("A5YHqIAAvTMAyxAAAIAAPTg");
	var mask_graphics_100 = new cjs.Graphics().p("A6oHqIAAvTMA1RAAAIAAPTg");
	var mask_graphics_101 = new cjs.Graphics().p("A75HqIAAvTMA3zAAAIAAPTg");
	var mask_graphics_102 = new cjs.Graphics().p("A9JHqIAAvTMA6TAAAIAAPTg");
	var mask_graphics_103 = new cjs.Graphics().p("A+ZHqIAAvTMA8zAAAIAAPTg");
	var mask_graphics_104 = new cjs.Graphics().p("A/qHqIAAvTMA/VAAAIAAPTg");
	var mask_graphics_105 = new cjs.Graphics().p("Egg6AHqIAAvTMBB1AAAIAAPTg");
	var mask_graphics_106 = new cjs.Graphics().p("EgiKAHqIAAvTMBEVAAAIAAPTg");
	var mask_graphics_107 = new cjs.Graphics().p("EgjbAHqIAAvTMBG3AAAIAAPTg");
	var mask_graphics_108 = new cjs.Graphics().p("EgkrAHqIAAvTMBJXAAAIAAPTg");
	var mask_graphics_109 = new cjs.Graphics().p("Egl7AHqIAAvTMBL3AAAIAAPTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(85).to({graphics:mask_graphics_85,x:172,y:113}).wait(1).to({graphics:mask_graphics_86,x:179.8,y:113}).wait(1).to({graphics:mask_graphics_87,x:187.6,y:113}).wait(1).to({graphics:mask_graphics_88,x:195.3,y:113}).wait(1).to({graphics:mask_graphics_89,x:203.1,y:113}).wait(1).to({graphics:mask_graphics_90,x:210.9,y:113}).wait(1).to({graphics:mask_graphics_91,x:218.6,y:113.1}).wait(1).to({graphics:mask_graphics_92,x:226.4,y:113.1}).wait(1).to({graphics:mask_graphics_93,x:234.2,y:113.1}).wait(1).to({graphics:mask_graphics_94,x:241.9,y:113.1}).wait(1).to({graphics:mask_graphics_95,x:249.7,y:113.1}).wait(1).to({graphics:mask_graphics_96,x:257.5,y:113.1}).wait(1).to({graphics:mask_graphics_97,x:265.2,y:113.1}).wait(1).to({graphics:mask_graphics_98,x:273,y:113.1}).wait(1).to({graphics:mask_graphics_99,x:280.8,y:113.1}).wait(1).to({graphics:mask_graphics_100,x:288.5,y:113.1}).wait(1).to({graphics:mask_graphics_101,x:296.3,y:113.1}).wait(1).to({graphics:mask_graphics_102,x:304,y:113.1}).wait(1).to({graphics:mask_graphics_103,x:311.8,y:113.1}).wait(1).to({graphics:mask_graphics_104,x:319.6,y:113.1}).wait(1).to({graphics:mask_graphics_105,x:327.3,y:113.1}).wait(1).to({graphics:mask_graphics_106,x:335.1,y:113.1}).wait(1).to({graphics:mask_graphics_107,x:342.9,y:113.1}).wait(1).to({graphics:mask_graphics_108,x:350.6,y:113.1}).wait(1).to({graphics:mask_graphics_109,x:357.2,y:113}).wait(1));

	// 文字层
	this.instance = new lib.文字("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(412.2,122,0.43,0.43,0,0,0,386.1,55.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85).to({_off:false},0).wait(25));

	// 蜻蜓
	this.instance_1 = new lib.蜻蜓();
	this.instance_1.parent = this;
	this.instance_1.setTransform(647,73.6,1,1,0,0,0,-19,-48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:164.1,y:94.1},39).wait(71));

	// 背景
	this.instance_2 = new lib.背景();
	this.instance_2.parent = this;
	this.instance_2.setTransform(300,225,1,1,0,0,0,300,225);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(62).to({_off:false},0).to({alpha:1},22).wait(26));

	// 9
	this.instance_3 = new lib._9();
	this.instance_3.parent = this;
	this.instance_3.setTransform(92.5,197,1,1,6.9,0,0,20.1,79.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38).to({rotation:-0.3},24).to({_off:true},23).wait(25));

	// 8
	this.instance_4 = new lib._8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(92.6,196.7,1,1,-8.8,0,0,-3.2,73.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({regY:73.1,rotation:2.4,y:196.6},24).to({_off:true},23).wait(25));

	// 7
	this.instance_5 = new lib._7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(132.6,129.5,1,1,0,0,0,31,31);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(62).to({_off:true},23).wait(25));

	// 6
	this.instance_6 = new lib._6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(93.3,192.7,1,1,-0.8,0,0,-35,91);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({rotation:16.7},24).to({_off:true},23).wait(25));

	// 5
	this.instance_7 = new lib._5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(92.8,194.6,1,1,-32.1,0,0,-10.3,62.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({regX:-10.4,regY:62.8,rotation:0.3,x:92.6,y:194.5},24).wait(47).to({rotation:0.3},0).wait(1));

	// 4
	this.instance_8 = new lib._4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(93.6,189.7,1,1,-17.4,0,0,3.2,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({regX:3,regY:37,rotation:37.5,x:93.5,y:189.5},24).to({_off:true},45).wait(3));

	// 3
	this.instance_9 = new lib._3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(93.1,190.5,1,1,7,0,0,36.6,87.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({rotation:-1.7,y:190.4},24).to({_off:true},45).wait(3));

	// 2
	this.instance_10 = new lib._2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(92.2,193.2,1,1,0.5,0,0,26.8,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38).to({regX:26.7,rotation:-46.7},24).to({_off:true},45).wait(3));

	// 莲花
	this.instance_11 = new lib.莲花盛开第一层();
	this.instance_11.parent = this;
	this.instance_11.setTransform(77,187);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},107).wait(3));

	// 线框
	this.instance_12 = new lib.线框();
	this.instance_12.parent = this;
	this.instance_12.setTransform(291.5,332.5,1,1,0,0,0,291.5,117.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},107).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(300,267.1,678,408);
// library properties:
lib.properties = {
	width: 600,
	height: 450,
	fps: 12,
	color: "#EDEDDE",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/荷塘月色_Canvas_atlas_.png", id:"荷塘月色_Canvas_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;