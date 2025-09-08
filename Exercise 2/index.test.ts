import { flatternObject } from ".";

const { test, expect } = require('@jest/globals');

test('flattern Object', () => {
	
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