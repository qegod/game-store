import {describe, expect, test} from "vitest";
import { classNames } from "./classNames";


describe('ClassNames', () => {
    test('Primary class', () => {
        const cls = 'app'
        expect(classNames(cls, {}, [])).toEqual('app')
    })

    test('All arguments', () => {
        const cls = 'app'
        const mods = {dark: true, light: false, isOpen: true}

        expect(classNames(cls, mods, ['work'])).toEqual('app dark isOpen work')
        expect(classNames(cls, mods, ['work'])).not.toEqual('app light work')
        expect(classNames(cls, {}, ['work'])).not.toEqual('app')
    })
})