---
name: learned-1pabl2b
description: Learned DGOCoder workflow for "hãy build storybook cho các component của tôi"
version: 1.0.0
metadata:
  dgo:
    kind: success
    generated: true
    source: learning-memory
    reason: "complex multi-tool task"
---

# hãy build storybook cho các component của tôi

## When to Use
hãy build storybook cho các component của tôi

## Quick Reference
- Provider/model used when learned: deepseek/deepseek/deepseek-v4-pro
- Learned from session: session-mqo31csb-ab50wg85
- Last updated: 2026-06-22T05:41:28.192Z

## Procedure
1. Start from the files and areas listed below instead of rediscovering the workspace from scratch.
2. Reuse the same tool sequence when it still matches the current request.
3. <think>
The user wants me to build Storybook for their components. I can see from the workspace that Storybook has already been installed - there are `.storybook/main.ts`, `.storybook/preview.tsx`, and `storybook-static/` files already present. Let me:

1. First check the current state of Storybook config
2. Look at the existing components to create stories for
3. Run storybook build

Let me explore the current setup first.
</think>

Storybook có vẻ đã được cài rồi — thư mục `.storybook/` và `storybook-static/` đã tồn tại. Để tôi kiểm tra hiện trạng và build Storybook với các story cho component của bạn.

:::tool read_file
{
  "path": ".storybook/main.ts"
}
:::



:::tool read_file
{
  "path": ".storybook/preview.tsx"
}
:::



:::tool read_file
{
  "path": "package.json"
}
:::

<think>
Storybook đã được cài đặt với `@storybook/nextjs-vite`. Cấu hình đang tìm stories trong thư mục `../stories/**/*.stories.@(...)`. Tôi cần:

1. Kiểm tra thư mục `stories/` hiện có gì
2. Xem các component hiện có trong project (components/ui/, app/UI/, app/Home/)
3. Tạo stories cho các component
4. Cập nhật preview.tsx để import globals.css (Tailwind styles)
5. Build Storybook

Let me c
[truncated]
4. After code edits, run the same verification style recorded in this skill or the nearest project-level compile/test command.

## Files and Areas
- .storybook/main.ts
- .storybook/preview.tsx
- package.json
- stories/Button.stories.ts
- stories/Button.tsx
- stories/Configure.mdx
- stories/Header.stories.ts
- stories/Header.tsx
- stories/Page.stories.ts
- stories/Page.tsx
- assets/avif-test-image.avif
- stories/button.css
- stories/header.css
- stories/page.css
- components/ui/button.tsx
- ui/button.tsx
- components/ui/badge.tsx
- ui/badge.tsx
- components/ui/card.tsx
- ui/card.tsx
- components/ui/separator.tsx
- ui/separator.tsx
- app/UI/Linguist/LinguistListView.tsx
- Linguist/LinguistListView.tsx
- app/UI/Linguist/LinguistScreen.tsx
- Linguist/LinguistScreen.tsx
- ./header.css
- t .storybook/main.ts
- Updated .storybook/preview.tsx
- styles/globals.css
- Updated .storybook/main.ts
- rm -f stories/Button.stories.ts

## Useful Tools
- read_file
- find_files
- todo_write
- replace_in_file
- run_terminal_command
- write_file

## Pitfalls
- read_file: Error reading file "components/ui/button.tsx": Error: ENOENT: no such file or directory, open '/Users/sun/Desktop/project/LocaForgeWebsite/components/ui/button.tsx'
- read_file: Error reading file "components/ui/badge.tsx": Error: ENOENT: no such file or directory, open '/Users/sun/Desktop/project/LocaForgeWebsite/components/ui/badge.tsx'
- read_file: Error reading file "components/ui/card.tsx": Error: ENOENT: no such file or directory, open '/Users/sun/Desktop/project/LocaForgeWebsite/components/ui/card.tsx'
- read_file: Error reading file "components/ui/separator.tsx": Error: ENOENT: no such file or directory, open '/Users/sun/Desktop/project/LocaForgeWebsite/components/ui/separator.tsx'

## Verification
- read_file: <file path=".storybook/main.ts">
- read_file: <file path=".storybook/preview.tsx">
- read_file: <file path="package.json">
- find_files: <files query="stories/">
- read_file: <file path="stories/Button.stories.ts">
- read_file: <file path="stories/Header.stories.ts">
