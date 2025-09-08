import { flatternObject } from ".";

const { test, expect } = require('@jest/globals');

test('test flattern Object with nested properties', () => {
	
	expect(flatternObject({
		a:1,
		b:{
			c:'hello',
			d:{
				e:true
			}
		},
		f:[{
			g:'world'
		}]
	})).toEqual({
		'a':1,
		'b.c':'hello',
		'b.d.e':true,
		'f.0.g':'world'
	});
});

test('test flattern Object with empty array', () => {

	expect(flatternObject({
		a:1,
		f:[]
	})).toEqual({
		'a':1
	});
});

test('test flattern Object with empty object', () => {
	expect(flatternObject({
		a:1,
		b:{}
	})).toEqual({
		'a':1
	});
});

test('test flattern Object with null', () => {
	expect(flatternObject({
		a:1,
		b:null
	})).toEqual({
		'a':1,
		'b':null
	});
});

test('test flattern Object with undefined', () => {
	expect(flatternObject({
		a:1,
		b:undefined
	})).toEqual({
		'a':1
	});
});