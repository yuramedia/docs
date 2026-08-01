import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import { pageSchema } from "fumadocs-core/source/schema"
import { z } from "zod"

export const { docs, meta } = defineDocs({
    dir: "src/content/docs",
    docs: {
        schema: pageSchema
            .extend({
                sidebar: z.any().optional()
            })
            .passthrough()
    }
})

export default defineConfig()
