import React, {
  useEffect,
  useState,
} from 'react';
import axios from 'axios';

export default function SimplePopover() {
  const [
    message,
    setMessage,
  ] = useState('');
  useEffect(() => {
    chrome.extension.onMessage.addListener(({ selectionText }) => {
      axios.get('https://telescope-chrome-extension.herokuapp.com/employers', {
        params: {
          search_term: selectionText,
        },
      }).then((response) => setMessage(response.data.response.employers[0].name));
    });
  });

  return (
    <div style={{ height: 100 }}>
      { message }
    </div>
  );
}
