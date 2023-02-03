export const toggleTags = (pagePaths: boolean) => ({
    type: "UPDATE_PATH",
    pagePaths
})

export const updateTags = (tags: string[]) => ({
    type: 'UPDATE_TAGS',
    tags
})
