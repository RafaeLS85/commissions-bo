export function desktop(css: TemplateStringsArray) {
    return `@media (min-width: 767px) {${css}}`
}
