import defaultMdxComponents from "fumadocs-ui/mdx"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { Accordion, Accordions } from "fumadocs-ui/components/accordion"
import { Card, Cards } from "fumadocs-ui/components/card"
import { Callout } from "fumadocs-ui/components/callout"
import { Step, Steps } from "fumadocs-ui/components/steps"
import type { MDXComponents } from "mdx/types"

export function getMDXComponents(components?: MDXComponents) {
    return {
        ...defaultMdxComponents,
        Tab,
        Tabs,
        Accordion,
        Accordions,
        Card,
        Cards,
        Callout,
        Step,
        Steps,
        ...components
    } satisfies MDXComponents
}

export const useMDXComponents = getMDXComponents

declare global {
    type MDXProvidedComponents = ReturnType<typeof getMDXComponents>
}
