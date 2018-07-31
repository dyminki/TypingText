# TypingText
React component for self typing text.

[Live DEMO](https://dyminki.github.io/TypingText/)

# Usage
Copy TypingText.jsx from js/components in your project folder.  
Import component in file where you would like to use it.
```jsx
import { TypingText } from '../components/TypingText.jsx';
```

Give component proper props.
```jsx
<TypingText text="" speed="" delay="" startDelay=""/>
```
**text** can be one sentence(string) or array with sentences(string) on each position.  
**speed** takes numbers and defines spead in weach the letters are typed.  
**delay** is for pausing sentence.  
**startDelay** is for pausing array of sentences.

# Created
[By me - dyminki](https://github.com/dyminki)

# License
[MIT](https://en.wikipedia.org/wiki/MIT_License)