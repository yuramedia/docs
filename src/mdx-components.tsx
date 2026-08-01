import defaultComponents from "fumadocs-ui/mdx"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { Accordion, Accordions } from "fumadocs-ui/components/accordion"
import { Card, Cards } from "fumadocs-ui/components/card"
import { Callout } from "fumadocs-ui/components/callout"
import { Step, Steps } from "fumadocs-ui/components/steps"
import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...defaultComponents,
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
    }
}
