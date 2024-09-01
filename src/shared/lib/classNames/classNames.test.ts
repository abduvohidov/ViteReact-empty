import {classNames} from "@/shared/lib/classNames/classNames";

describe('classNames', () => {
    test("Передаём параметры (Array)", () => {
        let expected = "some array"
        expect(classNames(["some", "array"])).toBe(expected)
    })
    test("Передаём параметры (Object)", () => {
        let expected = "some classes"
        expect(classNames({
            some: true,
            class: false,
            classes: true
        })).toBe(expected)
    })
    test("Передаём параметры (String)", () => {
        let expected = "string"
        expect(classNames("string")).toBe(expected)
    })
    test("Передаём параметры (Object, Array)", () => {
        let expected = "some classes array"
        expect(classNames({some: true, class: false, classes: true}, ["array"])).toBe(expected)
    })
    test("Передаём параметры (String, Object, Array)", () => {
        let expected = "string some classes array"
        expect(classNames("string", {some: true, class: false, classes: true}, ["array"])).toBe(expected)
    })
    test("Передаём ничего)", () => {
        let expected = ""
        expect(classNames()).toBe(expected)
    })
    test("Передаём пустой object)", () => {
        let expected = ""
        expect(classNames({})).toBe(expected)
    })
    test("Передаём пустой (1))", () => {
        let expected = ""
        expect(classNames(1 as unknown as string)).toBe(expected)
    })
});
