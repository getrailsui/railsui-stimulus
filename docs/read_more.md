# Read more

Expand a body of text when a button or link is clicked. You might use this to expand a blog post excerpt or long description.

## Usage

```javascript
import { RailsuiReadMore } from 'railsui-stimulus'
application.register('railsui-read-more', RailsuiReadMore)
```

### Example

```html
<div class="prose prose-gray dark:prose-invert mb-4" data-controller="railsui-read-more">
  <p>
    <span data-railsui-read-more-target="content"
      >In this chat, we discuss our experiences and insights from the creative writing course. We
      share our thoughts on various writing prompts, exchange feedback on our stories, and encourage
      each other to explore new ideas and styles. Whether you're a beginner or an experienced
      writer, this space is dedicated to fostering creativity and collaboration among aspiring
      authors.</span
    >
    <button
      data-railsui-read-more-target="button"
      data-action="railsui-read-more#toggle"
      class="font-medium underline"
    >
      Read more
    </button>
  </p>
</div>
```
