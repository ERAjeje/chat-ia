import { DeepChat } from 'deep-chat-react';
import thumbsUp from './assets/thumbsUp.svg';

const aiBubble = {
  "background-color": "rgb(228, 230, 235)",
}

const userBubble = {
  "background-color": "rgb(245, 120, 11)",
}

function App() {

  return (
    <DeepChat
      style={{ borderRadius: "8px" }}
      messageStyles={{
        "default": {
          "user": {"bubble": userBubble},
          "ai": {"bubble": aiBubble},
        }
      }}
      avatars
      history={[
        {
          "text": "```javascript\nconsole\n\t.log('log text')\n```",
          "role": "ai"
        },
        {
          "text": "```python\nprint('print text')\n```",
          "role": "user"
        },
        {
          html: `<div class="feedback">
              <div class="feedback-text">The powerhouse of a cell.</div>
              <img class="feedback-icon feedback-icon-positive" src="${thumbsUp}">
              <img class="feedback-icon feedback-icon-negative" src="${thumbsUp}">
            </div>`,
          role: 'ai',
        },
      ]}
      htmlClassUtilities = {{
        'feedback': {styles: {default: {display: 'flex'}}},
        'feedback-text': {styles: {default: {width: 'calc(100% - 42px)', paddingTop: '2px'}}},
        'feedback-icon': {
          styles: {
            default: {width: '18px', height: '18px', cursor: 'pointer', borderRadius: '5px'},
            hover: {backgroundColor: '#d1d1d1'},
          },
        },
        'feedback-icon-positive': {events: {click: () => console.log('positive response')}},
        'feedback-icon-negative': {
          events: {click: () => console.log('negative response')},
          styles: {default: {transform: 'rotate(180deg)', marginLeft: '3px'}},
        },
      }}
    ></DeepChat>
  )
}

export default App
