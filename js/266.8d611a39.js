(()=>{self.onmessage=function(a){let e=a.data;switch(e.cmd){case"chat_2S_vue2worker":self.postMessage({cmd:"chat_2S_w2s",data:e.data});break;case"chat_2C_s2w":self.postMessage({cmd:"chat_2C_worker2vue",data:e.data});break}}})();